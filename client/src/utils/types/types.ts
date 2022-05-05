import { AxiosResponse } from 'axios';

export interface CssType {
  [key: string]: { [key: string]: string | number | undefined };
}

export type AxiosGet = () => Promise<AxiosResponse<any>>;
