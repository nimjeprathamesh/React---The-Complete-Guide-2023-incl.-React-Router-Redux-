import fs from 'node:fs/promises';

export const getSubscription = async (req, res) => {
    try {
        const subscription = await fs.readFile('./data/subscription.json', 'utf8');
        const subscriptionData = JSON.parse(subscription);
        res.status(200).json(subscriptionData);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const createSubscription = async (req, res) => {
    try {
        const orderData = req.body;

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
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
