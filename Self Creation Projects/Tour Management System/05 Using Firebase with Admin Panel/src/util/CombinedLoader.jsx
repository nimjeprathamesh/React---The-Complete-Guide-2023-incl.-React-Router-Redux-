import { BACKEND_URL } from "./constant";

export default async function combinedLoader() {
    const destinationsResponse = await fetch(BACKEND_URL + 'destinationsData.json');
    const packagesResponse = await fetch(BACKEND_URL + 'packagesData.json');
    const testimonialsResponse = await fetch(BACKEND_URL + 'testimonialsData.json');
    const membershipsResponse = await fetch(BACKEND_URL + 'membershipsData.json');
    const contactInfoResponse = await fetch(BACKEND_URL + 'contactInfo.json');
    const subscribeResponse = await fetch(BACKEND_URL + 'subscription.json');

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
    const destinationResponse = await fetch(BACKEND_URL + 'destinationsData/' + params.id + '.json');
    const destinationsResponse = await fetch(BACKEND_URL + 'destinationsData.json');

    const destinationData = await destinationResponse.json();
    const destinationsData = await destinationsResponse.json();

    return {
        destination: destinationData,
        destinations: destinationsData
    };
}

export async function packageDetailsLoader({params}) {
    const packages = await fetch(BACKEND_URL + 'packagesData/' + params.id + '.json');
    const packagesResponse = await fetch(BACKEND_URL + 'packagesData.json');

    const packagesId = await packages.json();
    const packagesData = await packagesResponse.json();

    return {
        packages: packagesId,
        packagesData: packagesData
    };
}