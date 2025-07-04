// src/pages/Gallery.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiImage, FiVideo } from 'react-icons/fi';
import ImageGallery from '../components/ImageGallery';
import VideoGallery from '../components/VideoGallery';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';

const GalleryContainer = styled.div`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const TabButton = styled.button`
  padding: 12px 25px;
  margin: 0 10px;
  background: ${props => props.active ? '#4CAF50' : 'transparent'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? '0 4px 12px rgba(76, 175, 80, 0.3)' : 'none'};

  &:hover {
    background: ${props => props.active ? '#4CAF50' : '#f5f5f5'};
  }

  svg {
    margin-right: 8px;
  }
`;

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('images');

  return (
    <>
      <GalleryContainer>
        <SectionTitle>Our Gallery</SectionTitle>
        
        <TabContainer>
          <TabButton 
            active={activeTab === 'images'} 
            onClick={() => setActiveTab('images')}
          >
            <FiImage /> Photo Gallery
          </TabButton>
          <TabButton 
            active={activeTab === 'videos'} 
            onClick={() => setActiveTab('videos')}
          >
            <FiVideo /> Video Gallery
          </TabButton>
        </TabContainer>

        {activeTab === 'images' ? <ImageGallery /> : <VideoGallery />}
      </GalleryContainer>

      <Footer />
    </>
  );
};

export default GalleryPage;