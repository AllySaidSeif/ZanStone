// src/pages/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';
import TeamBg from '../assets/image/teamBg.jpg'
import { teamMembers } from '../data';
const AboutContainer = styled.div`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.div)`
  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const AboutText = styled(motion.div)`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #333;
  }

  p {
    margin-bottom: 20px;
    line-height: 1.8;
    color: #666;
  }
`;

const TeamSection = styled.section`
  margin-top: 80px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const TeamMember = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding-bottom: 20px;
`;

const TeamImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const TeamName = styled.h4`
  margin: 20px 0 10px;
  font-size: 1.3rem;
`;

const TeamRole = styled.p`
  color: #4CAF50;
  font-weight: 500;
  margin-bottom: 15px;
`;

const About = () => {
  // Import the team data

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
              >
                <TeamImage src={member.image} alt={member.name} />
                <TeamName>{member.name}</TeamName>
                <TeamRole>{member.role}</TeamRole>
              </TeamMember>
            ))}
          </TeamGrid>
        </TeamSection>
      </AboutContainer>

      <Footer/>
    </>
  );
};

export default About;