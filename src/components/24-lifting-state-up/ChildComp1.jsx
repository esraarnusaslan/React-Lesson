import React from 'react';

const ChildComp1 = ({ handleCounter }) => {
    return (
        <div>
            <h3>Child 1</h3>
            <button onClick={() => handleCounter()}>Up</button>
        </div>
    );
};

export default ChildComp1;
