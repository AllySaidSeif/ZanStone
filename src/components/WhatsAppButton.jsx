// src/components/common/WhatsAppButton.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { color } from '../styles/color'; // Adjust the path as necessary
const Button = styled(motion.a)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: ${color.primary};
  color: ${color.textLight};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 999;
  transition: background 0.3s ease;

  &:hover {
    background: ${color.primaryDark};
  }
`;

const WhatsAppButton = () => {
  const whatsappNumber = "+255616543216"; // Replace with actual number
  const defaultMessage = encodeURIComponent("Hi, I'm interested in your tours and safaris");

  return (
    <Button
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp />
    </Button>
  );
};

export default WhatsAppButton;