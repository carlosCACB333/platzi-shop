import { IToast } from 'interfaces';
import { createContext, FC, PropsWithChildren, useReducer } from 'react';
import { UIReducer } from './UIReducer';

interface UIContextProps {
  toast?: IToast;
  removeToast: () => void;
  addToast: (toast: IToast) => void;
}

export interface UIState {
  toast?: IToast;
}

export const UI_INITIAL_STATE: UIState = {
  toast: undefined,
};

export const UIContext = createContext<UIContextProps>({} as UIContextProps);

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const addToast = (toast: IToast) => {
    dispatch({ type: 'ui add toast', payload: toast });
    setTimeout(() => {
      dispatch({ type: 'ui remove toast' });
    }, 3000);
  };
  const removeToast = () => dispatch({ type: 'ui remove toast' });

  return <UIContext.Provider value={{ ...state, removeToast, addToast }}>{children}</UIContext.Provider>;
};
