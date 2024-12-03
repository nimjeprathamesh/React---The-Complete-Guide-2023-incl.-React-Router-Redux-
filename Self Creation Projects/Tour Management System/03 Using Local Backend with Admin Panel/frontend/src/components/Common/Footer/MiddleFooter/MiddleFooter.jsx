import { Box, Flex } from '@chakra-ui/react';
import './MiddleFooter.css';
import DescriptionArea from './MiddleFooterArea/DescriptionArea.jsx';
import DestinationsArea from './MiddleFooterArea/DestinationsArea.jsx';
import PackagesArea from './MiddleFooterArea/PackagesArea.jsx';
import QuickLinks from './MiddleFooterArea/QuickLinks.jsx';

export default function MiddleFooter({destination, packages}) {
    return (
        <Box className="middlefooter">
            <Flex justifyContent='space-between' gap={4}>
                <DescriptionArea />
                <QuickLinks />
                <PackagesArea packages={packages} />
                <DestinationsArea destination={destination} />
            </Flex>
        </Box>
    );
}