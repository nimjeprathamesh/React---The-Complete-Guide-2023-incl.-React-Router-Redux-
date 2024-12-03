import { Box, Flex, Icon, IconButton } from '@chakra-ui/react';
import React from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useSlider from '../../../../hooks/useSlider';
import SliderContent from "./SliderContent";
import { SliderData } from "./SliderData";

export default function Slider() {
    const {index, transitionEnabled, prevSlide, nextSlide} = useSlider();

    return (
        <Box id='homePageSlider' position="relative" overflow="hidden">
            <Flex
                className="slideshow"
                transform={`translate3d(${-index * 100}%, 0, 0)`}
                transition={transitionEnabled ? "transform 0.5s ease-in-out" : "none"}
            >
                {SliderData.map((slider, idx) => (
                    <Box key={idx} minWidth="100%">
                        <SliderContent
                            imgSrc={slider.image}
                            description={slider.text}
                            title={slider.title}
                        />
                    </Box>
                ))}
            </Flex>
            <IconButton
                onClick={prevSlide}
                icon={<Icon as={FiArrowLeft} />}
                position="absolute"
                left="10px"
                top="50%"
                transform="translateY(-50%)"
                zIndex="1"
                border="2px solid white"
                borderRadius='full'
                boxSize="50px"
                fontSize="20px"
                fontWeight='bold'
                p="10px"
                color='#fff'
                background='transparent'
                sx={{
                    '&:hover': {
                        bg: '#f41844',
                    }
                }}
            />
            <IconButton
                onClick={nextSlide}
                icon={<Icon as={FiArrowRight} />}
                position="absolute"
                right="10px"
                top="50%"
                transform="translateY(-50%)"
                zIndex="1"
                border="2px solid white"
                borderRadius='full'
                boxSize="50px"
                fontSize="20px"
                fontWeight='bold'
                p="10px"
                color='#fff'
                background='transparent'
                sx={{
                    '&:hover': {
                        bg: '#f41844',
                    }
                }}
            />
        </Box>
    );
}