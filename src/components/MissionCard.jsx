import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  text-align: center;
  transition: all 0.3s ease;
`;

const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.text === '#1e293b' ? '#1e3a8a' : '#e0e7ff'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: var(--primary);
  font-size: 1.25rem;
  font-weight: bold;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.textSecondary};
`;

const MissionCard = ({ index, title, description }) => {
  return (
    <Card whileHover={{ y: -10 }}>
      <Icon>{index}</Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default MissionCard;