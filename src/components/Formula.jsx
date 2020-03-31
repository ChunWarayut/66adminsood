import React from "react";
import { Container, Row, Col, Table, CardImg, Button } from 'reactstrap';
import Listgame from "./Listgame";
import { FaTrashAlt } from 'react-icons/fa';
import Npoint from "../assets/img/point/n.png";
import Bpoint from "../assets/img/point/b.png";
import Tpoint from "../assets/img/point/t.png";
import Ppoint from "../assets/img/point/p.png";
export default function Formula() {
    return (
        <Container className="body-formula mt-5">
            <Row>
                <Col xs="2" className="h-100">
                    <div className="list-game">
                        <Listgame />
                    </div>
                </Col>
                <Col xs="6" className="h-100" >
                    <div className="text-center" >
                        <h1>
                            สูตรที่ 1
                        </h1>
                    </div>
                    <div className="list-game">
                        <Table dark >
                            <tbody>
                                <tr >
                                    <th className="text-right">1</th>
                                    <td className="sroll-point">p p t = p</td>
                                    <td><FaTrashAlt /></td>
                                </tr>
                                <tr >
                                    <th className="text-right">1</th>
                                    <td className="text-left">p p t = p</td>
                                    <td><FaTrashAlt /></td>
                                </tr>
                                <tr >
                                    <th className="text-right">1</th>
                                    <td className="text-left">p p t = p</td>
                                    <td><FaTrashAlt /></td>
                                </tr>
                                <tr >
                                    <th className="text-right">1</th>
                                    <td className="text-left">p p t = p</td>
                                    <td><FaTrashAlt /></td>
                                </tr>
                                <tr >
                                    <th className="text-right">1</th>
                                    <td className="text-left">p p t = p</td>
                                    <td><FaTrashAlt /></td>
                                </tr>
                                <tr >
                                    <th className="text-right">1</th>
                                    <td className="text-left">p p t = p</td>
                                    <td><FaTrashAlt /></td>
                                </tr>
                                <tr >
                                    <th className="text-right">1</th>
                                    <td className="text-left">p p t = p</td>
                                    <td><FaTrashAlt /></td>
                                </tr>
                                <tr >
                                    <th className="text-right">1</th>
                                    <td className="text-left">p p t = p</td>
                                    <td><FaTrashAlt /></td>
                                </tr>
                                <tr >
                                    <th className="text-right">1</th>
                                    <td className="text-left">p p t = p</td>
                                    <td><FaTrashAlt /></td>
                                </tr>
                                <tr >
                                    <th className="text-right">1</th>
                                    <td className="text-left">p p t = p</td>
                                    <td><FaTrashAlt /></td>
                                </tr>
                                <tr >
                                    <th className="text-right">1</th>
                                    <td className="text-left">p p t = p</td>
                                    <td><FaTrashAlt /></td>
                                </tr>
                                <tr >
                                    <th className="text-right">1</th>
                                    <td className="text-left">p p t = p</td>
                                    <td><FaTrashAlt /></td>
                                </tr>
                                <tr >
                                    <th className="text-right">1</th>
                                    <td className="text-left">p p t = p</td>
                                    <td><FaTrashAlt /></td>
                                </tr>
                                <tr >
                                    <th className="text-right">1</th>
                                    <td className="text-left">p p t = p</td>
                                    <td><FaTrashAlt /></td>
                                </tr>
                                <tr >
                                    <th className="text-right">1</th>
                                    <td className="text-left">p p t = p</td>
                                    <td><FaTrashAlt /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col className="h-100 text-center" xs="4">
                    <div  >
                        <h1>
                            เพิ่มสูตร
                        </h1>
                    </div>
                    <div>
                        <Row>
                            <Col xs="4">
                                <CardImg src={Npoint} alt="Card image cap2" />
                            </Col>
                            <Col xs="4">
                                <CardImg src={Npoint} alt="Card image cap2" />
                            </Col>
                            <Col xs="4">
                                <CardImg src={Npoint} alt="Card image cap2" />
                            </Col>
                            <Col xs="4">
                                <CardImg src={Npoint} alt="Card image cap2" />
                            </Col>
                            <Col xs="4">
                                <CardImg src={Npoint} alt="Card image cap2" />
                            </Col>
                            <Col xs="4">
                                <CardImg src={Npoint} alt="Card image cap2" />
                            </Col>
                        </Row>
                    </div>
                    <div className="my-3">
                        <Row>
                            <Col xs="4">
                                <CardImg src={Bpoint} alt="Card image cap" />
                            </Col>
                            <Col xs="4">
                                <CardImg src={Ppoint} alt="Card image cap" />
                            </Col>
                            <Col xs="4">
                                <CardImg src={Tpoint} alt="Card image cap" />
                            </Col>
                        </Row>
                    </div>
                    <div className="my-3">
                        <Row>
                            <Col xs="6">
                                <Button>Submit</Button>
                            </Col>
                            <Col xs="6">
                                <Button>Clear</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}