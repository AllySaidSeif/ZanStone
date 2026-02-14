// src/components/common/FloatingActionButtons.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiMail, FiHelpCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import BookingFormModal from '../components/BookingFormModal';
import { color } from '../styles/color';

// ---------- Main Container ----------
const Container = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 2000;

  @media (max-width: 768px) {
    bottom: 25px;
    right: 25px;
  }

  @media (max-width: 480px) {
    bottom: 20px;
    right: 20px;
  }
`;

// ---------- Main Button ----------
const MainButton = styled(motion.button)`
  background: linear-gradient(135deg, #FF7D33, #E56C2B);
  color: white;
  border: none;
  outline: none;
  width: 100px; /* Kubwa zaidi */
  height: 100px; /* Kubwa zaidi */
  border-radius: 50%;
  cursor: pointer;
  font-size: 2.2rem; /* Icon kubwa zaidi */
  box-shadow: 0 10px 40px rgba(255, 125, 51, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    width: 85px;
    height: 85px;
    font-size: 1.9rem;
  }
`;

// ---------- Expanded Buttons Container ----------
const ExpandedButtonsContainer = styled(motion.div)`
  position: absolute;
  bottom: 115px; /* Adjusted for bigger main button */
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;

  @media (max-width: 768px) {
    bottom: 105px;
    gap: 18px;
  }

  @media (max-width: 480px) {
    bottom: 100px;
    gap: 15px;
  }
`;

// ---------- Action Button ----------
const ActionButton = styled(motion.button)`
  background: ${props => props.bgColor || color.primary};
  color: white;
  border: none;
  outline: none;
  width: 60px; /* Nusu ya main button (100px/2 = 50px, alafu ongeza kidogo) */
  height: 60px; /* Nusu ya main button */
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.6rem; /* Kubwa kidogo kuliko hapo awali */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
  }
`;

// ---------- Button Label ----------
const ButtonLabel = styled(motion.div)`
  background: rgba(255, 255, 255, 0.98);
  color: #222;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  margin-right: 15px;
  font-weight: 700;
  position: absolute;
  right: 85px; /* Adjusted for bigger buttons */
  white-space: nowrap;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 5;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 8px 16px;
    margin-right: 12px;
    right: 80px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 7px 14px;
    right: 75px;
  }
`;

// ---------- Tooltip Container ----------
const TooltipContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

// ---------- Icon Styling ----------
const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  
  svg {
    width: ${props => props.$size || '1em'};
    height: ${props => props.$size || '1em'};
  }
`;

