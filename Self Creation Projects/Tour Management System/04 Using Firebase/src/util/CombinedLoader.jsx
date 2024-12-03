import { url } from "./constants";

export default async function combinedLoader() {
    const destinationsResponse = await fetch(url + 'destinations.json');
    const packagesResponse = await fetch(url + 'packages.json');
    const testimonialsResponse = await fetch(url + 'testimonials.json');
    const membershipsResponse = await fetch(url + 'memberships.json');

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
    const destinationResponse = await fetch(url + 'destinations/' + params.id + '.json');
    const destinationsResponse = await fetch(url + 'destinations.json');

    const destinationData = await destinationResponse.json();
    const destinationsData = await destinationsResponse.json();

    return {
        destination: destinationData,
        destinations: destinationsData
    };
}

export async function packageDetailsLoader({params}) {
    const packages = await fetch(url + 'packages/' + params.id + '.json');
    const packagesResponse = await fetch(url + 'packages.json');

    const packagesId = await packages.json();
    const packagesData = await packagesResponse.json();

    return {
        packages: packagesId,
        packagesData: packagesData
    };
}