import { IUser } from 'interfaces';
import { createContext, FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { ax } from 'utils';
import { AuthReducer } from './AuthReducer';
import cookie from 'js-cookie';
import { useToast } from 'hooks';
import { useRouter } from 'next/router';

interface AuthContextProps {
  user?: IUser;
  signIn: (email: string, password: string) => void;
  logout: () => void;
}

export interface AuthState {
  user?: IUser;
}

export const Auth_INITIAL_STATE: AuthState = {
  user: undefined,
};

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, Auth_INITIAL_STATE);
  const router = useRouter();
  const { addToast } = useToast();

  useEffect(() => {
    const token = cookie.get('token');
    if (!token) return;

    ax.get<IUser>('/auth/profile', { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data }) => dispatch({ type: 'auth signin', payload: data }))
      .catch((err) => {
        addToast({ type: 'error', message: err?.response?.data?.message || 'Error al obtener la sesión' });
        cookie.remove('token');
      });
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const {
        data: { access_token },
      } = await ax.post('/auth/login', { email, password });
      const { data } = await ax.get<IUser>('/auth/profile', { headers: { Authorization: `Bearer ${access_token}` } });

      cookie.set('token', access_token, { expires: 5 });
      addToast({ type: 'success', message: 'Se inició sesión correctamente' });
      dispatch({ type: 'auth signin', payload: data });

      router.push('/dashboard');
    } catch (err: any) {
      addToast({ type: 'error', message: err?.response?.data?.message || 'Error en las credenciales' });
    }
  };

  const logout = () => {
    cookie.remove('token');
    dispatch({ type: 'auth logout' });
    router.push('/');
  };

  return <AuthContext.Provider value={{ ...state, signIn, logout }}>{children}</AuthContext.Provider>;
};
