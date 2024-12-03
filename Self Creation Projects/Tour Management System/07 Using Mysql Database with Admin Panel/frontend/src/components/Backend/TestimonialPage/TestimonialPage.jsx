import { Box, Card, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BACKEND_URL } from "../../../util/constant.jsx";
import TestimonialDetails from './TestimonialDetails.jsx';
import TestimonialHeader from './TestimonialHeader.jsx';
import './TestimonialPage.css';

export default function TestimonialPage() {
    const {testimonials} = useLoaderData();
    const [testimonialData, setTestimonialData] = useState(testimonials);

    async function onDelete(id) {
        const url = BACKEND_URL + 'api/testimonialdata/' + id;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error('Failed to delete testimonial:', errorMessage);
            return;
        }
        setTestimonialData(prevTestimonials => prevTestimonials.filter(testimonial => testimonial.id !== id));
    }

    useEffect(() => {
        setTestimonialData(testimonialData);
    }, [testimonials]);

    return (
        <Box id="testimonial_content">
            <TestimonialHeader />
            <Flex flexWrap="wrap" justifyContent="space-between">
                {testimonialData.map((testimonial) => (
                    <Card
                        key={testimonial.id}
                        className="testimonial-card"
                        maxW='xl'
                        margin='2rem 2.5rem'
                        flex="1 0 calc(50% - 1rem)"
                        width='100%'
                        p={4}
                    >
                        <TestimonialDetails testimonial={testimonial} onDelete={onDelete} />
                    </Card>
                ))}
            </Flex>
        </Box>
    );
}