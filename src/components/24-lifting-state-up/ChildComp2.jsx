import React from 'react';

const ChildComp2 = ({ counter }) => {
    return (
        <div>
            <h2>Child 2</h2>
            <label>
                Counter : <span>{counter}</span>
            </label>
        </div>
    );
};

export default ChildComp2;
