"use client";

import React, { ReactNode, useEffect } from "react";
import Header from "@/components/common/Header/Header";
import { useGetThemeList } from "@/queries/getThemeList";
import { useCurrentTheme } from "@/components/atoms/currentTheme.atom";
import { useRouter } from "next/navigation";
import * as S from "@/home/HomeView.styled";
import { useIsLoggedInValue } from "@/components/atoms/account.atom";
import MainDrawer from "@/components/common/Drawer/Drawer";

interface RequireAuthProps {
  children: ReactNode;
}

function RequireAuth({
  children,
}: RequireAuthProps): React.ReactElement | null {
  const isLoggedIn = useIsLoggedInValue();
  const [currentTheme, setCurrentTheme] = useCurrentTheme();
  const router = useRouter();

  const { data: categories = [] } = useGetThemeList();
  const props = { categories };

  useEffect(() => {
    if (categories.length > 0) {
      setCurrentTheme(
        categories.map((obj) => ({
          id: obj.id,
          title: obj.title,
        }))
      );
    }
  }, [categories, setCurrentTheme]);

  useEffect(() => {
    if (isLoggedIn && currentTheme.length > 0) {
      router.push(
        `/home?title=${encodeURIComponent(
          currentTheme[currentTheme.length - 1].title
        )}`
      );
    }
  }, [isLoggedIn, currentTheme, router]);

  if (isLoggedIn) {
    return (
      <S.Wrapper>
        <MainDrawer {...props} />
        <S.Cont component="main">
          <Header />
          {children}
        </S.Cont>
      </S.Wrapper>
    );
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default RequireAuth;
