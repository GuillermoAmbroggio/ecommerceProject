import { IAlertProps } from 'molecules/alert/Alert';
import { IToastProps } from 'molecules/toast/toast.types';
import { IAuth, IAuthWeb, IUser } from 'utils/types/UserTypes';
import { Actions } from './actions';

export type ClientDispatch = {
  dispatch: (action: Actions) => void;
};

export type ClientStore = {
  authentication: {
    isOnboarding: boolean;
    user: IUser | null;
    deviceId?: number;
    auth: IAuth | null;
    authWeb: IAuthWeb | null;
  };
  theme: 'light' | 'dark';
  alert: {
    open: boolean;
    config?: Omit<IAlertProps, 'onClose' | 'open'>;
    content?: React.ReactNode;
  };
  toast: {
    open: boolean;
    config?: Omit<IToastProps, 'onClose' | 'open'>;
  };
  isLoading: boolean;
};
