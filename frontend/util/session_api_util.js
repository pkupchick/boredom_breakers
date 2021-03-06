export const signUp = (user) =>
  $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user },
  });

export const login = (user) =>
  $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user },
  });

export const logout = () =>
  $.ajax({
    url: "/api/session",
    method: "DELETE",
  });

export const verify = (email) => {
  return $.ajax({
    method: "GET",
    url: "api/verify_user",
    data: { user: { email: email } },
  });
};


