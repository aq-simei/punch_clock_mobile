import React from "react";
import Body from "../body/body";
import Header from "../header/header";

const Template = ({ children }) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
    </>
  );
};

export default Template;
