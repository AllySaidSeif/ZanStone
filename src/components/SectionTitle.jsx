// src/components/common/SectionTitle.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color } from '../styles/color'; // Adjust the path as necessary

const Title = styled(motion.h2)`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: ${color.textDark};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: ${color.primary};
  }
`;

const SectionTitle = ({ children }) => {
  return (
    <Title
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </Title>
  );
};

export default SectionTitle;