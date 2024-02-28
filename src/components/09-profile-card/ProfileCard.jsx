import React from 'react';
import './ProfileCard.scss';
import Stat from './Stat';

const ProfileCard = (props) => {
    const { avatar, name, location, shot, followers, following } = props;

    const image = require(`../../assets/img/${avatar}`);

    const profileBg = {
        backgroundImage: `url(${image})`,
    };

    return (
        <div className="profile-card">
            <div className="header" style={profileBg}></div>
            <div className="content">
                <div className="avatar" style={profileBg}></div>
                <h2>{name}</h2>
                <h4>{location}</h4>
            </div>
            <div className="stat">
                <Stat name="shot" value={shot} />
                <Stat name="followers" value={followers} />
                <Stat name="following" value={following} />
            </div>
        </div>
    );
};

export default ProfileCard;
