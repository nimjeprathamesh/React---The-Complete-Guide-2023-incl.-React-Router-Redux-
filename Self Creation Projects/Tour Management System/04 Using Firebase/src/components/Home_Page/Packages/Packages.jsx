import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme.jsx';
import './Packages.css';
import PackagesContent from './PackagesContent.jsx';

export default function Packages({packages}) {
	const packagesArray = Object.values(packages);
    const limitedPackages = packagesArray.slice(0, 3);
	const {isDark} = useTheme();
    const buttonHoverClass = isDark ? 'service-2-area-btn-dark' : 'service-2-area-btn-light';

    return (
		<Box id="homePagePackages">
			<Heading as="h1" size="xl">
				<Text as='span' fontWeight='bold'>Tour</Text> Packages
			</Heading>
			<Flex wrap="wrap" justifyContent="space-between" flex='1 1 calc(33.33% - 1rem)' margin='4rem 4rem'>
				{limitedPackages.map((packages) => (
					<PackagesContent key={packages.title} packages={packages} />
				))}
			</Flex>
			<Link to='/tour-packages'>
				<Button className={`service-2-area-btn ${buttonHoverClass}`}>
					<Icon marginRight='0.5rem' as={FiEye} />VIEW ALL PACKAGES
				</Button>
			</Link>
		</Box>
    );
}