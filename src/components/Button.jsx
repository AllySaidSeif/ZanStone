import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${({ $primary }) => $primary && `
    background: var(--primary);
    color: white;
    border: none;
    &:hover {
      background: #4338ca;
    }
  `}

  ${({ $secondary }) => $secondary && `
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
    &:hover {
      background: rgba(79, 70, 229, 0.1);
    }
  `}

  ${({ $orange }) => $orange && `
    background: var(--secondary);
    color: white;
    border: none;
    &:hover {
      background: #ea580c;
    }
  `}
`;

const Button = ({ children, primary, secondary, orange, ...props }) => {
  return (
    <StyledButton
      $primary={primary}
      $secondary={secondary}
      $orange={orange}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;