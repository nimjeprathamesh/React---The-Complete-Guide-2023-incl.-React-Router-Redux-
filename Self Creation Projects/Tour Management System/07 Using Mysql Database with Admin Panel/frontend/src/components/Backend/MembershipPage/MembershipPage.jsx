import { Box, Card, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BACKEND_URL } from '../../../util/constant.jsx';
import MembershipDescription from './MembershipDescription.jsx';
import MembershipHeader from './MembershipHeader.jsx';
import './MembershipPage.css';

export default function MembershipPage() {
    const { memberships } = useLoaderData();
    const membershipArray = Object.entries(memberships).map(([key, value]) => ({ ...value, key }));
    const [membershipData, setMembershipData] = useState(membershipArray);

    async function onDelete(id) {
        const url = BACKEND_URL + 'api/membershipdata/' + id;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error('Failed to delete membership:', errorMessage);
            return;
        }
        setMembershipData(prevMemberships => prevMemberships.filter(membership => membership.id !== id));
    }

    useEffect(() => {
        setMembershipData(membershipArray);
    }, [memberships]);

    return (
        <Box id="main_content">
            <MembershipHeader />
            <Flex flexWrap="wrap" justifyContent="space-between" margin='0 0.5rem'>
                {membershipData.map((membership) => (
                    <Card
                        key={membership.id}
                        className="membership-card"
                        maxW='md'
                        margin='0.5rem'
                        flex="1 0 calc(33.33% - 1rem)"
                        p={0}
                        overflow='hidden'
                        height='fit-content'
                    >
                        <MembershipDescription key={membership.id} membership={membership} onDelete={onDelete} />
                    </Card>
                ))}
            </Flex>
        </Box>
    );
}