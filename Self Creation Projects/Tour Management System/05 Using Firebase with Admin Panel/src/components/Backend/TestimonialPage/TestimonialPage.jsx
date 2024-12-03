import { Box, Card, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BACKEND_URL } from "../../../util/constant.jsx";
import TestimonialDetails from './TestimonialDetails.jsx';
import TestimonialHeader from './TestimonialHeader.jsx';
import './TestimonialPage.css';

export default function TestimonialPage() {
    const {testimonials} = useLoaderData();
    const testimonialArray = Object.entries(testimonials).map(([key, value]) => ({ ...value, key }));
    const [testimonialData, setTestimonialData] = useState(testimonialArray);

    async function onDelete(id) {
        try {
            const url = `${BACKEND_URL}/testimonialsData/${id}.json`;
            console.log(`Attempting to delete testimonial with URL: ${url}`);
            
            const response = await fetch(url, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Failed to delete testimonial:', errorMessage);
                return;
            }
    
            console.log(`Successfully deleted testimonial with ID: ${id}`);
            setTestimonialData(prevTestimonials => prevTestimonials.filter(testimonial => testimonial.key !== id));
        } catch (error) {
            console.error('Error deleting testimonial:', error);
        }
    }

    async function onUpdate(updatedTestimonial) {
        try {
            const url = `${BACKEND_URL}/testimonialsData/${updatedTestimonial.key}.json`;
            console.log(`Attempting to update testimonial with URL: ${url}`);
            
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedTestimonial)
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Failed to update testimonial:', errorMessage);
                return;
            }

            console.log(`Successfully updated testimonial with ID: ${updatedTestimonial.key}`);
            setTestimonialData(prevTestimonials =>
                prevTestimonials.map(testimonial =>
                    testimonial.key === updatedTestimonial.key ? updatedTestimonial : testimonial
                )
            );
        } catch (error) {
            console.error('Error updating testimonial:', error);
        }
    }

    useEffect(() => {
        setTestimonialData(testimonialArray);
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
                        <TestimonialDetails
                            key={testimonial.id}
                            testimonial={testimonial}
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                        />
                    </Card>
                ))}
            </Flex>
        </Box>
    );
}