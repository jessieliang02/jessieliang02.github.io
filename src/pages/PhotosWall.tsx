import React from 'react';
import { useState } from 'react';
import './PhotosWall.css';
import photo1 from '../../public/photos/playdead.jpg';

const PhotosWall = () => {
  const [photos, setPhotos] = useState([
    { id: 1, src: 'https://drive.google.com/file/d/1gDHFo0y7vWg555iy60CCELeozsyUrZaY/view?usp=sharing', caption: 'playdead' },
    { id: 2, src: 'https://drive.google.com/file/d/1815D9YMlR19JKyUlJVntC1k8GlcvRNdG/view?usp=sharing', caption: 'roll' },
    { id: 3, src: 'https://drive.google.com/file/d/13_Y31_8U0InI9Psl36yXrrpQDDbwJqFe/view?usp=sharing', caption: 'settle' },
    { id: 4, src: 'https://drive.google.com/file/d/1a8g6rKcMC_Cy81atvTY37zvu3f_Unwlr/view?usp=sharing', caption: 'sleep' },
    { id: 5, src: 'https://drive.google.com/file/d/1l9IsGMRSpNHV3LSV32a0dDxWG1YQQq_u/view?usp=sharing', caption: 'toy' },
  ]);

  return (
    <div className="photo-wall">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-card">
          <img src={photo.src} alt={photo.caption} />
        </div>
      ))}
    </div>
  );
};

export default PhotosWall;
