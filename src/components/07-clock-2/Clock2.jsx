import React from 'react';
import './Clock2.scss';
import moment from 'moment';

const Clock2 = (props) => {
    const { textColor, backgroundColor } = props;
    const clockStyle={
        color: textColor,
        backgroundColor: backgroundColor
    }

    const time = moment().format('LT');
    const date = moment().format('ll');
    const day = moment().format('dddd');
    const hour = moment().format('HH');

    let message = '';
    if (hour >= 6 && hour < 12) {
        message = 'Morning';
    } else if (hour >= 12 && hour < 18) {
        message = 'Afternoon';
    } else if (hour >= 18 && hour < 24) {
        message = 'Evening';
    } else {
        message = 'Night';
    }

    return (
        <div className="clock-container" style={clockStyle}>
            <div className="time">{time}</div>
            <div>
                <div className="date">{date}</div>
                <div className="day">
                    {day} {message}
                </div>
            </div>
        </div>
    );
};

export default Clock2;
