import { Box, Flex, Img, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import ContactUs from './ContactUs.jsx';

export default function AboutUs() {
    return (
		<Box id="homePageAboutUs">
			<Box className="about-area">
				<Flex justifyContent='space-between'>
					<Box className="about-content" flex="1" minWidth="300px" maxWidth="60%">
						<Text as='h6'>ABOUT US</Text>
						<Text as='h1'>We craft beautifully usefull marketing and digital products that grow.</Text>
						<Text as='h5'>LOREM IPSUM DOLOR SIT AMET CONSECTETURE.</Text>
						<Box className="about-image-overlay">
							<Img
								src={require("../../../images/about-us.jpg")}
								className="over_img"
								alt='About Us'
							/>
							<Box className="about-overlay"></Box>
							<Img src={require("../../../images/dots.jpg")} className="about-image" alt='Dots' />
							<Box className="about-sub-area">
								<Text as='h4'><Text as='span' mr={1}>25</Text>YEAR EXPERIENCE</Text>
								<Box className="about-btn">
									<Link to='/'>
										____ <Text as='span'>DISCOVER MORE</Text> +
									</Link>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box flex="1" minWidth="300px" maxWidth="40%">
						<ContactUs />
                    </Box>
				</Flex>
			</Box>
		</Box>
    );
}