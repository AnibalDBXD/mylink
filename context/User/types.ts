import { IUser } from './../../services/firebase/types';
import UserActions from './userActions';

export interface IUserState {
    user: undefined | null | IUser,
    setUser?: (newUser: IUser) => void;
    setNotUser?: () => void;
}

export interface IUserActions {
    type: UserActions;
    payload: IUser | null;
}