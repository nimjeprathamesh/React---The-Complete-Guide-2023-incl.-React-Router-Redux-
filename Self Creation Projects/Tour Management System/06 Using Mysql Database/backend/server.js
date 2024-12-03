const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser'); // Add this line

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); // Add this line
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

// Sample route
app.get('/api/destination', (req, res) => {
    const sql = 'SELECT * FROM destination';
    db.query(sql, (err, results) => {
        if (err) {
        return res.status(500).send(err);
        }
        res.json(results);
    });
});
app.get('/api/destination/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM destination WHERE id = ?';
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
app.get('/api/packages', (req, res) => {
    const sql = 'SELECT * FROM packages';
    db.query(sql, (err, results) => {
        if (err) {
        return res.status(500).send(err);
        }
        res.json(results);
    });
});
app.get('/api/packages/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM packages WHERE id = ?';
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
app.get('/api/testimonial', (req, res) => {
    const sql = 'SELECT * FROM testimonial';
    db.query(sql, (err, results) => {
        if (err) {
        return res.status(500).send(err);
        }
        res.json(results);
    });
});
app.get('/api/membership', (req, res) => {
    const sql = 'SELECT * FROM membership';
    db.query(sql, (err, results) => {
        if (err) {
        return res.status(500).send(err);
        }
        res.json(results);
    });
});

app.post('/api/subscription', (req, res) => {
    const { mail } = req.body;

    if (!mail) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const sql = 'INSERT INTO subscription (mail) VALUES (?)';
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

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});