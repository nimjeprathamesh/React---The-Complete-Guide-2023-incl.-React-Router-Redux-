import { Box } from "@chakra-ui/react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header.jsx";

export default function FrontendCommon() {
    const { destinations, packages } = useLoaderData();

    return (
        <Box >
            <Header />
            <Box as="main">
                <Outlet />
            </Box>
            <Footer destinations={destinations} packages={packages} />
        </Box>
    );
}