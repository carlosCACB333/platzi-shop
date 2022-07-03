export type ToastType = 'success' | 'error' | 'warning';

export interface IToast {
  type: ToastType;
  message: string;
}
