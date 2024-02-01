import { Link } from 'react-router-dom';
import './AboutUs.css';
import ContactUs from './ContactUs.jsx';

export default function AboutUs() {
    return (
        <section id="homePageAboutUs">
			<div className="row about-area">
				<div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 col-12 p-0">
					<div className="about-content">
						<h6>ABOUT US</h6>
						<h1>We craft beautifully usefull marketing and digital products that grow.</h1>
						<h5>LOREM IPSUM DOLOR SIT AMET CONSECTETURE.</h5>
						<div className="about-image-overlay">
							<img src="images/about-us.jpg" className="over_img" alt='About Us'/>
							<div className="about-overlay">

							</div>
							<img src="images/dots.jpg" className="about-image" alt='Dots' />
							<div className="about-sub-area">
								<h4><span>25</span> YEAR EXPERIENCE</h4>
								<div className="about-btn">
									<Link to='/'>
										____ <span>DISCOVER MORE</span> +
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ContactUs />
			</div>
		</section>
    );
}