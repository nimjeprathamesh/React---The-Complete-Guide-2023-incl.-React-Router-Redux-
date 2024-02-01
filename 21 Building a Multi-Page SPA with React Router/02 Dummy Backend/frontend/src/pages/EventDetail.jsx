import { Suspense } from "react";
import { Await, defer, json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem.jsx";
import EventsList from "../components/EventsList.jsx";

export default function EventDetailPage() {
    const {event, events} = useRouteLoaderData('event-detail');

    return (
        <>
            <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
                <Await resolve={event}>
                    {loaderEvent => <EventItem event={loaderEvent} />}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
                <Await resolve={events}>
                    {loaderEvents => <EventsList events={loaderEvents} />}
                </Await>
            </Suspense>
        </>
    );
}

async function loadEvent(id) {
    const response = await fetch('http://localhost:8080/events/' + id);

    if(!response.ok) {
        throw json(
            {message: 'Could not fetch details for selected event.'},
            {status: 500}
        );
    } else {
        const resData = await response.json();
        return resData.event;
    }
}

async function loadEvents () {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return {isError: true, message: 'Could not fetch events.'};
        // throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {
        //     status: 500,
        // });

        return json(
            {message: 'Could not fetch events.'},
            {status: 500},
        );
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export async function loader({request, params}) {
    const id = params.eventId;
    
    return defer({
        event: loadEvent(id),
        events: loadEvents()
    });
}

export async function action({params, request}) {
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: request.method,
    });

    if(!response.ok) {
        throw json({message: 'Could not delete event.'}, {
            status: 500
        });
    }

    return redirect('/events');
}