// src/pages/SafariDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiMapPin } from 'react-icons/fi';
import { getSafariById } from '../safariData';
import Footer from '../components/Footer';

const SafariContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
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

const SafariHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SafariImage = styled(motion.img)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const SafariInfo = styled.div`
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

const ItineraryDay = styled.div`
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

const BookButton = styled(Link)`
  display: inline-block;
  background: #FF7D33;
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;
  margin-top: 20px;

  &:hover {
    background: #E56C2B;
  }
`;

const WildlifeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

const WildlifeItem = styled.div`
  background: #FFF8F0;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
`;

const SafariDetail = () => {
  const { id } = useParams();
  const safari = getSafariById(id);

  if (!safari) {
    return <div>Safari not found</div>;
  }

   const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello, I'm interested in the "${safari.name}" tour (ID: ${id}). Please provide more details.`);
    const phone = '+255616543216'; // Replace with your WhatsApp number (with country code, no +)
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <><SafariContainer>
      <BackButton to="/safaris">
        <FiArrowLeft /> Back to Safaris
      </BackButton>

      <SafariHeader>
        <SafariImage
          src={safari.image}
          alt={safari.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} />
        <SafariInfo>
          <h1>{safari.name}</h1>
          <p>{safari.description}</p>

          <MetaInfo>
            <MetaItem>
              <FiCalendar /> {safari.duration}
            </MetaItem>
            <MetaItem>
              <FiMapPin /> {safari.category === 'northern' ? 'Northern Tanzania' : 'Southern Tanzania'}
            </MetaItem>
            <MetaItem>
              {safari.type}
            </MetaItem>
          </MetaInfo>

          <PriceTag>{safari.price}</PriceTag>

          <BookButton as="button" type="button" onClick={handleWhatsApp} style={{marginLeft: 16, background: '#25D366'}}>
              Book this Tour
            </BookButton>
        </SafariInfo>
      </SafariHeader>

      <Section>
        <SectionTitle>Itinerary</SectionTitle>
        {safari.itinerary?.map((item, index) => (
          <ItineraryItem key={index}>
            <ItineraryDay>{item.day}</ItineraryDay>
            <ItineraryTitle>{item.title}</ItineraryTitle>
            <ItineraryDescription>{item.description}</ItineraryDescription>
          </ItineraryItem>
        ))}
      </Section>

      <Section>
        <SectionTitle>Wildlife You May See</SectionTitle>
        <WildlifeGrid>
          {safari.wildlife?.map((animal, index) => (
            <WildlifeItem key={index}>{animal}</WildlifeItem>
          ))}
        </WildlifeGrid>
      </Section>

      <Section>
        <SectionTitle>What's Included</SectionTitle>
        <List>
          {safari.inclusions?.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
      </Section>

      <Section>
        <SectionTitle>What to Bring</SectionTitle>
        <List>
          {safari.whatToBring?.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
      </Section>

      {safari.bestTimeToVisit && (
        <Section>
          <SectionTitle>Best Time to Visit</SectionTitle>
          <p>{safari.bestTimeToVisit}</p>
        </Section>
      )}

      {safari.images?.length > 0 && (
        <Section>
          <SectionTitle>Gallery</SectionTitle>
          <Gallery>
            {safari.images.map((image, index) => (
              <GalleryImage
                key={index}
                src={image}
                alt={`${safari.name} - ${index + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }} />
            ))}
          </Gallery>
        </Section>
      )}
    </SafariContainer><Footer /></>
  );
};

export default SafariDetail;