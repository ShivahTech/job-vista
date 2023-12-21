import React, { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface IProps {
  children: ReactNode;
}

const MainLayout = (props: IProps) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default MainLayout;
