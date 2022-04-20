import React from 'react';
import ReactDOM from 'react-dom';
import EmblaCarousel from './EmblaCarousel';

const SLIDE_COUNT = 33;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const PhotoGalleryComponent = () => (
  <main>
    <EmblaCarousel slides={slides} />
  </main>
);
export default PhotoGalleryComponent;
