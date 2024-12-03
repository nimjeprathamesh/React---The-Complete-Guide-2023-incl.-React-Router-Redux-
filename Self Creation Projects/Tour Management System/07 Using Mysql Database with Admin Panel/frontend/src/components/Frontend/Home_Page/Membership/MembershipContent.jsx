import { Box, Card, CardBody, Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { MdLocationPin } from "react-icons/md";
import { currencyFormatter } from '../../../../util/formatting.jsx';
import './Membership.css';

export default function MembershipContent({membership}) {
    return (
        <Card maxW='sm' className='member-box'>
            <CardBody p={0}>
                <Box className="member-image-overlay">
                    <Image src={membership.Image} alt='Membership' />
                    <Box className="member-overlay"></Box>
                </Box>
                <Stack spacing='3' p={4}>
                    <Heading size='md' className='type' m={0}>{membership.Type_of_Tour}</Heading>
                    <Flex justifyContent='space-between'>
                        <Text className="caption-2">
                            <Icon mr={1} mb={1} color='#f41844' as={MdLocationPin} />
                            {membership.Location}
                        </Text>
                        <Text className="price">
                            from-
                            <Text as='span' fontWeight='500'>
                                {currencyFormatter.format(membership.Package_Price)}
                            </Text>
                        </Text>
                    </Flex>
                </Stack>
            </CardBody>
        </Card>
    );
}