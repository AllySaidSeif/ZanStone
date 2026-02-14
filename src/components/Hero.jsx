// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaCalendarAlt } from "react-icons/fa";
import BookingFormModal from './BookingFormModal';

// Import images - using your actual images
import p1 from "../assets/image/folder2/p1.jpg";
import p2 from "../assets/image/folder2/p2.jpg";
import pb from "../assets/image/folder2/pb.jpg";
import p4 from "../assets/image/folder2/p4.jpg";
import p5 from "../assets/image/folder2/p5.jpg";
import p6 from "../assets/image/folder2/p6.jpg";
import p7 from "../assets/image/folder2/p7.jpg";
import p8 from "../assets/image/folder2/p8.jpg";
import p10 from "../assets/image/folder2/p10.jpg";
import p11 from "../assets/image/folder2/p11.jpg";
import p12 from "../assets/image/folder2/p12.jpg";
import p13 from "../assets/image/folder2/p13.jpg";
import p14 from "../assets/image/folder2/p14.jpg";
import p15 from "../assets/image/folder2/p15.jpg";
import p16 from "../assets/image/folder2/p16.jpg";
import p17 from "../assets/image/folder2/p17.jpg";
import p18 from "../assets/image/folder2/p18.jpg";
import p19 from "../assets/image/folder2/p19.jpg";
import p20 from "../assets/image/folder2/p20.jpg";
import p21 from "../assets/image/folder2/p21.jpg";
import p22 from "../assets/image/folder2/p22.jpg";
import p23 from "../assets/image/folder2/p23.jpg";
import safari1 from  "../assets/image/Folder1/safari1.jpg"

// Responsive breakpoints
const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px'
};

// Animations
const pulseAnimation = `
  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
    50% {
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 15px rgba(255, 255, 255, 0);
    }
  }
`;

const floatAnimation = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const glowAnimation = `
  @keyframes glow {
    0%, 100% {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.4);
    }
    50% {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const HeroContainer = styled.section`
  position: relative;
  height: 50vh;
  min-height: 450px;

  @media (max-width: ${breakpoints.mobile}) {
    height: 55vh;
    min-height: 380px;
  }

  @media (max-width: 480px) {
    height: 50vh;
    min-height: 450px;
  }

  @media (max-width: 360px) {
    height: 45vh;
    min-height: 400px;
  }
`;

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Slide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 60px 20px 0 20px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 50px 20px 0 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px 0 20px;
  }
`;

const HeroTitle = styled(motion.h1)`
  color: white;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 15px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  max-width: 800px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: clamp(2.2rem, 5vw, 2.8rem);
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: clamp(2rem, 4.5vw, 2.4rem);
  }

  @media (max-width: 360px) {
    font-size: clamp(1.8rem, 4vw, 2.2rem);
  }
`;

const HeroSubtitle = styled(motion.p)`
  color: white;
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 400;
  margin-bottom: 25px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  max-width: 600px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: clamp(1rem, 2.2vw, 1.4rem);
    margin-bottom: 20px;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    font-size: clamp(0.9rem, 2vw, 1.2rem);
    margin-bottom: 18px;
  }

  @media (max-width: 360px) {
    font-size: clamp(0.85rem, 1.8vw, 1.1rem);
  }
`;

// Book Now Button
const BookNowLink = styled(motion.button)`
  background: linear-gradient(135deg, #FF7D33, #E56C2B);
  color: white;
  border: none;
  padding: 24px 65px;
  border-radius: 60px;
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 12px 35px rgba(255, 125, 51, 0.6);
  transition: all 0.3s ease;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 15px;
  text-decoration: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 18px 40px rgba(255, 125, 51, 0.8);
    background: linear-gradient(135deg, #FF8D43, #E57C3B);
  }

  &:active {
    transform: translateY(-2px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px 50px;
    font-size: 1.35rem;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    padding: 18px 42px;
    font-size: 1.2rem;
    margin-bottom: 25px;
  }

  @media (max-width: 360px) {
    padding: 16px 36px;
    font-size: 1.1rem;
  }
`;

