
export const fetchTickets = (user) => {
    debugger;
    return $.ajax({
        method: "GET",
        url: `api/registrations/${user}`,
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