"use client";

import React, { useEffect, useState } from "react";

import { useGetThemeList } from "@/queries/getThemeList";
import useCheckSignIn from "@/hooks/useCheckSignIn";

import { useRouter } from "next/navigation";
import { useModalState } from "@/components/atoms/modals.atom";
import { CancelDialog } from "@/components/CancelDialog";
import HomeView from "./HomeView";

function Home() {
  const { data: categories = [] } = useGetThemeList();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [modalState, setModalState] = useModalState();

  const handleDialog = () => {
    setOpen(!open);
  };
  const isSignIn = useCheckSignIn();

  useEffect(() => {
    if (!isSignIn) {
      router.push("/");
    }
  }, [isSignIn, router]);

  const themeAllProps = {
    categories,
    handleDialog,
  };

  if (!isSignIn) return <div>Loading...</div>;

  return (
    <>
      <HomeView {...themeAllProps} />
      <CancelDialog
        open={open}
        handleClose={() => setOpen(false)}
        handleModalClose={() => setModalState({ ...modalState, isOpen: false })}
      />
    </>
  );
}

export default Home;
