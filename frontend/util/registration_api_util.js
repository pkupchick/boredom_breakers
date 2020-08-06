// To be used for ticket feature

export const fetchTickets = (user) => {
    return $.ajax({
        method: "GET",
        url: "api/user_tickets",
        data: { user }
    });
};