
export const fetchTickets = (user) => {
    return $.ajax({
        method: "GET",
        url: "api/registrations",
        data: data
    });
};

export const createTicket = ticketForm => {
    return $.ajax({
        method: "POST",
        url: "/api/registrations",
        data: ticketForm
    })
}