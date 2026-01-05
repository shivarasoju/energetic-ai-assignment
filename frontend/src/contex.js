import { createContext } from "react";

const AuthContext = createContext({
  authUser: null,
  setAuthUser: () => {},
});

export default AuthContext;
