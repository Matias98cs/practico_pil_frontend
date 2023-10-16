import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
              <Link to="/home">
              <div className="bottom-header">
              <button className="btn btn-primary">
               inicio
              </button>
              </div>
              </Link>
              </MDBNavbarItem>
              <Link to="/">
              <MDBNavbarItem>
              <div className="bottom-header">
              <button className="btn btn-primary">
               Cerrar Sesion
              </button>
              </div>
              </MDBNavbarItem>
              </Link>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <div
        className= "p-5 text-center bg-image headercolor container-fluid"
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Administración de Datos Académicos</h1>
              <h4 className='mb-3'></h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}