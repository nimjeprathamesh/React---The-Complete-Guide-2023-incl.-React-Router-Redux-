import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './Testimonial.css';
export default function TestimonialContent({testimonial}) {
    return (
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12 ts-slide">
            <div className="testimonial-slide">
                <div className="testimonial_box">
                    <div className="testimonial_box-inner">
                        <div className="testimonial_box-top">
                            <div className="row slides">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12 p-0">
                                    <img src={testimonial.image} className="ts-img-1" alt="Testimonial" />
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 col-12">
                                    <p className="para">{testimonial.feedBack}</p>
                                </div>
                                <div className="row ts-bottom-row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                                        <img src="images/photo.jpg" className="ts-img-2" alt="User" />
                                        <b className="ts-text-1">{testimonial.name}</b>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                                        <b className="ts-text-2">{testimonial.designation}</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}