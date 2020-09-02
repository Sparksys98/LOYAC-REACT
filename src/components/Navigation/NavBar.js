import React from "react";
import AuthButton from "./AuthButton";
import { Navbar, Nav } from 'react-bootstrap'
const NavBar = () => (
    <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/welcome">LOYAC</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>

            <AuthButton />
        </Navbar>
    </>
);

export default NavBar;
