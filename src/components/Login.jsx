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
// import { useHistory } from "react-router-dom";
// import Swal from 'sweetalert2'
import { onSubmitLogin } from "../functions/LoginFunction";
import { checkUsers } from "../functions/RegisterFunction";
import Swal from "sweetalert2";
import { addUsers } from "../services/RealtimeDatabase";

export default function Login() {
  const { value: username, bind: bindUsername, reset: resetUsername } = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');
  const { value: firstname, bind: bindFirstname, reset: resetFirstname } = useInput('');
  const { value: lastname, bind: bindLastname, reset: resetLastname } = useInput('');
  const { value: tel, bind: bindTel, reset: resetTel } = useInput('');
  const { value: line, bind: bindLine, reset: resetLine } = useInput('');
  const { value: code, bind: bindCode, reset: resetCode } = useInput('');

  const register = () => {
    if (username && password && firstname && lastname && tel && line && code) {
      checkUsers(username)
        .then(e => {
          if (!e) {
            addUsers(username, password, firstname, lastname, tel, line, code)
            resetUsername()
            resetPassword()
            resetFirstname()
            resetLastname()
            resetTel()
            resetLine()
            resetCode()
            Swal.fire(
              'Register Success!',
              'ลงทะเบียนสำเร็จ',
              'success'
            ).then(() => onSubmitLogin(username, password))
          } else {
            Swal.fire(
              'Register False!',
              'usersname / ชื่อผู้ใช้งาน นี้ถูกใช้งานแล้ว',
              'warning'
            )
          }
        })
    } else {
      Swal.fire(
        'Register False!',
        'กรุณากรอกข้อมูลให้ครบถ้วน',
        'warning'
      )
    }
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
                        <FaUserAlt />
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
                        <FaLock />
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
                <Button className="btn-round mx-2" color="primary" size="lg" onClick={() => onSubmitLogin(username, password)} type="button" value="Submit">
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
                <FaUserAlt />
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
                <FaLock />
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
                <FaHighlighter />
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
                <FaPhoneVolume />
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
                <FaLine />
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
                <FaBarcode />
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