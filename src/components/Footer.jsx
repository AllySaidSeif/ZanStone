// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaTripadvisor } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { color } from '../styles/color'; // Adjust the path as necessary

const FooterContainer = styled.footer`
  background: #222;
  color: ${color.textLight};
  padding: 60px 20px 30px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 2px;
      background: ${color.primary};
    }
  }

  p {
    margin: 10px 0;
    color: #bbb;
    line-height: 1.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    color: ${color.textLight};
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${color.primary};
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: ${color.accent};

  svg {
    margin-right: 10px;
    color: ${color.primary};
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid #444;
  color: #777;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h3>About Us</h3>
          <p>
            ZanStone Tours and Safaris is a premier tour operator specializing in 
            creating unforgettable experiences in Zanzibar. We're committed to 
            sustainable tourism and authentic cultural experiences.
          </p>
          <SocialLinks>
            ```
                        
          </SocialLinks>
        </FooterColumn>

        <FooterColumn>
          <h3>Quick Links</h3>
          <p><a href="#about" style={{ color: '#bbb', textDecoration: 'none' }}>About</a></p>
          <p><a href="#tours" style={{ color: '#bbb', textDecoration: 'none' }}>Tours</a></p>
          <p><a href="#gallery" style={{ color: '#bbb', textDecoration: 'none' }}>Gallery</a></p>
          <p><a href="#contact" style={{ color: '#bbb', textDecoration: 'none' }}>Contact</a></p>
        </FooterColumn>

        <FooterColumn>
          <h3>Contact Us</h3>
          <ContactItem>
            <FiPhone />
            <span>+255 616 543 216</span>
          </ContactItem>
          <ContactItem>
            <FiMail />
            <span>zanstonetoursandsafaris@gmail.com</span>
          </ContactItem>
          <p>Stone Town, Zanzibar</p>
          <p>Tanzania</p>
        </FooterColumn>

        <FooterColumn>
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest offers and updates.</p>
          <form>
            <input 
              type="email" 
              placeholder="Your email address" 
              style={{ 
                width: '100%', 
                padding: '10px', 
                marginBottom: '10px', 
                borderRadius: '4px', 
                border: 'none' 
              }} 
            />
            <button 
              type="submit" 
              style={{ 
                background: '#FF7D33', 
                color: 'white', 
                border: 'none', 
                padding: '10px 20px', 
                borderRadius: '4px', 
                cursor: 'pointer' 
              }}
            >
              Subscribe
            </button>
          </form>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        &copy; {new Date().getFullYear()} ZanStone Tours and Safaris. All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;