// WhatsApp Button
const WhatsAppButton = styled(motion.a)`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  box-shadow: 0 12px 35px rgba(37, 211, 102, 0.6);
  z-index: 7;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  @media (max-width: ${breakpoints.mobile}) {
    width: 80px;
    height: 80px;
    font-size: 2.5rem;
    bottom: 25px;
    right: 25px;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
    font-size: 2.2rem;
  }

  @media (max-width: 360px) {
    width: 65px;
    height: 65px;
    font-size: 2rem;
  }

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 18px 45px rgba(37, 211, 102, 0.8);
    background: linear-gradient(135deg, #34E377, #139D8E);
  }

  &:active {
    transform: scale(1.05);
  }
`;

const ThumbnailCarousel = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 5;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 12px;
  background: transparent;
  border-radius: 12px;

  @media (max-width: ${breakpoints.mobile}) {
    bottom: 15px;
    left: 15px;
    gap: 8px;
    width: auto;
    max-width: 70vw;
    overflow-x: visible;
    flex-direction: row;
    align-items: flex-end;
  }

  @media (max-width: 480px) {
    bottom: 10px;
    left: 10px;
    gap: 6px;
    max-width: 75vw;
  }
`;

const ThumbnailItem = styled(motion.div)`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  border: ${props => props.$isActive ? `3px solid #FF7D33` : '2px solid rgba(255,255,255,0.3)'};
  opacity: ${props => props.$isActive ? 1 : 0.5};
  transition: all 0.3s ease;
  width: ${props => props.$isActive ? 'clamp(100px, 10vw, 150px)' : 'clamp(60px, 5vw, 80px)'};
  height: ${props => props.$isActive ? 'clamp(60px, 8vw, 90px)' : 'clamp(45px, 4vw, 60px)'};

  @media (max-width: ${breakpoints.mobile}) {
    width: ${props => props.$isActive ? 'clamp(85px, 22vw, 110px)' : 'clamp(65px, 17vw, 90px)'};
    height: ${props => props.$isActive ? 'clamp(65px, 17vw, 90px)' : 'clamp(50px, 14vw, 70px)'};
    border-width: ${props => props.$isActive ? '2px' : '1px'};
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    width: ${props => props.$isActive ? 'clamp(75px, 20vw, 100px)' : 'clamp(55px, 15vw, 80px)'};
    height: ${props => props.$isActive ? 'clamp(55px, 15vw, 80px)' : 'clamp(45px, 12vw, 65px)'};
  }

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LocationName = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(68, 65, 65, 0.8));
  color: white;
  padding: 5px;
  font-size: clamp(0.75rem, 0.9vw, 1rem);
  text-align: center;
  font-weight: bold;
  opacity: ${props => props.$isActive ? 1 : 0};
  transition: opacity 0.3s ease;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.7rem;
    padding: 3px;
    opacity: ${props => props.$isActive ? 0.9 : 0};
  }

  @media (max-width: 480px) {
    font-size: 0.65rem;
    padding: 2px;
  }
`;

const NavigationButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  color: white;
  width: clamp(25px, 3vw, 30px);
  height: clamp(25px, 3vw, 30px);
  border-radius: 50%;
  cursor: pointer;
  font-size: clamp(1rem, 2vw, 1.2rem);
  opacity: 0.8;
  transition: all 0.3s ease;
  z-index: 6;
  
  @media (max-width: ${breakpoints.mobile}) {
    width: 28px;
    height: 28px;
    font-size: 1.1rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  
  &:hover { 
    opacity: 1; 
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: ${props => props.$ismobile ? 'translateY(-50%) scale(1.1)' : 'scale(1.1)'};
  }
`;

const PrevButton = styled(NavigationButton)`
  @media (max-width: ${breakpoints.mobile}) {
    left: -35px;
  }
`;

const NextButton = styled(NavigationButton)`
  @media (max-width: ${breakpoints.mobile}) {
    right: -35px;
  }
`;

// Explore Tours Button
const ExploreButton = styled(motion.button)`
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px 25px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 9px 22px;
    font-size: 0.95rem;
  }
`;

// Google Reviews Button
const GoogleReviewsButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
  padding: 16px 40px;
  border-radius: 50px;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
  margin-top: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  animation: pulse 2.5s infinite, float 3s ease-in-out infinite, glow 2.5s ease-in-out infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    transform: rotate(45deg);
    animation: shimmer 3s infinite;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.7);
    transform: translateY(-6px) scale(1.05);
    box-shadow: 0 16px 48px rgba(255, 255, 255, 0.4);
    animation: pulse 1.5s infinite, float 2s ease-in-out infinite, glow 1.5s ease-in-out infinite;
  }

  &:active {
    transform: translateY(-3px) scale(1.02);
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 14px 35px;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 12px 30px;
    font-size: 1rem;
  }
