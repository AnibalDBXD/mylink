import React, { ReactNode, useEffect, useReducer } from "react";
import { onAuthStateChanged } from "../../services/firebase/client";
import { IUser } from "../../services/firebase/types";
import UserActions from "./userActions";
import { initialState, userContext } from "./userContext";
import UserReducer from "./userReducer";

interface IProps {
    children: ReactNode;
}

const UserProvider = ({ children }: IProps): JSX.Element => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setUser = (newUser: IUser): void => {
    dispatch({ payload: newUser, type: UserActions.SET_USER});
  };

  const setNotUser = (): void => {
    dispatch({ payload: null, type: UserActions.SET_NO_USER});
  };

  useEffect(() => {
    onAuthStateChanged(
      //on load new user
      setUser,
      //on error
      (errorMessage: string) => alert(errorMessage)
    );
  }, []);

  return (
    <userContext.Provider
      value={{
        user: state.user,
        setUser,
        setNotUser
      }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;