import { BACKEND_URL } from "./constant";

export default async function combinedLoader() {
    const destinationsResponse = await fetch(BACKEND_URL + 'api/destinationdata');
    const packagesResponse = await fetch(BACKEND_URL + 'api/packagesdata');
    const testimonialsResponse = await fetch(BACKEND_URL + 'api/testimonialdata');
    const membershipsResponse = await fetch(BACKEND_URL + 'api/membershipdata');
    const contactInfoResponse = await fetch(BACKEND_URL + 'api/contactinfo');
    const subscribeResponse = await fetch(BACKEND_URL + 'api/subscription');

    const destinationsData = await destinationsResponse.json();
    const packagesData = await packagesResponse.json();
    const testimonialsData = await testimonialsResponse.json();
    const membershipsData = await membershipsResponse.json();
    const feedbackData = await contactInfoResponse.json();
    const subscribeData = await subscribeResponse.json();

    return {
        destinations: destinationsData,
        packages: packagesData,
        testimonials: testimonialsData,
        memberships: membershipsData,
        feedback: feedbackData,
        subscribe: subscribeData
    };
}

export async function destinationDetailsLoader({params}) {
    const destinationResponse = await fetch(BACKEND_URL + 'api/destinationdata/' + params.id);
    const destinationsResponse = await fetch(BACKEND_URL + 'api/destinationdata');

    const destinationData = await destinationResponse.json();
    const destinationsData = await destinationsResponse.json();

    return {
        destination: destinationData,
        destinations: destinationsData
    };
}

export async function packageDetailsLoader({params}) {
    const packages = await fetch(BACKEND_URL + 'api/packagesdata/' + params.id);
    const packagesResponse = await fetch(BACKEND_URL + 'api/packagesdata');

    const packagesId = await packages.json();
    const packagesData = await packagesResponse.json();

    return {
        packages: packagesId,
        packagesData: packagesData
    };
}