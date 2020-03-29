import React from "react";
import { Button, Container,Table, Input, InputGroup, InputGroupAddon, InputGroupText, Pagination, PaginationItem, PaginationLink, Nav } from "reactstrap";
import { FaSistrix, FaRegEdit } from 'react-icons/fa';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
export default function Member () {
  return (
    <div className="body-member mt-5">  
      <Container>
        <Nav>
          <Button className="mr-2">user</Button>
          <Button className="mr-2">agent</Button>
          <InputGroup className="search">
            <Input placeholder="Search" />
            <InputGroupAddon addonType="append">
              <InputGroupText><FaSistrix/></InputGroupText>
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
              <th>Last Login</th>
              <th>Ceate Date</th>
              <th>Edit</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <th scope="row">1</th>
                <td >uukj99036</td>
                <td >0</td>
                <td>
                User
                </td>
                <td >2020-03-28 22:21:27</td>
                <td >2020-03-28 22:14:56</td>
                <td >
                 <button ><FaRegEdit/>
                </button> 
                </td>
                <td>
                  <BootstrapSwitchButton checked={true} width="75" onlabel="Active" offlabel="Block" onstyle="outline-success" offstyle="outline-danger" size="sm"/>
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
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