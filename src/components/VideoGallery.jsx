// src/components/Gallery/VideoGallery.js
import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay, FaPinterest, FaHeart, FaPlus, FaSearch, FaVideo } from 'react-icons/fa';
import GalleryModal from './GalleryModal';
import { color } from '../styles/color';

// Import your video files
import zanz1 from '../assets/video/zanz1.mp4';
import zanz2 from '../assets/video/zanz2.mp4';
import zanz3 from '../assets/video/zanz3.mp4';
import zanz4 from '../assets/video/zanz4.mp4';
import zanz5 from '../assets/video/zanz5.mp4';
import farasi from "../assets/video/farasii.mp4";
import salaam from '../assets/video/salamm.mp4';
import thelife from '../assets/video/thelifea.mp4';
import zan from "../assets/video/zan.mp4";
import safr from "../assets/video/safr.mp4";
import salam from "../assets/video/salam.mp4";
import safrii from "../assets/video/safrii.mp4";







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

// Sample video data - MAKE SURE THIS ARRAY IS DEFINED
const videos = [
  { 
    id: 1, 
    videoUrl: zanz1,
    title: 'Zanzibar Beaches',
    width: 350,
    height: 220,
    likes: 0
  },
  { 
    id: 3, 
    videoUrl: zanz3,
    title: 'Maasai Culture',
    width: 350,
    height: 180,
    likes:0
  },
  { 
    id: 4, 
    videoUrl: zanz4,
    title: 'KayaKing Adventures',
    width: 350,
    height: 250,
    likes: 0,
  },
  { 
    id: 5, 
    videoUrl: zanz5,
    title: 'Tropical Paradise',
    width: 350,
    height: 200,
    likes: 0,
  },
  { 
    id: 7, 
    videoUrl: farasi,
    title: 'Horse Riding',
    width: 350,
    height: 300,
    likes: 0
  },
  { 
    id: 9, 
    videoUrl: salaam,
    title: 'Salaam Cave',
    width: 350,
    height: 300,
    likes: 0
  },
  { 
    id: 10, 
    videoUrl: salam,
    title: 'Salaam Cave Tour',
    width: 350,
    height: 300,
    likes: 0
  },
  { 
    id: 11, 
    videoUrl: safr,
    title: 'Wild Life Adventure',
    width: 350,
    height: 300,
    likes: 0
  },
  { 
    id: 12, 
    videoUrl: safrii,
    title: 'Safari Experience',
    width: 350,
    height: 300,
    likes: 0
  },
  { 
    id: 13, 
    videoUrl: zan,
    title: 'Zanzibar Life',
    width: 350,
    height: 300,
    likes: 0
  },
  { 
    id: 14, 
    videoUrl: thelife,
    title: 'Marine Life',
    width: 350,
    height: 300,
    likes: 0
  },

];

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

const PinterestLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  
  svg {
    font-size: 1.8rem;
    color: #e60023;
    background: white;
    border-radius: 50%;
    padding: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    
    @media (min-width: 768px) {
      font-size: 2rem;
    }
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

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 0 4px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 0 8px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    padding: 0 12px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
  }
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: #f8f8f8;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }

  &::before {
    content: '';
    display: block;
    padding-top: 150%;
  }
`;

const VideoPreview = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  display: block;
  
  ${GalleryItem}:hover & {
    transform: scale(1.05);
  }
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background: rgba(230, 54, 0, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  pointer-events: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);

  ${GalleryItem}:hover & {
    background: rgba(230, 0, 35, 1);
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const DurationBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
`;

const ItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 10px;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const ItemActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ActionButton = styled.button`
  background: white;
  border: none;
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 0.7rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f0f0;
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    padding: 8px 14px;
    font-size: 0.75rem;
  }
`;

const VideoTitle = styled.div`
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 8px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
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

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [likedVideos, setLikedVideos] = useState(new Set());
  const [favoriteVideos, setFavoriteVideos] = useState(new Set());
  const videoRefs = useRef({});

  // Load favorites from localStorage on component mount
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem('favoriteVideos');
      if (savedFavorites) {
        const parsedFavorites = JSON.parse(savedFavorites);
        setFavoriteVideos(new Set(parsedFavorites));
      }
    } catch (error) {
      console.error('Error loading video favorites from localStorage:', error);
    }
  }, []);

  // Save favorites to localStorage whenever favoriteVideos changes
  useEffect(() => {
    try {
      localStorage.setItem('favoriteVideos', JSON.stringify([...favoriteVideos]));
    } catch (error) {
      console.error('Error saving video favorites to localStorage:', error);
    }
  }, [favoriteVideos]);

  const openModal = (video) => {
    // Pause all videos when opening modal
    Object.values(videoRefs.current).forEach(ref => {
      if (ref && ref.pause) ref.pause();
    });
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const toggleLike = (videoId, e) => {
    e.stopPropagation();
    setLikedVideos(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(videoId)) {
        newLiked.delete(videoId);
      } else {
        newLiked.add(videoId);
      }
      return newLiked;
    });
  };

  const toggleFavorite = (videoId, e) => {
    e.stopPropagation();
    setFavoriteVideos(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(videoId)) {
        newFavorites.delete(videoId);
      } else {
        newFavorites.add(videoId);
      }
      return newFavorites;
    });
  };

  const handleVideoHover = (videoId, isHovering) => {
    const video = videoRefs.current[videoId];
    if (video) {
      if (isHovering) {
        video.play().catch(() => {}); // Auto-play on hover
      } else {
        video.pause();
        video.currentTime = 0; // Reset to beginning
      }
    }
  };

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalLikes = videos.reduce((sum, video) => sum + video.likes, 0);

  return (
    <>
      <GalleryContainer id="video-gallery">
        <HeaderSection>
          <h1 style={{
            fontSize: '1.8rem',
            background: 'linear-gradient(135deg, #333, #f04917ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '6px',
            fontWeight: '700'
          }}>
            Discover Videos
          </h1>
          <p style={{ 
            color: '#666', 
            fontSize: '0.9rem',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.4'
          }}>
            Watch amazing videos from Safari adventures, beach tours, and cultural experiences
          </p>
        </HeaderSection>

        

        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </SearchContainer>

        <GalleryGrid>
          {filteredVideos.map((video) => (
            <GalleryItem
              key={video.id}
              layoutId={`video-${video.id}`}
              onClick={() => openModal(video)}
              onMouseEnter={() => handleVideoHover(video.id, true)}
              onMouseLeave={() => handleVideoHover(video.id, false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <VideoPreview
                ref={el => videoRefs.current[video.id] = el}
                src={video.videoUrl}
                muted
                loop
                playsInline
                preload="metadata"
                tabIndex={-1}
              />
              <PlayButton>
                <FaPlay />
              </PlayButton>
              <ItemOverlay>
                <div style={{ width: '100%' }}>
                  <VideoTitle>{video.title}</VideoTitle>
                  
                </div>
              </ItemOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>

        {isModalOpen && (
          <GalleryModal
            item={selectedVideo}
            type="video"
            onClose={closeModal}
          />
        )}
      </GalleryContainer>

    
    </>
  );
};

export default VideoGallery;