// src/components/Gallery/GalleryModal.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
`;

const ModalImage = styled(motion.img)`
  max-width: 100%;
  max-height: 90vh;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
`;

const ModalVideo = styled(motion.video)`
  max-width: 100%;
  max-height: 90vh;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
`;

const Caption = styled.div`
  color: white;
  text-align: center;
  margin-top: 15px;
  font-size: 1.2rem;
`;

const GalleryModal = ({ item, type, onClose }) => {
  return (
    <Modal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <CloseButton onClick={onClose}>
        <FiX />
      </CloseButton>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {type === 'image' ? (
          <>
            <ModalImage 
              src={item.src} 
              alt={item.alt}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <Caption>{item.alt}</Caption>
          </>
        ) : (
          <>
            <ModalVideo 
              controls 
              autoPlay
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <source src={item.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </ModalVideo>
            <Caption>{item.title}</Caption>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default GalleryModal;