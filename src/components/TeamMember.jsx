import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
`;

const ImageContainer = styled.div`
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const Name = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.text};
`;

const Role = styled.p`
  color: var(--primary);
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

const Bio = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.875rem;
`;

const TeamMember = ({ member }) => {
  return (
    <Card whileHover={{ y: -5 }}>
      <ImageContainer>
        <img src={member.image} alt={member.name} />
      </ImageContainer>
      <Content>
        <Name>{member.name}</Name>
        <Role>{member.role}</Role>
        <Bio>{member.bio}</Bio>
      </Content>
    </Card>
  );
};

export default TeamMember;