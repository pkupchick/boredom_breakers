export const fetchEvents = () => (
    $.ajax({
        method: "GET",
        url: "/api/events",
    })
);

export const fetchEvent = id => (
    $.ajax({
        method: "GET",
        url: `/api/events/${id}`
    })
);

export const createEvent = eventForm => (
    $.ajax({
        method: "POST",
        url: "/api/events",
        data: {event: eventForm},
    })
)