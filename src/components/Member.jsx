import React, { useState, useEffect } from "react";
import { Button, Container, Table, Input, InputGroup, InputGroupAddon, InputGroupText, Pagination, PaginationItem, PaginationLink, Nav } from "reactstrap";
import { FaSistrix, FaRegEdit } from 'react-icons/fa';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { getAllUsers } from "../functions/GetUsersFuntion";
import { updateUsersByKey } from "../functions/UpdateUsersFuntion";

export default function Member() {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    getAllUsers.on("value", snapshot => {
      const array = [];
      snapshot.forEach(el => {
        array.push(el.val());
      });
      setUserData(array);
    });
  }, [])

  return (
    <div className="body-member mt-5">
      <Container>
        <Nav>
          <Button className="mr-2">user</Button>
          <Button className="mr-2">agent</Button>
          <InputGroup className="search">
            <Input placeholder="Search" />
            <InputGroupAddon addonType="append">
              <InputGroupText><FaSistrix /></InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <Pagination aria-label="Page example">
            <PaginationItem>
              <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#" />
            </PaginationItem>
          </Pagination>
        </Nav>
        <Table dark className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Credit</th>
              <th>Type</th>
              <th>Edit</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((e, i) => (
              <tr key={++i}>
                <th scope="row">{i}</th>
                <td >{e.username}</td>
                <td >{e.point}</td>
                <td>{e.role}</td>
                <td style={{ width: '100px' }}>
                  <button><FaRegEdit /></button>
                </td>
                <td style={{ width: '100px' }}>
                    <BootstrapSwitchButton checked={e.status === 'active'}  onChange={() => updateUsersByKey(e._key, e.username, e.password, e.firstname, e.lastname, e.tel, e.line, e.code, e.point, e.role, e.status === 'active' ? 'block' : 'active')} width="75" onlabel="Active" offlabel="Block" onstyle="outline-success" offstyle="outline-danger" size="sm" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination aria-label="Page example">
          <PaginationItem className="ml-auto">
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              1
              </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              2
              </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              3
              </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#" />
          </PaginationItem>
        </Pagination>
      </Container>
    </div>
  );
}