import { redirect, useLocation } from 'react-router-dom';
import TestimonialForm from '../../components/Backend/TestimonialPage/TestimonialForm/TestimonialForm.jsx';
import '../../components/Backend/addUpdateFile.css';
import { BACKEND_URL } from '../../util/constant.jsx';

export default function EditTestimonial() {
    const { state } = useLocation();
    const testimonial = state && state.testimonial;

    return (
        <TestimonialForm method='put' testimonial={testimonial} />
    );
}

export async function action({request, params}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    await fetch(BACKEND_URL + 'api/testimonialdata/' + params.id, {
        method: 'PUT',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return redirect('../testimonial');
}