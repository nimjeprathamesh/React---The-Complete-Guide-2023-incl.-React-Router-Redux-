const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const crypto = require('crypto');
const authMiddleware = require('./authMiddleware');

const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:1234',
    credentials: true
}));
app.use(express.json());
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react_tour'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

// Session store options
const sessionStoreOptions = {
    expiration: 10800000,
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
};

// Session store
const sessionStore = new MySQLStore(sessionStoreOptions, db);
const secretKey = crypto.randomBytes(32).toString('hex');

app.use(session({
    key: 'session_id',
    secret: process.env.SESSION_SECRET || secretKey,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        secure: process.env.NODE_ENV === 'production'
    }
}));

// Signup route
app.post('/api/signup', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        console.error('All fields are required');
        return res.status(400).json({ error: 'All fields are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO user (Email, Password) VALUES (?, ?)';
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send(err);
        }
        res.json({ message: 'Signup successfully', id: result.insertId });
    });
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
});

// Signin route
app.post('/api/signin', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = 'SELECT * FROM user WHERE Email = ? AND Password = ?';
    db.query(sql, [email, password], async (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.Password);
        
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        req.session.user = { id: user.id, email: user.Email };

        res.json({ message: 'Signin successful', user: { id: user.id, email: user.Email } });
    });
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
});

// Apply authentication middleware to protect admin routes
app.use('/admin', authMiddleware);

// Signout route
app.post('/api/signout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).json({ error: 'Failed to logout' });
            }
            res.clearCookie('session_cookie_name');
            res.json({ message: 'Logout successful' });
        });
    } else {
        res.status(400).json({ error: 'No session found' });
    }
});

// Get data routes
app.get('/api/destinationdata', (req, res) => {
    const sql = 'SELECT * FROM destinationdata';
    db.query(sql, (err, results) => {
        if (err) {
        return res.status(500).send(err);
        }
        res.json(results);
    });
});
app.get('/api/packagesdata', (req, res) => {
    const sql = 'SELECT * FROM packagesdata';
    db.query(sql, (err, results) => {
        if (err) {
        return res.status(500).send(err);
        }
        res.json(results);
    });
});
app.get('/api/testimonialdata', (req, res) => {
    const sql = 'SELECT * FROM testimonialdata';
    db.query(sql, (err, results) => {
        if (err) {
        return res.status(500).send(err);
        }
        res.json(results);
    });
});
app.get('/api/membershipdata', (req, res) => {
    const sql = 'SELECT * FROM membershipdata';
    db.query(sql, (err, results) => {
        if (err) {
        return res.status(500).send(err);
        }
        res.json(results);
    });
});
app.get('/api/subscription', (req, res) => {
    const sql = 'SELECT * FROM subscription';
    db.query(sql, (err, results) => {
        if (err) {
        return res.status(500).send(err);
        }
        res.json(results);
    });
});
app.get('/api/contactinfo', (req, res) => {
    const sql = 'SELECT * FROM contactinfo';
    db.query(sql, (err, results) => {
        if (err) {
        return res.status(500).send(err);
        }
        res.json(results);
    });
});

//Get data of id routes
app.get('/api/destinationdata/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM destinationdata WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Destination not found' });
        }
        res.json(results[0]);
    });
});
app.get('/api/packagesdata/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM packagesdata WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Package not found' });
        }
        res.json(results[0]);
    });
});

