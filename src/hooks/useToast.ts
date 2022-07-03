import { UIContext } from 'contexts';
import { useContext } from 'react';

export const useToast = () => {
  const { addToast, removeToast } = useContext(UIContext);
  return { addToast, removeToast };
};
