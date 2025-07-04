// src/components/Gallery/ImageGallery.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import GalleryModal from './GalleryModal';
import { color } from '../styles/color';
import safari1 from '../assets/image/safari1.jpg'; // Make sure this path and file exist
import safari2 from '../assets/image/safari2.jpg'; // Make sure this path and file exist
import safari3 from '../assets/image/safari3.jpg'; // Make sure this path and file exist
import safari4 from '../assets/image/safari4.jpg'; // Make sure this path and file exist
import safari5 from '../assets/image/safari5.jpg'; // Make sure this path and file exist
import safariBG from '../assets/image/safariBG.jpg'; // Make sure this path and file exist
import zanz1 from '../assets/image/zanz1.jpg'; // Make sure this path and file exist
import zanz2 from '../assets/image/zanz2.jpg'; // Make sure this path and file exist
import zanz3 from '../assets/image/zanz3.jpg'; // Make sure this path
import zanz4 from '../assets/image/zanz4.jpg'; // Make sure this path and file exist
import zanz5 from '../assets/image/zanz5.jpg'; // Make sure this path
import zanz6 from '../assets/image/zanz6.jpg'; // Make sure this path and file exist
import zanz7 from '../assets/image/zanz7.jpg'; // Make sure this path and file exist
import zanz8 from '../assets/image/zanz8.jpg'; // Make sure this path and file exist
import zanz9 from '../assets/image/zanz9.jpg'; // Make sure this path and file exist
import jozani1 from "../assets/image/jozani/jozani1.jpg";
import jozani2 from "../assets/image/jozani/jozani2.jpg";
import jozani3 from "../assets/image/jozani/jozani3.jpg";
import jozani4 from "../assets/image/jozani/jozani4.jpg";
import jozani5 from "../assets/image/jozani/jozani5.jpg";
import jozani6 from "../assets/image/jozani/jozani6.jpg";
import jozani7 from "../assets/image/jozani/jozani7.jpg";
import jozani from "../assets/image/jozani/jozani.jpg";
import spice from "../assets/image/spice/spice.jpg";
import spice1 from "../assets/image/spice/spice1.jpg";
import spice2 from "../assets/image/spice/spice2.jpg";
import spice3 from "../assets/image/spice/spice3.jpg";
import spice4 from "../assets/image/spice/spice4.jpg";
import spice5 from "../assets/image/spice/spice5.jpg";
import spice7 from "../assets/image/spice/spice7.jpg";
import stone from "../assets/image/stonetown/stonetown.jpg";
import stone2 from "../assets/image/stonetown/stonetown2.jpg";
import stone3 from "../assets/image/stonetown/stonetown3.jpg";
import stone4 from "../assets/image/stonetown/stonetown4.jpg";
import stone5 from "../assets/image/stonetown/stonetown5.avif";
import stone6 from "../assets/image/stonetown/stonetown6.jpg";
import stone7 from "../assets/image/stonetown/stonetown7.jpg";
import stone8 from "../assets/image/stonetown/stonetown8.jpg";
import stone10 from "../assets/image/stonetown/stonetown10.jpg";
import stone11 from "../assets/image/stonetown/stonetown11.jpg";
import stone13 from "../assets/image/stonetown/stonetown13.jpg";
import stone12 from "../assets/image/stonetown/stonetown12.jpg";
import mnemba from "../assets/image/mnemba/mnemba.jpg";
import mnemba1 from "../assets/image/mnemba/mnemba1.jpg";
import mnemba2 from "../assets/image/mnemba/mnemba2.jpg";
import mnemba3 from "../assets/image/mnemba/mnemba3.jpg";
import mnemba4 from "../assets/image/mnemba/mnemba4.jpg";
import mnemba5 from "../assets/image/mnemba/mnemba5.jpg";
import mnemba6 from "../assets/image/mnemba/mnemba6.jpg";
import mnemba7 from "../assets/image/mnemba/mnemba7.jpg";
import mnemba8 from "../assets/image/mnemba/mnemba8.jpg";
import mnemba9 from "../assets/image/mnemba/mnemba9.jpg";
import mnemba10 from "../assets/image/mnemba/mnemba10.jpg";
import mnemba11 from "../assets/image/mnemba/mnemba11.jpg";
import mnemba12 from "../assets/image/mnemba/mnemba12.jpg";
import mnemba13 from "../assets/image/mnemba/mnemba13.jpg";
import mnemba14 from "../assets/image/mnemba/mnemba14.jpg";
import nakupenda from "../assets/image/nakupenda/nakupendasandbank.jpg";
import nakupenda1 from "../assets/image/nakupenda/nalupenda1.jpg";
import nakupenda2 from "../assets/image/nakupenda/nakupenda6.jpg";
import nakupenda3 from "../assets/image/nakupenda/nakupenda5.jpg";
import nakupenda4 from "../assets/image/nakupenda/nakupenda2.jpg";
import prison from "../assets/image/prison/prisonisland.jpg";
import prison2 from "../assets/image/prison/prisonisland2.avif";
import prison3 from "../assets/image/prison/prisonisland3.jpg";
import prison4 from "../assets/image/prison/prisonisland4.jpg";
import prison5 from "../assets/image/prison/prisonisland5.jpg";
import prison6 from "../assets/image/prison/prisonisland6.jpg";
import prison7 from "../assets/image/prison/prisonisland7.jpg";
import rock from "../assets/image/rock/rock.jpg";
import rock1 from "../assets/image/rock/rock2.jpg";
import rock2 from "../assets/image/rock/rock2.jpg";
import rock3 from "../assets/image/rock/rock3.jpg";
import sunset from "../assets/image/sunset/sunset.jpg"
import sunset1 from "../assets/image/sunset/sunset1.jpg"
import sunset2 from "../assets/image/sunset/sunset2.jpg"
import sunset3 from "../assets/image/sunset/sunset3.jpg"
import sunset4 from "../assets/image/sunset/sunset4.jpg"
import sunset5 from "../assets/image/sunset/sunset5.jpg"
import sunset6 from "../assets/image/sunset/sunset6.jpg"
import sunset7 from "../assets/image/sunset/sunset7.jpg";
import sal1 from "../assets/image/Folder1/sal1.jpg"
import sal2 from "../assets/image/Folder1/sal2.jpg"
import sal3 from "../assets/image/Folder1/salaam.jpg"
import beach1 from "../assets/image/Folder1/beac.jpg"
import beach2 from "../assets/image/Folder1/beach.jpg"
import beach3 from "../assets/image/Folder1/beach2.jpg"
import beach4 from "../assets/image/Folder1/beach3.jpg"
import beach5 from "../assets/image/Folder1/beach4.jpg"
import beach6 from "../assets/image/Folder1/beach5.jpg"
import car1 from "../assets/image/Folder1/car.jpg"
import car2 from "../assets/image/Folder1/car1.jpg"
import car3 from "../assets/image/Folder1/car2.jpg"
import car4 from "../assets/image/Folder1/car3.jpg"
import car5 from "../assets/image/Folder1/car4.jpg"
import car6 from "../assets/image/Folder1/car6.jpg"
import safariBg from "../assets/image/Folder1/desti.jpg"
import farasi from "../assets/image/Folder1/farasi1.jpg"
import farasi1 from "../assets/image/Folder1/farasi2.jpg"
import farasi2 from "../assets/image/Folder1/farasi3.jpg"
import farasi3 from "../assets/image/Folder1/farasi4.jpg"
import farasi4 from "../assets/image/Folder1/farasi5.jpg"
import farasi5 from "../assets/image/Folder1/farasi6.jpg"
import farasi6 from "../assets/image/Folder1/farasi7.jpg"
import seaFood from "../assets/image/Folder1/seafood.jpg"
import blue1 from "../assets/image/Folder1/blue1.jpg"
import blue2 from "../assets/image/Folder1/blue2.jpg"
import blue3 from "../assets/image/Folder1/blue3.jpg"
import blue4 from "../assets/image/Folder1/blue4.jpg"
import kayaking from "../assets/image/Folder1/kayaking.jpg"
import quad from "../assets/image/Folder1/quad.jpg"
import maa1 from "../assets/image/Folder1/maa1.jpeg"
import maa2 from "../assets/image/Folder1/maa2.jpeg"
import maa3 from "../assets/image/Folder1/maa3.jpeg"
import maa4 from "../assets/image/Folder1/maa4.jpg"
import maa5 from "../assets/image/Folder1/maa5.jpg"
import pung1 from "../assets/image/Folder1/pung1.jpeg"
import pung2 from "../assets/image/Folder1/pung2.jpeg"
import pung3 from "../assets/image/Folder1/pung3.jpg"
import pung4 from "../assets/image/Folder1/pung4.jpg"



