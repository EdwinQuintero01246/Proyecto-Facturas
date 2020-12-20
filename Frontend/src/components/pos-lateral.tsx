import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import TabVertical from "../components/tabVertical";
import AbrirCaja from "../img/abrircaja.png";
import CerrarCaja from "../img/cerrarcajas.png";
import EditarFacturas from "../img/editar factura.jpg";
import MoviminetoContable from "../img/MoviminetoContable.jpg";
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
                    <Image src={AbrirCaja} style={{width:"70%"}} roundedCircle />
                </Col>
                <Col md="12" xl="9" style={{marginBottom: "10px", marginTop:"10px"}}>
                    <h3>Abrir caja</h3>
                </Col>
                {/* editar ventas*/}
                <Col md="8" xl="3">
                    <Image src={EditarFacturas} style={{width:"60%"}} rounded />
                </Col>
                <Col md="12" xl="9" style={{marginBottom: "10px", marginTop:"10px"}}>
                    <h3>Editar ventas</h3>
                </Col>
                {/* movimientos de caja*/}
                <Col md="8" xl="3">
                    <Image src={MoviminetoContable} style={{width:"60%"}} rounded />
                </Col>
                <Col md="12" xl="9" style={{marginBottom: "10px", marginTop:"10px"}}>
                    <h3>Movimientos de caja</h3>
                </Col>
                {/* Cerrar Caja*/}
                <Col md="8" xl="3">
                    <Image src={CerrarCaja} style={{width:"70%"}} roundedCircle />
                </Col>
                <Col md="12" xl="9" style={{marginBottom: "10px", marginTop:"10px"}}>
                    <h3>Cerrar caja</h3>
                </Col>
            </Row>
        </Card.Body>
        </Card>
        <Card style={{marginTop:"6px"}}>
        <Card.Header>
            <Card.Title>Administración</Card.Title>
        </Card.Header>
        <Card.Body style={{backgroundColor: "#110533"}}>
            <TabVertical/>
        </Card.Body>
        </Card>
    </Col>
);
export default PosLateral;