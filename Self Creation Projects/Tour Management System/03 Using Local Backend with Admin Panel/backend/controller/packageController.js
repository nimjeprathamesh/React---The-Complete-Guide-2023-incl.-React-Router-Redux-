import fs from 'node:fs/promises';
import { getStoredPackages } from '../files/packages.js';

export const getPackages = async (req, res) => {
    try {
        const packages = await fs.readFile('./data/packages.json', 'utf8');
        const packagesData = JSON.parse(packages);
        res.status(200).json(packagesData);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getPackagesById = async (req, res) => {
    const storedPackages = await getStoredPackages();
    const packages = storedPackages.find((packages) => packages.id === req.params.id);
    res.json(packages);
};
