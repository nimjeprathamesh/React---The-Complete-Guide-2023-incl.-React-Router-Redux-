import bodyParser from 'body-parser';
import express from 'express';
import * as contactInfoController from './controller/contactInfoController.js';
import * as destinationController from './controller/destinationController.js';
import * as membershipController from './controller/membershipController.js';
import * as packageController from './controller/packageController.js';
import * as subscriptionController from './controller/subscriptionController.js';
import * as testimonialController from './controller/testimonialController.js';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/destinations', destinationController.getDestinations);
app.get('/destinations/:id', destinationController.getDestinationsById);

app.get('/packages', packageController.getPackages);
app.get('/packages/:id', packageController.getPackagesById);

app.get('/testimonials', testimonialController.getTestimonials);

app.get('/memberships', membershipController.getMemberships);

app.get('/contactInfo', contactInfoController.getContactInfo);
app.post('/contactInfo', contactInfoController.createContactInfo);


app.get('/subscription', subscriptionController.getSubscription);
app.post('/subscription', subscriptionController.createSubscription);


app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found' });
});

app.listen(8080);
