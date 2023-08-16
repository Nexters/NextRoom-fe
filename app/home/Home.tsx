"use client";

import React, { useEffect, useState } from "react";
import { useGetThemeList } from "@/queries/getThemeList";
import useCheckSignIn from "@/hooks/useCheckSignIn";
import { useRouter } from "next/navigation";
import { useModalState } from "@/components/atoms/modals.atom";
import Dialog from "@/components/common/Dialog/Dialog";
import { useSnackBarInfo } from "@/components/atoms/snackBar.atom";
import SnackBar from "@/components/SnackBar/SnackBar";
import HomeView from "./HomeView";

function Home() {
  const { data: categories = [] } = useGetThemeList();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [snackInfo, setSnackBarInfo] = useSnackBarInfo();

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

  useEffect(() => {
    if (snackInfo.isOpen) {
      setTimeout(() => {
        setSnackBarInfo({ ...snackInfo, isOpen: false });
      }, 3000);
    }
  }, [setSnackBarInfo, snackInfo]);

  const themeAllProps = {
    categories,
    handleDialog,
  };

  if (!isSignIn) return <div>Loading...</div>;

  return (
    <>
      <HomeView {...themeAllProps} />
      <Dialog
        open={open}
        handleBtn={() => setModalState({ ...modalState, isOpen: false })}
        handleDialogClose={() => setOpen(false)}
        type={modalState.type === "post" ? "themePost" : "themePut"}
      />
      <SnackBar
        open={snackInfo.isOpen}
        ment={snackInfo.message}
        handleClose={() => setSnackBarInfo({ ...snackInfo, isOpen: false })}
      />
    </>
  );
}

export default Home;
