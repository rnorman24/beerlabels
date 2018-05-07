import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const BeerNav = () => (
  <Navbar color="primary" dark>
    <NavbarBrand href="/">Beer Label Term Search</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/saved">Saved Labels</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default BeerNav;
