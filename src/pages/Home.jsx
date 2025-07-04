// src/pages/Home.js
import React, {useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SafariExperience from '../components/SafariExperience';
import ImageGallery from '../components/ImageGallery';
import VideoGallery from '../components/VideoGallery';
import Testimonials from '../components/Testimonials';
import CategoryCards from '../components/CategoryCards';
import Footer from '../components/Footer';
import { tourCategories } from '../tourData';
import ToursSection from '../components/ToursSection';
import mnemba from "../assets/image/mnemba/mnemba.jpg";
import spice from "../assets/image/spice/spice.jpg";
import stone6 from "../assets/image/stonetown/stonetown6.jpg";

const MainContent = styled.main`
  padding-top: 60px;
`;

const AboutSection = styled.section`
  padding: 100px 20px;
  background: white;
  text-align: center;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 20px;
`;

const SectionDivider = styled.div`
  height: 100px;
  background: linear-gradient(to bottom, #f9f9f9, #fff);
`;

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [commentsUpdated, setCommentsUpdated] = useState(false);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    // Scroll to tours section when a category is selected
    document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleCommentAdded = () => {
    setCommentsUpdated(prev => !prev); // Toggle to trigger re-fetch
  };


  return (
    <>
      <Hero />
      
      <MainContent>
        <AboutSection id="about">
          <AboutContent>
            <AboutTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover Zanzibar With Us
            </AboutTitle>
            <AboutText
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ZanStone Tours and Safaris offers unforgettable experiences on this beautiful island. 
              From pristine beaches to historic Stone Town, from spice tours to wildlife encounters, 
              we provide personalized tours that showcase the best of Zanzibar.
            </AboutText>
            <AboutText
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our expert guides will take you off the beaten path to discover hidden gems and create 
              memories that will last a lifetime.
            </AboutText>
          </AboutContent>
          {/* Big images below the text */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '40px',
            flexWrap: 'wrap'
          }}>
            <img
              src={mnemba}
              alt="Zanzibar Beach"
              style={{
                width: '400px',
                height: '260px',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12)'
              }}
            />
            <img
              src={stone6}
              alt="Stone Town"
              style={{
                width: '400px',
                height: '260px',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12)'
              }}
            />
            <img
            src={spice}
              alt="Spice Tour"
              style={{
                width: '400px',
                height: '260px',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12)'
              }}
            />
          </div>
        </AboutSection>

         {/* Big horizontal category cards */}
        <CategoryCards 
          categories={tourCategories} 
          onCategorySelect={handleCategorySelect}
        />

        {/* Tours section that shows tours based on selected category */}
        <ToursSection selectedCategory={selectedCategory} />
        
        <SafariExperience />

        <Testimonials key={commentsUpdated}/>

        <SectionDivider />
        <ImageGallery />

        <VideoGallery />
      </MainContent>

      <Footer />
    </>
  );
};

export default Home;