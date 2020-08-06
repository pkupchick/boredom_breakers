export const validateEmail = (email) => {
    const atCheck = email.split("@");
    if (atCheck.length !== 2) {
        return false;
    } else {
        const periodCheck = atCheck[1].split(".");
        if (periodCheck.length !== 2) {
            return false;
        }
    }
    return true;
};