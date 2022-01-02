export interface IRegister {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
  role: number;
  phone: string;
  address: string;
  district_id: number;
  regencie_id: number;
  province_id: number;
}

export interface ILogin {
  email: string;
  password: string;
}
