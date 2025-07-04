// src/components/Tours/ToursSection.js
import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { allTours } from '../tourData';


const Section = styled.section`
  padding: 80px 0;
  background: #f9f9f9;
`;

const ToursContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
`;

const ScrollContainer = styled.div`
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 20px 0;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ToursWrapper = styled.div`
  display: inline-flex;
  gap: 30px;
  padding: 10px;
`;

const TourCard = styled(motion.div)`
  min-width: 300px;
  background: white;
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

const TourImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const TourContent = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const TourTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.4rem;
  color: #333;
`;

const TourDescription = styled.p`
  margin: 0 0 15px 0;
  color: #666;
  font-size: 0.95rem;
  flex-grow: 1;
`;

const TourMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 0.9rem;
  color: #555;
`;

const TourPrice = styled.div`
  font-weight: bold;
  color: #FF7D33;
`;

const DetailsButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FF7D33;
  color: white;
  padding: 12px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;
  margin-top: auto;

  &:hover {
    background: #E56C2B;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PrevButton = styled(NavButton)`
  left: 0;
`;

const NextButton = styled(NavButton)`
  right: 0;
`;

const ToursSection = ({ selectedCategory }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Get tours based on selected category or show all if none selected
  const toursToShow = selectedCategory 
    ? allTours[selectedCategory] 
    : Object.values(allTours).flat();

  return (
    <>
      <Section id="tours">
        <ToursContainer>
          <SectionTitle>
            {selectedCategory 
              ? `${selectedCategory.toUpperCase()} TOURS` 
              : 'OUR TOURS'}
          </SectionTitle>
          
          {toursToShow.length > 0 ? (
            <>
              <PrevButton onClick={() => scroll('left')}>
                <FiChevronLeft size={24} />
              </PrevButton>
              
              <ScrollContainer ref={scrollRef}>
                <ToursWrapper>
                  {toursToShow.map((tour, index) => (
                    <TourCard
                      key={tour.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <TourImage src={tour.image} alt={tour.name} />
                      <TourContent>
                        <TourTitle>{tour.name}</TourTitle>
                        <TourDescription>{tour.description.substring(0, 100)}...</TourDescription>
                        <TourMeta>
                          <span>{tour.time.split('--')[0].trim()}</span>
                          <TourPrice>{tour.price}</TourPrice>
                        </TourMeta>
                        <DetailsButton to={`/tours/${tour.id}`}>
                          View Details
                        </DetailsButton>
                      </TourContent>
                    </TourCard>
                  ))}
                </ToursWrapper>
              </ScrollContainer>
              
              <NextButton onClick={() => scroll('right')}>
                <FiChevronRight size={24} />
              </NextButton>
            </>
          ) : (
            <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
              Select a tour category above to see available tours
            </p>
          )}
        </ToursContainer>
      </Section>
    </>
  );
};

export default ToursSection;