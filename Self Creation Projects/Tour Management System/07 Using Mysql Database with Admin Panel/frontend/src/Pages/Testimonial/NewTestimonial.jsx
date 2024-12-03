import { redirect } from 'react-router-dom';
import TestimonialForm from "../../components/Backend/TestimonialPage/TestimonialForm/TestimonialForm.jsx";
import { BACKEND_URL } from '../../util/constant.jsx';

export default function NewTestimonial() {
    return (
        <TestimonialForm method='post' />
    );
}

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    await fetch(BACKEND_URL + 'api/testimonialdata', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return redirect('../testimonial');
}