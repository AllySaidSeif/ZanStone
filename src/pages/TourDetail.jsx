// src/pages/TourDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiClock, FiMapPin} from 'react-icons/fi';
import { getTourById } from '../tourData';
import Footer from '../components/Footer';

const TourContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const VIPContainer = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
  min-height: 100vh;
  padding: 40px 20px;
  color: white;
`;

const VIPContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 30px;
  color: #FF7D33;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #E56C2B;
  }

  svg {
    margin-right: 8px;
  }
`;

const VIPBackButton = styled(BackButton)`
  color: #FF7D33;
  background: rgba(255, 125, 51, 0.1);
  padding: 10px 20px;
  border-radius: 25px;
  
  &:hover {
    color: #FF7D33;
    background: rgba(255, 125, 51, 0.2);
  }
`;

const TourHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TourImage = styled(motion.img)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const ComprehensiveImage = styled(motion.img)`
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 0 auto;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid #FF7D33;
  display: block;
`;

const TourInfo = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #5a4a42;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
    margin-bottom: 30px;
  }
`;

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  background: #FFF8F0;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 0.95rem;

  svg {
    margin-right: 8px;
    color: #FF7D33;
  }
`;

const PriceTag = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #FF7D33;
  margin-bottom: 30px;
`;

const VIPPriceTag = styled(PriceTag)`
  font-size: 2.2rem;
  color: #FF7D33;
  text-shadow: 0 2px 10px rgba(255, 125, 51, 0.3);
  margin: 30px 0;
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #5a4a42;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 3px;
    background: #FF7D33;
  }
`;

const ItineraryItem = styled.div`
  margin-bottom: 30px;
  padding-left: 20px;
  border-left: 3px solid #FF7D33;
`;

const ItineraryTime = styled.div`
  font-weight: bold;
  color: #FF7D33;
  margin-bottom: 8px;
`;

const ItineraryTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #5a4a42;
`;

const ItineraryDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const List = styled.ul`
  margin-left: 20px;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  color: #666;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const GalleryImage = styled(motion.img)`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const BookButton = styled.button`
  display: inline-block;
  background: #FF7D33;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background: #E56C2B;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 125, 51, 0.3);
  }
`;

const VIPBookButton = styled(BookButton)`
  background: linear-gradient(135deg, #FF7D33, #E56C2B);
  padding: 18px 40px;
  font-size: 1.3rem;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(255, 125, 51, 0.4);
  
  &:hover {
    background: linear-gradient(135deg, #E56C2B, #FF7D33);
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(255, 125, 51, 0.5);
  }
`;

const VIPTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 40px;
  color: white;
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #FF7D33, #FFA366);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const VIPSubtitle = styled.p`
  font-size: 1.3rem;
  color: #FFA366;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 300;
`;

const TourDetail = () => {
  const { id } = useParams();
  const tour = getTourById(id);

  if (!tour) {
    return <div>Tour not found</div>;
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello, I'm interested in the "${tour.name}" tour (ID: ${id}). Please provide more details.`);
    const phone = '+255616543216';
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  // Check if it's a VIP tour (has comprehensiveImage AND is in vip category)
  const isVipTour = tour.comprehensiveImage && tour.category === 'vip';

  if (isVipTour) {
    return (
      <>
        <VIPContainer>
          <VIPContent>
            <VIPBackButton to="/tours">
              <FiArrowLeft /> Back to Tours
            </VIPBackButton>

            <VIPTitle>{tour.name}</VIPTitle>
            <VIPSubtitle>Exclusive Luxury Experience</VIPSubtitle>
            
            <ComprehensiveImage
              src={tour.comprehensiveImage}
              alt={tour.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            
            {tour.price && <VIPPriceTag>{tour.price}</VIPPriceTag>}
            
            <VIPBookButton onClick={handleWhatsApp} style={{background: '#25D366'}}>
              Book This VIP Experience
            </VIPBookButton>
          </VIPContent>
        </VIPContainer>
        <Footer />
      </>
    );
  }

  // Regular tour display (for private, sharing, optional, transfer categories)
  return (
    <>
      <TourContainer>
        <BackButton to="/tours">
          <FiArrowLeft /> Back to Tours
        </BackButton>

        <TourHeader>
          <TourImage
            src={tour.image}
            alt={tour.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <TourInfo>
            <h1>{tour.name}</h1>
            {tour.description && <p>{tour.description}</p>}
            
            <MetaInfo>
              {tour.startPoint && (
                <MetaItem>
                  <FiMapPin /> {tour.startPoint}
                </MetaItem>
              )}
              {tour.time && (
                <MetaItem>
                  <FiClock /> {tour.time}
                </MetaItem>
              )}
              {tour.type && (
                <MetaItem>
                  {tour.type}
                </MetaItem>
              )}
            </MetaInfo>
            
            {tour.price && <PriceTag>{tour.price}</PriceTag>}
            
            <BookButton onClick={handleWhatsApp} style={{background: '#25D366'}}>
              Book this Tour
            </BookButton>
          </TourInfo>
        </TourHeader>

        {tour.itinerary && tour.itinerary.length > 0 && (
          <Section>
            <SectionTitle>Itinerary</SectionTitle>
            {tour.itinerary.map((item, index) => (
              <ItineraryItem key={index}>
                {item.time && <ItineraryTime>{item.time}</ItineraryTime>}
                <ItineraryTitle>{item.title}</ItineraryTitle>
                <ItineraryDescription>
                  {Array.isArray(item.description) 
                    ? item.description.map((desc, i) => (
                        <div key={i}>{desc}</div>
                      ))
                    : item.description
                  }
                </ItineraryDescription>
              </ItineraryItem>
            ))}
          </Section>
        )}

        {tour.inclusions && tour.inclusions.length > 0 && (
          <Section>
            <SectionTitle>What's Included</SectionTitle>
            <List>
              {tour.inclusions.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          </Section>
        )}

        {tour.whatToBring && tour.whatToBring.length > 0 && (
          <Section>
            <SectionTitle>What to Bring</SectionTitle>
            <List>
              {tour.whatToBring.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          </Section>
        )}

        {tour.OptionalAddOns && tour.OptionalAddOns.length > 0 && (
          <Section>
            <SectionTitle>Optional Add-Ons</SectionTitle>
            <List>
              {tour.OptionalAddOns.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          </Section>
        )}

        {tour.images && tour.images.length > 0 && (
          <Section>
            <SectionTitle>Gallery</SectionTitle>
            <Gallery>
              {tour.images.map((image, index) => (
                <GalleryImage
                  key={index}
                  src={image}
                  alt={`${tour.name} - ${index + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              ))}
            </Gallery>
          </Section>
        )}
      </TourContainer>
      <Footer />
    </>
  );
};

export default TourDetail;