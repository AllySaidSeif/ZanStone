// src/pages/Gallery.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiImage, FiVideo, FiHeart, FiPlus, FiSearch, FiMenu, FiFilter, FiX } from 'react-icons/fi';
import { FaPinterest } from 'react-icons/fa';
import ImageGallery from '../components/ImageGallery';
import VideoGallery from '../components/VideoGallery';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GalleryContainer = styled.div`
  padding: 70px 12px 25px;
  max-width: 1400px;
  margin: 0 auto;
  animation: ${fadeIn} 0.6s ease-out;

  @media (min-width: 768px) {
    padding: 80px 20px 30px;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 30px;
  position: relative;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileLogo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #e64900ff;
  font-size: 1.2rem;
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #333;
  cursor: pointer;
  padding: 5px;
`;

const DesktopHeader = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

const SearchContainer = styled.div`
  max-width: 100%;
  margin: 20px auto;
  position: relative;

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 25px auto;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: none;
  border-radius: 20px;
  background: #f0f0f0;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);

  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  }

  @media (min-width: 768px) {
    padding: 14px 45px 14px 20px;
    border-radius: 25px;
    font-size: 0.9rem;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 0.85rem;

  @media (min-width: 768px) {
    right: 18px;
    font-size: 0.9rem;
  }
`;

const ClearSearchButton = styled.button`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: #e0e0e0;
    color: #666;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  background: white;
  padding: 5px;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    padding: 6px;
    border-radius: 25px;
    max-width: 400px;
    margin-bottom: 35px;
  }
`;

const TabButton = styled.button`
  padding: 8px 20px;
  margin: 0 3px;
  background: ${props => props.active ? 'linear-gradient(135deg, #e62300ff, #bd2600ff)' : 'transparent'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.active ? '0 2px 8px rgba(230, 0, 35, 0.25)' : 'none'};

  &:hover {
    background: ${props => props.active 
      ? 'linear-gradient(135deg, #e60023, #bd001c)' 
      : 'rgba(0,0,0,0.04)'};
    transform: ${props => props.active ? 'none' : 'translateY(-1px)'};
  }

  svg {
    margin-right: 5px;
    font-size: 0.85rem;
  }

  @media (min-width: 768px) {
    padding: 10px 24px;
    margin: 0 4px;
    font-size: 0.85rem;
    border-radius: 20px;
    
    svg {
      font-size: 0.95rem;
      margin-right: 6px;
    }
  }
`;

const FloatingActionButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e60023, #bd001c);
  border: none;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(230, 0, 35, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;

  &:hover {
    transform: scale(1.1) rotate(90deg);
    box-shadow: 0 6px 20px rgba(230, 0, 35, 0.5);
  }

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    bottom: 25px;
    right: 25px;
  }
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  padding: 0 5px;

  @media (min-width: 768px) {
    gap: 10px;
    margin-bottom: 30px;
    padding: 0;
  }
`;

const FilterButton = styled.button`
  padding: 6px 12px;
  background: ${props => props.active ? '#e60023' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1.5px solid ${props => props.active ? '#e60023' : '#e0e0e0'};
  border-radius: 14px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background: ${props => props.active ? '#e60023' : '#f8f8f8'};
    border-color: ${props => props.active ? '#e60023' : '#ccc'};
    transform: translateY(-1px);
  }

  @media (min-width: 768px) {
    padding: 8px 16px;
    font-size: 0.8rem;
    border-radius: 16px;
  }
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  padding: 12px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    gap: 25px;
    padding: 15px;
    border-radius: 15px;
    max-width: 500px;
    margin: 25px auto;
  }
`;

const StatItem = styled.div`
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  .stat-number {
    font-size: 1rem;
    font-weight: 700;
    color: #e60023;
    margin-bottom: 2px;
    
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }
  
  .stat-label {
    font-size: 0.7rem;
    color: #666;
    font-weight: 500;
    
    @media (min-width: 768px) {
      font-size: 0.75rem;
    }
  }
