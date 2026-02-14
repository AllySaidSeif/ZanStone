// src/pages/DayTrips.jsx

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiClock, FiUsers, FiMapPin, FiStar, FiFilter, FiSearch } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { dayTripsData, getAllDayTrips, getFeaturedDayTrips } from '../DataTripsData';
import Footer from '../components/Footer';

// Responsive breakpoints
const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px'
};

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #4CAF50, #2E7D32);
  padding: 100px 20px 80px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '☀️';
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 150px;
    opacity: 0.1;
    transform: rotate(15deg);
  }

  &::after {
    content: '🌴';
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 150px;
    opacity: 0.1;
    transform: rotate(-15deg);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 80px 15px 60px;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.95;
  line-height: 1.6;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px 15px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a202c;
  margin-bottom: 40px;
  font-weight: 700;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #4CAF50, #2E7D32);
    border-radius: 2px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: #f1f5f9;
  border-radius: 10px;
  padding: 0 15px;
  flex: 1;
  max-width: 400px;

  svg {
    color: #64748b;
    font-size: 1.2rem;
  }

  input {
    border: none;
    background: none;
    padding: 12px;
    width: 100%;
    font-size: 1rem;
    outline: none;

    &::placeholder {
      color: #94a3b8;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border: 2px solid ${props => props.active ? '#4CAF50' : '#e2e8f0'};
  background: ${props => props.active ? '#4CAF50' : 'white'};
  color: ${props => props.active ? 'white' : '#64748b'};
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
    border-color: #4CAF50;
  }

  svg {
    font-size: 1rem;
  }
`;

const ToursGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const TourCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  transition: all 0.4s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(76, 175, 80, 0.2);
  }

  @media (max-width: ${breakpoints.mobile}) {
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const CardImageContainer = styled.div`
  position: relative;
  height: 240px;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    height: 140px;
  }

  @media (max-width: 480px) {
    height: 120px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${TourCard}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: ${breakpoints.mobile}) {
    ${TourCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: ${props => props.color || 'linear-gradient(135deg, #FFD700, #FFA500)'};
  color: ${props => props.textColor || '#000'};
  padding: 8px 15px;
  border-radius: 25px;
  font-size: 0.8rem;
  font-weight: 700;
  z-index: 2;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 4px 8px;
    font-size: 0.6rem;
    top: 8px;
    right: 8px;
  }
`;

const CardContent = styled.div`
  padding: 25px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const TourName = styled.h3`
  font-size: 1.4rem;
  color: #1a202c;
  margin-bottom: 10px;
  font-weight: 700;
  line-height: 1.4;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 6px;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 2.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    height: 2.4rem;
  }
`;

const TourShortDesc = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.75rem;
    line-height: 1.4;
    margin-bottom: 8px;
    -webkit-line-clamp: 2;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const TourMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e2e8f0;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 8px;
    margin-bottom: 8px;
    padding-bottom: 8px;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #4a5568;
  font-size: 0.9rem;
  font-weight: 500;

  svg {
    color: #4CAF50;
    font-size: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.7rem;
    gap: 3px;
    
    svg {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.65rem;
    
    svg {
      font-size: 0.7rem;
    }
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;

  .stars {
    display: flex;
    gap: 2px;
  }

  .rating-number {
    font-weight: 700;
    color: #1a202c;
    margin-left: 5px;
  }

  .reviews {
    color: #64748b;
    font-size: 0.85rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 8px;
    
    .stars svg {
      width: 12px;
      height: 12px;
    }
    
    .rating-number {
      font-size: 0.8rem;
    }
    
    .reviews {
      font-size: 0.7rem;
    }
  }
`;

const Star = styled(FaStar)`
  color: ${props => props.filled ? '#FFD700' : '#e2e8f0'};
`;

const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 8px;
  }
`;

const Price = styled.div`
  .amount {
    font-size: 1.5rem;
    font-weight: 700;
    color: #4CAF50;
  }

  .note {
    font-size: 0.8rem;
    color: #94a3b8;
    display: block;
  }

  @media (max-width: ${breakpoints.mobile}) {
    .amount {
      font-size: 1rem;
    }
    
    .note {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 480px) {
    .amount {
      font-size: 0.9rem;
    }
  }
`;

const ViewDetailsButton = styled(Link)`
  background: linear-gradient(135deg, #4CAF50, #2E7D32);
  color: white;
  padding: 12px 25px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 6px 12px;
    font-size: 0.7rem;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 0.65rem;
  }
`;

const FeaturedSection = styled.section`
  margin-bottom: 60px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 30px;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  h3 {
    font-size: 1.8rem;
    color: #1a202c;
    margin-bottom: 10px;
  }

  p {
    color: #64748b;
    font-size: 1.1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px 15px;
    
    h3 {
      font-size: 1.4rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`;

// Helper function to format price display
const formatPrice = (price) => {
  if (!price) return 'Contact';
  
  if (typeof price === 'string') {
    // If it's a long string, shorten it
    if (price.length > 15) return 'Contact';
    return price;
  }
  
  if (typeof price === 'object') {
    const firstTier = Object.entries(price)[0];
    if (firstTier) {
      return firstTier[1];
    }
  }
  
  return 'Contact';
};

const DayTripsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTours, setFilteredTours] = useState(dayTripsData);
  const [activeFilter, setActiveFilter] = useState('all');
  const [featuredTours, setFeaturedTours] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Get featured tours (limit based on screen size)
    const limit = window.innerWidth <= 768 ? 2 : 3;
    setFeaturedTours(getFeaturedDayTrips(limit));

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Filter tours based on search term and active filter
    let filtered = dayTripsData;

    if (searchTerm) {
      filtered = filtered.filter(tour => 
        tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilter === 'featured') {
      filtered = filtered.filter(tour => tour.featured);
    } else if (activeFilter === 'best-seller') {
      filtered = filtered.filter(tour => tour.status?.includes('Best-Seller'));
    }

    setFilteredTours(filtered);
  }, [searchTerm, activeFilter]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setActiveFilter('all');
  };

  return (
    <PageContainer>

      
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Zanzibar Day Trips ☀️
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the best of Zanzibar in a single day! From marine adventures to cultural tours,
          we offer unforgettable experiences tailored just for you.
        </HeroSubtitle>
      </HeroSection>

      <ContentContainer>
        {featuredTours.length > 0 && (
          <FeaturedSection>
            <SectionTitle>Featured Day Trips</SectionTitle>
            <ToursGrid>
              {featuredTours.map((tour, index) => (
                <TourCard
                  key={tour.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <CardImageContainer>
                    <CardImage src={tour.image} alt={tour.name} />
                    {tour.status && (
                      <StatusBadge>⭐ {isMobile ? tour.status.split(' ')[0] : tour.status}</StatusBadge>
                    )}
                  </CardImageContainer>
                  
                  <CardContent>
                    <TourName>{tour.name}</TourName>
                    {!isMobile && <TourShortDesc>{tour.shortDescription}</TourShortDesc>}
                    
                    <TourMeta>
                      <MetaItem>
                        <FiClock /> {isMobile ? tour.duration.split(' ')[0] : tour.duration}
                      </MetaItem>
                      <MetaItem>
                        <FiUsers /> {isMobile ? tour.groupSize.split(' ')[0] : tour.groupSize}
                      </MetaItem>
                      <MetaItem>
                        <FiMapPin /> {isMobile ? tour.location.split(' ')[0] : tour.location}
                      </MetaItem>
                    </TourMeta>

                    {!isMobile && (
                      <Rating>
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} filled={i < Math.floor(tour.rating)} />
                          ))}
                        </div>
                        <span className="rating-number">{tour.rating}</span>
                        <span className="reviews">({tour.reviewCount} reviews)</span>
                      </Rating>
                    )}

                    <PriceSection>
                      <Price>
                        <span className="amount">{formatPrice(tour.price)}</span>
                        {!isMobile && <span className="note">{tour.priceNote}</span>}
                      </Price>
                      <ViewDetailsButton to={`/TripsDetails/${tour.id}`}>
                        {isMobile ? 'View' : 'View Details'}
                      </ViewDetailsButton>
                    </PriceSection>
                  </CardContent>
                </TourCard>
              ))}
            </ToursGrid>
          </FeaturedSection>
        )}

        <SectionTitle>All Day Trips</SectionTitle>

        <FilterBar>
          <SearchBox>
            <FiSearch />
            <input
              type="text"
              placeholder="Search tours..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </SearchBox>

          <FilterButtons>
            <FilterButton
              active={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
            >
              <FiFilter /> {isMobile ? 'All' : 'All Tours'}
            </FilterButton>
            <FilterButton
              active={activeFilter === 'featured'}
              onClick={() => setActiveFilter('featured')}
            >
              <FiStar /> {isMobile ? 'Featured' : 'Featured'}
            </FilterButton>
            <FilterButton
              active={activeFilter === 'best-seller'}
              onClick={() => setActiveFilter('best-seller')}
            >
              ⭐ {isMobile ? 'Best' : 'Best Sellers'}
            </FilterButton>
          </FilterButtons>
        </FilterBar>

        <AnimatePresence mode="wait">
          {filteredTours.length > 0 ? (
            <ToursGrid
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {filteredTours.map((tour, index) => (
                <TourCard
                  key={tour.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <CardImageContainer>
                    <CardImage src={tour.image} alt={tour.name} />
                    {tour.status && (
                      <StatusBadge>⭐ {isMobile ? tour.status.split(' ')[0] : tour.status}</StatusBadge>
                    )}
                  </CardImageContainer>
                  
                  <CardContent>
                    <TourName>{tour.name}</TourName>
                    {!isMobile && <TourShortDesc>{tour.shortDescription}</TourShortDesc>}
                    
                    <TourMeta>
                      <MetaItem>
                        <FiClock /> {isMobile ? tour.duration.split(' ')[0] : tour.duration}
                      </MetaItem>
                      <MetaItem>
                        <FiUsers /> {isMobile ? tour.groupSize.split(' ')[0] : tour.groupSize}
                      </MetaItem>
                      <MetaItem>
                        <FiMapPin /> {isMobile ? tour.location.split(' ')[0] : tour.location}
                      </MetaItem>
                    </TourMeta>

                    {!isMobile && (
                      <Rating>
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} filled={i < Math.floor(tour.rating)} />
                          ))}
                        </div>
                        <span className="rating-number">{tour.rating}</span>
                        <span className="reviews">({tour.reviewCount} reviews)</span>
                      </Rating>
                    )}

                    <PriceSection>
                      <Price>
                        <span className="amount">{formatPrice(tour.price)}</span>
                        {!isMobile && <span className="note">{tour.priceNote}</span>}
                      </Price>
                      <ViewDetailsButton to={`/TripsDetails/${tour.id}`}>
                        {isMobile ? 'View' : 'View Details'}
                      </ViewDetailsButton>
                    </PriceSection>
                  </CardContent>
                </TourCard>
              ))}
            </ToursGrid>
          ) : (
            <NoResults
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h3>No tours found</h3>
              <p>Try adjusting your search or filters</p>
              <FilterButton onClick={clearFilters} style={{ marginTop: '20px', display: 'inline-flex' }}>
                Clear Filters
              </FilterButton>
            </NoResults>
          )}
        </AnimatePresence>
      </ContentContainer>

      <Footer />
    </PageContainer>
  );
};

export default DayTripsPage;