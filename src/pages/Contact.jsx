// src/pages/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin,FiInstagram } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';
import { color } from '../styles/color';
import ContactForm from '../components/ContactForm'; // Adjust the path as necessary
import { FaTiktok } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 30px;
    color: #333;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
`;

const ContactIcon = styled.div`
  margin-right: 15px;
  color: ${color.primary};
  font-size: 1.5rem;
`;

const ContactText = styled.div`
  h4 {
    margin: 0 0 5px 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: #666;
    line-height: 1.6;
  }

  a {
  color: ${color.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${color.primaryDark};
    }
  }
`;


const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${color.primary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${color.primary};
  }
`;

const SubmitButton = styled.button`
  background: ${color.primary};
  color: ${color.textLight};
  border: none;
  padding: 12px 25px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${color.primaryDark};
  }
`;

const MapContainer = styled(motion.div)`
  margin-top: 60px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 400px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Contact = () => {
  const [commentsUpdated, setCommentsUpdated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleCommentAdded = () => {
    setCommentsUpdated(prev => !prev); // Toggle to trigger re-fetch
  };

  // Google Maps embed URL for Stone Town, Zanzibar
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.4531960781!2d39.1862037!3d-6.1609657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185cd059242fbd0f%3A0x7e82381a15e5ab3f!2sStone%20Town%2C%20Zanzibar!5e0!3m2!1sen!2stz!4v1689876543210";

  // Social media click handlers
  const [tiktokClicks, setTiktokClicks] = useState(0);
  const [instagramClicks, setInstagramClicks] = useState(0);

  const handleTiktokClick = () => {
    setTiktokClicks(prev => prev + 1);
    window.open("https://www.tiktok.com/@zanstone_tours_safaris", "_blank");
  };

  const handleInstagramClick = () => {
    setInstagramClicks(prev => prev + 1);
    window.open("https://www.instagram.com/zanstone_tours_and_safaris", "_blank");
  };

  return (
    <>
      <ContactContainer>
        <SectionTitle>Contact Us</SectionTitle>
        
        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Get in Touch</h3>
            
            <ContactItem>
              <ContactIcon>
                <FiMapPin />
              </ContactIcon>
              <ContactText>
                <h4>Our Office</h4>
                <p>Stone Town, Zanzibar<br />Tanzania</p>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <FiPhone />
              </ContactIcon>
              <ContactText>
                <h4>Phone</h4>
                <p><a href="tel:+255616543216">+255 616 543 216</a></p>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <FiMail />
              </ContactIcon>
              <ContactText>
                <h4>Email</h4>
                <p><a href="mailto:zanstonetoursandsafaris@gmail.com">zanstonetoursandsafaris@gmail.com</a></p>
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <FaTiktok/>
              
              </ContactIcon>
              <ContactText>
                <h4>TikTok</h4>
                <p>
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      color: color.primary,
                      cursor: 'pointer',
                      padding: 0
                    }}
                    onClick={handleTiktokClick}
                  >
                    Go to TikTok
                  </button>
                  <span style={{marginLeft: 8, color: '#888', fontSize: '0.9em'}}>({tiktokClicks})</span>
                </p>
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <FiInstagram/>
             
              </ContactIcon>
              <ContactText>
                <h4>Instagram</h4>
                <p>
                  <button style={{background: 'none', border: 'none', color: color.primary, cursor: 'pointer', padding: 0}} onClick={handleInstagramClick}>
                    Go to Instagram
                  </button>
                  <span style={{marginLeft: 8, color: '#888', fontSize: '0.9em'}}>({instagramClicks})</span>
                </p>
              </ContactText>
            </ContactItem>
          </ContactInfo>
          
          <ContactForm onCommentAdded={handleCommentAdded} />
        </ContactGrid>

        <MapContainer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe 
            src={mapUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Stone Town, Zanzibar Location Map"
          ></iframe>
        </MapContainer>
      </ContactContainer>

      <Footer/>
    </>
  );
};

export default Contact;