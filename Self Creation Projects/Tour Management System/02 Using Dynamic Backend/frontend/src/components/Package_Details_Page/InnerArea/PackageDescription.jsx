import { Box, Divider, Flex, Heading, Icon, Img, Text } from '@chakra-ui/react';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { useTheme } from '../../../hooks/useTheme.jsx';
import { BACKEND_URL } from '../../../util/constant';
import { currencyFormatter } from '../../../util/formatting';
import './PackageDescription.css';

export default function PackageDescription({packages}) {
    const detailsParagraphs = packages.details.split('\n');
    const {isDark} = useTheme();
    const borderColor = isDark ? 'lightBorder' : 'darkBorder';

    return (
        <Box margin='1.2rem 0' width='72%'>
            <Flex justifyContent='space-between'>
                <Heading as='h5'>
                    <Icon as={MdLocationPin} position='relative' bottom='2px' />{packages.title}
                </Heading>
                <Text className='timeprice'>
                    <FontAwesomeIcon icon={faCalendarDays} /> {packages.duration}
                </Text>
                <Text as='span'>{currencyFormatter.format(packages.price)}</Text>
            </Flex>
            <Divider className={borderColor} m={0} />
            <Img mt={4} mb={8} src={BACKEND_URL + packages.image} alt='Package Details' />
            <Text><Icon as={MdLocationPin} position='relative' bottom='0.1rem' /> {packages.location}</Text>
            {detailsParagraphs.map((paragraph, index) => (
                <p key={index}>
                    {index > 0}
                    {paragraph}
                </p>
            ))}
        </Box>
    );
}