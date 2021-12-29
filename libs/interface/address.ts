export interface IProvince {
  id: string;
  name: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export interface IRegency {
  id: string;
  province_id: string;
  name: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export interface IDistrict {
  id: string;
  regency_id: string;
  name: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