//Post data routes
app.post('/api/destinationdata', (req, res) => {
    const { date, name, details, duration, image } = req.body;

    if (!date || !name || !details || !duration || !image) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = 'INSERT INTO destinationdata (Date, Name, Details, Duration, Image) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [date, name, details, duration, image], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Destination added successfully', id: result.insertId });
    });
});
app.post('/api/packagesdata', (req, res) => {
    const { title, location, image, details, duration, price } = req.body;

    if (!title || !location || !image || !details || !duration || !price) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = 'INSERT INTO packagesdata (Title, Location, Image, Details, Duration, Price) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [title, location, image, details, duration, price], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Destination added successfully', id: result.insertId });
    });
});
app.post('/api/testimonialdata', (req, res) => {
    const { name, designation, image, feedback } = req.body;

    if (!name || !designation || !image || !feedback) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = 'INSERT INTO testimonialdata (Name, Designation, Image, Feedback) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, designation, image, feedback], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Destination added successfully', id: result.insertId });
    });
});
app.post('/api/membershipdata', (req, res) => {
    const { type, location, image, price } = req.body;

    if (!type || !location || !image || !price) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = 'INSERT INTO membershipdata (Type_of_Tour, Location, Image, Package_Price) VALUES (?, ?, ?, ?)';
    db.query(sql, [type, location, image, price], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Destination added successfully', id: result.insertId });
    });
});
app.post('/api/subscription', (req, res) => {
    const { mail } = req.body;

    if (!mail) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const sql = 'INSERT INTO subscription (Mail) VALUES (?)';
    db.query(sql, [mail], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Data uploaded successfully', id: result.insertId });
    });
});
app.post('/api/contactinfo', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = 'INSERT INTO contactinfo (Name, Email, Subject, Message) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, subject, message], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Contact info submitted successfully', id: result.insertId });
    });
});

// Update routes
app.put('/api/destinationdata/:id', (req, res) => {
    const { id } = req.params;
    const { date, name, details, duration, image } = req.body;

    if (!date || !name || !details || !duration || !image) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = 'UPDATE destinationdata SET Date = ?, Name = ?, Details = ?, Duration = ?, Image = ? WHERE id = ?';
    db.query(sql, [date, name, details, duration, image, id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Destination not found' });
        }
        res.json({ message: 'Destination updated successfully' });
    });
});
app.put('/api/packagesdata/:id', (req, res) => {
    const { id } = req.params;
    const { title, location, image, details, duration, price } = req.body;

    if (!title || !location || !image || !details || !duration || !price) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = 'UPDATE packagesdata SET Title = ?, Location = ?, Image = ?, Details = ?, Duration = ?, Price = ? WHERE id = ?';
    db.query(sql, [title, location, image, details, duration, price, id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Package not found' });
        }
        res.json({ message: 'Package updated successfully' });
    });
});
app.put('/api/testimonialdata/:id', (req, res) => {
    const { id } = req.params;
    const { name, designation, image, feedback } = req.body;

    if (!name || !designation || !image || !feedback) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = 'UPDATE testimonialdata SET Name = ?, Designation = ?, Image = ?, Feedback = ? WHERE id = ?';
    db.query(sql, [name, designation, image, feedback, id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Testimonial not found' });
        }
        res.json({ message: 'Testimonial updated successfully' });
    });
});
app.put('/api/membershipdata/:id', (req, res) => {
    const { id } = req.params;
    const { type, location, image, price } = req.body;

    if (!type || !location || !image || !price) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = 'UPDATE membershipdata SET Type_of_Tour = ?, Location = ?, Image = ?, Package_Price = ? WHERE id = ?';
    db.query(sql, [type, location, image, price, id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Membership not found' });
        }
        res.json({ message: 'Membership updated successfully' });
    });
});

// Delete routes
app.delete('/api/destinationdata/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM destinationdata WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Destination not found' });
        }
        res.json({ message: 'Destination deleted successfully' });
    });
});
app.delete('/api/packagesdata/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM packagesdata WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Package not found' });
        }
        res.json({ message: 'Package deleted successfully' });
    });
});
app.delete('/api/testimonialdata/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM testimonialdata WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Testimonial not found' });
        }
        res.json({ message: 'Testimonial deleted successfully' });
    });
});
app.delete('/api/membershipdata/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM membershipdata WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Membership not found' });
        }
        res.json({ message: 'Membership deleted successfully' });
    });
});
app.delete('/api/contactinfo/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM contactinfo WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted successfully' });
    });
});
app.delete('/api/subscription/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM subscription WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Subscription not found' });
        }
        res.json({ message: 'Subscription deleted successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});