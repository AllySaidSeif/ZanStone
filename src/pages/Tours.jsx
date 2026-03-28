// src/pages/Tours.js
import styled from 'styled-components';
import jozaniImg from '../assets/image/jozani/jozani.jpg';
import mnembaImg from '../assets/image/mnemba/mnemba.jpg';
import prisonImg from '../assets/image/prison/prisonisland.jpg';
import spiceImg from '../assets/image/spice/spice.jpg';
import stoneTownImg from '../assets/image/stonetown/stonetown.jpg';
import sunsetImg from '../assets/image/sunset/sunset.jpg';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import TourCard from '../components/TourCard';

const tours = [
  {
    id: 1,
    title: 'Stone Town Walking Tour',
    description: 'Explore the UNESCO World Heritage Site with its rich history and architecture.',
    price: '$45',
    duration: '3 hours',
    image: stoneTownImg,
    whatsappMessage: 'Hi, I want to book the Stone Town Walking Tour'
  },
  {
    id: 2,
    title: 'Spice Farm Experience',
    description: 'Visit working spice farms and learn about Zanzibar\'s spice trade history.',
    price: '$60',
    duration: '4 hours',
    image: spiceImg,
    whatsappMessage: 'Hi, I want to book the Spice Farm Experience'
  },
  {
    id: 3,
    title: 'Prison Island Excursion',
    description: 'Visit the historic Prison Island and meet giant Aldabra tortoises.',
    price: '$75',
    duration: '5 hours',
    image: prisonImg,
    whatsappMessage: 'Hi, I want to book the Prison Island Excursion'
  },
  {
    id: 4,
    title: 'Jozani Forest Tour',
    description: 'Walk through the forest to spot the rare red colobus monkeys.',
    price: '$55',
    duration: '4 hours',
    image: jozaniImg,
    whatsappMessage: 'Hi, I want to book the Jozani Forest Tour'
  },
  {
    id: 5,
    title: 'Sunset Dhow Cruise',
    description: 'Traditional dhow sailing with spectacular sunset views.',
    price: '$85',
    duration: '2 hours',
    image: sunsetImg,
    whatsappMessage: 'Hi, I want to book the Sunset Dhow Cruise'
  },
  {
    id: 6,
    title: 'Snorkeling Adventure',
    description: 'Explore the vibrant coral reefs of Mnemba Atoll.',
    price: '$90',
    duration: 'Full day',
    image: mnembaImg,
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