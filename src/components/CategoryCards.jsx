// src/components/Tours/CategoryCards.js
import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { color } from '../styles/color';
import SectionTitle from '../components/SectionTitle';

const Section = styled.section`
  padding: 80px 0;
  background: ${color.secondary};
`;

const CategoriesContainer = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
`;

const ScrollContainer = styled.div`
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 40px 0;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoriesWrapper = styled.div`
  display: inline-flex;
  gap: 30px;
  padding: 0 20px;
`;

const CategoryCard = styled(motion.div)`
  min-width: 500px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CategoryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: ${color.textLight};
`;

const CategoryTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 15px;
  font-weight: 700;
`;

const CategoryDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 25px;
`;

const ExploreButton = styled.button`
  background: ${color.primary};
  color: ${color.textLight};
  border: none;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${color.primaryDark};
    transform: translateY(-3px);
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${color.white};
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: ${color.lightGray};
    transform: translateY(-50%) scale(1.1);
  }
`;

const PrevButton = styled(NavButton)`
  left: 0;
`;

const NextButton = styled(NavButton)`
  right: 0;
`;

const CategoryCards = ({ categories, onCategorySelect }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -500 : 500;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Section id="tour-categories">
         <SectionTitle>Our Services</SectionTitle>
      <CategoriesContainer>
        <PrevButton onClick={() => scroll('left')}>
          <FiChevronLeft size={28} />
        </PrevButton>
        
        <ScrollContainer ref={scrollRef}>
          <CategoriesWrapper>
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => onCategorySelect(category.id)}
              >
                <CategoryImage src={category.image} alt={category.title} />
                <CategoryOverlay>
                  <CategoryTitle>{category.title}</CategoryTitle>
                  <CategoryDescription>{category.description}</CategoryDescription>
                  <ExploreButton>Explore Tours</ExploreButton>
                </CategoryOverlay>
              </CategoryCard>
            ))}
          </CategoriesWrapper>
        </ScrollContainer>

        <NextButton onClick={() => scroll('right')}>
          <FiChevronRight size={28} />
        </NextButton>
      </CategoriesContainer>
    </Section>
  );
};

export default CategoryCards;