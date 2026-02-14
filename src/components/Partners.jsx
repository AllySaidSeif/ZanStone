// src/components/Partners.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ZATI from '../assets/ZATI.png';
import tripadvisor from '../assets/tripadvisor.png';
import viator from '../assets/viator.png';

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px'
};
const PartnersSection = styled.section`
  padding: 80px 20px;
  background: #ffffff;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 60px 15px;
  }
`;

const PartnersTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #333;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #ff7d33, #ff6b6b);
    border-radius: 2px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 35px;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const PartnersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const PartnerLogo = styled(motion.div)`
  background: #ffffff;
  border-radius: 14px;
  width: 200px;          /* SAME WIDTH */
  height: 120px;         /* SAME HEIGHT */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.16);
  }

  img {
    max-width: 140px;     /* FORCE SAME LOGO SIZE */
    max-height: 60px;
    object-fit: contain;
    filter: grayscale(100%);
    transition: filter 0.3s ease, transform 0.3s ease;
  }

  &:hover img {
    filter: grayscale(0%);
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 160px;
    height: 100px;

    img {
      max-width: 120px;
      max-height: 50px;
    }
  }
`;


const Partners = () => {
  // Sample partner logos - replace with your actual logos
  const partners = [
    { id: 1, name: 'The Zanzibar Association of Tourism Investors', logo: ZATI },
    { id: 2, name: 'Tripadvisor', logo: tripadvisor },
    { id: 3, name: 'Viator', logo: viator },
  ];

  return (
    <PartnersSection id="partners">
      <PartnersTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Partners
      </PartnersTitle>

      <PartnersGrid>
        {partners.map((partner, index) => (
          <PartnerLogo
            key={partner.id}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              loading="lazy"
            />
          </PartnerLogo>
        ))}
      </PartnersGrid>
    </PartnersSection>
  );
};

export default Partners;