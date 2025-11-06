// src/components/Footer.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaTripadvisor, 
  FaArrowUp,
  FaTiktok,
  FaWhatsapp 
} from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { color } from '../styles/color';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #222 0%, #333 100%);
  color: ${color.textLight};
  padding: 60px 20px 30px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${color.primary}, ${color.accent});
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 50px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.center ? 'center' : 'flex-start'};

  h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
    color: white;
    width: 100%;
    text-align: ${props => props.center ? 'center' : 'left'};

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: ${props => props.center ? '50%' : '0'};
      transform: ${props => props.center ? 'translateX(-50%)' : 'none'};
      width: 50px;
      height: 2px;
      background: ${color.primary};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 80px;
    }
  }

  p {
    margin: 10px 0;
    color: #bbb;
    line-height: 1.6;
    transition: color 0.3s ease;
    text-align: ${props => props.center ? 'center' : 'left'};
    width: 100%;
  }

  @media (max-width: 768px) {
    align-items: center;
    
    h3 {
      text-align: center;
      
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    
    p {
      text-align: center;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  flex-wrap: wrap;
  width: 100%;

  a {
    color: ${color.textLight};
    font-size: 1.4rem;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    padding: 12px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 50px;

    &:hover {
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(255, 125, 51, 0.3);
    }

    /* Social Media Platform Colors */
    &.facebook:hover {
      background: #1877F2;
    }

    &.instagram:hover {
      background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
    }

    &.twitter:hover {
      background: #1DA1F2;
    }

    &.tripadvisor:hover {
      background: #00AF87;
    }

    &.tiktok:hover {
      background: #000000;
    }

    &.whatsapp:hover {
      background: #25D366;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: ${color.accent};
  transition: transform 0.3s ease;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  width: 100%;

  &:hover {
    transform: translateX(5px);
  }

  svg {
    margin-right: 10px;
    color: ${color.primary};
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  span {
    color: #bbb;
    transition: color 0.3s ease;
    text-align: left;
  }

  &:hover span {
    color: white;
  }

  @media (max-width: 768px) {
    justify-content: center;
    
    span {
      text-align: center;
    }
  }
`;

const QuickLink = styled.p`
  width: 100%;
  text-align: ${props => props.center ? 'center' : 'left'};
  
  a {
    color: #bbb;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
    padding: 5px 0;

    &:hover {
      color: ${color.primary};
      transform: translateX(10px);
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    
    a:hover {
      transform: translateX(5px);
    }
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 300px;
  margin: 0 ${props => props.center ? 'auto' : '0'};

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const NewsletterInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
    border-color: ${color.primary};
    box-shadow: 0 0 0 2px rgba(255, 125, 51, 0.2);
  }

  @media (max-width: 480px) {
    padding: 14px 15px;
  }
`;

const SubscribeButton = styled.button`
  background: linear-gradient(135deg, ${color.primary} 0%, ${color.accent} 100%);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 125, 51, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 60px;
  padding-top: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #999;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  span {
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: ${color.primary};
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ScrollToTop = styled.button`
  background: ${color.primary};
  color: white;
  border: none;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;

  &:hover {
    background: ${color.accent};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 125, 51, 0.4);
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const SuccessMessage = styled.div`
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid #4CAF50;
  color: #4CAF50;
  padding: 10px 15px;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 0.9rem;
  width: 100%;
  text-align: center;
`;

const ErrorMessage = styled.div`
  background: rgba(244, 67, 54, 0.1);
  border: 1px solid #f44336;
  color: #f44336;
  padding: 10px 15px;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 0.9rem;
  width: 100%;
  text-align: center;
`;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const socialLinks = {
    facebook: 'https://www.facebook.com/profile.php?id=61563624100258',
    instagram: "https://www.instagram.com/zanstone_tours_and_safaris",
    twitter: 'https://twitter.com/zanstone_tours_and_safaris',
    tripadvisor: 'https://tripadvisor.com/zanstone_tours_and_safaris',
    tiktok: "https://www.tiktok.com/@zanstone_tours_safaris",
    whatsapp: "https://wa.me/255616543216"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage({ text: 'Please enter your email address', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setMessage({ text: '', type: '' });

    try {
      // Email subscription logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      setMessage({ 
        text: 'Thank you for subscribing! You will receive updates from ZanStone Tours.', 
        type: 'success' 
      });
      setEmail('');
    } catch (error) {
      setMessage({ 
        text: 'Subscription failed. Please try again or contact us directly.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <FooterContent>
        {/* About Us Column */}
        <FooterColumn center>
          <h3>About Us</h3>
          <p>
            ZanStone Tours and Safaris is a premier tour operator specializing in 
            creating unforgettable experiences in Zanzibar. We're committed to 
            sustainable tourism and authentic cultural experiences.
          </p>
          <SocialLinks center>
            <a href={socialLinks.facebook} className="facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href={socialLinks.instagram} className="instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href={socialLinks.twitter} className="twitter" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href={socialLinks.tripadvisor} className="tripadvisor" aria-label="TripAdvisor" target="_blank" rel="noopener noreferrer">
              <FaTripadvisor />
            </a>
            <a href={socialLinks.tiktok} className="tiktok" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
            <a href={socialLinks.whatsapp} className="whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </SocialLinks>
        </FooterColumn>

        {/* Quick Links Column */}
        <FooterColumn center>
          <h3>Quick Links</h3>
          <QuickLink center><a href="#about">About</a></QuickLink>
          <QuickLink center><a href="#tours">Tours & Safaris</a></QuickLink>
          <QuickLink center><a href="#gallery">Gallery</a></QuickLink>
          <QuickLink center><a href="#testimonials">Testimonials</a></QuickLink>
          <QuickLink center><a href="#contact">Contact</a></QuickLink>
        </FooterColumn>

        {/* Contact Info Column */}
        <FooterColumn center>
          <h3>Contact Info</h3>
          <ContactItem center>
            <FiPhone />
            <span>+255 616 543 216</span>
          </ContactItem>
          <ContactItem center>
            <FiMail />
            <span>zanstonetoursandsafaris@gmail.com</span>
          </ContactItem>
          <ContactItem center>
            <span>📍 Stone Town, Zanzibar</span>
          </ContactItem>
          <ContactItem center>
            <span>🌍 Tanzania</span>
          </ContactItem>
        </FooterColumn>

        {/* Newsletter Column */}
        <FooterColumn center>
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest offers, travel tips, and exclusive updates.</p>
          <NewsletterForm onSubmit={handleSubmit} center>
            <NewsletterInput 
              type="email" 
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <SubscribeButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
            </SubscribeButton>
          </NewsletterForm>
          
          {message.text && (
            message.type === 'success' ? 
              <SuccessMessage>{message.text}</SuccessMessage> : 
              <ErrorMessage>{message.text}</ErrorMessage>
          )}
          
          <p style={{ fontSize: '0.8rem', marginTop: '10px', color: '#999' }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        <div>
          &copy; {new Date().getFullYear()} ZanStone Tours and Safaris. All rights reserved.
        </div>
        <LegalLinks>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <ScrollToTop onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp />
          </ScrollToTop>
        </LegalLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;