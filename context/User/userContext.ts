import { createContext, useContext } from 'react';
import { IUserState } from './types';

export const initialState: IUserState = {
  user: undefined
};

export const userContext = createContext<IUserState>(initialState);

export const useUserContext = (): IUserState => useContext(userContext);