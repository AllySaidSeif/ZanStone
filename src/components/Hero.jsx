// src/components/Hero/VideoBackground.js
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color } from '../styles/color';

// Import images
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


// Styled Components
const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
`;

const Image = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${color.textLight};
  text-align: center;
  padding: 0 20px;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.5rem);
  max-width: 800px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
`;

const ThumbnailCarousel = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 10;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 12px;

  /* Transparent frame */
  background: transparent;
  border-radius: 12px;
  backdrop-filter: none;
  box-shadow: none;

  @media (max-width: 768px) {
    bottom: 15px;
    left: 15px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    bottom: 10px;
    left: 10px;
    gap: 6px;
  }
`;

const ThumbnailItem = styled(motion.div)`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  border: ${props => props.isActive ? `3px solid ${color.primary}` : '2px solid rgba(255,255,255,0.3)'};
  opacity: ${props => props.isActive ? 1 : 0.5};
  transition: all 0.3s ease;
  width: ${props => props.isActive ? 'clamp(200px, 20vw, 220px)' : 'clamp(150px, 6vw, 100px)'};
  height: ${props => props.isActive ? 'clamp(100px, 18vw, 150px)' : 'clamp(95px, 4.5vw, 100px)'};

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
  padding: 4px;
  font-size: clamp(0.9rem, 10.5vw, 1.1rem);
  text-align: center;
  font-weight: bold;
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const NavigationButton = styled(motion.button)`
  background: transparent;
  border: none;
  color: white;
  width: clamp(25px, 3vw, 30px);
  height: clamp(25px, 3vw, 30px);
  border-radius: 50%;
  cursor: pointer;
  font-size: clamp(1rem, 2vw, 1.2rem);
  opacity: 0.8;
  transition: opacity 0.3s ease;
  &:hover { opacity: 1; background: rgba(255,255,255,0.1); }
`;

// Assets
const assets = [
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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % assets.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goNext = () => setCurrentIndex(prev => (prev + 1) % assets.length);
  const goPrev = () => setCurrentIndex(prev => (prev - 1 + assets.length) % assets.length);

  const visible = [
    (currentIndex - 1 + assets.length) % assets.length,
    currentIndex,
    (currentIndex + 1) % assets.length
  ];

  return (
    <VideoContainer>
      {/* Smooth fade transition - all images overlap */}
      {assets.map((a, i) => (
        <Image
          key={i}
          src={a.src}
          alt={a.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === currentIndex ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      ))}

      {/* Transparent Thumbnail Carousel */}
      <ThumbnailCarousel
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <NavigationButton onClick={goPrev}>‹</NavigationButton>
        {visible.map(index => (
          <ThumbnailItem
            key={index}
            isActive={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          >
            <ThumbnailImage src={assets[index].src} alt={assets[index].name} />
            <LocationName isActive={index === currentIndex}>
              {assets[index].name}
            </LocationName>
          </ThumbnailItem>
        ))}
        <NavigationButton onClick={goNext}>›</NavigationButton>
      </ThumbnailCarousel>

      {/* Text Overlay */}
      <Overlay>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ZanStone Tours & Safaris
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover the spice islands with our curated experiences
        </Subtitle>
      </Overlay>
    </VideoContainer>
  );
};

export default Hero;
