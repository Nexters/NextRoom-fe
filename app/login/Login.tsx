import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { ADMIN_CODE } from "@/consts/login";
import { INPUT_MSG } from "@/consts/common";

import { useAccountInfoWrite } from "@/components/atoms/account.atom";
import { usePostLogin } from "@/mutations/postLogin";
import LoginView from "./LoginView";

interface FormValues {
  adminCode: string;
}

function Login() {
  const { register, handleSubmit } = useForm<FormValues>();
  const setAccountInfo = useAccountInfoWrite();
  const { mutateAsync: postLogin, isLoading = false } = usePostLogin();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);

    const { adminCode } = data;
    // TODO: connect login api
    // setAccountInfo({ shopCode: adminCode });
    postLogin({ adminCode });
  };
  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit),
    sx: { display: "flex" },
    flexDirection: "column",
  };

  const textFieldProps = {
    id: "filled-adminCode",
    label: ADMIN_CODE,
    placeholder: INPUT_MSG,
    ...register("adminCode"),
  };

  const buttonProps = {
    type: "submit",
  };

  const LoginViewProps = {
    formProps,
    textFieldProps,
    buttonProps,
  };

  return <LoginView {...LoginViewProps} />;
}

export default Login;
