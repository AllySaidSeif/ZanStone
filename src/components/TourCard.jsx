// src/components/Tours/TourCard.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color } from '../styles/color'; // Adjust the path as necessary
const Card = styled(motion.div)`
  min-width: 300px;
  background: ${color.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.4rem;
  color: #333;
`;

const CardDescription = styled.p`
  margin: 0 0 15px 0;
  color: #666;
  font-size: 0.95rem;
  flex-grow: 1;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 0.9rem;
  color: #555;
`;

const CardPrice = styled.div`
  font-weight: bold;
  color: ${props => props.isSafari ? color.primaryDark : color.primary};
`;

const BookButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.isSafari ? color.primaryDark : color.primary};
  color: ${color.textLight};
  padding: 12px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;
  margin-top: auto;

  &:hover {
    background: ${props => props.isSafari ? color.primaryDark : color.primaryDark};
  }
`;

const TourCard = ({ tour, index, isSafari = false }) => {
  const whatsappNumber = "+255123456789"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(tour.whatsappMessage || `Hi, I'm interested in ${tour.title}`);

  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <CardImage src={tour.image} alt={tour.title} />
      <CardContent>
        <CardTitle>{tour.title}</CardTitle>
        <CardDescription>{tour.description}</CardDescription>
        <CardMeta>
          <span>{tour.duration}</span>
          <CardPrice isSafari={isSafari}>{tour.price}</CardPrice>
        </CardMeta>
        <BookButton
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          isSafari={isSafari}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          
          Book on WhatsApp
        </BookButton>
      </CardContent>
    </Card>
  );
};

export default TourCard;