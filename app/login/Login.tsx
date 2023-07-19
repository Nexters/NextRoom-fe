import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { ADMIN_CODE } from "@/consts/login";
import { INPUT_MSG } from "@/consts/common";

import LoginView from "./LoginView";
import { useAccountInfoWrite } from "../atoms/account.atom";

interface FormValues {
  shopCode: string;
}

function Login() {
  const { register, handleSubmit } = useForm<FormValues>();
  const setAccountInfo = useAccountInfoWrite();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);

    const { shopCode } = data;
    // TODO: connect login api
    setAccountInfo({ shopCode });
  };
  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit),
  };

  const textFieldProps = {
    id: "filled-adminCode",
    label: ADMIN_CODE,
    placeholder: INPUT_MSG,
    ...register("shopCode"),
  };

  const LoginViewProps = {
    formProps,
    textFieldProps,
  };

  return <LoginView {...LoginViewProps} />;
}

export default Login;
