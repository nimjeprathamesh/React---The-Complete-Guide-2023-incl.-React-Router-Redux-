import { Box, Card, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BACKEND_URL } from "../../../util/constant.jsx";
import PackageDetails from './PackageDetails.jsx';
import PackageHeader from './PackageHeader.jsx';
import './PackagePage.css';

export default function PackagePage() {
    const { packages } = useLoaderData();
    const packagesArray = Object.entries(packages).map(([key, value]) => ({ ...value, key }));
    const [packagesData, setPackagesData] = useState(packagesArray);

    async function onDelete(id) {
        try {
            const url = `${BACKEND_URL}/packagesData/${id}.json`;
            console.log(`Attempting to delete package with URL: ${url}`);
            
            const response = await fetch(url, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Failed to delete package:', errorMessage);
                return;
            }
    
            console.log(`Successfully deleted package with ID: ${id}`);
            setPackagesData(prevPackages => prevPackages.filter(packages => packages.key !== id));
        } catch (error) {
            console.error('Error deleting package:', error);
        }
    }

    async function onUpdate(updatedPackage) {
        try {
            const url = `${BACKEND_URL}/packagesData/${updatedPackage.key}.json`;
            console.log(`Attempting to update destination with URL: ${url}`);
            
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedPackage)
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Failed to update package:', errorMessage);
                return;
            }

            console.log(`Successfully updated package with ID: ${updatedPackage.key}`);
            setPackagesData(prevPackages =>
                prevPackages.map(packages =>
                    packages.key === updatedPackage.key ? updatedPackage : packages
                )
            );
        } catch (error) {
            console.error('Error updating package:', error);
        }
    }

    useEffect(() => {
        setPackagesData(packagesArray);
    }, [packages]);

    return (
        <Box id="package_content">
            <PackageHeader />
            <Flex flexWrap="wrap" justifyContent="space-between">
                {packagesData.map((packages) => (
                    <Card
                        key={packages.id}
                        className="package-card"
                        maxW='md'
                        margin='0.5rem'
                        flex="1 0 calc(33.33% - 1rem)"
                        p={0}
                    >
                        <PackageDetails packages={packages} onDelete={onDelete} />
                    </Card>
                ))}
            </Flex>
        </Box>  
    );
}