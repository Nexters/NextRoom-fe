"use client";

import { useRouter } from "next/navigation";
import Login from "./login/Login";

import { getAccessToken } from "./uilts/localStorage";

export default function Home() {
  const router = useRouter();
  const accountToken = getAccessToken();

  if (accountToken) {
    router.push("/home");
    return <div>Loading...</div>;
  }

  return <Login />;
}
