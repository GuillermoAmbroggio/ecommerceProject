import { IAlertProps } from 'molecules/alert/Alert';
import { IToastProps } from 'molecules/toast/toast.types';
import { IUser } from 'utils/types/UserTypes';

export type AuthActions =
  | { type: 'FIRST_OPEN_ONBOARDING' }
  | { type: 'LOGOUT' }
  | {
      type: 'AUTH';
      payload: {
        accessToken: string;
        refreshToken: string;
      };
    }
  | {
      type: 'AUTH_WEB';
      payload: {
        csrfToken: string;
      };
    }
  | {
      type: 'SET_USER';
      payload: IUser;
    }
  | { type: 'GUEST'; payload: boolean }
  | { type: 'SET_DEVICE_ID'; payload: number }
  | { type: 'CHANGE_THEME' };

export type AlertActions = {
  type: 'ALERT';
  payload: {
    open: boolean;
    config?: Omit<IAlertProps, 'onClose' | 'open'>;
    content?: React.ReactNode;
  };
};

export type ToastActions = {
  type: 'TOAST';
  payload: {
    open: boolean;
    config?: Omit<IToastProps, 'onClose' | 'open'>;
  };
};

export type LoadingActions = {
  type: 'LOADING';
  payload: boolean;
};

export type Actions =
  | AuthActions
  | AlertActions
  | ToastActions
  | LoadingActions;
