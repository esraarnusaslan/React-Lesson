import React from 'react';
import './Gallery.scss';
import photos from '../../assets/data/image.json';

const Gallery = () => {
    return (
        <div>
            <h2>Image Gallery</h2>
            <div className="img-gallery">
                {photos.map((photo, index) => (
                    <div key={index}>
                        <img src={require(`../../assets/img/${photo.name}`)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
