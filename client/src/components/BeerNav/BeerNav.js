import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const BeerNav = () => (
  <Navbar body
  inverse
  style={{ backgroundColor: "#bf5100", borderColor: "#bf5100" }}>
    <NavbarBrand href="/">Beer Label Search</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/saved">Saved Labels</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default BeerNav;
