import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Slider.css';
import SliderContent from "./SliderContent";
import { SliderData } from "./SliderData";

export default function Slider() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    const nextSlide = useCallback(() => {
        resetTimeout();
        setIndex((prevIndex) =>
            prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
        );
    }, []);

    const prevSlide = useCallback(() => {
        resetTimeout();
        setIndex((prevIndex) =>
            prevIndex === 0 ? SliderData.length - 1 : prevIndex - 1
        );
    }, []);

    useEffect(() => {
        timeoutRef.current = setTimeout(nextSlide, 3000);

        return () => {
            resetTimeout();
        };
    }, [index, nextSlide, prevSlide]);

    return (
        <section id='homePageSlider'>
            <div className="slideshow">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {SliderData.map((slider, index) => (
                        <div key={index} className="slide">
                            <SliderContent
                                imgSrc={slider.image}
                                description={slider.text}
                                title={slider.title}
                            />
                        </div>
                    ))}
                </div>
                <button onClick={prevSlide} className="prevButton">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button onClick={nextSlide} className="nextButton">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </section>
    );
}
