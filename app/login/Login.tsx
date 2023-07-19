import React from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { ADMIN_CODE } from "@/consts/login";
import { INPUT_MSG } from "@/consts/common";

import LoginView from "./LoginView";

interface FormValues {
  adminCode: string;
}

function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    // TODO: connect login api
    router.push("/home");
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
    ...register("adminCode"),
  };

  const LoginViewProps = {
    formProps,
    textFieldProps,
  };

  return <LoginView {...LoginViewProps} />;
}

export default Login;
