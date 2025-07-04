// src/components/Tours/SafarisSection.js
import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { allSafaris } from '../safariData';

const Section = styled.section`
  padding: 80px 0;
  background: #fff;
`;

const SafarisContainer = styled.div`
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

const SafarisWrapper = styled.div`
  display: inline-flex;
  gap: 30px;
  padding: 10px;
`;

const SafariCard = styled(motion.div)`
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

const SafariImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const SafariContent = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const SafariTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.4rem;
  color: #333;
`;

const SafariDescription = styled.p`
  margin: 0 0 15px 0;
  color: #666;
  font-size: 0.95rem;
  flex-grow: 1;
`;

const SafariMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 0.9rem;
  color: #555;
`;

const SafariPrice = styled.div`
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

const SafariExperience = ({ selectedCategory }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Get safaris based on selected category or show all if none selected
  const safarisToShow = selectedCategory 
    ? allSafaris[selectedCategory] 
    : Object.values(allSafaris).flat();

  return (
    <Section id="safaris">
      <SafarisContainer>
        <SectionTitle>
          {selectedCategory 
            ? `${selectedCategory.toUpperCase()} SAFARIS` 
            : 'OUR SAFARIS'}
        </SectionTitle>
        
        {safarisToShow.length > 0 ? (
          <>
            <PrevButton onClick={() => scroll('left')}>
              <FiChevronLeft size={24} />
            </PrevButton>
            
            <ScrollContainer ref={scrollRef}>
              <SafarisWrapper>
                {safarisToShow.map((safari, index) => (
                  <SafariCard
                    key={safari.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <SafariImage src={safari.image} alt={safari.name} />
                    <SafariContent>
                      <SafariTitle>{safari.name}</SafariTitle>
                      <SafariDescription>{safari.description.substring(0, 100)}...</SafariDescription>
                      <SafariMeta>
                        <span>{safari.duration}</span>
                        <SafariPrice>{safari.price}</SafariPrice>
                      </SafariMeta>
                      <DetailsButton to={`/safaris/${safari.id}`}>
                        View Details
                      </DetailsButton>
                    </SafariContent>
                  </SafariCard>
                ))}
              </SafarisWrapper>
            </ScrollContainer>
            
            <NextButton onClick={() => scroll('right')}>
              <FiChevronRight size={24} />
            </NextButton>
          </>
        ) : (
          <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
            Select a safari category above to see available safaris
          </p>
        )}
      </SafarisContainer>
    </Section>
  );
};

export default SafariExperience;