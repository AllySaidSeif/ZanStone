import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Footer from './Footer';

const GalleryContainer = styled.div`
  position: relative;
`;

const TourCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  ${({ active }) => active && 'box-shadow: 0 0 0 2px var(--primary);'}
  &:hover {
    box-shadow: var(--shadow-lg);
  }
`;

const TourImage = styled.div`
  height: 12rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const TourContent = styled.div`
  padding: 1.5rem;
`;

const TourTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.text};
`;

const TourDescription = styled.p`
  color: ${({ theme }) => theme.text === '#1e293b' ? '#64748b' : '#94a3b8'};
  margin-bottom: 1rem;
`;

const TourMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  span {
    &:first-child {
      color: var(--primary);
      font-weight: 600;
    }
    &:last-child {
      color: ${({ theme }) => theme.text === '#1e293b' ? '#64748b' : '#94a3b8'};
      font-size: 0.875rem;
    }
  }
`;

const BookTourButton = styled(motion.button)`
  width: 100%;
  padding: 0.75rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 500;
  cursor: pointer;
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  background: ${({ theme }) => theme.text === '#1e293b' ? '#e2e8f0' : '#1e293b'};
  color: ${({ theme }) => theme.text === '#1e293b' ? '#1e293b' : '#e2e8f0'};
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const TourGallery = ({ tours }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTour = () => {
    setCurrentIndex((prev) => (prev === tours.length - 1 ? 0 : prev + 1));
  };

  const prevTour = () => {
    setCurrentIndex((prev) => (prev === 0 ? tours.length - 1 : prev - 1));
  };

  return (
    <><GalleryContainer>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {tours.map((tour, index) => (
          <TourCard
            key={tour.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            active={index === currentIndex}
          >
            <TourImage>
              <img src={tour.image} alt={tour.title} />
            </TourImage>
            <TourContent>
              <TourTitle>{tour.title}</TourTitle>
              <TourDescription>{tour.description}</TourDescription>
              <TourMeta>
                <span>{tour.price}</span>
                <span>{tour.duration}</span>
              </TourMeta>
              <BookTourButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
              </BookTourButton>
            </TourContent>
          </TourCard>
        ))}
      </div>

      <NavButtons>
        <NavButton onClick={prevTour}>
          <FiArrowLeft size={20} />
        </NavButton>
        <NavButton onClick={nextTour}>
          <FiArrowRight size={20} />
        </NavButton>
      </NavButtons>
    </GalleryContainer><footer /></>
  );
};

export default TourGallery;