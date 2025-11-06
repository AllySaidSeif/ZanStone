// src/pages/About.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';
import TeamBg from '../assets/image/teamBg.jpg';
import { teamMembers } from '../data';

const AboutContainer = styled.div`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 60px;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  
  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: translateY(-5px);
  }

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: 10px;
    bottom: 10px;
    border: 2px solid #4CAF50;
    border-radius: 25px;
    z-index: -1;
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    &::before {
      top: -5px;
      left: -5px;
      right: 5px;
      bottom: 5px;
    }
  }
`;

const AboutText = styled(motion.div)`
  h3 {
    font-size: 2.2rem;
    margin-bottom: 25px;
    color: #2c5530;
    background: linear-gradient(135deg, #2c5530, #4CAF50);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    margin-bottom: 25px;
    line-height: 1.8;
    color: #555;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.8rem;
      margin-bottom: 20px;
    }

    p {
      font-size: 1rem;
      margin-bottom: 20px;
    }
  }
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 60px 0;
  padding: 40px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 30px 20px;
    margin: 40px 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 25px 15px;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  h3 {
    font-size: 2.5rem;
    color: #4CAF50;
    margin-bottom: 10px;
    font-weight: bold;
  }
  
  p {
    color: #666;
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 2rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1.8rem;
    }
    
    p {
      font-size: 0.85rem;
    }
  }
`;

const TeamSection = styled.section`
  margin: 100px 0;

  @media (max-width: 768px) {
    margin: 80px 0;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-top: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-top: 40px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-top: 30px;
  }

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const TeamMember = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding-bottom: 25px;
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    border-radius: 15px;
    padding-bottom: 20px;
    
    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 480px) {
    border-radius: 12px;
    padding-bottom: 15px;
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${TeamMember}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }

  @media (max-width: 360px) {
    height: 220px;
  }
`;

const TeamName = styled.h4`
  margin: 25px 0 10px;
  font-size: 1.4rem;
  color: #2c5530;
  font-weight: 600;

  @media (max-width: 768px) {
    margin: 20px 0 8px;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    margin: 15px 0 6px;
    font-size: 1.1rem;
  }
`;

const TeamRole = styled.p`
  color: #4CAF50;
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 10px;
  }
`;

const SubscriptionSection = styled(motion.section)`
  margin: 100px 0;
  padding: 60px 40px;
  background: linear-gradient(135deg, #2c5530, #4CAF50);
  border-radius: 25px;
  text-align: center;
  color: white;
  box-shadow: 0 20px 40px rgba(76, 175, 80, 0.2);

  @media (max-width: 768px) {
    margin: 80px 0;
    padding: 40px 25px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    margin: 60px 0;
    padding: 30px 20px;
    border-radius: 15px;
  }
`;

const SubscriptionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SubscriptionText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 25px;
  }
`;

const SubscriptionForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 15px 20px;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  outline: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    padding: 14px 18px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    font-size: 0.9rem;
  }
`;

const SubscribeButton = styled(motion.button)`
  padding: 15px 35px;
  background: white;
  color: #4CAF50;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px 25px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 12px 20px;
    font-size: 0.9rem;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: white;
  color: #4CAF50;
  padding: 20px;
  border-radius: 15px;
  margin-top: 20px;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 0.9rem;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 0.85rem;
  }
`;

const ErrorMessage = styled(motion.div)`
  background: #ffebee;
  color: #c62828;
  padding: 15px;
  border-radius: 10px;
  margin-top: 15px;
  font-weight: 500;
  border: 1px solid #ffcdd2;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.85rem;
  }
`;

const About = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // ZanStone email address
  const zanstoneEmail = 'zanstonetoursandsafaris@gmail.com'; // Replace with actual ZanStone email

  const stats = [
    { number: '500+', label: 'Happy Travelers' },
    { number: '50+', label: 'Tours Available' },
    { number: '15+', label: 'Local Guides' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // Method 1: Using mailto link (opens user's email client)
      const subject = 'New Newsletter Subscription';
      const body = `New subscription request from: ${email}\n\nPlease add this email to your newsletter list.`;
      
      const mailtoLink = `mailto:${zanstoneEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;

      // Method 2: If you want to use a backend API instead, uncomment below:
      /*
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          companyEmail: zanstoneEmail,
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }
      */

      // Simulate API delay
      setTimeout(() => {
        console.log('Subscription email sent to:', zanstoneEmail);
        console.log('Subscriber email:', email);
        
        setIsSubscribed(true);
        setIsLoading(false);
        setEmail('');
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubscribed(false);
        }, 5000);
      }, 1500);

    } catch (err) {
      console.error('Subscription error:', err);
      setError('Failed to subscribe. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <>
      <AboutContainer>
        <SectionTitle>About Us</SectionTitle>
        
        <AboutContent>
          <AboutImage
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={TeamBg} alt="Our Team" />
          </AboutImage>
          
          <AboutText
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Discover Zanzibar With Local Experts</h3>
            <p>
              Founded in 2022, ZanStone Tours and Safaris has been providing unforgettable experiences 
              to travelers from around the world. Our passion for this beautiful island and its rich 
              culture drives us to create authentic, sustainable tourism experiences.
            </p>
            <p>
              We believe in responsible tourism that benefits both our guests and the local communities. 
              All our guides are locals with extensive knowledge of Zanzibar's history, culture, and 
              natural wonders.
            </p>
            <p>
              Whether you're looking for adventure, relaxation, or cultural immersion, we'll create 
              a personalized itinerary that matches your interests and exceeds your expectations.
            </p>
          </AboutText>
        </AboutContent>

     {/*   <StatsContainer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </StatItem>
          ))}
        </StatsContainer> */}

        <TeamSection>
          <SectionTitle>Meet Our Team</SectionTitle>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <TeamImage src={member.image} alt={member.name} />
                <TeamName>{member.name}</TeamName>
                <TeamRole>{member.role}</TeamRole>
              </TeamMember>
            ))}
          </TeamGrid>
        </TeamSection>

        <SubscriptionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SubscriptionTitle>Stay Updated</SubscriptionTitle>
          <SubscriptionText>
            Subscribe to our newsletter and be the first to know about exclusive deals, 
            new tour packages, and travel tips for your perfect Zanzibar adventure.
          </SubscriptionText>
          
          <SubscriptionForm onSubmit={handleSubmit}>
            <EmailInput
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              required
              disabled={isLoading}
            />
            <SubscribeButton
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.05 }}
              whileTap={{ scale: isLoading ? 1 : 0.95 }}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </SubscribeButton>
          </SubscriptionForm>

          {error && (
            <ErrorMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              ⚠️ {error}
            </ErrorMessage>
          )}

          {isSubscribed && (
            <SuccessMessage
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              🎉 Thank you for subscribing! We've sent your email to our team. Welcome to the ZanStone family!
            </SuccessMessage>
          )}
        </SubscriptionSection>
      </AboutContainer>

      <Footer />
    </>
  );
};

export default About;