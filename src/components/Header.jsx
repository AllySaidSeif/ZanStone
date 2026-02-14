// src/components/Header/Navbar.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { color } from '../styles/color';
import logo from '../assets/zanstoneLogo.png';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'};
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 12px 0;
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: transform 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const LogoImage = styled.img`
  height: 55px;
  width: auto;
  object-fit: contain;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 45px;
  }

  @media (max-width: 480px) {
    height: 40px;
  }
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BrandName = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 0.5px;
`;

const BrandTagline = styled.span`
  font-size: 0.65rem;
  color: ${color.primary};
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
  justify-content: center;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.menuOpen ? '0' : '-100%'};
    width: 75%;
    height: 100vh;
    background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 100px 30px 40px;
    gap: 25px;
    transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    width: 85%;
    padding: 80px 20px 40px;
    gap: 20px;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: all 0.3s ease;
  padding: 8px 0;

  &:hover {
    color: ${color.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2.5px;
    background: linear-gradient(90deg, ${color.primary}, #FF6B6B);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 0;

    &::after {
      display: none;
    }

    &:hover {
      padding-left: 10px;
    }
  }
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #25D366, #20BA5C);
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
    background: linear-gradient(135deg, #20BA5C, #25D366);
  }

  svg {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 0.85rem;
    gap: 6px;

    svg {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 9px 14px;
    font-size: 0.8rem;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  transition: all 0.3s ease;
  padding: 8px;

  &:hover {
    color: ${color.primary};
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
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
  transition: all 0.3s ease;

  &:hover {
    color: ${color.primary};
    transform: rotate(90deg);
  }

  @media (max-width: 480px) {
    top: 20px;
    right: 15px;
    font-size: 1.5rem;
  }
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

  const handleWhatsApp = () => {
    const phoneNumber = '+255616543216';
    const message = 'Hello! I would like to inquire about your tours in Zanzibar.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setMenuOpen(false);
  };

  const handleReviewsClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById('google-reviews')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NavContainer scrolled={scrolled || menuOpen}>
      <NavContent>
        <LogoContainer to="/">
          <LogoImage src={logo} alt="ZanStone Tours & Safaris" />
        </LogoContainer>

        <NavLinksWrapper>
          <NavLinks menuOpen={menuOpen}>
            {menuOpen && <CloseButton onClick={toggleMenu} />}
            <li>
              <NavLink 
                to="/" 
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/tourSection" 
                onClick={() => setMenuOpen(false)}
              >
                Tours
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/safariExperience" 
                onClick={() => setMenuOpen(false)}
              >
                Safaris
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/gallery" 
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                onClick={() => setMenuOpen(false)}
              >
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink 
                as="a"
                href="#"
                onClick={handleReviewsClick}
              >
                Reviews
              </NavLink>
            </li>
          </NavLinks>
        </NavLinksWrapper>

        <WhatsAppButton href="#" onClick={(e) => {
          e.preventDefault();
          handleWhatsApp();
        }}>
          <FaWhatsapp />
          <span>Chat on WhatsApp</span>
        </WhatsAppButton>

        <MobileMenuButton onClick={toggleMenu}>
          <FiMenu />
        </MobileMenuButton>
      </NavContent>
    </NavContainer>
  );
};

export default Header;