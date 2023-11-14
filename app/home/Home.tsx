"use client";

import React, { useEffect, useState } from "react";
import { useGetThemeList } from "@/queries/getThemeList";
import useCheckSignIn from "@/hooks/useCheckSignIn";
import { useRouter } from "next/navigation";
import { useSnackBarInfo } from "@/components/atoms/snackBar.atom";
import SnackBar from "@/components/SnackBar/SnackBar";
import Loader from "@/components/Loader/Loader";
import HomeView from "./HomeView";

function Home() {
  const { data: categories = [] } = useGetThemeList();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [snackInfo, setSnackBarInfo] = useSnackBarInfo();

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

  if (!isSignIn) return <Loader />;

  return (
    <>
      <HomeView {...themeAllProps} />
      <SnackBar
        open={snackInfo.isOpen}
        ment={snackInfo.message}
        handleClose={() => setSnackBarInfo({ ...snackInfo, isOpen: false })}
      />
    </>
  );
}

export default Home;
