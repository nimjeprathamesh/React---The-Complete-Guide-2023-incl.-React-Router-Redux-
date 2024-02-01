import './NewsLetter.css';
import SubscribeForm from './SubscribeForm.jsx';

export default function NewsLetter() {
    return (
        <section id="homePageNewsletter">
			<div className="newsletter-area">
				<div className="container">
					<div className="row heading">
						<h1><span>Get only</span> new and unique update from this newsletter.</h1>
					</div>
					<div className="row">
						<SubscribeForm />
					</div>
				</div>
			</div>
		</section>
    );
}