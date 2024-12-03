import { Box, Flex } from '@chakra-ui/react';
import { useTheme } from '../../hooks/useTheme.jsx';
import { packagesData } from '../Dummy_Data/PackagesData.jsx';
import './TourPackage.css';
import TourPackageContent from './TourPackageContent.jsx';
import TourPackageHeader from './TourPackageHeader/TourPackageHeader.jsx';

export default function TourPackage() {
    const {themeCss} = useTheme();

    return (
        <Box>
            <TourPackageHeader />
            <Box id="tour_page">
                <Flex
                    wrap="wrap"
                    justifyContent="space-between"
                    flex='1 1 calc(33.33% - 1rem)'
                    className="inner-area"
                    style={themeCss}
                >
                    {packagesData.map((packages) => (
                        <TourPackageContent key={packages.id} packages={packages} />
                    ))}
                </Flex>
            </Box>
        </Box>
    );
}