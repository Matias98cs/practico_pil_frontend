import useAuth from "../../hooks/useAuth";
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const { auth } = useAuth();
  return (
    <div className="homeimage container-fluid">
        <Container className="justify-content-center ">
          <Row>
            <Col md={4}>
              <Button variant="primary" className="boton-con-imagen">
                <div className="contenedor-texto mt-auto ">
                Personas
              </div>
              </Button>
            </Col>
            <Col md={4}>
              <Button variant="secondary" className="boton-con-imagen2">
                <div className="contenedor-texto">
                Carreras
                </div>
              </Button>
            </Col>
            <Col md={4}>
              <Button variant="success" className="boton-con-imagen3">
                <div className="contenedor-texto">
                Universidades
                </div>
                </Button>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Button variant="danger" className="boton-con-imagen4">
                <div className="contenedor-texto">
                Facultades
                </div>
                </Button>
            </Col>
            <Col md={4}>
              <Button variant="warning" className="boton-con-imagen5">
                <div className="contenedor-texto">
                Campus
                </div>
                </Button>
            </Col>
            <Col md={4}>
              <Button variant="info" className="boton-con-imagen6">
                <div className="contenedor-texto">
                Programas
                </div>
                </Button>
            </Col>
          </Row>
        </Container>
        </div>
      );
    }

