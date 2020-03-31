import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,  
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap';
import { FaCalculator, FaBarcode, FaPowerOff, FaUsers, FaUserPlus } from 'react-icons/fa';

import imgLogo from "../assets/img/logobrand66.png";
import { useHistory } from "react-router-dom";

export default function Navigation  () {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [isShow, setIsShow] = useState(true);
  const togglemulti = () => setIsShow(!isShow);
console.log(isShow);

  const [user_data,setuser_data] = useState(JSON.parse(sessionStorage.getItem("user_login_db")));
  console.log(user_data);
  
  useEffect( ()=>{
    if (!sessionStorage.getItem("user_login_db")) {
      history.push("login");
    }});
  useEffect( ()=>{
    setuser_data(JSON.parse(sessionStorage.getItem("user_login_db")))
  },[]
  )

  const [modal, setModal] = useState(false);
  const creditCode = () => setModal(!modal);

  const [modalUser, setModalUser] = useState(false);
  const creditUser = () => setModalUser(!modalUser);

  const history = useHistory();
  const logout = ()=> {
    sessionStorage.clear();
    history.push("login");
  }
  return (
    <div className="Navbar">
       <Navbar light className="display" expand="md">

        <NavbarBrand href="/">
          <img className="logo-img" src={imgLogo} alt="logo"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#" onClick={creditCode}>
                <FaBarcode className="mx-2"/>
                Credit Code
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/member" >
                <FaUsers className="mx-2"/>
                Member
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={creditUser}>
                <FaUserPlus className="mx-2"/>
                Credit User
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/formula" >
                <FaCalculator className="mx-2"/>
                Formula
              </NavLink>
            </NavItem>
            <NavItem >
              {/* <NavLink href="#" onClick={creditCode}><FaViber className="mr-1 ml-2"/>Contact</NavLink> */}
            </NavItem>
            <NavItem>
              <NavLink href="#" className="red mr-1 ml-2" onClick={logout}><FaPowerOff/></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>


    <Modal isOpen={modal} toggle={creditCode}>
      <ModalHeader className="login-register" toggle={creditCode}>
        Generate Code
      </ModalHeader>
      <ModalBody>
        <FormGroup className="text-center">
          <Button color="primary" onClick={togglemulti}>Multi Code Generater</Button>
        </FormGroup>
        <FormGroup hidden={isShow }>
          <Label for="exampleEmail">Multiple</Label>
          <Input type="number" name="email" id="exampleEmail" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Credit</Label>
          <InputGroup>
            <Input type="number" name="email" id="exampleEmail" />
            <InputGroupAddon addonType="append">
              <Button color="secondary">Generate!</Button>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Code</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Generate Code" />
        </FormGroup>
      </ModalBody>
      <ModalFooter className="text-center">
          <Button color="primary" onClick={creditCode}>Submit</Button>{' '}
          <Button color="secondary" onClick={creditCode}>Cancel</Button>
      </ModalFooter>
    </Modal>

    <Modal isOpen={modalUser} toggle={creditUser}>
      <ModalHeader className="login-register" toggle={creditUser}>
        Create User
      </ModalHeader>
      <ModalBody>
        <FormGroup className="text-center">
        </FormGroup>
        <FormGroup>
          <Label for="Username">Username</Label>
          <Input type="text" name="Username" id="exampleUsername" placeholder="Username/ไอดีผู้ใช้" />
        </FormGroup>
        <FormGroup >
          <Label for="Password">Password</Label>
          <Input type="password" name="Password" id="examplePassword" placeholder="Password/รหัสผ่าน"/>
        </FormGroup>
        <FormGroup>
          <Label for="RePassword">Re-Password</Label>
          <Input type="password" name="RePassword" id="exampleRepassword" placeholder="Re-Password/ยืนยันรหัสผ่าน"/>
        </FormGroup>
        <FormGroup>
          <Label for="Type">Type</Label>
          <InputGroup>
            <Input type="select" name="Type" id="exampleType">
              <option>User</option>
              <option>Agent</option>
              <option>Admin</option>
            </Input>
          </InputGroup>
        </FormGroup>
      </ModalBody>
      <ModalFooter className="text-center">
          <Button color="primary" onClick={creditUser}>Submit</Button>{' '}
          <Button color="secondary" onClick={creditUser}>Cancel</Button>
      </ModalFooter>
    </Modal>
    
    </div>
  )
}