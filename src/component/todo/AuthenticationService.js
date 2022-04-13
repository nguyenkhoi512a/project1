export const registerSuccessfullLogin = (user) => {
  sessionStorage.setItem("authenticatedUser", user.username);
};

export const logout = () => {
  sessionStorage.removeItem("authenticatedUser");
};

export const isLoggedIn = () => {
    let user = sessionStorage.getItem("authenticatedUser");
    return user ? true : false;
};
