import './ContactInfo.css';

export default function ContactInfo() {
    const handlePhoneClick = () => {
        window.open('tel:+0055566699900', '_blank');
    };

    return (
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12">
            <div className="contact-info">
                <div className="contact-details">
                    <div className="contact-label">
                        <i className="fa-solid fa-envelope"></i>
                        <span>
                            EMAIL US
                            <a href="mailto:clinexmex0011@gmail.com">clinexmex0011@gmail.com</a>
                        </span>
                    </div>
                    <div className="contact-label">
                        <i className="fa-solid fa-phone" id="call"></i>CALL US
                        <div className="num" onClick={handlePhoneClick}>
                            (+00) 555 666 999 00
                        </div>
                    </div>
                    <div className="contact-label">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>
                            LOCATION
                            Delanson, New York, 12053
                        </span>
                    </div>
                </div>
                <div className="contact-account">
                    <a href="https://www.facebook.com/" target="__blank"><i className="fa-brands fa-facebook-f" id="face"></i></a>
                    <a href="https://twitter.com/" target="__blank"><i className="fa-brands fa-twitter" id="twit"></i></a>
                    <a href="https://www.instagram.com/" target="__blank"><i className="fa-brands fa-instagram" id="insta"></i></a>
                    <a href="http://www.linkedin.com/" target="__blank"><i className="fa-brands fa-linkedin-in" id="link"></i></a>
                </div>
            </div>
            <div className="gmap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30607623636!2d-74.25987551247056!3d40.697149395077545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1636876318773!5m2!1sen!2sin" title='Map'>
                </iframe>
            </div>
        </div>
    );
}