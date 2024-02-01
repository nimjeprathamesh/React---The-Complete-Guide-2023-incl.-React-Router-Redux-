import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';

export default function SliderContent({imgSrc, description, title}) {
    const backgroundImageStyle = {
        backgroundImage: `url(${imgSrc})`,
    };

    return (
            <div className='slider-inner' style={backgroundImageStyle}>
                <div className="container">
                    <div className="slider-content">
                        <div className="slide-text">
                            <p>{description}</p>
                        </div>
                        <div className="slide-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="slide-btns">
                            <Link to='/contact-us' className="theme-btn-s2">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    );
}