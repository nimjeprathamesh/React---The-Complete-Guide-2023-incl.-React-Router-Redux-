import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './Banner.css';

export default function Banner() {
    return (
		<Box id="homePageBanner">
			<Box className='ban-area'>
				<Image src={require("../../../../images/banner image.jpg")} alt='This is a banner.' />
				<Text as='h1'>
					<Text as='span'>
						Its time to upgrade to a lonely planet
					</Text>
					membership.
				</Text>
				<Box className="banner-btn">
					<Link to='/destination'>
						<Text>_________ <Text as='span'>DISCOVER MORE</Text> +</Text>
					</Link>
				</Box>
			</Box>
		</Box>
    );
}