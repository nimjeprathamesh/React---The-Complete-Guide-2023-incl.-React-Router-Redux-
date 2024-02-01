import { Link } from 'react-router-dom';
import './TopHeader.css';

export default function TopHeader() {
    const handlePhoneClick = () => {
        window.open('tel:+0055566699900', '_blank');
    };

    return (
        <header id="top-header">
            <div className="container">
                <div className="row header-area">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 col-12 p-0">
                        <div className="header-text">
                            We are a experience company. <span>Contact Us!</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 col-12 p-0">
                        <div className="header-mail">
                            <i className="fa-regular fa-envelope"></i> <a href="mailto:clinexmex0011@gmail.com">
                                clinexmex0011@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 col-12 p-0">
                        <div className="header-num" onClick={handlePhoneClick}>
                            <i className="fa-solid fa-phone"></i>{''} <span>(+00) 555 666 999 00</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 col-12 p-0">
                        <Link to='/contact-us'>
                            <button className="header-btn">BOOK NOW</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}