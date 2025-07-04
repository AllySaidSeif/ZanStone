// src/components/Header/Navbar.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { color } from '../styles/color';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${props => props.scrolled ? color.white : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 20px 0;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.scrolled ? color.textDark : color.textLight};
  text-decoration: none;
  span {
    color: ${color.primary};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.menuOpen ? '0' : '-100%'};
    width: 70%;
    height: 100vh;
    background: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.scrolled ? color.textDark : color.textLight};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: ${color.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${color.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    color: ${color.textDark};
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.scrolled ? '#333' : 'white'};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    z-index: 1001;
  }
`;

const CloseButton = styled(FiX)`
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 1.8rem;
  color: #333;
  cursor: pointer;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavContainer scrolled={scrolled || menuOpen}>
      <NavContent>
        <Logo to="/" scrolled={scrolled || menuOpen}>
          ZanStone<span> Tours </span> & <span>Safaris</span>
        </Logo>

        <MobileMenuButton onClick={toggleMenu} scrolled={scrolled || menuOpen}>
          <FiMenu />
        </MobileMenuButton>

        <NavLinks menuOpen={menuOpen}>
          {menuOpen && <CloseButton onClick={toggleMenu} />}
          <li>
            <NavLink 
              to="/" 
              scrolled={scrolled || menuOpen}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/tourSection" 
              scrolled={scrolled || menuOpen}
              onClick={() => setMenuOpen(false)}
            >
              Tours
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/safariExperience" 
              scrolled={scrolled || menuOpen}
              onClick={() => setMenuOpen(false)}
            >
              Safaris
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/gallery" 
              scrolled={scrolled || menuOpen}
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              scrolled={scrolled || menuOpen}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              scrolled={scrolled || menuOpen}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Header;