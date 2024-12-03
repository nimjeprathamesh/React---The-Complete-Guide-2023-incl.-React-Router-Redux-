import { BACKEND_URL } from "./constant";

export default async function combinedLoader() {
    const destinationsResponse = await fetch(BACKEND_URL + 'api/destination');
    const packagesResponse = await fetch(BACKEND_URL + 'api/packages');
    const testimonialsResponse = await fetch(BACKEND_URL + 'api/testimonial');
    const membershipsResponse = await fetch(BACKEND_URL + 'api/membership');

    const destinationsData = await destinationsResponse.json();
    const packagesData = await packagesResponse.json();
    const testimonialsData = await testimonialsResponse.json();
    const membershipsData = await membershipsResponse.json();

    return {
        destinations: destinationsData,
        packages: packagesData,
        testimonials: testimonialsData,
        memberships: membershipsData,
    };
}

export async function destinationDetailsLoader({params}) {
    const destinationResponse = await fetch(BACKEND_URL + 'api/destination/' + params.id);
    const destinationsResponse = await fetch(BACKEND_URL + 'api/destination');

    const destinationData = await destinationResponse.json();
    const destinationsData = await destinationsResponse.json();

    return {
        destination: destinationData,
        destinations: destinationsData
    };
}

export async function packageDetailsLoader({params}) {
    const packages = await fetch(BACKEND_URL + 'api/packages/' + params.id);
    const packagesResponse = await fetch(BACKEND_URL + 'api/packages');

    const packagesId = await packages.json();
    const packagesData = await packagesResponse.json();

    return {
        packages: packagesId,
        packagesData: packagesData
    };
}