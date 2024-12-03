import fs from 'node:fs/promises';

export const getMemberships = async (req, res) => {
    try {
        const memberships = await fs.readFile('./data/memberships.json', 'utf8');
        const membershipsData = JSON.parse(memberships);
        res.status(200).json(membershipsData);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
