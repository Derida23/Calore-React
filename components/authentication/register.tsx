import React, { useState } from "react";
import styles from "../../styles/Auth.module.scss";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  KeyOutlined,
  LoginOutlined,
  MailOutlined,
  PhoneOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import Forgot from "../modal/forgot";

const Register = () => {
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
            <div className="grid grid-rows-1 grid-cols-2 gap-8">
              <div className="w-80">
                <div className="mb-3">
                  <p className="mb-1">
                    Full Name<span className="text-red-500">*</span>
                  </p>
                  <Input
                    size="large"
                    placeholder="John Doe"
                    prefix={<UserOutlined />}
                  />
                </div>
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
                  />
                </div>
                <div className="mb-3">
                  <p className="mb-1">
                    Address<span className="text-red-500">*</span>
                  </p>
                  <Input.TextArea size="large" placeholder="Address" rows={4} />
                </div>

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
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </div>
                <div className="mt-8">
                  <p className="text-base">
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

              {/* Coloumn Two */}
              <div>
                <div className="mb-3">
                  <p className="mb-1">
                    Email<span className="text-red-500">*</span>
                  </p>
                  <Input
                    size="large"
                    placeholder="Email ID"
                    prefix={<MailOutlined />}
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
                  />
                </div>
                <div className="mb-3">
                  <p className="mb-1">
                    Phone<span className="text-red-500">*</span>
                  </p>
                  <Input
                    size="large"
                    placeholder="Phone number"
                    prefix={<PhoneOutlined />}
                  />
                </div>
                <div className="mb-2">
                  <p className="mb-1">
                    Province<span className="text-red-500">*</span>
                  </p>
                  <Select
                    showSearch
                    placeholder="Select a province"
                    optionFilterProp="children"
                    className="w-full "
                    size="large"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </div>
                <div className="mb-3">
                  <p className="mb-1">
                    Regency<span className="text-red-500">*</span>
                  </p>
                  <Select
                    showSearch
                    placeholder="Select a district"
                    optionFilterProp="children"
                    className="w-full"
                    size="large"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </div>
                <div className="flex item-center justify-center mt-6">
                  <Button
                    className=" w-full"
                    type="primary"
                    size={"large"}
                    onClick={() => onDirect("/")}
                  >
                    <div className="flex items-center justify-center">
                      <span className="mr-2">Register</span>
                      <UserAddOutlined />
                    </div>
                  </Button>
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
