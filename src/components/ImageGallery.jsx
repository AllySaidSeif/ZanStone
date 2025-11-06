// src/components/Gallery/ImageGallery.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiHeart, FiPlus, FiSearch } from 'react-icons/fi';
import { FaPinterest } from 'react-icons/fa';
import GalleryModal from './GalleryModal';
import { color } from '../styles/color';

// Import all your images
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

const images = [
  { id: 0, src: adobe19, alt: 'Adobe 1', width: 350, height: 250, likes: 0 },
  { id: 1, src: adobe2, alt: 'Adobe 2', width: 350, height: 250, likes: 0 },
  { id: 2, src: adobe3, alt: 'Adobe 3', width: 350, height: 220, likes: 0 },
  { id: 3, src: adobe4, alt: 'Adobe 4', width: 350, height: 260, likes: 0 },
  { id: 4, src: adobe5, alt: 'Adobe 5', width: 350, height: 210, likes: 0 },
  { id: 5, src: adobe6, alt: 'Adobe 6', width: 350, height: 270, likes: 0 },
  { id: 6, src: adobe7, alt: 'Adobe 7', width: 350, height: 230, likes: 0 },
  { id: 7, src: adobe8, alt: 'Adobe 8', width: 350, height: 240, likes: 0 },
  { id: 8, src: adobe9, alt: 'Adobe 9', width: 350, height: 200, likes: 0 },
  { id: 9, src: adobe10, alt: 'Adobe 10', width: 350, height: 260, likes: 0 },
  { id: 10, src: adobe11, alt: 'Adobe 11', width: 350, height: 250, likes: 0 },
  { id: 11, src: adobe12, alt: 'Adobe 12', width: 350, height: 220, likes: 0 },
  {id : 12, src: adobe26, alt: 'Adobe 12b', width: 350, height: 240, likes: 0 }, 
  {id : 13, src: adobe25, alt: 'Adobe 12c', width: 350, height: 230, likes: 0 },
  {id : 14, src: sec1, alt: 'Sec1', width: 350, height: 260, likes: 0 },
  {id : 15, src: sec3, alt: 'Sec3', width: 350, height: 250, likes: 0 },
  {id : 16, src: sec4, alt: 'Sec2', width: 350, height: 240, likes: 0 },
  {id : 17, src: sec5, alt: 'Sec5', width: 350, height: 260, likes: 0 },
  {id : 18, src: sec6, alt: 'Sec6', width: 350, height: 250, likes: 0 },
  {id : 19, src: sec7, alt: 'Sec7', width: 350, height: 240, likes: 0 },
  {id : 20, src: sec8, alt: 'Sec8', width: 350, height: 260, likes: 0 },
  {id : 21, src: sec9, alt: 'Sec9', width: 350, height: 250, likes: 0 },
  {id : 22, src: sec10, alt: 'Sec10', width: 350, height: 240, likes: 0 },
  {id : 23, src: sec11, alt: 'Sec11', width: 350, height: 260, likes: 0 },
  {id : 24, src: sec12, alt: 'Sec12', width: 350, height: 210, likes: 0 },
  {id : 25, src: sec13, alt: 'Sec13', width: 350, height: 230, likes: 0 },
  {id : 26, src: sec14, alt: 'Sec14', width: 350, height: 250, likes: 0 },
  {id : 27, src: sec15, alt: 'Sec15', width: 350, height: 220, likes: 0 },
  {id : 28, src: sec16, alt: 'Sec16', width: 350, height: 240, likes: 0 },
  {id : 29, src: sec17, alt: 'Sec17', width: 350, height: 260, likes: 0 },
  {id : 30, src: sec18, alt: 'Sec18', width: 350, height: 250, likes: 0 },
  {id : 31, src: sec19, alt: 'Sec19', width: 350, height: 220, likes: 0 },
  {id : 32, src: sec20, alt: 'Sec20', width: 350, height: 240, likes: 0 },
  {id : 33, src: sec21, alt: 'Sec21', width: 350, height: 260, likes: 0 },
  {id : 34, src: sec22, alt: 'Sec22', width: 350, height: 250, likes: 0 },
  {id : 35, src: sec23, alt: 'Sec23', width: 350, height: 220, likes: 0 },
  {id : 36, src: sec24, alt: 'Sec24', width: 350, height: 240, likes: 0 },
  {id : 37, src: sec25, alt: 'Sec25', width: 350, height: 260, likes: 0 },
  {id : 38, src: sec26, alt: 'Sec26', width: 350, height: 250, likes: 0 },
  {id : 39, src: sec27, alt: 'Sec27', width: 350, height: 220, likes: 0 },
  {id : 40, src: sec28, alt: 'Sec28', width: 350, height: 240, likes: 0 },
  {id : 41, src: sec29, alt: 'Sec29', width: 350, height: 260, likes: 0 },
  {id : 42, src: sec30, alt: 'Sec30', width: 350, height: 250, likes: 0 },
  {id : 43, src: sec31, alt: 'Sec31', width: 350, height: 220, likes: 0 },
  {id : 44, src: sec32, alt: 'Sec32', width: 350, height: 240, likes: 0 },
  {id : 45, src: sec33, alt: 'Sec33', width: 350, height: 260, likes: 0 },
  {id : 46, src: sec34, alt: 'Sec34', width: 350, height: 250, likes: 0 },
  {id : 47, src: sec35, alt: 'Sec35', width: 350, height: 220, likes: 0 },
  {id : 48, src: sec36, alt: 'Sec36', width: 350, height: 240, likes: 0 },
  {id : 49, src: sec37, alt: 'Sec37', width: 350, height: 260, likes: 0 },
  {id : 50, src: sec38, alt: 'Sec38', width: 350, height: 250, likes: 0 },
  {id : 51, src: sec39, alt: 'Sec39', width: 350, height: 220, likes: 0 },
  {id : 52, src: sec40, alt: 'Sec40', width: 350, height: 240, likes: 0 },
  {id : 53, src: sec41, alt: 'Sec41', width: 350, height: 260, likes: 0 },
  {id : 54, src: sec42, alt: 'Sec42', width: 350, height: 250, likes: 0 },
  {id : 55, src: sec43, alt: 'Sec43', width: 350, height: 220, likes: 0 },
  {id : 56, src: adobe24, alt: 'Adobe 12d', width: 350, height: 280, likes: 0 },
  {id : 57, src: adobe23, alt: 'Adobe 12e', width: 350, height: 210, likes: 0 },
  { id: 58, src: adobe13, alt: 'Adobe 13', width: 350, height: 260, likes: 0 },
  { id: 59, src: adobe14, alt: 'Adobe 14', width: 350, height: 230, likes: 0 },
  { id: 60, src: adobe15, alt: 'Adobe 15', width: 350, height: 280, likes: 0 },
  { id: 61, src: adobe16, alt: 'Adobe 16', width: 350, height: 210, likes: 0 },
  { id: 62, src: adobe17, alt: 'Adobe 17', width: 350, height: 250, likes: 0 },
  { id: 63, src: adobe18, alt: 'Adobe 18', width: 350, height: 220, likes: 0 },
  { id: 64, src: adobe1, alt: 'Adobe 19', width: 350, height: 260, likes: 0 },
  { id: 65, src: adobe20, alt: 'Adobe 20', width: 350, height: 230, likes: 0 },
  { id: 66, src: adobe21, alt: 'Adobe 21', width: 350, height: 280, likes: 0 },
  { id: 67, src: adobe22, alt: 'Adobe 22', width: 350, height: 210, likes: 0 },
  { id: 68, src: jozani5, alt: 'Jozani Forest 5', width: 350, height: 280, likes: 0 },
  { id: 69, src: jozani6, alt: 'Jozani Forest 6', width: 350, height: 210, likes: 0 },
  { id: 70, src: jozani7, alt: 'Jozani Forest 7', width: 350, height: 240, likes: 0 },
  { id: 71, src: jozani, alt: 'Jozani Forest', width: 350, height: 260, likes: 0 },
  { id: 72, src: spice, alt: 'Spice Plantation', width: 350, height: 250, likes: 0 },
  { id: 73, src: spice1, alt: 'Spice Tour 1', width: 350, height: 220, likes: 0 },
  { id: 74, src: spice2, alt: 'Spice Tour 2', width: 350, height: 260, likes: 0 },
  { id: 75, src: spice3, alt: 'Spice Tour 3', width: 350, height: 230, likes: 0 },
  { id: 76, src: spice4, alt: 'Spice Tour 4', width: 350, height: 280, likes: 0 },
  { id: 77, src: spice5, alt: 'Spice Tour 5', width: 350, height: 210, likes: 0 },
  { id: 78, src: spice7, alt: 'Spice Tour 6', width: 350, height: 240, likes: 0 },
  { id: 79, src: stone, alt: 'Stone Town View', width: 350, height: 260, likes: 0 },
  { id: 80, src: stone2, alt: 'Stone Town Alley', width: 350, height: 250, likes: 0 },
  { id: 81, src: stone3, alt: 'Stone Town Architecture', width: 350, height: 220, likes: 0 },
  { id: 82, src: stone4, alt: 'Stone Town Market', width: 350, height: 240, likes: 0 },
  { id: 83, src: stone5, alt: 'Stone Town Street', width: 350, height: 230, likes: 0 },
  { id: 84, src: stone6, alt: 'Stone Town Harbor', width: 350, height: 280, likes: 0 },
  { id: 85, src: stone7, alt: 'Stone Town Sunset', width: 350, height: 210, likes: 0 },
  { id: 86, src: stone8, alt: 'Stone Town Culture', width: 350, height: 260, likes: 0 },
  { id: 87, src: stone10, alt: 'Stone Town Nightlife', width: 350, height: 250, likes: 0 },
  { id: 88, src: stone11, alt: 'Stone Town People', width: 350, height: 220, likes: 0 },
  { id: 89, src: stone12, alt: 'Stone Town Festival', width: 350, height: 240, likes: 0 },
  { id: 90, src: stone13, alt: 'Stone Town Heritage', width: 350, height: 230, likes: 0 },
  { id: 91, src: mnemba, alt: 'Mnemba Island', width: 350, height: 280, likes: 0 },
  { id: 92, src: mnemba1, alt: 'Mnemba Beach 1', width: 350, height: 210, likes: 0 },
  { id: 93, src: mnemba2, alt: 'Mnemba Beach 2', width: 350, height: 240, likes: 0 },
  { id: 94, src: mnemba3, alt: 'Mnemba Beach 3', width: 350, height: 260, likes: 0 },
  { id: 95, src: mnemba4, alt: 'Mnemba Beach 4', width: 350, height: 250, likes: 0 },
  { id: 96, src: mnemba5, alt: 'Mnemba Beach 5', width: 350, height: 220, likes: 0 },
  { id: 97, src: mnemba6, alt: 'Mnemba Beach 6', width: 350, height: 230, likes: 0 },
  { id: 98, src: mnemba7, alt: 'Mnemba Beach 7', width: 350, height: 280, likes: 0 },
  { id: 99, src: mnemba8, alt: 'Mnemba Beach 8', width: 350, height: 210, likes: 0 },
  { id: 100, src: mnemba9, alt: 'Mnemba Beach 9', width: 350, height: 240, likes: 0 },
  { id: 101, src: mnemba10, alt: 'Mnemba Beach 10', width: 350, height: 260, likes: 0 },
  { id: 102, src: mnemba11, alt: 'Mnemba Beach 11', width: 350, height: 250, likes: 0 },
  { id: 103, src: mnemba12, alt: 'Mnemba Beach 12', width: 350, height: 220, likes: 0 },
  { id: 104, src: mnemba13, alt: 'Mnemba Beach 13', width: 350, height: 230, likes: 0 },
  { id: 105, src: mnemba14, alt: 'Mnemba Beach 14', width: 350, height: 280, likes: 0 },
  { id: 106, src: nakupenda, alt: 'Nakupenda Sandbank', width: 350, height: 210, likes: 0 },
  { id: 107, src: nakupenda1, alt: 'Nakupenda 1', width: 350, height: 240, likes: 0 },
  { id: 108, src: nakupenda2, alt: 'Nakupenda 2', width: 350, height: 260, likes: 0 },
  { id: 109, src: nakupenda3, alt: 'Nakupenda 3', width: 350, height: 250, likes: 0 },
  { id: 110, src: nakupenda4, alt: 'Nakupenda 4', width: 350, height: 220, likes: 0 },
  { id: 111, src: prison, alt: 'Prison Island', width: 350, height: 230, likes: 0 },
  { id: 112, src: prison2, alt: 'Prison Island 2', width: 350, height: 280, likes: 0 },
  { id: 113, src: prison3, alt: 'Prison Island 3', width: 350, height: 210, likes: 0 },
  { id: 114, src: prison4, alt: 'Prison Island 4', width: 350, height: 240, likes: 0 },
  { id: 115, src: prison5, alt: 'Prison Island 5', width: 350, height: 260, likes: 0 },
  { id: 116, src: prison6, alt: 'Prison Island 6', width: 350, height: 250, likes: 0 },
  { id: 117, src: prison7, alt: 'Prison Island 7', width: 350, height: 220, likes: 0 },
  { id: 118, src: rock, alt: 'Rock Beach', width: 350, height: 230, likes: 0 },
  { id: 119, src: rock1, alt: 'Rock Beach 1', width: 350, height: 280, likes: 0 },
  { id: 120, src: rock2, alt: 'Rock Beach 2', width: 350, height: 210, likes: 0 },
  { id: 121, src: rock3, alt: 'Rock Beach 3', width: 350, height: 240, likes: 0 },
  { id: 122, src: sunset, alt: 'Sunset View', width: 350, height: 260, likes: 0 },
  { id: 123, src: sunset1, alt: 'Sunset 1', width: 350, height: 250, likes: 0 },
  { id: 124, src: sunset2, alt: 'Sunset 2', width: 350, height: 220, likes: 0 },
  { id: 125, src: sunset3, alt: 'Sunset 3', width: 350, height: 230, likes: 0 },
  { id: 126, src: sunset4, alt: 'Sunset 4', width: 350, height: 280, likes: 0 },
  { id: 127, src: sunset5, alt: 'Sunset 5', width: 350, height: 210, likes: 0 },
  { id: 128, src: sunset6, alt: 'Sunset 6', width: 350, height: 240, likes: 0 },
  { id: 129, src: sunset7, alt: 'Sunset 7', width: 350, height: 260, likes: 0 },
  { id: 130, src: sal1, alt: 'Sal1', width: 350, height: 250, likes: 0 },
  { id: 131, src: sal2, alt: 'Sal2', width: 350, height: 220, likes: 0 },
  { id: 132, src: sal3, alt: 'Sal3', width: 350, height: 260, likes: 0 },
  { id: 133, src: beach1, alt: 'Beach1', width: 350, height: 230, likes: 0 },
  { id: 134, src: beach2, alt: 'Beach2', width: 350, height: 280, likes: 0 },
  { id: 135, src: beach3, alt: 'Beach3', width: 350, height: 210, likes: 0 },
  { id: 136, src: beach4, alt: 'Beach4', width: 350, height: 240, likes: 0 },
  { id: 137, src: beach5, alt: 'Beach5', width: 350, height: 260, likes: 0 },
  { id: 138, src: beach6, alt: 'Beach6', width: 350, height: 250, likes: 0 },
  { id: 139, src: car1, alt: 'Car1', width: 350, height: 220, likes: 0 },
  { id: 140, src: car2, alt: 'Car2', width: 350, height: 230, likes: 0 },
  { id: 141, src: car3, alt: 'Car3', width: 350, height: 280, likes: 0 },
  { id: 142, src: car4, alt: 'Car4', width: 350, height: 210, likes: 0 },
  { id: 143, src: car5, alt: 'Car5', width: 350, height: 240, likes: 0 },
  { id: 144, src: car6, alt: 'Car6', width: 350, height: 260, likes: 0 },
  { id: 145, src: safariBg, alt: 'Safari Background', width: 350, height: 250, likes: 0 },
  { id: 146, src: farasi, alt: 'Farasi1', width: 350, height: 220, likes: 0 },
  { id: 147, src: farasi1, alt: 'Farasi2', width: 350, height: 230, likes: 0 },
  { id: 148, src: farasi2, alt: 'Farasi3', width: 350, height: 280, likes: 0 },
  { id: 149, src: farasi3, alt: 'Farasi4', width: 350, height: 210, likes: 0 },
  { id: 150, src: farasi4, alt: 'Farasi5', width: 350, height: 240, likes: 0 },
  { id: 151, src: farasi5, alt: 'Farasi6', width: 350, height: 260, likes: 0 },
  { id: 152, src: farasi6, alt: 'Farasi7', width: 350, height: 250, likes: 0 },
  { id: 153, src: seaFood, alt: 'Sea Food', width: 350, height: 220, likes: 0 },
  { id: 154, src: blue1, alt: 'Blue1', width: 350, height: 230, likes: 0 },
  { id: 155, src: blue2, alt: 'Blue2', width: 350, height: 280, likes: 0 },
  { id: 156, src: blue3, alt: 'Blue3', width: 350, height: 210, likes: 0 },
  { id: 157, src: blue4, alt: 'Blue4', width: 350, height: 240, likes: 0 },
  { id: 158, src: kayaking, alt: 'Kayaking', width: 350, height: 260, likes: 0 },
  { id: 159, src: quad, alt: 'Quad Biking', width: 350, height: 250, likes: 0 },
  { id: 160, src: maa1, alt: 'Maa1', width: 350, height: 220, likes: 0 },
  { id: 161, src: maa2, alt: 'Maa2', width: 350, height: 230, likes: 0 },
  { id: 162, src: maa3, alt: 'Maa3', width: 350, height: 280, likes: 0 },
  { id: 163, src: maa4, alt: 'Maa4', width: 350, height: 210, likes: 0 },
  { id: 164, src: maa5, alt: 'Maa5', width: 350, height: 240, likes: 0 },
  { id: 165, src: pung1, alt: 'Pung1', width: 350, height: 260, likes: 0 },
  { id: 166, src: pung2, alt: 'Pung2', width: 350, height: 250, likes: 0 },
  { id: 167, src: pung3, alt: 'Pung3', width: 350, height: 220, likes: 0 },
  { id: 168, src: pung4, alt: 'Pung4', width: 350, height: 230, likes: 0 },

  // ... include all your other images with likes: 0
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

const ItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
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

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [likedImages, setLikedImages] = useState(new Set());
  const [favoriteImages, setFavoriteImages] = useState(new Set());

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

  const filteredImages = images.filter(image =>
    image.alt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalLikes = images.reduce((sum, image) => sum + image.likes, 0);

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
              transition={{ duration: 0.5 }}
            >
              <ItemImage src={image.src} alt={image.alt} />
              
            </GalleryItem>
          ))}
        </GalleryGrid>

        {isModalOpen && (
          <GalleryModal
            item={selectedImage}
            type="image"
            onClose={closeModal}
          />
        )}
      </GalleryContainer>

     
    </>
  );
};

export default ImageGallery;