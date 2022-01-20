import * as Styled from "../styles/index";
import Logo from "/public/img/Logo.png";
import Form from "../Form";
import { Pivot as Hamburger } from "hamburger-react";

import Image from "next/image";
import { useState } from "react";
function TopBar() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <>
      <Styled.TopBar>
        <Image src={Logo} width="152px" alt="logo" />
        <Hamburger direction="right" toggled={isOpen} toggle={setIsOpen} />
      </Styled.TopBar>
      <Form visible={isOpen} />
    </>
  );
}

export default TopBar;
