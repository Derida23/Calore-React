import React, { ChangeEvent, FC, useState } from "react";
import styles from "../../styles/Auth.module.scss";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  KeyOutlined,
  LoadingOutlined,
  LoginOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import Forgot from "../modal/forgot";
import { IError } from "../../libs/interface/response";
import { ILogin } from "../../libs/interface/authentication";
import ErrorField from "../notice/error";

interface Props {
  props: PropsItem;
}

interface PropsItem {
  onInput: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  dataLogin: ILogin;
  onLogin: () => void;
  isError?: IError;
  loading: boolean;
}

const Login: FC<Props> = ({ props }) => {
  const { onInput, dataLogin, onLogin, isError, loading } = props;

  const router = useRouter();
  const [isOpen, setOpen] = useState<boolean>(false);

  const onDirect = (url: string) => {
    router.push(url);
  };

  return (
    <div>
      <Forgot isOpen={isOpen} onClose={() => setOpen(false)} />
      <div className={styles.container}>
        <Head>
          <title>Masuk / Login | Calore</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="card card-shadow">
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
          <div className="w-80">
            <p className="text-general tracking-widest text-lg font-semibold mb-2">
              Login
            </p>
            <div className="my-3">
              <Input
                size="large"
                placeholder="Email ID"
                prefix={<MailOutlined />}
                onChange={onInput}
                name="email"
                value={dataLogin.email}
                disabled={loading}
              />
              {isError &&
                isError.data
                  .filter((error) => error.param === "email")
                  .map((item, index) => (
                    <div key={index}>
                      <ErrorField message={item.msg} />
                    </div>
                  ))}
            </div>
            <div className="my-3">
              <Input.Password
                placeholder="Password"
                size="large"
                prefix={<KeyOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                onChange={onInput}
                name="password"
                value={dataLogin.password}
                disabled={loading}
              />
              {isError &&
                isError.data
                  .filter((error) => error.param === "password")
                  .map((item, index) => (
                    <div key={index}>
                      <ErrorField message={item.msg} />
                    </div>
                  ))}
            </div>
          </div>
          <p
            onClick={() => setOpen(true)}
            className="text-blue-400 text-right my-4 cursor-pointer"
          >
            Forgot Password ?
          </p>
          <div className="flex item-center justify-center">
            <Button
              className=" w-full"
              type="primary"
              size={"large"}
              onClick={onLogin}
              disabled={loading}
            >
              <div className="flex items-center justify-center">
                <span className="mr-2">Login</span>
                {loading ? <LoadingOutlined /> : <LoginOutlined />}
              </div>
            </Button>
          </div>
          <div>
            <p className="mt-5 text-center">
              Dont have an access ?{" "}
              <span
                className="text-blue-400 cursor-pointer"
                onClick={() => {
                  onDirect("/authentication/register");
                }}
              >
                Register
              </span>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
