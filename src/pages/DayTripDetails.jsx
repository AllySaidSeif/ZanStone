// src/pages/TourDetails.jsx (or DayTripsDetails.jsx)

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaStar, FaWhatsapp } from 'react-icons/fa';
import { FiArrowLeft, FiCalendar, FiCheck, FiClock, FiMapPin, FiStar, FiUsers, FiX } from 'react-icons/fi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BookingFormModal from '../components/BookingFormModal';
import Footer from '../components/Footer';
import { getDayTripById } from '../DataTripsData'; // Fixed import path
import { allTours } from '../tourData';

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px'
};

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  margin: 20px 40px;
  padding: 10px 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    transform: translateX(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    color: #FF7D33;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 15px 20px;
  }
`;

const HeroSection = styled.section`
  position: relative;
  height: 500px;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    height: 300px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
  display: flex;
  align-items: flex-end;
  padding: 60px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px 20px;
  }
`;

const HeroContent = styled.div`
  color: white;
  max-width: 800px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const HeroBadges = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const HeroBadge = styled.span`
  background: ${props => props.gradient || 'rgba(255,255,255,0.2)'};
  backdrop-filter: blur(10px);
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  border: 1px solid rgba(255,255,255,0.3);

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
    padding: 6px 15px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 40px 20px;
  }
`;

const MainContent = styled.div``;

const Sidebar = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    order: -1;
  }
`;

const InfoCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  position: sticky;
  top: 100px;

  @media (max-width: ${breakpoints.tablet}) {
    position: static;
  }
`;

const PriceBox = styled.div`
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 2px solid #f0f0f0;
`;

const PriceLabel = styled.div`
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 10px;
`;

const PriceAmount = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #FF7D33;
  line-height: 1.2;

  small {
    font-size: 1rem;
    font-weight: 400;
    color: #94a3b8;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const PriceNote = styled.div`
  color: #94a3b8;
  font-size: 0.9rem;
  margin-top: 10px;
`;

const QuickInfo = styled.div`
  margin-bottom: 30px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  svg {
    color: #FF7D33;
    font-size: 1.3rem;
  }

  div {
    flex: 1;
  }

  .label {
    color: #64748b;
    font-size: 0.9rem;
    margin-bottom: 5px;
  }

  .value {
    color: #1a202c;
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

const RatingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;
`;

const RatingScore = styled.div`
  .number {
    font-size: 2rem;
    font-weight: 800;
    color: #1a202c;
    line-height: 1;
  }
  
  .stars {
    display: flex;
    gap: 4px;
    margin: 5px 0;
  }
  
  .reviews {
    color: #64748b;
    font-size: 0.9rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
`;

const BookButton = styled.button`
  background: linear-gradient(135deg, #FF7D33, #E56C2B);
  color: white;
  text-align: center;
  padding: 18px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 125, 51, 0.4);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 14px;
    font-size: 1rem;
  }
`;

const WhatsAppButton = styled.a`
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
  text-align: center;
  padding: 15px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
  }
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #1a202c;
  margin-bottom: 25px;
  font-weight: 700;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #FF7D33, #FF6B6B);
    border-radius: 2px;
  }
`;

const Description = styled.div`
  color: #4a5568;
  line-height: 1.8;
  font-size: 1.1rem;
  white-space: pre-line;

  p {
    margin-bottom: 20px;
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 30px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #FF7D33;

  svg {
    color: #FF7D33;
    font-size: 1.2rem;
  }

  span {
    color: #2d3748;
    font-weight: 500;
  }
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin-top: 30px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TipCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
`;

const TipImage = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
`;

const TipText = styled.p`
  padding: 14px;
  color: #334155;
  font-weight: 500;
  line-height: 1.5;
  font-size: 0.95rem;
`;

const InclusionsExclusions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 30px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ListCard = styled.div`
  background: ${props => props.type === 'included' ? '#f0fdf4' : '#fef2f2'};
  padding: 25px;
  border-radius: 16px;
`;

const ListTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${props => props.type === 'included' ? '#166534' : '#991b1b'};
  font-size: 1.3rem;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;
  color: ${props => props.type === 'included' ? '#166534' : '#991b1b'};
  font-size: 0.95rem;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    margin-top: 3px;
  }
`;

const PhotoGallery = styled.div`
  margin-top: 50px;
