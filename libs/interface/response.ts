interface IErrorData {
  value?: string;
  msg: string;
  param: string;
  location: string;
}

export interface IError {
  code: number;
  message: string;
  data: Array<IErrorData>;
}

export interface INotice {
  code: number;
  message: string;
  open: boolean;
}
