import { IToast } from 'interfaces';
import { UIState } from './UIContext';

type UIAction = { type: 'ui add toast'; payload: IToast } | { type: 'ui remove toast' };

export const UIReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case 'ui add toast':
      return { ...state, toast: action.payload };

    case 'ui remove toast':
      return { ...state, toast: undefined };

    default:
      return state;
  }
};
