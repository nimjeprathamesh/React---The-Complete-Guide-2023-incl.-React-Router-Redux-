import NewsletterSignUp from '../components/NewsletterSignup.jsx';
import PageContent from '../components/PageContent.jsx';

function NewsletterPage() {
    return (
        <PageContent title="Join our awesome newsletter!">
            <NewsletterSignUp />
        </PageContent>
    );
}

export default NewsletterPage;

export async function action({ request }) {
    const data = await request.formData();
    const email = data.get('email');

    // send to backend newsletter server ...
    console.log(email);
    return { message: 'Signup successful!' };
}