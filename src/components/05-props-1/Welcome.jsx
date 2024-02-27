import React from 'react';

const Welcome = ({ name, surname }) => {
    //! 1.way props used
    //! 2.way destructuring
    //const {name, surname} = props
    //! 3.way {name,surname}
    return (
        <div>
            <h1>
                Hello {name} {surname}
            </h1>
        </div>
    );
};

export default Welcome;
