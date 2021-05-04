import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';

import plusIcon from './../../assets/icons/plus-circle.svg';
import searchIcon from './../../assets/icons/search.svg';
import './NavBar.css'; //Estilos para la barra de búsqueda como tal

import Modal from './../../components/Modal/Modal';

const NavBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () =>  {
    setIsOpen(!isOpen);
  }

  

  return (
    <>
      
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Black Clover Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Characters</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">Episodes</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>

              <DropdownMenu right>
                <DropdownItem>
                  Manga
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem>
                  Openings
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          {/*Barra de búsqueda */}
          <div className="container d-flex justify-content-center">
            <div className="searchCard">
              <div className="input-group mb-3"> 
                <input type="text" className="form-control" placeholder="Introduce nombre o año para filtrar tu búsqueda" onChange={props.inputValue}/>
                <div className="input-group-append">
                  <button className="btn btn-primary" onClick={props.filter}>
                    <img src={searchIcon} alt="search_icon.svg"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <Button className="btn btn-primary" onClick={props.showModal}><img src={plusIcon} alt="three-dots.svg"/></Button>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;