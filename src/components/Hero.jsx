// src/components/Hero/VideoBackground.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color } from '../styles/color';
import zanzBg from '../assets/video/zanzBg.mp4';
import zanz4 from '../assets/video/zanz4.mp4';
import zanz5 from '../assets/video/zanz5.mp4';
import farasi from "../assets/video/farasii.mp4"
import salaam from '../assets/video/salamm.mp4';
import thelife from '../assets/video/thelifea.mp4';
import zan from "../assets/video/zan.mp4"
import safar1 from "../assets/video/safari1.mp4"
import safr from "../assets/video/safr.mp4"
import salam from "../assets/video/salam.mp4"
import safrii from "../assets/video/safrii.mp4"

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Video = styled.video`
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.5rem);
  max-width: 800px;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

// Using Unsplash video sources (replace with actual Unsplash video links)
const videos = [
  zanzBg,
  farasi,
  safar1,
   thelife,
  safr,
  salaam,
  safrii,
  salam,
  zan,
  zanz4,
  zanz5
];

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => 
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <VideoContainer>
      <Video key={currentVideoIndex} autoPlay muted loop playsInline>
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
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