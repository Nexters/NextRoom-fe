"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import Header from "@/components/common/Header/Header";

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);


  

  if (authenticated) {
    return (
      <>
        <Navbar />
        <Tabs />
        {children}
        <Footer />
      </>
    );
  }
  return <>{children}</>;
}
