import { BACKEND_URL } from "./constant.jsx";

const combinedLoader = async () => {
    const destinationsResponse = await fetch(BACKEND_URL + 'destinations');
    const packagesResponse = await fetch(BACKEND_URL + 'packages');
    const testimonialsResponse = await fetch(BACKEND_URL + 'testimonials');
    const membershipsResponse = await fetch(BACKEND_URL + 'memberships');

    const destinationsData = await destinationsResponse.json();
    const packagesData = await packagesResponse.json();
    const testimonialsData = await testimonialsResponse.json();
    const membershipsData = await membershipsResponse.json();

    return {
        destinations: destinationsData,
        packages: packagesData,
        testimonials: testimonialsData,
        memberships: membershipsData
    };
};

export default combinedLoader;

export async function destinationDetailsLoader({params}) {
    const destinationsResponse = await fetch(BACKEND_URL + 'destinations');
    const response = await fetch(BACKEND_URL + 'destinations/' + params.id);
    const destinationsData = await destinationsResponse.json();
    const resData = await response.json();

    return {
        destinations: destinationsData,
        destination: resData,
    };
}

export async function packageDetailsLoader({params}) {
    const packagesResponse = await fetch(BACKEND_URL + 'packages');
    const response = await fetch(BACKEND_URL + 'packages/' + params.id);
    const packagesData = await packagesResponse.json();
    const resData = await response.json();

    return {
        packages: packagesData,
        tourPackage: resData,
    };
}