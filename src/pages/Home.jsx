// src/pages/Home.js
import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SafariExperience from '../components/SafariExperience';
import ImageGallery from '../components/ImageGallery';
import VideoGallery from '../components/VideoGallery';
import Testimonials from '../components/Testimonials';
import CategoryCards from '../components/CategoryCards';
import Footer from '../components/Footer';
import { tourCategories, allTours } from '../tourData';
import tourSection from  "../components/ToursSection"
import mnemba from "../assets/image/mnemba/mnemba.jpg";
import spice from "../assets/image/spice/spice.jpg";
import stone6 from "../assets/image/stonetown/stonetown6.jpg";
import ContactForm from "../components/ContactForm";
import { FiChevronLeft, FiChevronRight, FiClock, FiUsers, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Responsive breakpoints
const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px'
};

const MainContent = styled.main`
  padding-top: 60px;

  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 50px;
  }
`;

const AboutSection = styled.section`
  padding: 100px 20px;
  background: white;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 60px 15px;
  }
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }
`;

const SectionDivider = styled.div`
  height: 100px;
  background: linear-gradient(to bottom, #f9f9f9, #fff);

  @media (max-width: ${breakpoints.mobile}) {
    height: 60px;
  }
`;

const CommentSection = styled.section`
  padding: 80px 20px;
  background: #f9f9f9;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 50px 15px;
  }
`;

const CommentSectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #333;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

// Gallery Section Container
const GallerySection = styled.section`
  padding: 80px 20px;
  background: ${props => props.background || 'white'};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 50px 15px;
  }
`;

const GallerySectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #FF7D33, #FF6B6B);
    border-radius: 2px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

// Horizontal Tours Section Styles for Home Page
const HorizontalToursSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);

  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px 0;
  }
`;


const ToursContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 8px; /* Reduced padding for mobile */
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #1a202c;
  margin-bottom: 50px;
  font-weight: 700;
  background: linear-gradient(135deg, #1a202c, #2d3748);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.8rem; /* Further reduced for mobile */
    margin-bottom: 25px; /* Reduced margin */
  }

  @media (max-width: 480px) {
    font-size: 1.6rem; /* Even smaller for very small screens */
  }
`;

const HorizontalScrollContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 25px;
  padding: 20px 10px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 12px; /* Further reduced gap for mobile */
    padding: 12px 4px; /* Reduced padding */
  }
`;

const TourCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  height: 450px;
  width: 400px;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #FF7D33, #FF6B6B);
    z-index: 2;
  }

  @media (max-width: ${breakpoints.mobile}) {
    min-width: 200px; /* Significantly reduced from 240px */
    height: 300px; /* Reduced height to match smaller width */
    border-radius: 10px; /* Slightly smaller border radius */
    
    &:hover {
      transform: translateY(-4px);
    }
  }

  @media (max-width: 480px) {
    width: 200px; /* Even smaller for very small screens */
    height: 290px;
  }

  @media (max-width: 360px) {
    min-width: 170px; /* Minimum width for very small devices */
    height: 230px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    height: 130px; /* Further reduced image height */
  }
`;

const TourImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${TourCard}:hover & {
    transform: scale(1.08);
  }
`;

const VIPBadge = styled.div`
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 3;
  box-shadow: 0 3px 10px rgba(255, 215, 0, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.45rem; /* Further reduced font size */
    padding: 2px 6px; /* Further reduced padding */
    top: 6px;
    right: 6px;
    border-radius: 12px; /* Smaller border radius */
  }
`;

const TourContent = styled.div`
  padding: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px; /* Further reduced padding */
  }
`;

const TourHeader = styled.div`
  margin-bottom: 12px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 8px; /* Reduced margin */
  }
`;

const TourTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  color: #1a202c;
  line-height: 1.3;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem; /* Further reduced font size */
    margin-bottom: 6px;
    -webkit-line-clamp: 2; /* Ensure 2 lines max */
    line-height: 1.2; /* Tighter line height */
  }
`;

const TourPrice = styled.div`
  background: linear-gradient(135deg, #FF7D33, #FF6B6B);
  color: white;
  padding: 8px 16px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.1rem;
  display: inline-block;
  box-shadow: 0 3px 12px rgba(255, 125, 51, 0.3);

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem; /* Further reduced */
    padding: 4px 8px; /* Further reduced padding */
  }
`;

const TourDescription = styled.p`
  color: #718096;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.75rem; /* Further reduced font size */
    margin-bottom: 8px; /* Reduced margin */
    line-height: 1.4; /* Tighter line height */
    -webkit-line-clamp: 2; /* Ensure only 2 lines */
  }
`;

const TourFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 15px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 4px; /* Further reduced gap */
    margin-bottom: 8px; /* Reduced margin */
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #4a5568;
  font-size: 0.8rem;
  font-weight: 500;
  
  svg {
    color: #FF7D33;
    flex-shrink: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.65rem; /* Further reduced font size */
    gap: 3px; /* Reduced gap */
    
    svg {
      width: 8px; /* Further reduced icon size */
      height: 8px;
    }
  }
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 8px; /* Further reduced margin */
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 2px; /* Reduced gap */
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 1px;
`;

const Star = styled.div`
  color: ${props => props.filled ? '#FFD700' : '#e2e8f0'};
  font-size: 0.8rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.65rem; /* Further reduced star size */
  }
`;

const DetailsButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #FF7D33, #E56C2B);
  color: white;
  padding: 10px 16px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  min-width: 100px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 125, 51, 0.4);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 5px 10px; /* Further reduced padding */
    font-size: 0.75rem; /* Further reduced font size */
    min-width: 60px; /* Further reduced minimum width */
    border-radius: 6px; /* Smaller border radius */
    
    &:hover {
      transform: translateY(-1px);
    }
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 30px; /* Further reduced button size */
    height: 30px;
    display: ${props => props.$hideOnMobile ? 'none' : 'flex'};
    
    svg {
      width: 14px; /* Further reduced icon size */
      height: 14px;
    }
  }
`;

const PrevButton = styled(NavButton)`
  left: -25px;

  @media (max-width: ${breakpoints.mobile}) {
    left: -8px; /* Adjusted position for smaller buttons */
  }
`;

const NextButton = styled(NavButton)`
  right: -25px;

  @media (max-width: ${breakpoints.mobile}) {
    right: -8px; /* Adjusted position for smaller buttons */
  }
`;

const ViewAllButton = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 40px;
  background: linear-gradient(135deg, #FF7D33, #E56C2B);
  color: white;
  padding: 15px 30px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 125, 51, 0.4);
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 25px; /* Reduced margin */
    padding: 8px 16px; /* Further reduced padding */
    font-size: 0.85rem; /* Further reduced font size */
    max-width: 140px; /* Further reduced width */
    border-radius: 8px; /* Smaller border radius */
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

// Mobile Gallery Toggle
const MobileGalleryToggle = styled.div`
  display: none;
  
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    gap: 10px;
  }
`;

