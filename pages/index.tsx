import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
import "antd/dist/antd.css";
import Head from "next/head";

import Intro from "../components/modal/intro";
import { Button } from "antd";
import { LoginOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState<boolean>(false);

  const onDirect = (url: string) => {
    router.push(url);
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
          <div className="my-10">
            <p
              onClick={() => setOpen(true)}
              className="text-lg cursor-pointer hover:text-blue-500 font-medium"
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
        </main>
      </div>
    </div>
  );
};

export default Home;
