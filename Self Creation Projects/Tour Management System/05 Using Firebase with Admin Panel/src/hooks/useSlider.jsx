import { useCallback, useEffect, useRef, useState } from "react";
import { SliderData } from "../components/Frontend/Home_Page/Slider/SliderData.jsx";

export default function useSlider() {
    const [index, setIndex] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const [manualNavigation, setManualNavigation] = useState(false);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    const nextSlide = useCallback(() => {
        resetTimeout();
        setManualNavigation(false);
        setIndex((prevIndex) => {
            if (prevIndex === SliderData.length - 1) {
                setTransitionEnabled(false);
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    }, []);

    const prevSlide = useCallback(() => {
        resetTimeout();
        setManualNavigation(true);
        setIndex((prevIndex) => {
            if (prevIndex === 0) {
                setTransitionEnabled(false);
                return SliderData.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    }, []);

    useEffect(() => {
        if (!transitionEnabled) {
            const timeout = setTimeout(() => setTransitionEnabled(true), 50);
            return () => clearTimeout(timeout);
        }

        if (!manualNavigation) {
            timeoutRef.current = setTimeout(nextSlide, 3000);
        }

        return () => resetTimeout();
    }, [index, nextSlide, transitionEnabled, manualNavigation]);

    return {index, transitionEnabled, prevSlide, nextSlide};
};