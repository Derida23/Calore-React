import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { ChangeEvent, FC, useState } from "react";
import { Register } from "../../components/authentication";
import ToastMessage from "../../components/notice/toast";
import { setCookies } from "../../libs";
import {
  getDistrict,
  getProvinces,
  getRegencies,
} from "../../libs/directory/address";
import { postRegister } from "../../libs/directory/authentication";
import { IDistrict, IProvince, IRegency } from "../../libs/interface/address";
import { IRegister } from "../../libs/interface/authentication";
import { IError, INotice } from "../../libs/interface/response";
import { validateRegister } from "../../libs/validation/authentication";

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
  const router = useRouter();

  const [provinces, setProvinces] = useState<Array<IProvince>>(DATA_PROVINCES);
  const [regencies, setRegencies] = useState<Array<IRegency>>([]);
  const [districts, setDistricts] = useState<Array<IDistrict>>([]);
  const [dataSave, setDataSave] = useState<IRegister>(DEFAULT_SAVE);

  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<IError>(null);
  const [notice, setNotice] = useState<INotice>({
    code: 0,
    message: "",
    open: false,
  });

  const onDirect = (url: string) => {
    router.push(url);
  };

  const onInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setError(null);
    setDataSave({
      ...dataSave,
      [name]: name === "phone" ? value.replace(/[^0-9]/g, "") : value,
    });
  };

  const onProvinces = async (id_province: number) => {
    const apiRegency = await getRegencies(id_province);
    setError(null);
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
    setError(null);
    setDistricts(apiDistrict.data);
    setDataSave({ ...dataSave, regencie_id: id_regency, district_id: 0 });
  };

  const onDistricts = async (id_district: number) => {
    setError(null);
    setDataSave({ ...dataSave, district_id: id_district });
  };

  const onRegister = async () => {
    setLoading(true);

    const error = await validateRegister(dataSave);
    if (error) {
      setError(error);
    } else {
      const responseRegister = await postRegister(dataSave);

      setNotice({
        code: responseRegister.code,
        message: responseRegister.message,
        open: true,
      });

      if (responseRegister.code < 400) {
        await setCookies("__SUTK", responseRegister.data.token);
        await setCookies("__UUID", responseRegister.data.user.toString());

        setTimeout(() => {
          onDirect("/");
        }, 5000);
      }
    }

    setLoading(false);
    setNotice({ code: 0, message: "", open: false });
  };

  return (
    <div>
      <ToastMessage props={{ ...notice }} />
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
          isError,
          loading,
        }}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apiProvince = await getProvinces();
  return {
    props: { DATA_PROVINCES: apiProvince.data },
  };
};

export default RegisterPage;
