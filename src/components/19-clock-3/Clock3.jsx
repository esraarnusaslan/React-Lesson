import React, { useEffect } from 'react';
import './Clock3.scss';
import moment from 'moment';

const Clock3 = () => {
    const [dateTime, setDateTime] = React.useState(moment());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(moment());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const time = moment().format('LT');
    const date = moment().format('ll');
    const day = moment().format('dddd');
    const hour = moment().format('hh ');
    const minute = moment().format('mm a');
    const second = moment().format('ss');

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
        <div className="clock-container">
            <div className="time">
                {hour}{' '}
                <span style={{ opacity: second % 2 == 0 ? '1' : '0' }}>
                    {' '}
                    :{' '}
                </span>
                {minute}
            </div>
            <div>
                <div className="date">{date}</div>
                <div className="day">
                    {day} {message}
                </div>
            </div>
        </div>
    );
};

export default Clock3;
