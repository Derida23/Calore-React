import React, { ChangeEvent, FC, useState } from "react";
import styles from "../../styles/Auth.module.scss";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  KeyOutlined,
  MailOutlined,
  PhoneOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import Forgot from "../modal/forgot";
import { IDistrict, IProvince, IRegency } from "../../libs/interface/address";
import { upperCase } from "../../libs";
import { IRegister } from "../../libs/interface/authentication";

interface Props {
  props: PropsItem;
}

interface PropsItem {
  provinces: Array<IProvince>;
  regencies: Array<IRegency>;
  districts: Array<IDistrict>;
  onProvinces: (id_province: number) => void;
  onRegencies: (id_regency: number) => void;
  onDistricts: (id_district: number) => void;
  onInput: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  dataSave: IRegister;
  onRegister: () => void;
}

const Register: FC<Props> = ({ props }) => {
  const {
    provinces,
    regencies,
    districts,
    onProvinces,
    onRegencies,
    onDistricts,
    onInput,
    dataSave,
    onRegister,
  } = props;

  const router = useRouter();
  const { Option } = Select;
  const [isOpen, setOpen] = useState<boolean>(false);

  const onDirect = (url: string) => {
    router.push(url);
  };

  return (
    <div>
      <Forgot isOpen={isOpen} onClose={() => setOpen(false)} />
      <div className={styles.container}>
        <Head>
          <title>Daftar / Register | Calore</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="card card-shadow">
          <div>
            <div className="flex items-center justify-center">
              <img
                onClick={() => {
                  onDirect("/");
                }}
                src="/assets/calore-black.png"
                alt="calore-logo"
                className="w-44 cursor-pointer mb-10"
              />
            </div>
            <div className="">
              <div className="grid grid-rows-1 grid-cols-2 gap-8">
                <div className="mb-3">
                  <p className="mb-1">
                    Full Name<span className="text-red-500">*</span>
                  </p>
                  <Input
                    size="large"
                    placeholder="John Doe"
                    prefix={<UserOutlined />}
                    onChange={onInput}
                    name="name"
                  />
                </div>

                <div className="mb-3">
                  <p className="mb-1">
                    Email<span className="text-red-500">*</span>
                  </p>
                  <Input
                    size="large"
                    placeholder="Email ID"
                    prefix={<MailOutlined />}
                    onChange={onInput}
                    name="email"
                  />
                </div>
              </div>

              <div className="grid grid-rows-1 grid-cols-2 gap-8">
                <div className="mb-3">
                  <p className="mb-1">
                    Password<span className="text-red-500">*</span>
                  </p>
                  <Input.Password
                    placeholder="Password"
                    size="large"
                    prefix={<KeyOutlined />}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    onChange={onInput}
                    name="password"
                  />
                </div>

                <div className="mb-3">
                  <p className="mb-1">
                    Confirm Password<span className="text-red-500">*</span>
                  </p>
                  <Input.Password
                    placeholder="Confirm password"
                    size="large"
                    prefix={<KeyOutlined />}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    onChange={onInput}
                    name="confirm_password"
                  />
                </div>
              </div>

              <div className="grid grid-rows-1 grid-cols-2 gap-8">
                <div className="mb-3">
                  <p className="mb-1">
                    Phone<span className="text-red-500">*</span>
                  </p>
                  <Input
                    size="large"
                    placeholder="Phone number"
                    prefix={<PhoneOutlined />}
                    onChange={onInput}
                    name="phone"
                  />
                </div>
              </div>

              <div className="grid grid-rows-1 grid-cols-1 gap-8">
                <div className="mb-3">
                  <p className="mb-1">
                    Address<span className="text-red-500">*</span>
                  </p>
                  <Input.TextArea
                    size="large"
                    placeholder="Address"
                    rows={4}
                    onChange={onInput}
                    name="address"
                  />
                </div>
              </div>

              <div className="grid grid-rows-1 grid-cols-2 gap-8">
                <div className="mb-3">
                  <p className="mb-1">
                    Province<span className="text-red-500">*</span>
                  </p>
                  <Select
                    showSearch
                    placeholder="Select a province"
                    optionFilterProp="children"
                    className="w-full "
                    size="large"
                    onChange={onProvinces}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    value={
                      dataSave.province_id === 0 ? null : dataSave.province_id
                    }
                  >
                    {provinces.map((province) => (
                      <Option value={province.id}>
                        {upperCase(province.name)}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="mb-3">
                  <p className="mb-1">
                    City<span className="text-red-500">*</span>
                  </p>
                  <Select
                    showSearch
                    placeholder="Select a city"
                    optionFilterProp="children"
                    className="w-full"
                    size="large"
                    onChange={onRegencies}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    value={
                      dataSave.regencie_id === 0 ? null : dataSave.regencie_id
                    }
                  >
                    {regencies.map((regency) => (
                      <Option value={regency.id}>
                        {upperCase(regency.name)}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="grid grid-rows-1 grid-cols-2 gap-8">
                <div>
                  <div className="mb-3">
                    <p className="mb-1">
                      District<span className="text-red-500">*</span>
                    </p>
                    <Select
                      showSearch
                      placeholder="Select a district"
                      optionFilterProp="children"
                      className="w-full"
                      size="large"
                      onChange={onDistricts}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      value={
                        dataSave.district_id === 0 ? null : dataSave.district_id
                      }
                    >
                      {districts.map((district) => (
                        <Option value={district.id}>
                          {upperCase(district.name)}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>

              <div className="grid grid-rows-1 grid-cols-1 gap-4 mt-8">
                <div className="flex item-center justify-center">
                  <Button
                    className=" w-full"
                    type="primary"
                    size={"large"}
                    onClick={onRegister}
                  >
                    <div className="flex items-center justify-center">
                      <span className="mr-2">Register</span>
                      <UserAddOutlined />
                    </div>
                  </Button>
                </div>
                <div>
                  <p className="text-base text-center">
                    Already have an account ?{" "}
                    <span
                      className="text-blue-400 cursor-pointer"
                      onClick={() => {
                        onDirect("/authentication/login");
                      }}
                    >
                      Sign in
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Register;
