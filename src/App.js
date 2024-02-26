import React from 'react';
/* import HelloWorld from './components/01-hello-world/HelloWorld.jsx'; */
import MyFruit, { MyApple } from './components/01-hello-world/MyApp.jsx';

const App = () => {
    return (
        <div>
            {/*
                    <HelloWorld />
            */}

            <MyApple />
            <MyFruit />
        </div>
    );
};

export default App;
