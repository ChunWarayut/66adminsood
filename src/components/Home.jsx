import React from "react";
import { Container } from "reactstrap";
import detail from "../assets/img/detail.jpg"
export default function Home() {
    return (
        <div className="body-home">
            <Container>
                <img style={{ maxHeight: "80vh", width: "inherit", paddingTop: "3rem" }} src={detail} alt="" />
            </Container>
        </div>
    );
}