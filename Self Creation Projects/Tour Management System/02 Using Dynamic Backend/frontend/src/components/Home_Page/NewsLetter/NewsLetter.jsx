import { Box, Heading, Text } from '@chakra-ui/react';
import './NewsLetter.css';
import SubscribeForm from './SubscribeForm.jsx';

export default function NewsLetter() {
    return (
		<Box id="homePageNewsletter">
			<Box className="newsletter-area">
				<Heading as='h1'>
					<Text as='span' fontWeight='700'>Get only</Text> new and unique update from this newsletter.
				</Heading>
				<SubscribeForm />
			</Box>
		</Box>
    );
}