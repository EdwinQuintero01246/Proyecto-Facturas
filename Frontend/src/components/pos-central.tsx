import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import "../css/main.css";
const PosCentral: React.FC = () => (
    <Col md="9">
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title id="TitleRegistrarFactura" className="text-center">Ferreteria La Unión</Card.Title>
                <Card.Subtitle id="SubtitleRegistrarFactura" className="mb-2 text-center">Punto De Venta</Card.Subtitle>
                <Card.Text>
                    <Card.Header>
                        <Form>
                            <Form.Row>
                                <Col md="2" style={{ marginLeft: 'auto' }}>
                                    <Form.Label className="col-12 text-right">Facturas Creadas</Form.Label>
                                </Col>
                                <Col md="1">
                                    <Form.Control disabled placeholder="15" />
                                </Col>
                                <Col md="2">
                                    <Form.Label className="col-12 text-right">Total Monto Día</Form.Label>
                                </Col>
                                <Col md="2">
                                    <Form.Control className="text-right" disabled placeholder="25,585.75" />
                                </Col>
                            </Form.Row>
                        </Form>
                    </Card.Header>
                    <Card.Header>
                      <Row>
                        <Col md="8" style={{height: '200px',overflow: 'auto'}}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Producto</th>
                                        <th>Fabricante</th>
                                        <th>Cantidad</th>
                                        <th>Precio</th>
                                        <th>Impuesto</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Martillo</td>
                                    <td>truper</td>
                                    <td style={{ paddingTop: "2px"}}><Form.Control placeholder="0" style={{backgroundColor:"transparent",border:"transparent", textAlign: "center"}} type="number"></Form.Control></td>
                                    <td>100.00</td>
                                    <td>15.00</td>
                                    <td>115.00</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col md="4">
                          {/* calculadora */}
                          <Row>
                            <Form.Control  className="text-right col-md-12"/>
                            <Button id="butt_cal_color" className="col-md-3" variant="light">CE</Button>
                            <Button id="butt_cal_color" className="col-md-3 text-center" variant="light">*</Button>
                            <Button id="butt_cal_color" className="col-md-3 text-center" variant="light">-</Button>
                            <Button id="butt_cal_color" className="col-md-3 text-center" variant="light">/</Button>
                            <Col md="9" style={{padding:"0px"}}>
                              <Button id="butt_cal_color_num" className="col-md-4 text-center" >1</Button>
                              <Button id="butt_cal_color_num" className="col-md-4 text-center" >2</Button>
                              <Button id="butt_cal_color_num" className="col-md-4 text-center" >3</Button>
                              <Button id="butt_cal_color_num" className="col-md-4 text-center" >4</Button>
                              <Button id="butt_cal_color_num" className="col-md-4 text-center" >5</Button>
                              <Button id="butt_cal_color_num" className="col-md-4 text-center" >6</Button>
                              <Button id="butt_cal_color_num" className="col-md-4 text-center" >7</Button>
                              <Button id="butt_cal_color_num" className="col-md-4 text-center" >8</Button>
                              <Button id="butt_cal_color_num" className="col-md-4 text-center" >9</Button>
                              <Button id="butt_cal_color_num" className="col-md-8 text-center" >0</Button>
                              <Button id="butt_cal_color_num" className="col-md-4 text-center" >·</Button>
                            </Col>
                            <Col md="3" style={{padding:"0px"}}>
                              <Button id="butt_cal_color" className="col-md-12 text-center" style={{fontSize: "41px"}}>+</Button>
                              <Button id="butt_cal_color" className="col-md-12 text-center" style={{fontSize: "41px"}}>=</Button>
                            </Col>
                          </Row>
                        </Col>
                        <Col md="8">
                          <Form>
                            <Form.Row>
                              <Col md="3">
                                <Form.Label style={{paddingTop:"6px",paddingRight:"0px"}} className="col-12 text-right">Productos: </Form.Label>
                              </Col>
                              <Col md="1">
                                <Form.Control style={{backgroundColor:"transparent",border:"transparent", paddingLeft:"0px"}} className="text-left" disabled placeholder="1"/>
                              </Col>
                            </Form.Row>
                          </Form>
                          <Form>
                            <Form.Row>
                              <Col md="3" style={{marginLeft:"auto"}}>
                                <Form.Label className="col-12 text-center">Subtotal </Form.Label>
                                <Form.Control className="text-center" disabled placeholder="0.0"/>
                              </Col>
                              <Col md="3">
                                <Form.Label className="col-12 text-center">Impuesto </Form.Label>
                                <Form.Control className="text-center" disabled placeholder="0.0"/>
                              </Col>
                              <Col md="3">
                                <Form.Label className="col-12 text-center">Total </Form.Label>
                                <Form.Control className="text-center" disabled placeholder="0.0"/>
                              </Col>
                            </Form.Row>
                          </Form>
                        </Col>
                      </Row>
                    </Card.Header>
                    <Card.Header>
                      <Row>
                      <Col md="4">
                        <Form inline>
                          <Form.Control type="text" placeholder="Producto" className="col-8 mr-sm-2" />
                          <Button variant="outline-secondary"><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />Buscar</Button>
                        </Form>
                      </Col>
                      <Col md="4">
                        <Form.Control as="select" >
                          <option>Producto</option>
                        </Form.Control>
                      </Col>
                      <Col md="4">
                        <Form.Control as="select" >
                          <option>Proveedor</option>
                        </Form.Control>
                      </Col>
                      <Col style={{borderTop:"1px solid rgba(0,0,0,.125)", marginTop:"8px",paddingTop:"3px"}}>
                        <Form>
                          <Row>
                            <Col md="12" style={{ height:"300px", overflow:"auto"}}>
                              <Button className="col-3" style={{color:"Black"}} variant="light" ><Card>
                                <Card.Header>Producto</Card.Header>
                                  <Card.Body>
                                    <Card.Title> Fabricante </Card.Title>
                                    <Card.Text>
                                      categoria /
                                      descripción
                                    </Card.Text>
                                  </Card.Body>
                                </Card>
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </Col>
                    </Row>
                    </Card.Header>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
);
export default PosCentral;