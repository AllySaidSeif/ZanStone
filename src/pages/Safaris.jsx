// src/pages/Safaris.js
import React from 'react';
import styled from 'styled-components';
import TourCard from '../components/TourCard';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';
// Sample safari data
const safaris = [
  {
    id: 1,
    title: 'Selous Game Reserve',
    description: 'One of Africa\'s largest game reserves with diverse wildlife.',
    price: '$450',
    duration: '3 days',
    image: 'https://source.unsplash.com/random/600x400/?tanzania,safari',
    whatsappMessage: 'Hi, I want to book the Selous Game Reserve Safari'
  },
  {
    id: 2,
    title: 'Mikumi National Park',
    description: 'See lions, elephants, and zebras in their natural habitat.',
    price: '$380',
    duration: '2 days',
    image: 'https://source.unsplash.com/random/600x400/?mikumi,safari',
    whatsappMessage: 'Hi, I want to book the Mikumi National Park Safari'
  },
  {
    id: 3,
    title: 'Ruaha National Park',
    description: 'Tanzania\'s largest national park with stunning landscapes.',
    price: '$520',
    duration: '4 days',
    image: 'https://source.unsplash.com/random/600x400/?ruaha,safari',
    whatsappMessage: 'Hi, I want to book the Ruaha National Park Safari'
  },
  {
    id: 4,
    title: 'Nyerere National Park',
    description: 'Boat safaris and walking safaris in pristine wilderness.',
    price: '$490',
    duration: '3 days',
    image: 'https://source.unsplash.com/random/600x400/?nyerere,safari',
    whatsappMessage: 'Hi, I want to book the Nyerere National Park Safari'
  }
];

const SafarisContainer = styled.div`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SafarisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

const SafarisPage = () => {
  return (
    <>
      <SafarisContainer>
        <SectionTitle>Our Safaris</SectionTitle>
        <SafarisGrid>
          {safaris.map((safari, index) => (
            <TourCard 
              key={safari.id}
              tour={safari}
              index={index}
              isSafari={true}
            />
          ))}
        </SafarisGrid>
      </SafarisContainer>
      <Footer />
    </>
  );
};

export default SafarisPage;