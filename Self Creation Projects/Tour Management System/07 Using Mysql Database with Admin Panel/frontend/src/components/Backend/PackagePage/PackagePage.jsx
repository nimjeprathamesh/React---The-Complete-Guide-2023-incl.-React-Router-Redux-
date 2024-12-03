import { Box, Card, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BACKEND_URL } from "../../../util/constant.jsx";
import PackageDetails from './PackageDetails.jsx';
import PackageHeader from './PackageHeader.jsx';
import './PackagePage.css';

export default function PackagePage() {
    const { packages } = useLoaderData();
    const [packagesData, setPackagesData] = useState(packages);

    async function onDelete(id) {
        const url = BACKEND_URL + 'api/packagesdata/' + id;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error('Failed to delete package:', errorMessage);
            return;
        }
        setPackagesData(prevPackages => prevPackages.filter(packages => packages.id !== id));
    }

    useEffect(() => {
        setPackagesData(packagesData);
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