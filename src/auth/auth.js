const Auth = {
  isAuthenticated: false,
  signin(callback) {
    Auth.isAuthenticated = true;
    setTimeout(callback, 1000); //fake async.
  },
  signout(callback) {
    Auth.isAuthenticated = false;
    setTimeout(callback, 1000);
  },
};

export default Auth;
