import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import './Membership.css';
import MembershipContent from './MembershipContent.jsx';

export default function Membership({memberships}) {
    const membershipsArray = Object.values(memberships);
    return (
        <Box id="homePageMember">
            <Heading as="h1" size="xl">
                <Text as='span' fontWeight='bold'>Our</Text> Membership
            </Heading>
            <Flex wrap="wrap" justifyContent="space-between" flex='1 1 calc(33.33% - 1rem)' margin='5rem 4rem'>
                {membershipsArray.map((membership, index) => (
                    <MembershipContent key={index} membership={membership} />
                ))}
            </Flex>
        </Box>
    );
}