import React from 'react';
import photo from '../../assets/img/image7.jpg';
import photo2 from '../../assets/img/image8.jpg';

const ImageAdd = () => {
    return (
        <div>
            <h2>Static Image</h2>
            <img src="./assets/img/image1.jpg"></img>

            <h2>External Image</h2>
            <img src="https://picsum.photos/300"></img>

            <h2>Import Image</h2>
            <img src={photo}></img>
            <img src={photo2}></img>

            <h2>Require Image</h2>
            <img src={require('../../assets/img/image3.jpg')}></img>
            <img src={require('../../assets/img/image2.jpg')}></img>
        </div>
    );
};

export default ImageAdd;
