import fs from 'node:fs/promises';
import { getStoredDestinations } from '../files/destinations.js';

export const getDestinations = async (req, res) => {
    try {
        const destinations = await fs.readFile('./data/destinations.json', 'utf8');
        const destinationsData = JSON.parse(destinations);
        res.status(200).json(destinationsData);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getDestinationsById = async (req, res) => {
    const storedDestinations = await getStoredDestinations();
    const destination = storedDestinations.find((destination) => destination.id === req.params.id);
    res.json(destination);
};