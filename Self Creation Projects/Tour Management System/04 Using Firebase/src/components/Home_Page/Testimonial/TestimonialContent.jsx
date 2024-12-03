import { Box, Flex, Image, Text } from "@chakra-ui/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './Testimonial.css';

export default function TestimonialContent({testimonial}) {
    return (
        <Box className='ts-slide'>
            <Box className="testimonial-slide">
                <Box className="testimonial_box">
                    <Box className="testimonial_box-inner">
                        <Box className="testimonial_box-top">
                            <Flex className="slides" direction={{ base: 'column', md: 'row' }}>
                                <Flex justifyContent='space-between' gap={5}>
                                    <Box>
                                        <Image src={testimonial.image} className="ts-img-1" alt="Testimonial" />
                                    </Box>
                                    <Flex direction='column' justifyContent='space-between' gap={10}>
                                        <Text className="para">{testimonial.feedback}</Text>
                                        <Flex justifyContent='space-between'>
                                            <Flex justifyContent='space-between'>
                                                <Image
                                                    src={require("../../../images/photo.jpg")}
                                                    alt="User"
                                                    mr={4}
                                                    height='2.5rem'
                                                />
                                                <Text className="name" mt={2} fontWeight="700">
                                                    {testimonial.name}
                                                </Text>
                                            </Flex>
                                            <Text fontWeight="bold" mt={2}>
                                                {testimonial.designation}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}