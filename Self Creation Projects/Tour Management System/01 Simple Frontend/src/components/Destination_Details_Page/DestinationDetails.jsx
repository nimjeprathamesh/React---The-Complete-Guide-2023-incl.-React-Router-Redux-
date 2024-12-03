import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useTheme } from '../../hooks/useTheme.jsx';
import { useDestinationContext } from '../../store/DestinationContext.jsx';
import { destinationsData } from '../Dummy_Data/DestinationsData.jsx';
import '../Inquiry_Form/DestinationInquiryForm.css';
import InquiryForm from '../Inquiry_Form/InquiryForm.jsx';
import './DestinationDetails.css';
import DestinationDetailsHeader from './DestinationDetailsHeader/DestinationDetailsHeader.jsx';
import DestinationDescription from './InnerArea/DestinationDescription.jsx';
import DestinationList from './InnerArea/DestinationList.jsx';

export default function DestinationDetails() {
    const { initialLoad, excludeName } = useDestinationContext();
    const {themeCss} = useTheme();

    return (
        <Box>
            <DestinationDetailsHeader destinations={destinationsData} />
            <Box id="destinationDetailsPage">
                <Flex className="inner-area" style={themeCss} justifyContent='space-between'>
                    <DestinationDescription destinations={destinationsData} />
                    <Box className='inner-box-1'>
                        <InquiryForm />
                        {!initialLoad && <DestinationList excludeName={excludeName} destinations={destinationsData} />}
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}