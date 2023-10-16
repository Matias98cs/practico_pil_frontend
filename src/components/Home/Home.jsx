import useAuth from "../../hooks/useAuth";
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="homeimage container-fluid">
        <Container className="justify-content-center ">
          <Row>
            <Col md={4}>
            <Link to="/Personas">
              <Button variant="primary" className="boton-con-imagen">
                
                <div className="contenedor-texto">
                Personas
              </div>
              </Button>
            </Link>
            </Col>
            <Col md={4}>
            <Link to="/Carreras">
              <Button variant="secondary" className="boton-con-imagen2">
                <div className="contenedor-texto">
                Carreras
                </div>
              </Button>
              </Link>
            </Col>
            <Col md={4}>
              <Link to="/Universidades">
              <Button  variant="success" className="boton-con-imagen3">
                <div className="contenedor-texto">
                Universidades
                </div>
                </Button>
                </Link>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Link to="/Facultades">
              <Button variant="danger" className="boton-con-imagen4">
                <div className="contenedor-texto">
                Facultades
                </div>
                </Button>
                </Link>
            </Col>
            <Col md={4}>
              <Link to="/Campus">
              <Button variant="warning" className="boton-con-imagen5">
                <div className="contenedor-texto">
                Campus
                </div>
                </Button>
                </Link>
            </Col>
            <Col md={4}>
              <Link to="/Programas">
              <Button variant="info" className="boton-con-imagen6">
                <div className="contenedor-texto">
                Programas
                </div>
                </Button>
                </Link>
            </Col>
          </Row>
        </Container>
        </div>
      );
    }