`;

const GalleryTitle = styled.h2`
  font-size: 2rem;
  color: #1a202c;
  margin-bottom: 30px;
  font-weight: 700;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const GalleryImage = styled(motion.img)`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  }
`;

const ImageModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 40px;
  cursor: pointer;
`;

const ModalImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  font-size: 1.2rem;
  color: #64748b;
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 100px 20px;

  h2 {
    font-size: 2rem;
    color: #1a202c;
    margin-bottom: 20px;
  }

  p {
    color: #64748b;
    margin-bottom: 30px;
  }
`;

const DayTripsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false); // State for booking form

  useEffect(() => {
    // Try to find tour in dayTripsData first, then in allTours
    let foundTour = getDayTripById(id);
    
    if (!foundTour) {
      // Search in allTours categories
      const categories = ['vip', 'private', 'sharing', 'optional'];
      for (const category of categories) {
        if (allTours[category]) {
          foundTour = allTours[category].find(t => t.id === id);
          if (foundTour) break;
        }
      }
    }

    if (foundTour) {
      setTour(foundTour);
    }
    setLoading(false);
  }, [id]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+255616543216';
    const message = `Hello! I'm interested in the ${tour?.name} tour. Can you provide more information?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleBookNow = () => {
    setShowBookingForm(true); // Open the booking form modal
  };

  const handleCloseBookingForm = () => {
    setShowBookingForm(false); // Close the booking form modal
  };

  const formatPrice = (price) => {
    if (!price) return 'Contact for pricing';
    if (typeof price === 'string') return price;
    if (typeof price === 'object') {
      const firstTier = Object.entries(price)[0];
      if (firstTier) {
        return `${firstTier[1]}`;
      }
    }
    return 'Contact for pricing';
  };

  const renderPriceDetails = () => {
    if (!tour?.price) return null;
    
    if (typeof tour.price === 'object') {
      return (
        <div style={{ marginTop: '15px' }}>
          <PriceLabel>Price per person (by group size):</PriceLabel>
          {Object.entries(tour.price).map(([group, price]) => (
            <div key={group} style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #f0f0f0'
            }}>
              <span style={{ color: '#64748b' }}>{group} people:</span>
              <span style={{ fontWeight: '600', color: '#FF7D33' }}>{price}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <PageContainer>
        <LoadingContainer>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <FiClock size={40} color="#FF7D33" />
          </motion.div>
        </LoadingContainer>
      </PageContainer>
    );
  }

  if (!tour) {
    return (
      <PageContainer>
        <BackButton to="/">
          <FiArrowLeft /> Back to Home
        </BackButton>
        <ErrorContainer>
          <h2>Tour Not Found</h2>
          <p>Sorry, we couldn't find the tour you're looking for.</p>
          <BookButton onClick={() => navigate('/')} style={{ display: 'inline-block', padding: '12px 30px' }}>
            Return to Homepage
          </BookButton>
        </ErrorContainer>
        <Footer />
      </PageContainer>
    );
  }

  const isDayTrip = tour.category === 'daytrip' || tour.isDayTrip === true;
  const gradient = isDayTrip 
    ? 'linear-gradient(135deg, #4CAF50, #2E7D32)' 
    : 'linear-gradient(135deg, #FF7D33, #E56C2B)';

  return (
    <PageContainer>
      {/* Booking Form Modal */}
      <BookingFormModal open={showBookingForm} onClose={handleCloseBookingForm} />
      
      <BackButton to={isDayTrip ? "/day-trips" : "/"}>
        <FiArrowLeft /> Back to {isDayTrip ? 'Day Trips' : 'Home'}
      </BackButton>

      <HeroSection>
        <HeroImage src={tour.image} alt={tour.name} />
        <HeroOverlay>
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {tour.name}
            </HeroTitle>
            <HeroBadges>
              {tour.status && (
                <HeroBadge gradient={gradient}>
                  ⭐ {tour.status}
                </HeroBadge>
              )}
              {isDayTrip ? (
                <HeroBadge gradient="linear-gradient(135deg, #4CAF50, #2E7D32)">
                  ☀️ Day Trip
                </HeroBadge>
              ) : (
                <HeroBadge gradient="linear-gradient(135deg, #FF7D33, #E56C2B)">
                  🏝️ Multi-Day Tour
                </HeroBadge>
              )}
            </HeroBadges>
          </HeroContent>
        </HeroOverlay>
      </HeroSection>

      <ContentContainer>
        <MainContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <Description>
              <p>{tour.description}</p>
              {tour.fullDescription && (
                <p style={{ whiteSpace: 'pre-line' }}>{tour.fullDescription}</p>
              )}
            </Description>
          </Section>

          <Section>
            <SectionTitle>Highlights</SectionTitle>
            <HighlightsGrid>
              {tour.highlights?.map((highlight, index) => (
                <HighlightItem key={index}>
                  <FiStar />
                  <span>{highlight}</span>
                </HighlightItem>
              ))}
            </HighlightsGrid>
          </Section>

          {tour.tips && tour.tips.length > 0 && (
            <Section>
              <SectionTitle>Travel Tips</SectionTitle>
              <TipsGrid>
                {tour.tips.map((tip, index) => (
                  <TipCard key={`tip-${index}`}>
                    {tip.image && <TipImage src={tip.image} alt={`Tip ${index + 1}`} />}
                    <TipText>{tip.text}</TipText>
                  </TipCard>
                ))}
              </TipsGrid>
            </Section>
          )}

          {(tour.includes || tour.excludes) && (
            <Section>
              <SectionTitle>Inclusions & Exclusions</SectionTitle>
              <InclusionsExclusions>
                {tour.includes && (
                  <ListCard type="included">
                    <ListTitle type="included">
                      <FiCheck /> Included
                    </ListTitle>
                    <List>
                      {tour.includes.map((item, index) => (
                        <ListItem key={index} type="included">
                          <FiCheck size={16} />
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  </ListCard>
                )}
                
                {tour.excludes && (
                  <ListCard type="excluded">
                    <ListTitle type="excluded">
                      <FiX /> Not Included
                    </ListTitle>
                    <List>
                      {tour.excludes.map((item, index) => (
                        <ListItem key={index} type="excluded">
                          <FiX size={16} />
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  </ListCard>
                )}
              </InclusionsExclusions>
            </Section>
          )}

          {tour.photos && tour.photos.length > 0 && (
            <PhotoGallery>
              <GalleryTitle>Photo Gallery</GalleryTitle>
              <GalleryGrid>
                {tour.photos.map((photo, index) => (
                  <GalleryImage
                    key={photo.id || index}
                    src={photo.url}
                    alt={photo.alt}
                    onClick={() => setSelectedImage(photo)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  />
                ))}
              </GalleryGrid>
            </PhotoGallery>
          )}
        </MainContent>

        <Sidebar>
          <InfoCard>
            <PriceBox>
              <PriceLabel>Starting from</PriceLabel>
              <PriceAmount>
                {formatPrice(tour.price)}
                <small>/person</small>
              </PriceAmount>
              <PriceNote>{tour.priceNote}</PriceNote>
              {renderPriceDetails()}
            </PriceBox>

            <QuickInfo>
              <InfoItem>
                <FiClock />
                <div>
                  <div className="label">Duration</div>
                  <div className="value">{tour.duration}</div>
                </div>
              </InfoItem>
              <InfoItem>
                <FiUsers />
                <div>
                  <div className="label">Group Size</div>
                  <div className="value">{tour.groupSize}</div>
                </div>
              </InfoItem>
              <InfoItem>
                <FiMapPin />
                <div>
                  <div className="label">Location</div>
                  <div className="value">{tour.location}</div>
                </div>
              </InfoItem>
              <InfoItem>
                <FiCalendar />
                <div>
                  <div className="label">Availability</div>
                  <div className="value">Daily, Year-round</div>
                </div>
              </InfoItem>
            </QuickInfo>

            <RatingBox>
              <RatingScore>
                <div className="number">{tour.rating || 5.0}</div>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color={i < Math.floor(tour.rating || 5) ? '#FFD700' : '#e2e8f0'} size={16} />
                  ))}
                </div>
                <div className="reviews">{tour.reviewCount || 0} reviews</div>
              </RatingScore>
            </RatingBox>

            <ActionButtons>
              <BookButton onClick={handleBookNow}>
                Book This Tour
              </BookButton>
              <WhatsAppButton onClick={handleWhatsAppClick}>
                <FaWhatsapp size={20} />
                Inquire on WhatsApp
              </WhatsAppButton>
            </ActionButtons>
          </InfoCard>
        </Sidebar>
      </ContentContainer>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalImage src={selectedImage.url} alt={selectedImage.alt} />
          </ImageModal>
        )}
      </AnimatePresence>

      <Footer />
    </PageContainer>
  );
};

export default DayTripsDetails;