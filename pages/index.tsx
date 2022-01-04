import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import "antd/dist/antd.css";
import Head from "next/head";
import Intro from "../components/modal/intro";
import { Button } from "antd";
import {
  BankOutlined,
  ControlOutlined,
  LoginOutlined,
  PartitionOutlined,
  PercentageOutlined,
  PoweroffOutlined,
  ProfileOutlined,
  ShoppingCartOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { auth, deleteCookies } from "../libs";
import { signOut } from "next-auth/react";

const Home = () => {
  const router = useRouter();

  const [isOpen, setOpen] = useState<boolean>(false);
  const [token, setToken] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onDirect = (url: string) => {
    router.push(url);
  };

  const getAuth = async () => {
    setLoading(true);
    let authentication = await auth();
    setToken(authentication.token);
    setLoading(false);
  };

  useEffect(() => {
    getAuth();
  }, []);

  const onLogout = async () => {
    setLoading(true);

    deleteCookies("__UUID");
    deleteCookies("__SUTK");
    setToken(null);
    signOut();
    setLoading(false);
  };

  return (
    <div>
      <Intro isOpen={isOpen} onClose={() => setOpen(false)} />
      <div className={styles.container}>
        <Head>
          <title>Calore | Point of Sale System</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div>
            <img
              src="/assets/calore-black.png"
              alt="calore-logo"
              className="w-64"
            />
          </div>
          {!loading &&
            (token ? (
              <div className="mt-14">
                <div className="grid grid-rows-2 grid-cols-4 gap-8">
                  <div
                    onClick={() => onDirect("/setting")}
                    className={`${styles.cardbox} text-center w-32 h-32 hover:text-blue-500`}
                  >
                    <SmileOutlined className="text-2xl mb-2" />
                    <p className="m-0 p-0 text-base font-medium ">Profile</p>
                  </div>
                  <div
                    className={`${styles.cardbox} text-center w-32 h-32 hover:text-blue-500`}
                  >
                    <ShoppingCartOutlined className="text-2xl mb-2" />
                    <p className="m-0 p-0 text-base font-medium ">Order</p>
                  </div>
                  <div
                    className={`${styles.cardbox} text-center w-32 h-32 hover:text-blue-500`}
                  >
                    <ProfileOutlined className="text-2xl mb-2" />
                    <p className="m-0 p-0 text-base font-medium ">Product</p>
                  </div>
                  <div
                    className={`${styles.cardbox} text-center w-32 h-32 hover:text-blue-500`}
                  >
                    <PartitionOutlined className="text-2xl mb-2" />
                    <p className="m-0 p-0 text-base font-medium ">Category</p>
                  </div>
                  <div
                    className={`${styles.cardbox} text-center w-32 h-32 hover:text-blue-500`}
                  >
                    <PercentageOutlined className="text-2xl mb-2" />
                    <p className="m-0 p-0 text-base font-medium ">Discount</p>
                  </div>
                  <div
                    className={`${styles.cardbox} text-center w-32 h-32 hover:text-blue-500`}
                  >
                    <BankOutlined className="text-2xl mb-2" />
                    <p className="m-0 p-0 text-base font-medium ">Tax</p>
                  </div>
                  <div
                    className={`${styles.cardbox} text-center w-32 h-32 hover:text-blue-500`}
                  >
                    <ControlOutlined className="text-2xl mb-2" />
                    <p className="m-0 p-0 text-base font-medium ">Uom</p>
                  </div>
                  <div
                    onClick={onLogout}
                    className={`${styles.cardbox} text-center w-32 h-32 hover:text-blue-500`}
                  >
                    <PoweroffOutlined className="text-2xl mb-2" />
                    <p className="m-0 p-0 text-base font-medium ">Logout</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-10">
                <div className="mb-10 ">
                  <p
                    onClick={() => setOpen(true)}
                    className="text-lg cursor-pointer hover:text-blue-500 font-medium text-center"
                  >
                    What is Calore System ?
                  </p>
                </div>
                <div className="flex items-center justify-center ">
                  <Button
                    type="primary"
                    size={"large"}
                    onClick={() => onDirect("/authentication/register")}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">Register</span>
                      <UserOutlined />
                    </div>
                  </Button>
                  <Button
                    className="ml-4"
                    type="primary"
                    size={"large"}
                    onClick={() => onDirect("/authentication/login")}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">Login</span>
                      <LoginOutlined />
                    </div>
                  </Button>
                </div>
              </div>
            ))}
        </main>
      </div>
    </div>
  );
};

export default Home;
