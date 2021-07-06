import UserActions from './userActions'
import { IUserActions, IUserState, } from './types'

const UserReducer = (state: IUserState, action: IUserActions ): IUserState => {
  const { payload, type } = action

  switch (type) {
      case UserActions.SET_USER:
          if (payload) {
              return {
                ...state,
                  user: payload
              }
          }
      case UserActions.SET_NO_USER:
          return {
              ...state,
              user: null
          }
    default:
      return state
  }
}

export default UserReducer
