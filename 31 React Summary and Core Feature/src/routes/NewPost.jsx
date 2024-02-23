import { Form, Link, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import classes from './NewPost.module.css';

export default function NewPost() {
    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" rows={3} required />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="author" required />
                </p>
                <p className={classes.actions}>
                    <Link to='..' type='button'>
                        Cancel
                    </Link>
                    <button type='submit'>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return redirect('/');
}