import React from "react";
import { NextPageContext } from "next";
import AppHeader from "../../../components/layout/AppHeader";
import AppFooter from "../../../components/layout/AppFooter";
import styled from "styled-components";
import { DefaultBox } from "@/styles/default";

export const PageContainer = styled(DefaultBox)`
  min-height: calc(100vh - 40px);
`;

interface LayoutProps {
  children: NextPageContext | any | {};
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppHeader />
      <PageContainer>{children}</PageContainer>
      <AppFooter />
    </>
  );
};

export default Layout;
