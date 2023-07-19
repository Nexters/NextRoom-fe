"use client";

import { useRouter } from "next/navigation";
import Login from "./login/Login";
import { useIsLoggedInValue } from "./components/atoms/account.atom";

export default function Home() {
  const router = useRouter();
  const isLoggedIn = useIsLoggedInValue();

  if (isLoggedIn) {
    router.push("/home");
    return <div>Loading...</div>;
  }

  return <Login />;
}
