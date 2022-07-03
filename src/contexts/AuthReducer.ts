import { IUser } from 'interfaces';
import { AuthState } from './AuthContext';

type AuthAction = { type: 'auth signin'; payload: IUser } | { type: 'auth logout' };

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'auth signin':
      return { ...state, user: action.payload };

    case 'auth logout':
      return { ...state, user: undefined };

    default:
      return state;
  }
};
