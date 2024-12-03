import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useTheme } from '../../hooks/useTheme.jsx';
import { usePackageContext } from '../../store/PackagesContext.jsx';
import { packagesData } from '../Dummy_Data/PackagesData';
import InquiryForm from '../Inquiry_Form/InquiryForm.jsx';
import '../Inquiry_Form/PackageInquiryForm.css';
import PackageDescription from './InnerArea/PackageDescription';
import PackageList from './InnerArea/PackageList';
import './PackageDetails.css';
import PackageDetailsHeader from './PackageDetailsHeader/PackageDetailsHeader';

export default function PackageDetails() {
    const {initialLoad, excludeName} = usePackageContext;
    const {themeCss} = useTheme();

    return (
        <Box>
            <PackageDetailsHeader packagesData={packagesData} />
            <Box id="packageDetailsPage">
                <Flex className="inner-area" style={themeCss} justifyContent='space-between'>
                    <PackageDescription packagesData={packagesData} />
                    <Box className='inner-box-1'>
                        <InquiryForm />
                        {!initialLoad && <PackageList excludeName={excludeName} packagesData={packagesData} />}
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}