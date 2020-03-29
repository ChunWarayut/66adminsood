import React, { useState } from "react";
import { useInput } from "../hook/input-hook"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Container,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { FaUserAlt, FaLock, FaHighlighter, FaPen, FaPhoneVolume, FaLine, FaBarcode } from 'react-icons/fa';
import imgLogo from "../assets/img/logobrand66.png";
import * as FirestoreService from '../services/RealtimeDatabase';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

export default function Login () {
  const { value: username, bind: bindUsername, reset: resetUsername } = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');
  const { value: firstname, bind: bindFirstname, reset: resetFirstname } = useInput('');
  const { value: lastname, bind: bindLastname, reset: resetLastname } = useInput('');
  const { value: tel, bind: bindTel, reset: resetTel } = useInput('');
  const { value: line, bind: bindLine, reset: resetLine } = useInput('');
  const { value: code, bind: bindCode, reset: resetCode } = useInput('');
  // const [loginUser, setLoginUser] = useState([]);
const history = useHistory();
  const login = () => {
    sessionStorage.setItem('username', username)
    // history.push('home')
    FirestoreService.getUsers().on('value', e => {
      let array = [];
      e.forEach(element => {
         array.push(element.val());
      });
      
      if (array.find((loginuser)=> loginuser?.username === username.toString() && loginuser?.password.toString() === password.toString())) {
        sessionStorage.setItem('user_login_db',JSON.stringify(array.find((loginuser)=> loginuser?.username === username.toString() && loginuser?.password.toString() === password.toString())))
        history.push('home')
      } else {
        Swal.fire(
          'มีบางอย่างผิดพลาด',
          'username หรือ password',
          'error'
        )
      }
    })
  }
  const register = () => {
    FirestoreService.addUsers(username, password,firstname, lastname, tel, line, code)
    resetUsername() 
    resetPassword()
    resetFirstname()
    resetLastname()
    resetTel()
    resetLine()
    resetCode()
  }
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);

  return (
    <div className="body-login">
      <Container className="login-page">
        <Row className="row-grid justify-content-between align-items-center">
          <Col sm="12" md="12">
            <CardImg width="100%" src={imgLogo} alt="Card image cap" className="px-5 pb-3" />
          </Col>
          <Col sm="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">LOGIN / ระบบล๊อคอิน </CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form">
                  <InputGroup className="my-2 px-5">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <FaUserAlt/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Username"
                      type="text"
                      defaultValue={username} name="name" {...bindUsername}
                    />
                  </InputGroup>
                  <InputGroup className="my-2 px-5">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <FaLock/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      defaultValue={password} name="name" {...bindPassword}
                    />
                  </InputGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-round mx-2" color="primary" size="lg" onClick={login} type="button" value="Submit">
                  Login
                </Button>
                <Button className="btn-round mx-2" color="primary" size="lg" onClick={toggle} type="button" value="Submit">
                  Register
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="login-register" toggle={toggle}>
            Register
        </ModalHeader>
        <ModalBody>
          <InputGroup className="my-2 px-5">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FaUserAlt/>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Username/ผู้ใช้"
              type="text"
              defaultValue={username} name="name" {...bindUsername}
            />
          </InputGroup>
          <InputGroup className="my-2 px-5">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FaLock/>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Password/รหัสผ่าน"
              type="text"
              defaultValue={password} name="name" {...bindPassword}
            />
          </InputGroup>
          <InputGroup className="my-2 px-5">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FaHighlighter/>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="firstname/ชื่อจริง"
              type="text"
              defaultValue={firstname} name="name" {...bindFirstname}
            />
          </InputGroup>
          <InputGroup className="my-2 px-5">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FaPen />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Lastname/นามสกุล"
              type="text"
              defaultValue={lastname} name="name" {...bindLastname}
            />
          </InputGroup>
          <InputGroup className="my-2 px-5">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FaPhoneVolume/>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Tel/เบอร์"
              type="text"
              defaultValue={tel} name="name" {...bindTel}
            />
          </InputGroup>
          <InputGroup className="my-2 px-5">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FaLine/>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Line/ไลน์"
              type="text"
              defaultValue={line} name="name" {...bindLine}
            />
          </InputGroup>
          <InputGroup className="my-2 px-5">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FaBarcode/>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Code/รหัสแนะนำ"
              type="text"
              defaultValue={code} name="name" {...bindCode}
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter className="text-center">
            <Button color="primary" onClick={register}>Submit</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}