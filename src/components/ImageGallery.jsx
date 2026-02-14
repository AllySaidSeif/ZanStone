// src/components/Gallery/ImageGallery.js
import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiHeart, FiPlus, FiSearch } from 'react-icons/fi';
import { FaPinterest } from 'react-icons/fa';
import { color } from '../styles/color';

// Lazy load the modal
const GalleryModal = lazy(() => import('./GalleryModal'));

// Import all your images (keeping all imports as they were)
import safari1 from '../assets/image/safari1.jpg';
import safari2 from '../assets/image/safari2.jpg';
import safari3 from '../assets/image/safari3.jpg';
import safari4 from '../assets/image/safari4.jpg';
import safari5 from '../assets/image/safari5.jpg';
import safariBG from '../assets/image/safariBG.jpg';
import zanz1 from '../assets/image/zanz1.jpg';
import zanz2 from '../assets/image/zanz2.jpg';
import zanz3 from '../assets/image/zanz3.jpg';
import zanz4 from '../assets/image/zanz4.jpg';
import zanz5 from '../assets/image/zanz5.jpg';
import zanz6 from '../assets/image/zanz6.jpg';
import zanz7 from '../assets/image/zanz7.jpg';
import zanz8 from '../assets/image/zanz8.jpg';
import zanz9 from '../assets/image/zanz9.jpg';
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
import sunset from "../assets/image/sunset/sunset.jpg";
import sunset1 from "../assets/image/sunset/sunset1.jpg";
import sunset2 from "../assets/image/sunset/sunset2.jpg";
import sunset3 from "../assets/image/sunset/sunset3.jpg";
import sunset4 from "../assets/image/sunset/sunset4.jpg";
import sunset5 from "../assets/image/sunset/sunset5.jpg";
import sunset6 from "../assets/image/sunset/sunset6.jpg";
import sunset7 from "../assets/image/sunset/sunset7.jpg";
import sal1 from "../assets/image/Folder1/sal1.jpg";
import sal2 from "../assets/image/Folder1/sal2.jpg";
import sal3 from "../assets/image/Folder1/salaam.jpg";
import beach1 from "../assets/image/Folder1/beac.jpg";
import beach2 from "../assets/image/Folder1/beach.jpg";
import beach3 from "../assets/image/Folder1/beach2.jpg";
import beach4 from "../assets/image/Folder1/beach3.jpg";
import beach5 from "../assets/image/Folder1/beach4.jpg";
import beach6 from "../assets/image/Folder1/beach5.jpg";
import car1 from "../assets/image/Folder1/car.jpg";
import car2 from "../assets/image/Folder1/car1.jpg";
import car3 from "../assets/image/Folder1/car2.jpg";
import car4 from "../assets/image/Folder1/car3.jpg";
import car5 from "../assets/image/Folder1/car4.jpg";
import car6 from "../assets/image/Folder1/car6.jpg";
import safariBg from "../assets/image/Folder1/desti.jpg";
import farasi from "../assets/image/Folder1/farasi1.jpg";
import farasi1 from "../assets/image/Folder1/farasi2.jpg";
import farasi2 from "../assets/image/Folder1/farasi3.jpg";
import farasi3 from "../assets/image/Folder1/farasi4.jpg";
import farasi4 from "../assets/image/Folder1/farasi5.jpg";
import farasi5 from "../assets/image/Folder1/farasi6.jpg";
import farasi6 from "../assets/image/Folder1/farasi7.jpg";
import seaFood from "../assets/image/Folder1/seafood.jpg";
import blue1 from "../assets/image/Folder1/blue1.jpg";
import blue2 from "../assets/image/Folder1/blue2.jpg";
import blue3 from "../assets/image/Folder1/blue3.jpg";
import blue4 from "../assets/image/Folder1/blue4.jpg";
import kayaking from "../assets/image/Folder1/kayaking.jpg";
import quad from "../assets/image/Folder1/quad.jpg";
import maa1 from "../assets/image/Folder1/maa1.jpeg";
import maa2 from "../assets/image/Folder1/maa2.jpeg";
import maa3 from "../assets/image/Folder1/maa3.jpeg";
import maa4 from "../assets/image/Folder1/maa4.jpg";
import maa5 from "../assets/image/Folder1/maa5.jpg";
import pung1 from "../assets/image/Folder1/pung1.jpeg";
import pung2 from "../assets/image/Folder1/pung2.jpeg";
import pung3 from "../assets/image/Folder1/pung3.jpg";
import pung4 from "../assets/image/Folder1/pung4.jpg";
import adobe1 from "../assets/image/more/adobe1.jpg"
import adobe2 from "../assets/image/more/adobe2.jpg"
import adobe3 from "../assets/image/more/adobe3.jpg"
import adobe4 from "../assets/image/more/adobe4.jpg"
import adobe5 from "../assets/image/more/adobe5.jpg"
import adobe6 from "../assets/image/more/adobe6.jpg"
import adobe7 from "../assets/image/more/adobe7.jpg"
import adobe8 from "../assets/image/more/adobe8.jpg"
import adobe9 from "../assets/image/more/adobe9.jpg"
import adobe10 from "../assets/image/more/adobe10.jpg"
import adobe11 from "../assets/image/more/adobe11.jpg"
import adobe12 from "../assets/image/more/adobe12.jpg"
import adobe13 from "../assets/image/more/adobe13.jpg"
import adobe14 from "../assets/image/more/adobe14.jpg"
import adobe15 from "../assets/image/more/adobe15.jpg"
import adobe16 from "../assets/image/more/adobe16.jpg"
import adobe17 from "../assets/image/more/adobe17.jpg"
import adobe18 from "../assets/image/more/adobe18.jpg"
import adobe19 from "../assets/image/more/adobe19.jpg"
import adobe20 from "../assets/image/more/adobe20.jpg"
import adobe21 from "../assets/image/more/adobe21.jpg"
import adobe22 from "../assets/image/more/adobe22.jpg"
import adobe23 from "../assets/image/more/adobe23.jpg"
import adobe24 from "../assets/image/more/adobe24.jpg"
import adobe25 from "../assets/image/more/adobe25.jpg"
import adobe26 from "../assets/image/more/adobe26.jpg"
import sec1 from  "../assets/image/more/sec1.jpeg"
import sec3 from  "../assets/image/more/sec3.jpg"
import sec4 from  "../assets/image/more/sec4.jpg"
import sec5 from  "../assets/image/more/sec5.jpg"
import sec6 from  "../assets/image/more/sec6.jpg"
import sec7 from  "../assets/image/more/sec7.jpg"
import sec8 from  "../assets/image/more/sec8.jpg"
import sec9 from  "../assets/image/more/sec9.jpg"
import sec10 from  "../assets/image/more/sec10.jpg"
import sec11 from  "../assets/image/more/sec11.jpg"
import sec12 from  "../assets/image/more/sec12.jpg"
import sec13 from  "../assets/image/more/sec13.jpg"
import sec14 from  "../assets/image/more/sec14.jpg"
import sec15 from  "../assets/image/more/sec15.jpg"
import sec16 from  "../assets/image/more/sec16.jpg"
import sec17 from  "../assets/image/more/sec17.jpg"
import sec18 from  "../assets/image/more/sec18.jpg"
import sec19 from  "../assets/image/more/sec19.jpg"
import sec20 from  "../assets/image/more/sec20.jpg"
import sec21 from  "../assets/image/more/sec21.jpg"
import sec22 from  "../assets/image/more/sec22.jpg"
import sec23 from  "../assets/image/more/sec23.jpg"
import sec24 from  "../assets/image/more/sec24.jpg"
import sec25 from  "../assets/image/more/sec25.jpg"
import sec26 from  "../assets/image/more/sec26.jpg"
import sec27 from  "../assets/image/more/sec27.jpg"
import sec28 from  "../assets/image/more/sec28.jpg"
import sec29 from  "../assets/image/more/sec29.jpg"
import sec30 from  "../assets/image/more/sec30.jpg"
import sec31 from  "../assets/image/more/sec31.jpg"
import sec32 from  "../assets/image/more/sec32.jpg"
import sec33 from  "../assets/image/more/sec33.jpg"
import sec34 from  "../assets/image/more/sec34.jpg"
import sec35 from  "../assets/image/more/sec35.jpg"
import sec36 from  "../assets/image/more/sec36.jpg"
import sec37 from  "../assets/image/more/sec37.jpg"
import sec38 from  "../assets/image/more/sec38.jpg"
import sec39 from  "../assets/image/more/sec39.jpg"
import sec40 from  "../assets/image/more/sec40.jpg"
import sec41 from  "../assets/image/more/sec41.jpg"
import sec42 from  "../assets/image/more/sec42.jpg"
import sec43 from  "../assets/image/more/sec43.jpg"

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

