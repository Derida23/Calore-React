import { GetStaticProps } from "next";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Register } from "../../components/authentication";
import {
  getDistrict,
  getProvinces,
  getRegencies,
} from "../../libs/directory/address";
import { postRegister } from "../../libs/directory/authentication";
import { IDistrict, IProvince, IRegency } from "../../libs/interface/address";
import { IRegister } from "../../libs/interface/authentication";

interface Props {
  DATA_PROVINCES: Array<IProvince>;
}

const DEFAULT_SAVE: IRegister = {
  email: "",
  password: "",
  confirm_password: "",
  name: "",
  role: 2,
  phone: "",
  address: "",
  district_id: 0,
  regencie_id: 0,
  province_id: 0,
};

const RegisterPage: FC<Props> = ({ DATA_PROVINCES }) => {
  const [provinces, setProvinces] = useState<Array<IProvince>>(DATA_PROVINCES);
  const [regencies, setRegencies] = useState<Array<IRegency>>([]);
  const [districts, setDistricts] = useState<Array<IDistrict>>([]);
  const [dataSave, setDataSave] = useState<IRegister>(DEFAULT_SAVE);

  const onInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setDataSave({ ...dataSave, [name]: value });
  };

  const onProvinces = async (id_province: number) => {
    const apiRegency = await getRegencies(id_province);
    setRegencies(apiRegency.data);

    setDataSave({
      ...dataSave,
      province_id: id_province,
      regencie_id: 0,
      district_id: 0,
    });
  };

  const onRegencies = async (id_regency: number) => {
    const apiDistrict = await getDistrict(id_regency);
    setDistricts(apiDistrict.data);

    setDataSave({ ...dataSave, regencie_id: id_regency, district_id: 0 });
  };

  const onDistricts = async (id_district: number) => {
    setDataSave({ ...dataSave, district_id: id_district });
  };

  const onRegister = async () => {
    const responseRegister = await postRegister(dataSave);
  };

  return (
    <Register
      props={{
        provinces,
        regencies,
        districts,
        onProvinces,
        onRegencies,
        onDistricts,
        onInput,
        dataSave,
        onRegister,
      }}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apiProvince = await getProvinces();
  return {
    props: { DATA_PROVINCES: apiProvince.data },
  };
};

export default RegisterPage;
