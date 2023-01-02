import { useState } from "react";

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar.style";

import LogoImage from "../assets/logo.png";

export default function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink href="#home">Home</NavbarLink>
            <NavbarLink href="#about">About</NavbarLink>
            <NavbarLink href="#skills">Skills</NavbarLink>
            <NavbarLink href="#contact">Contact</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar(!extendNavbar);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImage}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended href="#home">Home</NavbarLinkExtended>
          <NavbarLinkExtended href="#about">About</NavbarLinkExtended>
          <NavbarLinkExtended href="#skills">Skills</NavbarLinkExtended>
          <NavbarLinkExtended href="#contact">Contact</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}