`;

const GlobalStyle = createGlobalStyle`
${pulseAnimation}
${floatAnimation}
${glowAnimation}
`;

// Assets array
const assets = [
  { src: safari1, name: "Safari" },
  { src: pb, name: "Mnemba Island" },
  { src: p1, name: "Prison Island" },
  { src: p2, name: "Prison Island" },
  { src: p4, name: "Zanzibar Beach" },
  { src: p5, name: "SunSet Zanzibar" },
  { src: p6, name: "StoneTown" },
  { src: p7, name: "Nungwi Beach" },
  { src: p8, name: "Pungume SandBank" },
  { src: p10, name: "Beach" },
  { src: p11, name: "Beach Vibes" },
  { src: p12, name: "Safari Blue" },
  { src: p13, name: "local Dhow" },
  { src: p14, name: "Horse in Ocean" },
  { src: p15, name: "Local Dhows" },
  { src: p16, name: "Island View" },
  { src: p17, name: "SunSet" },
  { src: p18, name: "Mnemba Dhow Cruise" },
  { src: p19, name: "Pungume SandBank" },
  { src: p20, name: "Kendwa Beach" },
  { src: p21, name: "StoneTown" },
  { src: p22, name: "StoneTown" },
  { src: p23, name: "Forodhan" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= parseInt(breakpoints.mobile));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % assets.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + assets.length) % assets.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Preload images to avoid gray flash
  useEffect(() => {
    assets.forEach(asset => {
      const img = new Image();
      img.src = asset.src;
    });
  }, []);

  const handleExploreClick = () => {
    document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGoogleReviewsClick = () => {
    document.getElementById('google-reviews')?.scrollIntoView({ behavior: 'smooth' });
  };

  const visible = [
    (currentSlide - 1 + assets.length) % assets.length,
    currentSlide,
    (currentSlide + 1) % assets.length
  ];

  return (<>
    <GlobalStyle/>
    <HeroContainer>
      <SlideshowContainer>
        {/* Main slides with fade transitions */}
        {assets.map((asset, index) => (
          <Slide
            key={asset.src}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              transition: { 
                duration: 1.2, 
                ease: "easeInOut"
              }
            }}
            exit={{ opacity: 0 }}
            style={{
              backgroundImage: `url(${asset.src})`,
              zIndex: 1
            }}
          />
        ))}
        
        <ContentOverlay>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ZanStone Tours & Safaris
          </HeroTitle>
          
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Step Into Paradise & Wildlife – Discover Zanzibar & Tanzania With Us!
          </HeroSubtitle>
          
          {/* Book Now Button - Link to booking form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <BookNowLink
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBookingModal(true)}
            >
              <FaCalendarAlt size={24} />
              Book Now
            </BookNowLink>
          </motion.div>

          {/* Google Reviews Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <GoogleReviewsButton
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGoogleReviewsClick}
            >
               See Google Reviews
            </GoogleReviewsButton>
          </motion.div>
        </ContentOverlay>
        
        {/* WhatsApp Button */}
        <WhatsAppButton
          href="https://wa.me/255616543216?text=Hello%20ZanStone%20Tours%20%26%20Safaris!%20I%20want%20to%20book%20a%20tour%20to%20Zanzibar/Tanzania."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: 1
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp />
        </WhatsAppButton>
        
        {/* Thumbnail Carousel */}
        <ThumbnailCarousel
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <PrevButton onClick={prevSlide} $ismobile={isMobile}>
            ‹
          </PrevButton>
          
          {visible.map(index => (
            <ThumbnailItem
              key={assets[index].src}
              $isActive={index === currentSlide}
              onClick={() => goToSlide(index)}
            >
              <ThumbnailImage 
                src={assets[index].src} 
                alt={assets[index].name} 
              />
              <LocationName $isActive={index === currentSlide}>
                {assets[index].name}
              </LocationName>
            </ThumbnailItem>
          ))}
          
          <NextButton onClick={nextSlide} $ismobile={isMobile}>
            ›
          </NextButton>
        </ThumbnailCarousel>
      </SlideshowContainer>
    </HeroContainer>
    <AnimatePresence>
      <BookingFormModal open={showBookingModal} onClose={() => setShowBookingModal(false)} />
    </AnimatePresence>
  </>
  );
};

export default Hero;