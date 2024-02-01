import './UpperFooter.css';

export default function UpperFooter() {
    return (
        <div className="row upperfooter">
				<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12 p-0">
					<div className="phone">
						<i className="fa-solid fa-phone-flip" id="call"></i>011122233355 Fri - Holy day
					</div>
				</div>
				<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12 p-0">
					<div className="mail">
						<nobr>
                            <i className="fa-regular fa-envelope" id="email"></i><a href="mailto:support.travel@gmail.com">
                                support.travel@gmail.com
                            </a>
                        </nobr>
					</div>
				</div>
				<div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12">
					<div className="connect">
						<a href="https://www.facebook.com/" target="__blank">
                            <i className="fa-brands fa-facebook" id="upperfooter-icon"></i>
                        </a>
						<a href="https://twitter.com/" target="__blank">
                            <i className="fa-brands fa-twitter" id="upperfooter-icon"></i>
                        </a>
						<a href="https://www.instagram.com/" target="__blank">
                            <i className="fa-brands fa-instagram" id="upperfooter-icon"></i>
                        </a>
						<a href="https://www.youtube.com/" target="__blank">
                            <i className="fa-brands fa-youtube" id="upperfooter-icon"></i>
                        </a>
					</div>
				</div>
			</div>
    );
}