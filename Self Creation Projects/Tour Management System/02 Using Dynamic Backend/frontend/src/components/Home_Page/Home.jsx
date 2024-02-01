import AboutUs from "./AboutUs/AboutUs.jsx";
import Banner from "./Banner/Banner.jsx";
import Destination from "./Destination/Destination.jsx";
import Membership from "./Membership/Membership.jsx";
import NewsLetter from "./NewsLetter/NewsLetter.jsx";
import Packages from "./Packages/Packages.jsx";
import Slide from "./Slider/Slider.jsx";
import Testimonial from "./Testimonial/Testimonial.jsx";

export default function Home() {
    return (
        <>
            <Slide />
            <Destination />
            <Banner />
            <Packages />
            <Testimonial />
            <Membership />
            <AboutUs />
            <NewsLetter />
        </>
    );
}