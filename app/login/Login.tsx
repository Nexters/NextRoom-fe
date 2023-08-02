import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { ADMIN_CODE, ADMIN_PASSWORD } from "@/consts/login";
import { INPUT_MSG } from "@/consts/common";

import { usePostLogin } from "@/mutations/postLogin";
import LoginView from "./LoginView";

interface FormValues {
  adminCode: string;
  password: string;
}

function Login() {
  const { register, handleSubmit } = useForm<FormValues>();
  const {
    mutateAsync: postLogin,
    isLoading = false,
    isError = false,
  } = usePostLogin();

  const onSubmit: SubmitHandler<FormValues> = (data) => {

    postLogin(data);
  };
  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit),
    sx: { display: "flex" },
    flexDirection: "column",
  };

  const adminCodeProps = {
    id: "filled-adminCode",
    type: "text",
    variant: "filled",
    label: ADMIN_CODE,
    placeholder: INPUT_MSG,
    ...register("adminCode"),
    error: isError,
    sx:{marginBottom: "10px"}
  };

  const passwordProps = {
    id: "filled-password",
    type: "password",
    variant: "filled",
    label: ADMIN_PASSWORD,
    placeholder: INPUT_MSG,
    ...register("password"),
    error: isError,
  };

  const buttonProps = {
    type: "submit",
    variant: "contained",
  };

  const logoProps = {
    src: "/images/svg/logo.svg",
    alt: "오늘의 방탈출",
    width: 40,
    height: 40,
  };

  const LoginViewProps = {
    formProps,
    adminCodeProps,
    passwordProps,
    buttonProps,
    logoProps,
    isLoading,
  };

  return <LoginView {...LoginViewProps} />;
}

export default Login;
