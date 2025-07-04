import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCalendar,  FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState } from 'react';

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: var(--shadow-lg);
  }
`;

const ImageContainer = styled.div`
  height: 220px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.text};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text === '#1e293b' ? '#64748b' : '#94a3b8'};
  margin-bottom: 1.25rem;
  line-height: 1.5;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Price = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--secondary);
`;

const Duration = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text === '#1e293b' ? '#64748b' : '#94a3b8'};
  font-size: 0.875rem;
`;

const HighlightsButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  background: none;
  border: none;
  font-weight: 500;
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 0.5rem 0;
  font-size: 0.95rem;
`;

const HighlightsList = styled(motion.ul)`
  list-style: none;
  margin-bottom: 1.5rem;
  padding-left: 0;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.text === '#1e293b' ? '#64748b' : '#94a3b8'};
    &::before {
      content: '';
      display: inline-block;
      width: 6px;
      height: 6px;
      background: var(--secondary);
      border-radius: 50%;
      margin-right: 0.75rem;
    }
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 0.75rem;
  background: var(--secondary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
  &:hover {
    background: #ea580c;
  }
`;

const SafariCard = ({ safari }) => {
  const [showHighlights, setShowHighlights] = useState(false);

  return (
    <Card
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <ImageContainer>
        <img src={safari.image} alt={safari.title} />
      </ImageContainer>
      <Content>
        <Title>{safari.title}</Title>
        <Description>{safari.description}</Description>
        <Meta>
          <Price>{safari.price}</Price>
          <Duration>
            <FiCalendar size={16} />
            {safari.duration}
          </Duration>
        </Meta>
        <HighlightsButton onClick={() => setShowHighlights(!showHighlights)}>
          {showHighlights ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
          {showHighlights ? 'Hide Highlights' : 'Show Highlights'}
        </HighlightsButton>
        {showHighlights && (
          <HighlightsList
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {safari.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </HighlightsList>
        )}
        <Button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Safari
        </Button>
      </Content>
    </Card>
  );
};

export default SafariCard;