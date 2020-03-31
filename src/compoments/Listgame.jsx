import React ,{useState} from "react";
import {  } from "reactstrap";
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
export default function Listgame () {
    const [saba, setSaba] = useState(true);
    const toggleSa = () => setSaba(!saba);
    const [sexyba, setSexyba] = useState(true);
    const toggleSexy = () => setSexyba(!sexyba);

    return (
        <Navbar dark>
            <NavbarBrand onClick={toggleSa}>
                SA บาคาร่า
            </NavbarBrand>
            <Collapse isOpen={!saba} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink href="#">สูตรที่ 1</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 2</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 3</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 4</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 5</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 6</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 7</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 8</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 9</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 10</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
            <NavbarBrand onClick={toggleSexy}>
                SEXY บาคาร่า
            </NavbarBrand>
            <Collapse isOpen={!sexyba} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink href="#">สูตรที่ 1</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 2</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 3</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 4</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 5</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 6</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 7</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 8</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 9</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">สูตรที่ 10</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    );
}