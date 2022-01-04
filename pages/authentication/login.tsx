import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import { Login } from "../../components/authentication";
import ToastMessage from "../../components/notice/toast";
import { setCookies } from "../../libs";
import { postLogin } from "../../libs/directory/authentication";
import { ILogin } from "../../libs/interface/authentication";
import { IError, INotice } from "../../libs/interface/response";
import { validateLogin } from "../../libs/validation/authentication";

import { signIn, useSession } from "next-auth/react";

const DEFAULT_SAVE: ILogin = {
  email: "beny@gmail.com",
  password: "Beny@123",
};

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const onDirect = (url: string) => {
    router.push(url);
  };

  if (session && status !== "unauthenticated") onDirect("/");

  const [dataLogin, setDataLogin] = useState<ILogin>(DEFAULT_SAVE);

  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<IError>(null);
  const [notice, setNotice] = useState<INotice>({
    code: 0,
    message: "",
    open: false,
  });

  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setError(null);
    setDataLogin({
      ...dataLogin,
      [name]: value,
    });
  };

  const onLogin = async () => {
    setLoading(true);

    const error = await validateLogin(dataLogin);

    if (error) {
      setError(error);
    } else {
      const responseLogin = await postLogin(dataLogin);

      setNotice({
        code: responseLogin.code,
        message: responseLogin.message,
        open: true,
      });

      if (responseLogin.code < 400) {
        const res = await signIn("credentials", {
          redirect: false,
          email: dataLogin.email,
          password: dataLogin.password,
          callbackUrl: `${window.location.origin}`,
        });
        await setCookies("__SUTK", responseLogin.data.token);
        await setCookies("__UUID", JSON.stringify(responseLogin.data.user));

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
      <Login
        props={{
          onInput,
          dataLogin,
          onLogin,
          isError,
          loading,
        }}
      />
      ;
    </div>
  );
};

export default LoginPage;