// Optimized image configuration with lazy loading
const images = [
  // 2. Zanzibar Excursions (Water & Nature) - Adobe images
  { id: 0, src: adobe19, alt: 'safari-blue-zanzibar-dhow-tour', width: 350, height: 250, likes: 0, category: 'excursions' },
  { id: 1, src: adobe2, alt: 'prison-island-giant-tortoise-zanzibar', width: 350, height: 250, likes: 0, category: 'excursions' },
  { id: 2, src: adobe3, alt: 'nakupenda-sandbank-picnic-zanzibar', width: 350, height: 220, likes: 0, category: 'excursions' },
  { id: 3, src: adobe4, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 260, likes: 0, category: 'excursions' },
  { id: 4, src: adobe5, alt: 'jozani-forest-red-colobus-monkeys', width: 350, height: 210, likes: 0, category: 'excursions' },
  { id: 5, src: adobe6, alt: 'swimming-with-turtles-baraka-aquarium-zanzibar', width: 350, height: 270, likes: 0, category: 'excursions' },
  { id: 6, src: adobe7, alt: 'blue-lagoon-snorkeling-michamvi', width: 350, height: 230, likes: 0, category: 'excursions' },
  { id: 7, src: adobe8, alt: 'safari-blue-zanzibar-dhow-tour', width: 350, height: 240, likes: 0, category: 'excursions' },
  { id: 8, src: adobe9, alt: 'nakupenda-sandbank-picnic-zanzibar', width: 350, height: 200, likes: 0, category: 'excursions' },
  { id: 9, src: adobe10, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 260, likes: 0, category: 'excursions' },
  { id: 10, src: adobe11, alt: 'prison-island-giant-tortoise-zanzibar', width: 350, height: 250, likes: 0, category: 'excursions' },
  { id: 11, src: adobe12, alt: 'jozani-forest-red-colobus-monkeys', width: 350, height: 220, likes: 0, category: 'excursions' },
  { id: 12, src: adobe26, alt: 'blue-lagoon-snorkeling-michamvi', width: 350, height: 240, likes: 0, category: 'excursions' },
  { id: 13, src: adobe25, alt: 'swimming-with-turtles-baraka-aquarium-zanzibar', width: 350, height: 230, likes: 0, category: 'excursions' },
  
  // 1. Safaris & Wildlife (Tanzania Mainland)
  { id: 14, src: sec1, alt: 'mikumi-national-park-safari-tanzania', width: 350, height: 260, likes: 0, category: 'safari' },
  { id: 15, src: sec3, alt: 'selous-game-reserve-wildlife-safari', width: 350, height: 250, likes: 0, category: 'safari' },
  { id: 16, src: sec4, alt: 'serengeti-national-park-wildebeest-migration', width: 350, height: 240, likes: 0, category: 'safari' },
  { id: 17, src: sec5, alt: 'tanzania-safari-tour-zanstone-vehicles', width: 350, height: 260, likes: 0, category: 'safari' },
  { id: 18, src: sec6, alt: 'ngorongoro-crater-safari-tours-tanzania', width: 350, height: 250, likes: 0, category: 'safari' },
  { id: 19, src: sec7, alt: 'ruaha-national-park-day-trip-safari', width: 350, height: 240, likes: 0, category: 'safari' },
  { id: 20, src: sec8, alt: 'tarangire-national-park-elephant-safari', width: 350, height: 260, likes: 0, category: 'safari' },
  { id: 21, src: sec9, alt: 'mikumi-national-park-safari-tanzania', width: 350, height: 250, likes: 0, category: 'safari' },
  { id: 22, src: sec10, alt: 'selous-game-reserve-wildlife-safari', width: 350, height: 240, likes: 0, category: 'safari' },
  { id: 23, src: sec11, alt: 'serengeti-national-park-wildebeest-migration', width: 350, height: 260, likes: 0, category: 'safari' },
  { id: 24, src: sec12, alt: 'tanzania-safari-tour-zanstone-vehicles', width: 350, height: 210, likes: 0, category: 'safari' },
  { id: 25, src: sec13, alt: 'ngorongoro-crater-safari-tours-tanzania', width: 350, height: 230, likes: 0, category: 'safari' },
  { id: 26, src: sec14, alt: 'ruaha-national-park-day-trip-safari', width: 350, height: 250, likes: 0, category: 'safari' },
  { id: 27, src: sec15, alt: 'tarangire-national-park-elephant-safari', width: 350, height: 220, likes: 0, category: 'safari' },
  { id: 28, src: sec16, alt: 'mikumi-national-park-safari-tanzania', width: 350, height: 240, likes: 0, category: 'safari' },
  { id: 29, src: sec17, alt: 'selous-game-reserve-wildlife-safari', width: 350, height: 260, likes: 0, category: 'safari' },
  { id: 30, src: sec18, alt: 'serengeti-national-park-wildebeest-migration', width: 350, height: 250, likes: 0, category: 'safari' },
  { id: 31, src: sec19, alt: 'tanzania-safari-tour-zanstone-vehicles', width: 350, height: 220, likes: 0, category: 'safari' },
  { id: 32, src: sec20, alt: 'ngorongoro-crater-safari-tours-tanzania', width: 350, height: 240, likes: 0, category: 'safari' },
  { id: 33, src: sec21, alt: 'ruaha-national-park-day-trip-safari', width: 350, height: 260, likes: 0, category: 'safari' },
  { id: 34, src: sec22, alt: 'tarangire-national-park-elephant-safari', width: 350, height: 250, likes: 0, category: 'safari' },
  { id: 35, src: sec23, alt: 'mikumi-national-park-safari-tanzania', width: 350, height: 220, likes: 0, category: 'safari' },
  { id: 36, src: sec24, alt: 'selous-game-reserve-wildlife-safari', width: 350, height: 240, likes: 0, category: 'safari' },
  { id: 37, src: sec25, alt: 'serengeti-national-park-wildebeest-migration', width: 350, height: 260, likes: 0, category: 'safari' },
  { id: 38, src: sec26, alt: 'tanzania-safari-tour-zanstone-vehicles', width: 350, height: 250, likes: 0, category: 'safari' },
  { id: 39, src: sec27, alt: 'ngorongoro-crater-safari-tours-tanzania', width: 350, height: 220, likes: 0, category: 'safari' },
  { id: 40, src: sec28, alt: 'ruaha-national-park-day-trip-safari', width: 350, height: 240, likes: 0, category: 'safari' },
  { id: 41, src: sec29, alt: 'tarangire-national-park-elephant-safari', width: 350, height: 260, likes: 0, category: 'safari' },
  { id: 42, src: sec30, alt: 'mikumi-national-park-safari-tanzania', width: 350, height: 250, likes: 0, category: 'safari' },
  { id: 43, src: sec31, alt: 'selous-game-reserve-wildlife-safari', width: 350, height: 220, likes: 0, category: 'safari' },
  { id: 44, src: sec32, alt: 'serengeti-national-park-wildebeest-migration', width: 350, height: 240, likes: 0, category: 'safari' },
  { id: 45, src: sec33, alt: 'tanzania-safari-tour-zanstone-vehicles', width: 350, height: 260, likes: 0, category: 'safari' },
  { id: 46, src: sec34, alt: 'ngorongoro-crater-safari-tours-tanzania', width: 350, height: 250, likes: 0, category: 'safari' },
  { id: 47, src: sec35, alt: 'ruaha-national-park-day-trip-safari', width: 350, height: 220, likes: 0, category: 'safari' },
  { id: 48, src: sec36, alt: 'tarangire-national-park-elephant-safari', width: 350, height: 240, likes: 0, category: 'safari' },
  { id: 49, src: sec37, alt: 'mikumi-national-park-safari-tanzania', width: 350, height: 260, likes: 0, category: 'safari' },
  { id: 50, src: sec38, alt: 'selous-game-reserve-wildlife-safari', width: 350, height: 250, likes: 0, category: 'safari' },
  { id: 51, src: sec39, alt: 'serengeti-national-park-wildebeest-migration', width: 350, height: 220, likes: 0, category: 'safari' },
  { id: 52, src: sec40, alt: 'tanzania-safari-tour-zanstone-vehicles', width: 350, height: 240, likes: 0, category: 'safari' },
  { id: 53, src: sec41, alt: 'ngorongoro-crater-safari-tours-tanzania', width: 350, height: 260, likes: 0, category: 'safari' },
  { id: 54, src: sec42, alt: 'ruaha-national-park-day-trip-safari', width: 350, height: 250, likes: 0, category: 'safari' },
  { id: 55, src: sec43, alt: 'tarangire-national-park-elephant-safari', width: 350, height: 220, likes: 0, category: 'safari' },
  
  // 2. Zanzibar Excursions (Continued)
  { id: 56, src: adobe24, alt: 'safari-blue-zanzibar-dhow-tour', width: 350, height: 280, likes: 0, category: 'excursions' },
  { id: 57, src: adobe23, alt: 'prison-island-giant-tortoise-zanzibar', width: 350, height: 210, likes: 0, category: 'excursions' },
  { id: 58, src: adobe13, alt: 'nakupenda-sandbank-picnic-zanzibar', width: 350, height: 260, likes: 0, category: 'excursions' },
  { id: 59, src: adobe14, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 230, likes: 0, category: 'excursions' },
  { id: 60, src: adobe15, alt: 'jozani-forest-red-colobus-monkeys', width: 350, height: 280, likes: 0, category: 'excursions' },
  { id: 61, src: adobe16, alt: 'swimming-with-turtles-baraka-aquarium-zanzibar', width: 350, height: 210, likes: 0, category: 'excursions' },
  { id: 62, src: adobe17, alt: 'blue-lagoon-snorkeling-michamvi', width: 350, height: 250, likes: 0, category: 'excursions' },
  { id: 63, src: adobe18, alt: 'safari-blue-zanzibar-dhow-tour', width: 350, height: 220, likes: 0, category: 'excursions' },
  { id: 64, src: adobe1, alt: 'prison-island-giant-tortoise-zanzibar', width: 350, height: 260, likes: 0, category: 'excursions' },
  { id: 65, src: adobe20, alt: 'nakupenda-sandbank-picnic-zanzibar', width: 350, height: 230, likes: 0, category: 'excursions' },
  { id: 66, src: adobe21, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 280, likes: 0, category: 'excursions' },
  { id: 67, src: adobe22, alt: 'jozani-forest-red-colobus-monkeys', width: 350, height: 210, likes: 0, category: 'excursions' },
  
  // 1. Safaris & Wildlife - Safari background
  { id: 145, src: safariBg, alt: 'tanzania-safari-tour-zanstone-vehicles', width: 350, height: 250, likes: 0, category: 'safari' },
  { id: 146, src: farasi, alt: 'mikumi-national-park-safari-tanzania', width: 350, height: 220, likes: 0, category: 'safari' },
  { id: 147, src: farasi1, alt: 'selous-game-reserve-wildlife-safari', width: 350, height: 230, likes: 0, category: 'safari' },
  { id: 148, src: farasi2, alt: 'serengeti-national-park-wildebeest-migration', width: 350, height: 280, likes: 0, category: 'safari' },
  { id: 149, src: farasi3, alt: 'ngorongoro-crater-safari-tours-tanzania', width: 350, height: 210, likes: 0, category: 'safari' },
  { id: 150, src: farasi4, alt: 'ruaha-national-park-day-trip-safari', width: 350, height: 240, likes: 0, category: 'safari' },
  { id: 151, src: farasi5, alt: 'tarangire-national-park-elephant-safari', width: 350, height: 260, likes: 0, category: 'safari' },
  { id: 152, src: farasi6, alt: 'mikumi-national-park-safari-tanzania', width: 350, height: 250, likes: 0, category: 'safari' },
  
  // 4. Logistics & Transfers
  { id: 139, src: car1, alt: 'zanzibar-airport-transfer-zanstone-tours', width: 350, height: 220, likes: 0, category: 'transfers' },
  { id: 140, src: car2, alt: 'private-car-rental-zanzibar-with-driver', width: 350, height: 230, likes: 0, category: 'transfers' },
  { id: 141, src: car3, alt: 'ferry-terminal-transfer-stone-town', width: 350, height: 280, likes: 0, category: 'transfers' },
  { id: 142, src: car4, alt: 'zanzibar-airport-transfer-zanstone-tours', width: 350, height: 210, likes: 0, category: 'transfers' },
  { id: 143, src: car5, alt: 'private-car-rental-zanzibar-with-driver', width: 350, height: 240, likes: 0, category: 'transfers' },
  { id: 144, src: car6, alt: 'ferry-terminal-transfer-stone-town', width: 350, height: 260, likes: 0, category: 'transfers' },
  
  // 2. Zanzibar Excursions - Jozani Forest
  { id: 68, src: jozani5, alt: 'jozani-forest-red-colobus-monkeys', width: 350, height: 280, likes: 0, category: 'excursions' },
  { id: 69, src: jozani6, alt: 'jozani-forest-red-colobus-monkeys', width: 350, height: 210, likes: 0, category: 'excursions' },
  { id: 70, src: jozani7, alt: 'jozani-forest-red-colobus-monkeys', width: 350, height: 240, likes: 0, category: 'excursions' },
  { id: 71, src: jozani, alt: 'jozani-forest-red-colobus-monkeys', width: 350, height: 260, likes: 0, category: 'excursions' },
  
  // 3. Culture, History & Sightseeing - Spice Plantation
  { id: 72, src: spice, alt: 'zanzibar-spice-farm-tour-experience', width: 350, height: 250, likes: 0, category: 'culture' },
  { id: 73, src: spice1, alt: 'zanzibar-spice-farm-tour-experience', width: 350, height: 220, likes: 0, category: 'culture' },
  { id: 74, src: spice2, alt: 'zanzibar-spice-farm-tour-experience', width: 350, height: 260, likes: 0, category: 'culture' },
  { id: 75, src: spice3, alt: 'zanzibar-spice-farm-tour-experience', width: 350, height: 230, likes: 0, category: 'culture' },
  { id: 76, src: spice4, alt: 'zanzibar-spice-farm-tour-experience', width: 350, height: 280, likes: 0, category: 'culture' },
  { id: 77, src: spice5, alt: 'zanzibar-spice-farm-tour-experience', width: 350, height: 210, likes: 0, category: 'culture' },
  { id: 78, src: spice7, alt: 'zanzibar-spice-farm-tour-experience', width: 350, height: 240, likes: 0, category: 'culture' },
  
  // 3. Culture, History & Sightseeing - Stone Town
  { id: 79, src: stone, alt: 'stone-town-walking-tour-historical-sites', width: 350, height: 260, likes: 0, category: 'culture' },
  { id: 80, src: stone2, alt: 'stone-town-walking-tour-historical-sites', width: 350, height: 250, likes: 0, category: 'culture' },
  { id: 81, src: stone3, alt: 'stone-town-walking-tour-historical-sites', width: 350, height: 220, likes: 0, category: 'culture' },
  { id: 82, src: stone4, alt: 'stone-town-walking-tour-historical-sites', width: 350, height: 240, likes: 0, category: 'culture' },
  { id: 83, src: stone5, alt: 'stone-town-walking-tour-historical-sites', width: 350, height: 230, likes: 0, category: 'culture' },
  { id: 84, src: stone6, alt: 'stone-town-walking-tour-historical-sites', width: 350, height: 280, likes: 0, category: 'culture' },
  { id: 85, src: stone7, alt: 'stone-town-walking-tour-historical-sites', width: 350, height: 210, likes: 0, category: 'culture' },
  { id: 86, src: stone8, alt: 'stone-town-walking-tour-historical-sites', width: 350, height: 260, likes: 0, category: 'culture' },
  { id: 87, src: stone10, alt: 'stone-town-walking-tour-historical-sites', width: 350, height: 250, likes: 0, category: 'culture' },
  { id: 88, src: stone11, alt: 'stone-town-walking-tour-historical-sites', width: 350, height: 220, likes: 0, category: 'culture' },
  { id: 89, src: stone12, alt: 'stone-town-walking-tour-historical-sites', width: 350, height: 240, likes: 0, category: 'culture' },
  { id: 90, src: stone13, alt: 'stone-town-walking-tour-historical-sites', width: 350, height: 230, likes: 0, category: 'culture' },
  
  // 2. Zanzibar Excursions - Mnemba Island
  { id: 91, src: mnemba, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 280, likes: 0, category: 'excursions' },
  { id: 92, src: mnemba1, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 210, likes: 0, category: 'excursions' },
  { id: 93, src: mnemba2, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 240, likes: 0, category: 'excursions' },
  { id: 94, src: mnemba3, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 260, likes: 0, category: 'excursions' },
  { id: 95, src: mnemba4, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 250, likes: 0, category: 'excursions' },
  { id: 96, src: mnemba5, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 220, likes: 0, category: 'excursions' },
  { id: 97, src: mnemba6, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 230, likes: 0, category: 'excursions' },
  { id: 98, src: mnemba7, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 280, likes: 0, category: 'excursions' },
  { id: 99, src: mnemba8, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 210, likes: 0, category: 'excursions' },
  { id: 100, src: mnemba9, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 240, likes: 0, category: 'excursions' },
  { id: 101, src: mnemba10, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 260, likes: 0, category: 'excursions' },
  { id: 102, src: mnemba11, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 250, likes: 0, category: 'excursions' },
  { id: 103, src: mnemba12, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 220, likes: 0, category: 'excursions' },
  { id: 104, src: mnemba13, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 230, likes: 0, category: 'excursions' },
  { id: 105, src: mnemba14, alt: 'mnemba-island-snorkeling-tour-zanzibar', width: 350, height: 280, likes: 0, category: 'excursions' },
  
  // 2. Zanzibar Excursions - Nakupenda Sandbank
  { id: 106, src: nakupenda, alt: 'nakupenda-sandbank-picnic-zanzibar', width: 350, height: 210, likes: 0, category: 'excursions' },
  { id: 107, src: nakupenda1, alt: 'nakupenda-sandbank-picnic-zanzibar', width: 350, height: 240, likes: 0, category: 'excursions' },
  { id: 108, src: nakupenda2, alt: 'nakupenda-sandbank-picnic-zanzibar', width: 350, height: 260, likes: 0, category: 'excursions' },
  { id: 109, src: nakupenda3, alt: 'nakupenda-sandbank-picnic-zanzibar', width: 350, height: 250, likes: 0, category: 'excursions' },
  { id: 110, src: nakupenda4, alt: 'nakupenda-sandbank-picnic-zanzibar', width: 350, height: 220, likes: 0, category: 'excursions' },
  
  // 2. Zanzibar Excursions - Prison Island
  { id: 111, src: prison, alt: 'prison-island-giant-tortoise-zanzibar', width: 350, height: 230, likes: 0, category: 'excursions' },
  { id: 112, src: prison2, alt: 'prison-island-giant-tortoise-zanzibar', width: 350, height: 280, likes: 0, category: 'excursions' },
  { id: 113, src: prison3, alt: 'prison-island-giant-tortoise-zanzibar', width: 350, height: 210, likes: 0, category: 'excursions' },
  { id: 114, src: prison4, alt: 'prison-island-giant-tortoise-zanzibar', width: 350, height: 240, likes: 0, category: 'excursions' },
  { id: 115, src: prison5, alt: 'prison-island-giant-tortoise-zanzibar', width: 350, height: 260, likes: 0, category: 'excursions' },
  { id: 116, src: prison6, alt: 'prison-island-giant-tortoise-zanzibar', width: 350, height: 250, likes: 0, category: 'excursions' },
  { id: 117, src: prison7, alt: 'prison-island-giant-tortoise-zanzibar', width: 350, height: 220, likes: 0, category: 'excursions' },
  
  // 3. Culture, History & Sightseeing - The Rock Restaurant
  { id: 118, src: rock, alt: 'the-rock-restaurant-zanzibar-view', width: 350, height: 230, likes: 0, category: 'culture' },
  { id: 119, src: rock1, alt: 'the-rock-restaurant-zanzibar-view', width: 350, height: 280, likes: 0, category: 'culture' },
  { id: 120, src: rock2, alt: 'the-rock-restaurant-zanzibar-view', width: 350, height: 210, likes: 0, category: 'culture' },
  { id: 121, src: rock3, alt: 'the-rock-restaurant-zanzibar-view', width: 350, height: 240, likes: 0, category: 'culture' },
  
  // 3. Culture, History & Sightseeing - Sunset/Kendwa
  { id: 122, src: sunset, alt: 'kendwa-sunset-cruise-zanzibar-luxury', width: 350, height: 260, likes: 0, category: 'culture' },
  { id: 123, src: sunset1, alt: 'kendwa-sunset-cruise-zanzibar-luxury', width: 350, height: 250, likes: 0, category: 'culture' },
  { id: 124, src: sunset2, alt: 'kendwa-sunset-cruise-zanzibar-luxury', width: 350, height: 220, likes: 0, category: 'culture' },
  { id: 125, src: sunset3, alt: 'kendwa-sunset-cruise-zanzibar-luxury', width: 350, height: 230, likes: 0, category: 'culture' },
  { id: 126, src: sunset4, alt: 'kendwa-sunset-cruise-zanzibar-luxury', width: 350, height: 280, likes: 0, category: 'culture' },
  { id: 127, src: sunset5, alt: 'kendwa-sunset-cruise-zanzibar-luxury', width: 350, height: 210, likes: 0, category: 'culture' },
  { id: 128, src: sunset6, alt: 'kendwa-sunset-cruise-zanzibar-luxury', width: 350, height: 240, likes: 0, category: 'culture' },
  { id: 129, src: sunset7, alt: 'kendwa-sunset-cruise-zanzibar-luxury', width: 350, height: 260, likes: 0, category: 'culture' },
  
  // 2. Zanzibar Excursions - Safari Blue & Beach Activities
  { id: 130, src: sal1, alt: 'safari-blue-zanzibar-dhow-tour', width: 350, height: 250, likes: 0, category: 'excursions' },
  { id: 131, src: sal2, alt: 'safari-blue-zanzibar-dhow-tour', width: 350, height: 220, likes: 0, category: 'excursions' },
  { id: 132, src: sal3, alt: 'safari-blue-zanzibar-dhow-tour', width: 350, height: 260, likes: 0, category: 'excursions' },
  { id: 133, src: beach1, alt: 'paje-beach-kite-surfing-zanzibar', width: 350, height: 230, likes: 0, category: 'excursions' },
  { id: 134, src: beach2, alt: 'nungwi-village-tour-zanzibar', width: 350, height: 280, likes: 0, category: 'excursions' },
  { id: 135, src: beach3, alt: 'paje-beach-kite-surfing-zanzibar', width: 350, height: 210, likes: 0, category: 'excursions' },
  { id: 136, src: beach4, alt: 'nungwi-village-tour-zanzibar', width: 350, height: 240, likes: 0, category: 'excursions' },
  { id: 137, src: beach5, alt: 'paje-beach-kite-surfing-zanzibar', width: 350, height: 260, likes: 0, category: 'excursions' },
  { id: 138, src: beach6, alt: 'nungwi-village-tour-zanzibar', width: 350, height: 250, likes: 0, category: 'excursions' },
  
  // 2. Zanzibar Excursions - Food & Water Activities
  { id: 153, src: seaFood, alt: 'safari-blue-zanzibar-dhow-tour', width: 350, height: 220, likes: 0, category: 'excursions' },
  { id: 154, src: blue1, alt: 'blue-lagoon-snorkeling-michamvi', width: 350, height: 230, likes: 0, category: 'excursions' },
  { id: 155, src: blue2, alt: 'blue-lagoon-snorkeling-michamvi', width: 350, height: 280, likes: 0, category: 'excursions' },
  { id: 156, src: blue3, alt: 'blue-lagoon-snorkeling-michamvi', width: 350, height: 210, likes: 0, category: 'excursions' },
  { id: 157, src: blue4, alt: 'blue-lagoon-snorkeling-michamvi', width: 350, height: 240, likes: 0, category: 'excursions' },
  { id: 158, src: kayaking, alt: 'safari-blue-zanzibar-dhow-tour', width: 350, height: 260, likes: 0, category: 'excursions' },
  { id: 159, src: quad, alt: 'safari-blue-zanzibar-dhow-tour', width: 350, height: 250, likes: 0, category: 'excursions' },
  
  // 3. Culture, History & Sightseeing - Maasai & Cultural
  { id: 160, src: maa1, alt: 'zanzibar-spice-farm-tour-experience', width: 350, height: 220, likes: 0, category: 'culture' },
  { id: 161, src: maa2, alt: 'zanzibar-spice-farm-tour-experience', width: 350, height: 230, likes: 0, category: 'culture' },
  { id: 162, src: maa3, alt: 'zanzibar-spice-farm-tour-experience', width: 350, height: 280, likes: 0, category: 'culture' },
  { id: 163, src: maa4, alt: 'zanzibar-spice-farm-tour-experience', width: 350, height: 210, likes: 0, category: 'culture' },
  { id: 164, src: maa5, alt: 'zanzibar-spice-farm-tour-experience', width: 350, height: 240, likes: 0, category: 'culture' },
  
  // 2. Zanzibar Excursions - Punge Sandbank
  { id: 165, src: pung1, alt: 'nakupenda-sandbank-picnic-zanzibar', width: 350, height: 260, likes: 0, category: 'excursions' },
  { id: 166, src: pung2, alt: 'nakupenda-sandbank-picnic-zanzibar', width: 350, height: 250, likes: 0, category: 'excursions' },
  { id: 167, src: pung3, alt: 'nakupenda-sandbank-picnic-zanzibar', width: 350, height: 220, likes: 0, category: 'excursions' },
  { id: 168, src: pung4, alt: 'nakupenda-sandbank-picnic-zanzibar', width: 350, height: 230, likes: 0, category: 'excursions' },
];

