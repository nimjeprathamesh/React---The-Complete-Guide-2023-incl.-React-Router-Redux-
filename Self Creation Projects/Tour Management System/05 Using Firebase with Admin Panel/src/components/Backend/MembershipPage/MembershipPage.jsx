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
        try {
            const url = `${BACKEND_URL}/membershipsData/${id}.json`;
            console.log(`Attempting to delete membership with URL: ${url}`);
            
            const response = await fetch(url, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Failed to delete membership:', errorMessage);
                return;
            }
    
            console.log(`Successfully deleted membership with ID: ${id}`);
            setMembershipData(prevMemberships => prevMemberships.filter(membership => membership.key !== id));
        } catch (error) {
            console.error('Error deleting membership:', error);
        }
    }

    async function onUpdate(updatedMembership) {
        try {
            const url = `${BACKEND_URL}/membershipsData/${updatedMembership.key}.json`;
            console.log(`Attempting to update membership with URL: ${url}`);
            
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedMembership)
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Failed to update membership:', errorMessage);
                return;
            }

            console.log(`Successfully updated destination with ID: ${updatedMembership.key}`);
            setMembershipData(prevMemberships =>
                prevMemberships.map(membership =>
                    membership.key === updatedMembership.key ? updatedMembership : membership
                )
            );
        } catch (error) {
            console.error('Error updating membership:', error);
        }
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
                    >
                        <MembershipDescription
                            key={membership.id}
                            membership={membership}
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                        />
                    </Card>
                ))}
            </Flex>
        </Box>
    );
}