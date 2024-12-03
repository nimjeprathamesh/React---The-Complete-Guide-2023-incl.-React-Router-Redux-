import fs from 'node:fs/promises';

export const getTestimonials = async (req, res) => {
    try {
        const testimonials = await fs.readFile('./data/testimonials.json', 'utf8');
        const testimonialData = JSON.parse(testimonials);
        res.status(200).json(testimonialData);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const createTestimonial = async (req, res) => {
    try {
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
            id: orderData.name,
        };
        const orders = await fs.readFile('./data/testimonials.json', 'utf8');
        const allOrders = JSON.parse(orders);
        allOrders.push(newOrder);
        await fs.writeFile('./data/testimonials.json', JSON.stringify(allOrders));
        res.status(201).json({ message: 'Order created!' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
