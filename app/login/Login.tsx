"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { INPUT_MSG } from "@/consts/components/common";
import { ADMIN_CODE, ADMIN_PASSWORD } from "@/consts/components/login";

import { useIsLoggedInValue } from "@/components/atoms/account.atom";
import { usePostLogin } from "@/mutations/postLogin";
import useCheckSignIn from "@/hooks/useCheckSignIn";
import LoginView from "./LoginView";

interface FormValues {
  adminCode: string;
  password: string;
}

function Login() {
  const router = useRouter();
  const isLoggedIn = useIsLoggedInValue();
  const {
    mutateAsync: postLogin,
    isLoading = false,
    isError = false,
  } = usePostLogin();

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      adminCode: process.env.NEXT_PUBLIC_ADMIN_CODE || "",
      password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "",
    },
  });

  useCheckSignIn();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    postLogin(data);
  };
  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit),
    flexDirection: "column",
  };

  const adminCodeProps = {
    id: "filled-adminCode",
    type: "text",
    variant: "filled",
    label: ADMIN_CODE,
    placeholder: INPUT_MSG,
    ...register("adminCode", { required: "관리자 번호를 입력해 주세요." }),
    error: isError,
    sx: {
      marginBottom: "40px",
      backgroundColor: "#FFFFFF10",
    },
  };

  const passwordProps = {
    id: "filled-password",
    type: "password",
    variant: "filled",
    label: ADMIN_PASSWORD,
    placeholder: INPUT_MSG,
    ...register("password", { required: "비밀번호를 입력해 주세요." }),
    error: isError,
    sx: { backgroundColor: "#ffffff10" },
  };

  const buttonProps = {
    type: "submit",
    variant: "contained",
  };

  const logoProps = {
    src: "/images/svg/logo.svg",
    alt: "NEXT ROOM",
    width: 223,
    height: 41,
  };

  const LoginViewProps = {
    formProps,
    adminCodeProps,
    passwordProps,
    buttonProps,
    logoProps,
    isLoading,
  };

  if (isLoggedIn) {
    router.push("/home");
    return <div>Loading...</div>;
  }

  return <LoginView {...LoginViewProps} />;
}

export default Login;
