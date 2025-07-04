// src/components/Gallery/VideoGallery.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import GalleryModal from './GalleryModal';
import { color } from '../styles/color';
import zanz1 from '../assets/video/zanz1.mp4';
import zanz2 from '../assets/video/zanz2.mp4';
import zanz3 from '../assets/video/zanz3.mp4';
import zanz4 from '../assets/video/zanz4.mp4';
import zanz5 from '../assets/video/zanz5.mp4';
import safari1 from '../assets/video/safari1.mp4'; 
import farasi from "../assets/video/farasii.mp4"
import salaam from '../assets/video/salamm.mp4';
import thelife from '../assets/video/thelifea.mp4';
import zan from "../assets/video/zan.mp4"
import safar1 from "../assets/video/safari1.mp4"
import safr from "../assets/video/safr.mp4"
import salam from "../assets/video/salam.mp4"
import safrii from "../assets/video/safrii.mp4"// Make sure this path and file exist

// If the above import fails, check if your video files are in 'src/assets/video' and the file is named 'index.js' or 'video.js'.
// If your video files are individual files (e.g., zanz1.mp4), you may need to import them like:
// import zanz1 from '../assets/video/zanz1.mp4';
// import zanz2 from '../assets/video/zanz2.mp4';
// ...and so on.
// Sample video data with Unsplash thumbnails
const videos = [
  { 
    id: 1, 
    videoUrl: zanz1,
    title: 'Zanzibar Beaches',
    width: 350,
    height: 220
  },

  { 
    id: 3, 
    videoUrl: zanz3,
    title: 'Maasai',
    width: 350,
    height: 180
  },
  { 
    id: 4, 
    videoUrl: zanz4,
    title: 'KayaKing',
    width: 350,
    height: 250
  },
  { 
    id: 5, 
    videoUrl: zanz5,
    title: 'Tropical Paradise',
    width: 350,
    height: 200
  },
  { 
    id: 6, 
    videoUrl: safar1,
    title: 'Wild Life',
    width: 350,
    height: 300
  },{ 
    id: 7, 
    videoUrl: farasi,
    title: 'Horse Riding',
    width: 350,
    height: 300
  },{ 
    id: 9, 
    videoUrl: salaam,
    title: 'Salaam Cave',
    width: 350,
    height: 300
  },{ 
    id: 10, 
    videoUrl: salam,
    title: 'Salaam Cave',
    width: 350,
    height: 300
  },{ 
    id: 11, 
    videoUrl: safr,
    title: 'Wild Life',
    width: 350,
    height: 300
  },{ 
    id: 12, 
    videoUrl: safrii,
    title: 'Wild Life',
    width: 350,
    height: 300
  },{ 
    id: 13, 
    videoUrl: zan,
    title: 'Zanzibar Life',
    width: 350,
    height: 300
  },{ 
    id: 14, 
    videoUrl: thelife,
    title: 'Marine Life',
    width: 350,
    height: 300
  },
];

const GalleryContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const MasonryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 10px;
  grid-gap: 15px;
`;

const MasonryItem = styled(motion.div)`
  grid-row-end: span ${props => Math.ceil(props.height / 10)};
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    border: 2px solid ${color.primary};
  }

  &:hover video {
    transform: scale(1.05);
  }
`;

const VideoPreview = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  pointer-events: none;
`;

const VideoTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  font-weight: bold;
`;

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <GalleryContainer id="video-gallery">
      <MasonryGrid>
        {videos.map((video) => (
          <MasonryItem
            key={video.id}
            height={video.height}
            layoutId={`video-${video.id}`}
            onClick={() => openModal(video)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VideoPreview
              src={video.videoUrl}
              alt={video.title}
              muted
              loop
              playsInline
              preload="metadata"
              onMouseOver={e => e.target.play()}
              onMouseOut={e => e.target.pause()}
              tabIndex={-1}
            />
            <PlayButton>
              <FaPlay />
            </PlayButton>
            <VideoTitle>{video.title}</VideoTitle>
          </MasonryItem>
        ))}
      </MasonryGrid>

      {isModalOpen && (
        <GalleryModal
          item={selectedVideo}
          type="video"
          onClose={closeModal}
        />
      )}
    </GalleryContainer>
  );
};

export default VideoGallery;