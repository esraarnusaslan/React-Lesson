import React, { useState } from 'react';
import ChildComp1 from './ChildComp1';
import ChildComp2 from './ChildComp2';

const ParentComponent = () => {
    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
        if (counter >= 100) return;
        setCounter((prev) => prev + 1);
    };

    return (
        <div>
            <h1>PARENT</h1>
            <ChildComp1 handleCounter={handleCounter} />
            <ChildComp2 counter={counter} />
        </div>
    );
};

export default ParentComponent;
