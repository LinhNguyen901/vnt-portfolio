import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

function ImageGallery() {
  return (
    <div>
      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }
      >
        <div
          className="image-wrapper"
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            '/images/pictures/gallery1.jpg',
            '/images/pictures/gallery2.jpg',
            '/images/pictures/gallery3.jpg',
            '/images/pictures/gallery4.jpg',
          ]?.map((item, index) => (
            <PhotoView key={index} src={item}>
              <img
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                  maxWidth: '350px',
                  maxHeight: '220px',
                  borderRadius: '8px',
                }}
                src={item}
                alt=""
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
}

export default ImageGallery;
