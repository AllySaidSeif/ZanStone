// src/pages/Tours.js
import React from 'react';
import styled from 'styled-components';
import TourCard from '../components/TourCard';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';
// Sample tour data
const tours = [
  {
    id: 1,
    title: 'Stone Town Walking Tour',
    description: 'Explore the UNESCO World Heritage Site with its rich history and architecture.',
    price: '$45',
    duration: '3 hours',
    image: 'https://source.unsplash.com/random/600x400/?zanzibar,stone-town',
    whatsappMessage: 'Hi, I want to book the Stone Town Walking Tour'
  },
  {
    id: 2,
    title: 'Spice Farm Experience',
    description: 'Visit working spice farms and learn about Zanzibar\'s spice trade history.',
    price: '$60',
    duration: '4 hours',
    image: 'https://source.unsplash.com/random/600x400/?zanzibar,spice',
    whatsappMessage: 'Hi, I want to book the Spice Farm Experience'
  },
  {
    id: 3,
    title: 'Prison Island Excursion',
    description: 'Visit the historic Prison Island and meet giant Aldabra tortoises.',
    price: '$75',
    duration: '5 hours',
    image: 'https://source.unsplash.com/random/600x400/?zanzibar,prison-island',
    whatsappMessage: 'Hi, I want to book the Prison Island Excursion'
  },
  {
    id: 4,
    title: 'Jozani Forest Tour',
    description: 'Walk through the forest to spot the rare red colobus monkeys.',
    price: '$55',
    duration: '4 hours',
    image: 'https://source.unsplash.com/random/600x400/?zanzibar,forest',
    whatsappMessage: 'Hi, I want to book the Jozani Forest Tour'
  },
  {
    id: 5,
    title: 'Sunset Dhow Cruise',
    description: 'Traditional dhow sailing with spectacular sunset views.',
    price: '$85',
    duration: '2 hours',
    image: 'https://source.unsplash.com/random/600x400/?zanzibar,dhow',
    whatsappMessage: 'Hi, I want to book the Sunset Dhow Cruise'
  },
  {
    id: 6,
    title: 'Snorkeling Adventure',
    description: 'Explore the vibrant coral reefs of Mnemba Atoll.',
    price: '$90',
    duration: 'Full day',
    image: 'https://source.unsplash.com/random/600x400/?zanzibar,snorkeling',
    whatsappMessage: 'Hi, I want to book the Snorkeling Adventure'
  }
];

const ToursContainer = styled.div`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ToursGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

const ToursPage = () => {
  return (
    <>
      <ToursContainer>
        <SectionTitle>Our Tours</SectionTitle>
        <ToursGrid>
          {tours.map((tour, index) => (
            <TourCard 
              key={tour.id}
              tour={tour}
              index={index}
            />
          ))}
        </ToursGrid>
      </ToursContainer>
      <Footer />
    </>
  );
};

export default ToursPage;