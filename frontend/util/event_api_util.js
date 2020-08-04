export const fetchEvents = () => (
    $.ajax({
        method: "GET",
        url: "/api/events",
    })
);

export const fetchEvent = id => (
    $.ajax({
        method: "GET",
        url: `/api/events/${id}`,
    })
);

export const createEvent = eventForm => (
    $.ajax({
        method: "POST",
        url: "/api/events",
        data: eventForm,
        contentType: false,
        processData: false
    })
)

export const updateEvent = (event) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/events/${event.get("event[id]")}`,
        data: event,
        contentType: false,
        processData: false
    });
}

export const deleteEvent = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `api/events/${id}`
    });
}