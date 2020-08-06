// To be used for ticket feature

export const fetchTickets = (user) => {
    return $.ajax({
        method: "GET",
        url: "api/registrations",
        data: {userId: user.id }
    });
};

export const createTicket = ticketForm => {
    return $.ajax({
        method: "POST",
        url: "/api/registrations",
        data: ticketForm
    })
}