// Rest of the styled components remain the same...
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

  @media (min-width: 1536px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 18px;
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

const ItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${GalleryItem}:hover & {
    transform: scale(1.05);
  }
`;

// Skeleton loader component for better UX while images load
const SkeletonLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  
  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

// Optimized image component with lazy loading
const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <div ref={imgRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      {!isLoaded && <SkeletonLoader />}
      {imageSrc && (
        <ItemImage
          src={imageSrc}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [likedImages, setLikedImages] = useState(new Set());
  const [favoriteImages, setFavoriteImages] = useState(new Set());
  const [visibleCount, setVisibleCount] = useState(24); // Show only 24 images initially

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteImages');
    if (savedFavorites) {
      setFavoriteImages(new Set(JSON.parse(savedFavorites)));
    }
  }, []);

  // Save favorites to localStorage whenever favoriteImages changes
  useEffect(() => {
    localStorage.setItem('favoriteImages', JSON.stringify([...favoriteImages]));
  }, [favoriteImages]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 500
      ) {
        setVisibleCount(prev => Math.min(prev + 12, images.length));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const toggleLike = (imageId, e) => {
    e.stopPropagation();
    setLikedImages(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(imageId)) {
        newLiked.delete(imageId);
      } else {
        newLiked.add(imageId);
      }
      return newLiked;
    });
  };

  const toggleFavorite = (imageId, e) => {
    e.stopPropagation();
    setFavoriteImages(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(imageId)) {
        newFavorites.delete(imageId);
      } else {
        newFavorites.add(imageId);
      }
      return newFavorites;
    });
  };

  // Memoize filtered images to prevent unnecessary recalculations
  const filteredImages = useMemo(() => {
    return images
      .filter(image => image.alt.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, visibleCount);
  }, [searchQuery, visibleCount]);

  // Reset visible count when search query changes
  useEffect(() => {
    setVisibleCount(24);
  }, [searchQuery]);

  const totalLikes = useMemo(() => {
    return images.reduce((sum, image) => sum + image.likes, 0);
  }, []);

  return (
    <>
      <GalleryContainer id="image-gallery">
        <HeaderSection>
          <h1 style={{
            fontSize: '1.8rem',
            background: 'linear-gradient(135deg, #333, #e64900ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '6px',
            fontWeight: '700'
          }}>
            Discover Zanzibar
          </h1>
          <p style={{ 
            color: '#666', 
            fontSize: '0.9rem',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.4'
          }}>
            Explore beautiful photos from Safari, Stone Town, Beaches and more
          </p>
        </HeaderSection>

        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search photos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon>
            <FiSearch />
          </SearchIcon>
        </SearchContainer>

        <GalleryGrid>
          {filteredImages.map((image) => (
            <GalleryItem
              key={image.id}
              layoutId={`image-${image.id}`}
              onClick={() => openModal(image)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LazyImage src={image.src} alt={image.alt} />
            </GalleryItem>
          ))}
        </GalleryGrid>

        {filteredImages.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px 20px',
            color: '#666',
            fontSize: '1.1rem'
          }}>
            No images found. Try searching for something else!
          </div>
        )}

        {isModalOpen && (
          <Suspense fallback={<div>Loading...</div>}>
            <GalleryModal
              item={selectedImage}
              type="image"
              onClose={closeModal}
            />
          </Suspense>
        )}
      </GalleryContainer>
    </>
  );
};

export default ImageGallery;