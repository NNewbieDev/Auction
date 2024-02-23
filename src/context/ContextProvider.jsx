import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import UserReducer from "../reducer/UserReducer";
import cookie from "react-cookies";

const StateProvider = createContext();
const ContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [checked, setChecked] = useState(0);
  const [fakeListComment, setFakeListComment] = useState([]);
  const [user, dispatch] = useReducer(UserReducer, cookie.load("user") || null);

  useEffect(() => {
    if (user !== null) {
      setIsLogin(true);
    }
  }, []);
  return (
    <StateProvider.Provider
      value={{
        isLogin,
        setIsLogin,
        checked,
        setChecked,
        fakeListComment,
        setFakeListComment,
        user,
        dispatch,
      }}
    >
      {children}
    </StateProvider.Provider>
  );
};
export const useStateContext = () => useContext(StateProvider);
export default ContextProvider;
