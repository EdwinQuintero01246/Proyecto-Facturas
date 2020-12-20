import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import TabVertical from "../components/tabVertical";
import AbrirCaja from "../img/abrircaja.png";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
const PosLateral: React.FC = () => (
    <Col md="3"  style={{backgroundColor: "#110533"}}>
        <Card style={{}}>
        <Card.Header>
            <Card.Title>Actividades POS</Card.Title>
        </Card.Header>
        <Card.Body>
            <Row>
                <Col md="8" xl="3">
                    <Image src={AbrirCaja} style={{width:"80%"}} roundedCircle />
                </Col>
                <Col md="12" xl="9">
                    <h2>Abrir caja</h2>
                </Col>
                {/* editar ventas*/}
                <Col md="8" xl="3">
                    <Image src={AbrirCaja} style={{width:"80%"}} roundedCircle />
                </Col>
                <Col md="12" xl="9">
                    <h2>Editar ventas</h2>
                </Col>
                {/* movimientos de caja*/}
                <Col md="8" xl="3">
                    <Image src={AbrirCaja} style={{width:"80%"}} roundedCircle />
                </Col>
                <Col md="12" xl="9">
                    <h2>Movimientos de caja</h2>
                </Col>
                {/* Cerrar Caja*/}
                <Col md="8" xl="3">
                    <Image src={AbrirCaja} style={{width:"80%"}} roundedCircle />
                </Col>
                <Col md="12" xl="9">
                    <h2>Cerrar caja</h2>
                </Col>
            </Row>
        </Card.Body>
        </Card>
        <TabVertical/>
    </Col>
);
export default PosLateral;