`;

const ModernSectionTitle = styled(SectionTitle)`
  background: linear-gradient(135deg, #333, #e64100ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin-bottom: 10px;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ModernGalleryWrapper = styled.div`
  .image-gallery,
  .video-gallery {
    // Add any specific styling needed for your components here
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;
  
  svg {
    font-size: 3rem;
    margin-bottom: 15px;
    color: #e0e0e0;
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #333;
  }
  
  p {
    font-size: 0.9rem;
    max-width: 400px;
    margin: 0 auto;
    line-height: 1.5;
  }
`;

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('images');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [favoriteImages, setFavoriteImages] = useState([]);
  const [favoriteVideos, setFavoriteVideos] = useState([]);
  const [stats, setStats] = useState({
    totalImages: 120,
    totalVideos: 14,
    totalLikes: 0,
    totalFavorites: 0
  });

  const filters = [
    { key: 'all', label: 'All', icon: null },
    { key: 'popular', label: 'Popular', icon: <FiHeart size={12} /> },
    { key: 'favorites', label: 'Favorites', icon: <FiHeart size={12} fill="#e60023" /> },
    { key: 'recent', label: 'Recent', icon: null },
    { key: 'featured', label: 'Featured', icon: null }
  ];

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedImageFavorites = localStorage.getItem('favoriteImages');
    const savedVideoFavorites = localStorage.getItem('favoriteVideos');
    
    if (savedImageFavorites) {
      setFavoriteImages(JSON.parse(savedImageFavorites));
    }
    if (savedVideoFavorites) {
      setFavoriteVideos(JSON.parse(savedVideoFavorites));
    }
  }, []);

  // Update stats when favorites change
  useEffect(() => {
    const totalFavorites = favoriteImages.length + favoriteVideos.length;
    setStats(prev => ({
      ...prev,
      totalFavorites,
      totalLikes: Math.floor((favoriteImages.length * 15) + (favoriteVideos.length * 25))
    }));
  }, [favoriteImages, favoriteVideos]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const handleFilterClick = (filterKey) => {
    if (filterKey === 'favorites') {
      // If clicking favorites when already active, show all
      if (activeFilter === 'favorites') {
        setActiveFilter('all');
      } else {
        setActiveFilter('favorites');
      }
    } else {
      setActiveFilter(filterKey);
    }
  };

  const handleStatClick = (statType) => {
    switch (statType) {
      case 'photos':
        setActiveTab('images');
        break;
      case 'videos':
        setActiveTab('videos');
        break;
      case 'likes':
        setActiveFilter('popular');
        break;
      case 'favorites':
        setActiveFilter('favorites');
        break;
      default:
        break;
    }
  };

  const handleAddContent = () => {
    // This could open a modal or navigate to upload page
    alert('Add new content feature would open here!');
  };

  const getFilteredContent = () => {
    // This function would filter content based on active filter
    // For now, it just returns the appropriate state
    return activeFilter;
  };

  const renderEmptyState = () => {
    if (activeFilter === 'favorites' && favoriteImages.length === 0 && favoriteVideos.length === 0) {
      return (
        <EmptyState>
          <FiHeart size={48} />
          <h3>No Favorites Yet</h3>
          <p>Start liking photos and videos to see them here. Your favorites will be saved across sessions.</p>
        </EmptyState>
      );
    }
    
    if (searchQuery && activeTab === 'images' && favoriteImages.length === 0) {
      return (
        <EmptyState>
          <FiSearch size={48} />
          <h3>No Images Found</h3>
          <p>Try adjusting your search terms or browse all images.</p>
        </EmptyState>
      );
    }
    
    if (searchQuery && activeTab === 'videos' && favoriteVideos.length === 0) {
      return (
        <EmptyState>
          <FiSearch size={48} />
          <h3>No Videos Found</h3>
          <p>Try adjusting your search terms or browse all videos.</p>
        </EmptyState>
      );
    }
    
    return null;
  };

  return (
    <>
      {/* Mobile Header */}
      <MobileHeader>
        <MobileLogo>Gallery</MobileLogo>
        <MobileMenuButton>
          <FiMenu />
        </MobileMenuButton>
      </MobileHeader>

      <GalleryContainer>
        <DesktopHeader>
          <HeaderSection>
            <ModernSectionTitle>Our Gallery</ModernSectionTitle>
            <p style={{ 
              color: '#666', 
              fontSize: '0.9rem',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: '1.4'
            }}>
              Explore beautiful photos and videos from Zanzibar. Come and Touch the Dream, Rafiki Visit Zanzibar 
            </p>
          </HeaderSection>
        </DesktopHeader>

       
        
        <TabContainer>
          <TabButton 
            active={activeTab === 'images'} 
            onClick={() => setActiveTab('images')}
          >
            <FiImage /> Photos
          </TabButton>
          <TabButton 
            active={activeTab === 'videos'} 
            onClick={() => setActiveTab('videos')}
          >
            <FiVideo /> Videos
          </TabButton>
        </TabContainer>
        <ModernGalleryWrapper>
          {renderEmptyState() || (
            <>
              {activeTab === 'images' ? (
                <ImageGallery 
                  searchQuery={searchQuery}
                  activeFilter={activeFilter}
                  favoriteImages={favoriteImages}
                  setFavoriteImages={setFavoriteImages}
                />
              ) : (
                <VideoGallery 
                  searchQuery={searchQuery}
                  activeFilter={activeFilter}
                  favoriteVideos={favoriteVideos}
                  setFavoriteVideos={setFavoriteVideos}
                />
              )}
            </>
          )}
        </ModernGalleryWrapper>
      </GalleryContainer>

      

      <Footer />
    </>
  );
};

export default GalleryPage;