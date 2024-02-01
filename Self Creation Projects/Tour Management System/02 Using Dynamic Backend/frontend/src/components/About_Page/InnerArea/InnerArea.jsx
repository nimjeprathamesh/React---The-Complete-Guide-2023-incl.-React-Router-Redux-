import './InnerArea.css';

export default function InnerArea() {
    return (
        <div className="description_area">
            <div className="inner-box">
                <h1>COUNTRIES WHERE OUR PRODUCT SUPPLY.</h1>
                <hr className="horizontal"></hr>
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 col-12">
                        <p>Dolor sit amet, consectetur adipiscing elit. Vivamus eu pharetra ex. Etiam eget diam ligula. Sed at blandit ante. Vivamus feugiat, lacus eu suscipit mattis, tortor mi aliquam leo, quis laoreet ante sem sed sapien. Phasellus id convallis ligula. Aliquam erat volutpat Aliquam erat volutpat.</p>
                        <ul>
                            <li>
                                <i className="fa-solid fa-circle" id="icon"></i>We test your design with real users, analyze their feedback, and prioritize recommended improvements.
                            </li>
                            <li>
                                <i className="fa-solid fa-circle" id="icon"></i>Understand long-term interaction and conversion cycles by collecting user diary entries over time and provide her the long term membership.
                            </li>
                            <li>
                                <i className="fa-solid fa-circle" id="icon"></i>Discover user motivations and expectations with in-depth conversations, analyzed by experts to extract insights.
                            </li>
                        </ul>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12">
                        <img src="images/about.jpg" alt='About' />
                    </div>
                </div>
            </div>
        </div>
    );
}