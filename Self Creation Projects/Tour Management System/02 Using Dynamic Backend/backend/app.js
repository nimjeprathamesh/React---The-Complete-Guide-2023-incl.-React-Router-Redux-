import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/destinations', async (req, res) => {
  const destinations = await fs.readFile('./data/destinations.json', 'utf8');
  const destinationsData = JSON.parse(destinations);
  res.status(200).json(destinationsData);
});

app.get('/packages', async (req, res) => {
  const packages = await fs.readFile('./data/packages.json', 'utf8');
  const packagesData = JSON.parse(packages);
  res.status(200).json(packagesData);
});

app.get('/testimonials', async (req, res) => {
  const testimonials = await fs.readFile('./data/testimonials.json', 'utf8');
  const testimonialData = JSON.parse(testimonials);
  res.status(200).json(testimonialData);
});

app.get('/memberships', async (req, res) => {
  const memberships = await fs.readFile('./data/memberships.json', 'utf8');
  const membershipData = JSON.parse(memberships);
  res.status(200).json(membershipData);
});

app.post('/subscription', async (req, res) => {
  const orderData = req.body.order;

  if (orderData === null || orderData.items === null) {
    return res
      .status(400)
      .json({ message: 'Missing data.' });
  }

  if (orderData.customer === null || orderData.customer === '') {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.',
    });
  }

  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString(),
  };
  const orders = await fs.readFile('./data/subscription.json', 'utf8');
  const allOrders = JSON.parse(orders);
  allOrders.push(newOrder);
  await fs.writeFile('./data/subscription.json', JSON.stringify(allOrders));
  res.status(201).json({ message: 'Order created!' });
});

app.post('/contactInfo', async (req, res) => {
  const orderData = req.body.order;

  if (orderData === null || orderData.items === null) {
    return res
      .status(400)
      .json({ message: 'Missing data.' });
  }

  if (orderData.customer === null || orderData.customer === '') {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.',
    });
  }

  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString(),
  };
  const orders = await fs.readFile('./data/contactInfo.json', 'utf8');
  const allOrders = JSON.parse(orders);
  allOrders.push(newOrder);
  await fs.writeFile('./data/contactInfo.json', JSON.stringify(allOrders));
  res.status(201).json({ message: 'Order created!' });
});

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found' });
});

app.listen(3000);
