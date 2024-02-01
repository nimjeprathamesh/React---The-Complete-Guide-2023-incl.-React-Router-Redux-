import { Link } from 'react-router-dom';
import './Banner.css';

export default function Banner() {
    return (
        <section id="homePageBanner">
			<div className="row ban-area">
				<div className="container">
					<img src="images/banner image.jpg" alt='This is a banner.' />
					<h1><span>Its time to upgrade to a lonely planet</span> membership.</h1>
					<div className="banner-btn">
						<Link to='/destination'>
							_________ <span>DISCOVER MORE</span> +
						</Link>
					</div>
				</div>
			</div>
		</section>
    );
}