import './Membership.css';

export default function MembershipContent({imgSrc, type, location, price}) {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
            <div className="member-box">
                <div className="member-image-overlay">
                    <img src={imgSrc} alt='Membership' />
                    <div className="member-overlay">

                    </div>
                </div>
                <figcaption><b className="caption-1">{type}</b></figcaption>
                <figcaption>
                    <i className="fas fa-map-marker-alt" id="placeprice"></i>
                    <div className="caption-2">{location}</div>
                    <div className="price">from-<span>${price}</span></div>
                </figcaption>
            </div>
        </div>
    );
}