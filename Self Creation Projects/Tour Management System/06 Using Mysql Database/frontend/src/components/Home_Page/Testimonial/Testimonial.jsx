import { Box, Divider, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { useTheme } from '../../../hooks/useTheme';
import "./Testimonial.css";
import TestimonialContent from './TestimonialContent.jsx';

export default function Testimonial({testimonials}) {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        draggable: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const testimonialBg = useColorModeValue('white', 'gray.700');
    const {isDark} = useTheme();

    return (
        <Box as="section" id="homePageTestimonial">
            <Flex margin="0 0 4% 3%" justifyContent="flex-start" mb={4}>
                <Text as="nobr" fontSize="5xl" fontWeight="100" ml={6}>
                    <Text as="span" fontWeight='bold'>Our</Text> Testimonials
                </Text>
            </Flex>
            <Box className={`ts-slider ${isDark ? 'dark-mode' : 'light-mode'}`} id="ts-slider">
                <Box className="ts-area" bg={testimonialBg} mb={4}>
                    <Box className="testimonial-slider">
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <TestimonialContent key={index} testimonial={testimonial} />
                            ))}
                        </Slider>
                    </Box>
                    <Flex direction='column' className="hr-line" justifyContent="center" mt={4}>
                        <Divider className="hr-1" borderColor="gray.300" />
                        <Text as="span" mx={2}>
                            <Divider className="hr-2" borderColor="gray.300" />
                        </Text>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};