const images = [
  { id: 1, src: zanz1, alt: 'Zanzibar Beach', width: 350, height: 250 },
  { id: 2, src: zanz2, alt: 'Stone Town', width: 350, height: 220 },
  { id: 3, src: zanz3, alt: 'Spice Tour', width: 350, height: 260 },
  { id: 4, src: zanz4, alt: 'Dolphin Tour', width: 350, height: 210 },
  { id: 5, src: zanz5, alt: 'Sunset', width: 350, height: 270 },
  { id: 6, src: zanz6, alt: 'Zanzibar Food', width: 350, height: 230 },
  { id: 7, src: zanz7, alt: 'Local Market', width: 350, height: 240 },
  { id: 8, src: zanz8, alt: 'Architecture', width: 350, height: 200 },
  { id: 9, src: zanz9, alt: 'Local People', width: 350, height: 260 },
  { id: 10, src: safari1, alt: 'Safari Landscape', width: 350, height: 250 },
  { id: 11, src: safari2, alt: 'Safari Animals', width: 350, height: 220 },
  { id: 12, src: safari3, alt: 'Safari Sunset', width: 350, height: 260 },
  { id: 13, src: safari4, alt: 'Safari Wildlife', width: 350, height: 230 },
  { id: 14, src: safari5, alt: 'Safari Adventure', width: 350, height: 280 },
  { id: 15, src: safariBG, alt: 'Safari Beach', width: 350, height: 210 },
  { id: 16, src: jozani1, alt: 'Jozani Forest', width: 350, height: 250 },
  { id: 17, src: jozani2, alt: 'Jozani Mangroves', width: 350, height: 220 },
  { id: 18, src: jozani3, alt: 'Jozani Red Colobus', width: 350, height: 240 },
  { id: 19, src: jozani4, alt: 'Jozani Nature', width: 350, height: 230 },
  { id: 20, src: jozani5, alt: 'Jozani Wildlife', width: 350, height: 260 },
  { id: 21, src: jozani6, alt: 'Jozani Trails', width: 350, height: 210 },
  { id: 22, src: jozani7, alt: 'Jozani Forest Path', width: 350, height: 250 },
  { id: 23, src: jozani, alt: 'Jozani Forest Overview', width: 350, height: 240 },
  { id: 24, src: spice, alt: 'Spice Farm', width: 350, height: 270 },
  { id: 25, src: spice1, alt: 'Spice Tour', width: 350, height: 220 },
  { id: 26, src: spice2, alt: 'Spice Plants', width: 350, height: 240 },
  { id: 27, src: spice3, alt: 'Spice Harvest', width: 350, height: 230 },
  { id: 28, src: spice4, alt: 'Spice Market', width: 350, height: 260 },
  { id: 29, src: spice5, alt: 'Spice Plantation', width: 350, height: 210 },
  { id: 30, src: spice7, alt: 'Spice Tour Guide', width: 350, height: 250 },
  { id: 31, src: stone, alt: 'Stone Town', width: 350, height: 250 },
  { id: 32, src: stone2, alt: 'Stone Town Market', width: 350, height: 220 },
  { id: 33, src: stone3, alt: 'Stone Town Architecture', width: 350, height: 240 },
  { id: 34, src: stone4, alt: 'Stone Town Streets', width: 350, height: 230 },
  { id: 35, src: stone5, alt: 'Stone Town Sunset', width: 350, height: 260 },
  { id: 36, src: stone6, alt: 'Stone Town Culture', width: 350, height: 210 },
  { id: 37, src: stone7, alt: 'Stone Town History', width: 350, height: 250 },
  { id: 38, src: stone8, alt: 'Stone Town Beach', width: 350, height: 240 },
  { id: 39, src: stone10, alt: 'Stone Town Night', width: 350, height: 270 },
  { id: 40, src: stone11, alt: 'Stone Town People', width: 350, height: 220 },
  { id: 41, src: stone13, alt: 'Stone Town Overview', width: 350, height: 240 },
  { id: 42, src: stone12, alt: 'Stone Town Heritage', width: 350, height: 230 },
  { id: 43, src: mnemba, alt: 'Mnemba Island', width: 350, height: 260 },
  { id: 44, src: mnemba1, alt: 'Mnemba Beach', width: 350, height: 210 },
  { id: 45, src: mnemba2, alt: 'Mnemba Snorkeling', width: 350, height: 250 },
  { id: 46, src: mnemba3, alt: 'Mnemba Coral Reef', width: 350, height: 240 },
  { id: 47, src: mnemba4, alt: 'Mnemba Sunset', width: 350, height: 250 },
  { id: 48, src: mnemba5, alt: 'Mnemba Wildlife', width: 350, height: 220 },
  { id: 49, src: mnemba6, alt: 'Mnemba Island View', width: 350, height: 240 },
  { id: 50, src: mnemba7, alt: 'Mnemba Beach Walk', width: 350, height: 230 },
  { id: 51, src: mnemba8, alt: 'Mnemba Island Tour', width: 350, height: 260 },
  { id: 52, src: mnemba9, alt: 'Mnemba Coral Garden', width: 350, height: 210 },
  { id: 53, src: mnemba10, alt: 'Mnemba Island Resort', width: 350, height: 250 },
  { id: 54, src: mnemba11, alt: 'Mnemba Island Sunset', width: 350, height: 240 },
  { id: 55, src: mnemba12, alt: 'Mnemba Island Snorkel', width: 350, height: 270 },
  { id: 56, src: mnemba13, alt: 'Mnemba Island Beach', width: 350, height: 220 },
  { id: 57, src: mnemba14, alt: 'Mnemba Island Paradise', width: 350, height: 240 },
  { id: 58, src: nakupenda, alt: 'Nakupenda Sandbank', width: 350, height: 250 },
  { id: 59, src: nakupenda1, alt: 'Nakupenda Beach', width: 350, height: 220 },
  { id: 60, src: nakupenda2, alt: 'Nakupenda Sunset', width: 350, height: 240 },
  { id: 61, src: nakupenda3, alt: 'Nakupenda Snorkeling', width: 350, height: 230 },
  { id: 62, src: nakupenda4, alt: 'Nakupenda Island', width: 350, height: 260 },
  { id: 63, src: prison, alt: 'Prison Island', width: 350, height: 270 },
  { id: 64, src: prison2, alt: 'Prison Island Tortoises', width: 350, height: 220 },
  { id: 65, src: prison3, alt: 'Prison Island Ruins', width: 350, height: 240 },
  { id: 66, src: prison4, alt: 'Prison Island Beach', width: 350, height: 230 },
  { id: 67, src: prison5, alt: 'Prison Island Tour', width: 350, height: 260 },
  { id: 68, src: prison6, alt: 'Prison Island History', width: 350, height: 210 },
  { id: 69, src: prison7, alt: 'Prison Island Nature', width: 350, height: 250 },
  { id: 70, src: rock, alt: 'Rock Restaurant', width: 350, height: 250 },
  { id: 71, src: rock1, alt: 'Rock Restaurant View', width: 350, height: 220 },
  { id: 72, src: rock2, alt: 'Rock Restaurant Sunset', width: 350, height: 240 },
  { id: 73, src: rock3, alt: 'Rock Restaurant Dining', width: 350, height: 230 },
  { id: 74, src: sunset, alt: 'Zanzibar Sunset', width: 350, height: 260 },
  { id: 75, src: sunset1, alt: 'Zanzibar Beach Sunset', width: 350, height: 210 },
  { id: 76, src: sunset2, alt: 'Zanzibar Sunset View', width: 350, height: 250 },
  { id: 77, src: sunset3, alt: 'Zanzibar Sunset Colors', width: 350, height: 240 },
  { id: 78, src: sunset4, alt: 'Zanzibar Sunset Reflection', width: 350, height: 270 },
  { id: 79, src: sunset5, alt: 'Zanzibar Sunset Beach', width: 350, height: 220 },
  { id: 80, src: sunset6, alt: 'Zanzibar Sunset ', width: 350, height: 240 },
  { id: 81, src: sunset7, alt: 'Zanzibar Sunset ', width: 350, height: 230 },
  { id: 82, src: sal1, alt: 'Salaam cave', width: 350, height: 250 },
  { id: 83, src: sal2, alt: 'Salaam cave', width: 350, height: 220 },
  { id: 84, src: sal3, alt: 'Salaam cave', width: 350, height: 240 },
  { id: 85, src: beach1, alt: 'Beach ', width: 350, height: 230 },
  { id: 86, src: beach2, alt: 'Beach ', width: 350, height: 260 },
  { id: 87, src: beach3, alt: 'Beach ', width: 350, height: 210 },
  { id: 88, src: beach4, alt: 'Beach ', width: 350, height: 250 },
  { id: 89, src: beach5, alt: 'Beach ', width: 350, height: 220 },
  { id: 90, src: beach6, alt: 'Beach ', width: 350, height: 240 },
  { id: 91, src: car1, alt: 'Car ', width: 350, height: 230 },
  { id: 92, src: car2, alt: 'Car ', width: 350, height: 260 },
  { id: 93, src: car3, alt: 'Car ', width: 350, height: 210 },
  { id: 94, src: car4, alt: 'Car ', width: 350, height: 250 },
  { id: 95, src: car5, alt: 'Car ', width: 350, height: 220 },
  { id: 96, src: car6, alt: 'Car ', width: 350, height: 240 },
  { id: 98, src: farasi, alt: 'Farasi 1', width: 350, height: 260 },
  { id: 99, src: farasi1, alt: 'Farasi 2', width: 350, height: 210 },
  { id: 100, src: farasi2, alt: 'Farasi 3', width: 350, height: 250 },
  { id: 101, src: farasi3, alt: 'Farasi 4', width: 350, height: 220 },
  { id: 102, src: farasi4, alt: 'Farasi 5', width: 350, height: 240 },
  { id: 103, src: farasi5, alt: 'Farasi 6', width: 350, height: 230 },
  { id: 104, src: farasi6, alt: 'Farasi 7', width: 350, height: 260 },
  { id: 105, src: seaFood, alt: 'Seafood', width: 350, height: 210 },
  { id: 106, src: blue1, alt: 'Blue 1', width: 350, height: 250 },
  { id: 107, src: blue2, alt: 'Blue 2', width: 350, height: 220 },
  { id: 108, src: blue3, alt: 'Blue 3', width: 350, height: 240 },
  { id: 109, src: blue4, alt: 'Blue 4', width: 350, height: 230 },
  { id: 110, src: kayaking, alt: 'Kayaking', width: 350, height: 260 },
  { id: 111, src: quad, alt: 'Quad', width: 350, height: 210 },
  { id: 112, src: maa1, alt: 'Maalum cave ', width: 350, height: 250 },
  { id: 113, src: maa2, alt: 'Maalum cave', width: 350, height: 220 },
  { id: 114, src: maa3, alt: 'Maalum cave', width: 350, height: 240 },
  { id: 115, src: maa4, alt: 'Maalum cave', width: 350, height: 230 },
  { id: 116, src: maa5, alt: 'Maalum cave', width: 350, height: 260 },
  { id: 117, src: pung1, alt: 'Pungume island', width: 350, height: 210 },
  { id: 118, src: pung2, alt: 'Pungume island', width: 350, height: 250 },
  { id: 119, src: pung3, alt: 'Pungume island', width: 350, height: 220 },
  { id: 120, src: pung4, alt: 'Pungume island', width: 350, height: 240 },

  // Add more images as needed
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

  &:hover img {
    transform: scale(1.05);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <GalleryContainer id="image-gallery">
      <MasonryGrid>
        {images.map((image) => (
          <MasonryItem
            key={image.id}
            height={image.height}
            layoutId={`image-${image.id}`}
            onClick={() => openModal(image)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GalleryImage src={image.src} alt={image.alt} />
          </MasonryItem>
        ))}
      </MasonryGrid>

      {isModalOpen && (
        <GalleryModal
          item={selectedImage}
          type="image"
          onClose={closeModal}
        />
      )}
    </GalleryContainer>
  );
};

export default ImageGallery;