const GalleryToggleButton = styled.button`
  background: ${props => props.active ? 'linear-gradient(135deg, #FF7D33, #E56C2B)' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 2px solid ${props => props.active ? 'transparent' : '#e2e8f0'};
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? '0 4px 15px rgba(255, 125, 51, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;


// Horizontal Tours Component for Home Page
const HorizontalTours = ({ selectedCategory }) => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= parseInt(breakpoints.mobile));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = isMobile ? 250 : 400; // Reduced mobile scroll amount
      current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  // Get featured tours for home page
  const getFeaturedTours = () => {
    if (selectedCategory) {
      // If a category is selected, show tours from that category
      return allTours[selectedCategory] || [];
    }
    
    // Otherwise show a mix of featured tours
    const featuredTours = [];
    const categories = ['vip', 'private', 'sharing'];
    
    categories.forEach(category => {
      if (allTours[category]) {
        const tours = allTours[category].slice(0, 2);
        featuredTours.push(...tours);
      }
    });
    
    return featuredTours.sort(() => 0.5 - Math.random()).slice(0, 6);
  };

  const featuredTours = getFeaturedTours();

  // Helper functions
  const getDescription = (tour) => {
    const isVipTour = tour.comprehensiveImage && tour.category === 'vip';
    if (isVipTour) return "VIP luxury experience with premium service";
    if (tour.description) {
      return tour.description.length > 80 
        ? `${tour.description.substring(0, 80)}...` 
        : tour.description;
    }
    return "Premium tour experience with expert guides";
  };

  const getTime = (tour) => {
    const isVipTour = tour.comprehensiveImage && tour.category === 'vip';
    if (isVipTour) return "Flexible";
    if (tour.time) {
      return tour.time.includes('--') 
        ? tour.time.split('--')[0].trim() 
        : tour.time;
    }
    return "Flexible";
  };

  const getTourType = (tour) => {
    if (tour.category === 'vip') return 'VIP';
    if (tour.category === 'private') return 'Private';
    if (tour.category === 'sharing') return 'Group';
    return 'Tour';
  };

  const getImage = (tour) => {
    const isVipTour = tour.comprehensiveImage && tour.category === 'vip';
    if (isVipTour && tour.comprehensiveImage) {
      return tour.image;
    }
    return tour.image || tour.image;
  };

  const isVipTour = (tour) => {
    return tour.comprehensiveImage && tour.category === 'vip';
  };

  const getRandomRating = () => {
    return (4 + Math.random()).toFixed(1);
  };

  const getSectionTitle = () => {
    if (!selectedCategory) return 'Featured Tours';
    
    const categoryNames = {
      'vip': 'VIP Luxury Tours',
      'private': 'Private Experiences', 
      'sharing': 'Group Adventures',
      'optional': 'Optional Activities'
    };
    
    return categoryNames[selectedCategory] || `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Tours`;
  };

  return (
    <HorizontalToursSection id="tours">
      <ToursContainer>
        <SectionTitle>{getSectionTitle()}</SectionTitle>
        
        <HorizontalScrollContainer>
          {featuredTours.length > 0 && (
            <>
              <PrevButton 
                onClick={() => scroll('left')}
                $hideOnMobile={isMobile}
              >
                <FiChevronLeft size={24} />
              </PrevButton>
              <NextButton 
                onClick={() => scroll('right')}
                $hideOnMobile={isMobile}
              >
                <FiChevronRight size={24} />
              </NextButton>
            </>
          )}
          
          <ScrollWrapper ref={scrollRef}>
            {featuredTours.map((tour, index) => (
              <TourCard
                key={tour.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: isMobile ? -2 : -5 }}
              >
                <ImageContainer>
                  <TourImage 
                    src={getImage(tour)} 
                    alt={tour.name}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=240&fit=crop';
                    }}
                  />
                  {isVipTour(tour) && <VIPBadge>⭐ Special Package</VIPBadge>}
                </ImageContainer>

                <TourContent>
                  <TourHeader>
                    <TourTitle>{tour.name}</TourTitle>
                  </TourHeader>

                  <TourDescription>
                    {getDescription(tour)}
                  </TourDescription>

                  <TourFeatures>
                    <Feature>
                      <FiClock size={14} />
                      <span>{getTime(tour)}</span>
                    </Feature>
                    <Feature>
                      <FiUsers size={14} />
                      <span>{getTourType(tour)}</span>
                    </Feature>
                    <Feature>
                      <FiMapPin size={14} />
                      <span>{tour.location || "Various"}</span>
                    </Feature>
                  </TourFeatures>

                  <CardFooter>
                    <Rating>
                      <Stars>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} filled={star <= 4}>
                            ★
                          </Star>
                        ))}
                      </Stars>
                      <span style={{ color: '#718096', fontSize: '0.8rem', marginLeft: '4px' }}>
                        {getRandomRating()}
                      </span>
                    </Rating>
                    <DetailsButton to={`/tours/${tour.id}`}>
                      View
                    </DetailsButton>
                  </CardFooter>
                </TourContent>
              </TourCard>
            ))}
          </ScrollWrapper>
        </HorizontalScrollContainer>

        <ViewAllButton to="/tourSection">
          View All Tours
        </ViewAllButton>
      </ToursContainer>
    </HorizontalToursSection>
  );
};

// Combined Gallery Component for Mobile
const CombinedGallery = () => {
  const [activeGallery, setActiveGallery] = useState('images');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= parseInt(breakpoints.mobile));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) {
    // Desktop view - show both galleries normally
    return (
      <>
        <GallerySection id="gallery">
          <GallerySectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Gallery
          </GallerySectionTitle>
          <ImageGallery />
        </GallerySection>

        <GallerySection  id="videos">
         
          <VideoGallery />
        </GallerySection>
      </>
    );
  }

  // Mobile view - show toggle and one gallery at a time
  return (
    <GallerySection id="gallery">
      <GallerySectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Gallery
      </GallerySectionTitle>
      
      <MobileGalleryToggle>
        <GalleryToggleButton
          active={activeGallery === 'images'}
          onClick={() => setActiveGallery('images')}
        >
          📸 Photos
        </GalleryToggleButton>
        <GalleryToggleButton
          active={activeGallery === 'videos'}
          onClick={() => setActiveGallery('videos')}
        >
          🎥 Videos
        </GalleryToggleButton>
      </MobileGalleryToggle>

      {activeGallery === 'images' && <ImageGallery />}
      {activeGallery === 'videos' && <VideoGallery />}
    </GallerySection>
  );
};

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
            flexWrap: 'wrap',
            '@media (max-width: 480px)': {
              flexDirection: 'row',
              alignItems: 'center'
            }
          }}>
            <img
              src={stone6}
              alt="Stone Town"
              style={{
                width: '400px',
                height: '260px',
                objectFit: 'cover',
                borderRadius: '18px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                maxWidth: '100%',
                '@media (max-width: 480px)': {
                  width: '100px'
                }
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
                boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                maxWidth: '100%',
                '@media (max-width: 480px)': {
                 width: '100px'
        }
              }}
            />
          </div>
        </AboutSection>

         {/* Big horizontal category cards */}
        <CategoryCards 
          categories={tourCategories} 
          onCategorySelect={handleCategorySelect}
        />

        {/* Horizontal Tours section for Home page */}
        <HorizontalTours selectedCategory={selectedCategory} />
        
        <SafariExperience />

         {/* Comment Section - Added under ImageGallery */}
        <CommentSection id="reviews">
          <CommentSectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Share Your Experience
          </CommentSectionTitle>
          <ContactForm onCommentAdded={handleCommentAdded} />
        </CommentSection>

        <Testimonials key={commentsUpdated}/>
        <SectionDivider />

        {/* Combined Gallery Section for Mobile */}
        <CombinedGallery />
      </MainContent>

      <Footer />
    </>
  );
};

export default Home;