import React from 'react';
import { redirect, useLocation } from 'react-router-dom';
import TestimonialForm from '../../components/Backend/TestimonialPage/TestimonialForm/TestimonialForm.jsx';
import '../../components/Backend/addUpdateFile.css';
import { BACKEND_URL } from '../../util/constant.jsx';

export default function EditTestimonial() {
    const { state } = useLocation();
    const testimonial = state && state.testimonial;

    return (
        <TestimonialForm method='patch' testimonial={testimonial} />
    );
}

export async function action({request, params}) {
    try {
        const formData = await request.formData();
        const postData = Object.fromEntries(formData);
        const formattedDate = new Date(postData.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        const uploadData = {
            name: postData.name,
            designation: postData.designation,
            feedback: postData.feedback,
            image: postData.image
        };

        if (!params.id) {
            throw new Error('Testimonial ID is missing');
        }

        const response = await fetch(
                `${BACKEND_URL}/testimonialsData/${params.id}.json`, {
                method: 'PATCH',
                body: JSON.stringify(uploadData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!response.ok) {
            throw new Error('Failed to update testimonial');
        }

        return redirect('../testimonial');
    } catch (error) {
        console.error('Error updating destination:', error);
        return redirect('../testimonial');
    }
}