// ---------- Floating Action Buttons Component ----------
const FloatingActionButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeState, setActiveState] = useState('normal');
  const [showLabel, setShowLabel] = useState(false);
  const [currentLabel, setCurrentLabel] = useState('');
  const [openBooking, setOpenBooking] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Auto-expand on mobile AND desktop so the animation runs without a click
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(max-width: 768px)');

    const apply = () => {
      // Expand for both mobile (<=768px) and desktop (>=769px)
      const isMobile = mql.matches;
      const isDesktop = window.innerWidth > 768;

      if (isMobile || isDesktop) {
        setIsExpanded(true);
        setActiveState('whatsapp');
        setCurrentLabel('Message us on WhatsApp');
        setShowLabel(true);
        setTimeout(() => setShowLabel(false), 1800);
      } else {
        setIsExpanded(false);
        setShowLabel(false);
      }
    };

    apply();

    // Listen for viewport changes
    if (mql.addEventListener) {
      mql.addEventListener('change', apply);
      window.addEventListener('resize', apply);
    } else if (mql.addListener) {
      mql.addListener(apply);
      window.addEventListener('resize', apply);
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', apply);
      } else if (mql.removeListener) {
        mql.removeListener(apply);
      }
      window.removeEventListener('resize', apply);
    };
  }, []);

  const whatsappNumber = "+255616543216";
  const defaultMessage = encodeURIComponent("Hi, I'm interested in your tours and safaris!");

  // Auto-rotate animation loop
  useEffect(() => {
    if (isExpanded) {
      const rotationInterval = setInterval(() => {
        setActiveState(prev => {
          switch(prev) {
            case 'normal': 
              setCurrentLabel('Message us on WhatsApp');
              return 'whatsapp';
            case 'whatsapp': 
              setCurrentLabel('Book a tour now');
              return 'booking';
            case 'booking': 
              setCurrentLabel('Need help? Contact us!');
              return 'normal';
            default: return 'normal';
          }
        });
        setShowLabel(true);
        
        setTimeout(() => {
          setShowLabel(false);
        }, 1800);
      }, 2500);

      return () => clearInterval(rotationInterval);
    } else {
      setActiveState('normal');
      setShowLabel(false);
    }
  }, [isExpanded]);

  // Handle button click based on active state
  const handleMainButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
    
    if (isExpanded) {
      switch(activeState) {
        case 'whatsapp':
          window.open(`https://wa.me/${whatsappNumber}?text=${defaultMessage}`, '_blank');
          break;
        case 'booking':
          setOpenBooking(true);
          break;
        case 'normal':
          setIsExpanded(!isExpanded);
          break;
        default:
          setIsExpanded(!isExpanded);
      }
    } else {
      setIsExpanded(true);
      setActiveState('whatsapp');
      setCurrentLabel('Message us on WhatsApp');
      setShowLabel(true);
      
      setTimeout(() => {
        setShowLabel(false);
      }, 1800);
    }
  };

  // Get current icon based on active state
  const getCurrentIcon = () => {
    switch(activeState) {
      case 'whatsapp': 
        return (
          <StyledIcon $size="2em">
            <FaWhatsapp />
          </StyledIcon>
        );
      case 'booking': 
        return (
          <StyledIcon $size="2em">
            <FiMail />
          </StyledIcon>
        );
      case 'normal': 
        return (
          <StyledIcon $size="2em">
            <FiHelpCircle />
          </StyledIcon>
        );
      default: 
        return (
          <StyledIcon $size="2em">
            <FiHelpCircle />
          </StyledIcon>
        );
    }
  };

  // Get current button color based on active state
  const getCurrentColor = () => {
    switch(activeState) {
      case 'whatsapp': return '#25D366';
      case 'booking': return '#4285F4';
      case 'normal': return '#FF7D33';
      default: return '#FF7D33';
    }
  };

  // Get action button icon size
  const getActionIcon = (type) => {
    switch(type) {
      case 'whatsapp':
        return (
          <StyledIcon $size="1.5em">
            <FaWhatsapp />
          </StyledIcon>
        );
      case 'booking':
        return (
          <StyledIcon $size="1.5em">
            <FiMail />
          </StyledIcon>
        );
      default:
        return (
          <StyledIcon $size="1.5em">
            <FiMessageCircle />
          </StyledIcon>
        );
    }
  };

  return (
    <>
      <Container>
        {/* Animated Label */}
        <AnimatePresence>
          {showLabel && isExpanded && (
            <ButtonLabel
              key="label"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {currentLabel}
            </ButtonLabel>
          )}
        </AnimatePresence>

        {/* Expanded Buttons (WhatsApp & Book) */}
        <AnimatePresence>
          {isExpanded && activeState === 'normal' && (
            <ExpandedButtonsContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* WhatsApp Button */}
              <TooltipContainer>
                <ActionButton
                  as="a"
                  href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  bgColor="#25D366"
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 5,
                    boxShadow: '0 12px 30px rgba(37, 211, 102, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 20,
                    delay: 0.1 
                  }}
                >
                  {getActionIcon('whatsapp')}
                </ActionButton>
              </TooltipContainer>

              {/* Booking Button */}
              <TooltipContainer>
                <ActionButton
                  bgColor="#4285F4"
                  onClick={() => setOpenBooking(true)}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: -5,
                    boxShadow: '0 12px 30px rgba(66, 133, 244, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 20,
                    delay: 0.2 
                  }}
                >
                  {getActionIcon('booking')}
                </ActionButton>
              </TooltipContainer>
            </ExpandedButtonsContainer>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <MainButton
          onClick={handleMainButtonClick}
          animate={{
            backgroundColor: getCurrentColor(),
            scale: isExpanded ? 1.15 : 1,
            rotate: 360,
          }}
          whileHover={{ 
            scale: 1.2,
            boxShadow: '0 15px 50px rgba(255, 125, 51, 0.7)'
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            backgroundColor: { duration: 0.5 },
            scale: { type: 'spring', stiffness: 300, damping: 20 },
            rotate: { 
              duration: isClicked ? 0.6 : 4, 
              ease: 'linear',
              repeat: Infinity
            }
          }}
        >
          {getCurrentIcon()}
          
          {/* Pulsing animation ring */}
          {isExpanded && (
            <motion.div
              style={{
                position: 'absolute',
                top: -12,
                left: -12,
                right: -12,
                bottom: -12,
                borderRadius: '50%',
                border: `3px solid ${getCurrentColor()}`,
                opacity: 0.7
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 0.2, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          )}
          
          {/* Second pulsing ring */}
          {isExpanded && (
            <motion.div
              style={{
                position: 'absolute',
                top: -20,
                left: -20,
                right: -20,
                bottom: -20,
                borderRadius: '50%',
                border: `2px solid ${getCurrentColor()}`,
                opacity: 0.4
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0, 0.4]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3
              }}
            />
          )}
        </MainButton>
      </Container>

      {/* Booking Form Modal */}
      <BookingFormModal open={openBooking} onClose={() => setOpenBooking(false)} />
    </>
  );
};

export default FloatingActionButtons;