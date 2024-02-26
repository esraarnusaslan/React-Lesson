import React from 'react';
import MyReact from './components/01-hello-world/MyReact';
import Jsx1 from './components/01-hello-world/Jsx1';
/* import HelloWorld from './components/01-hello-world/HelloWorld.jsx'; 
import MyFruit, { MyApple } from './components/01-hello-world/MyApp.jsx';
*/
const App = () => {
    return (
        <div>
            {/*
                    <HelloWorld />
                    <MyApple />
                    <MyFruit />

            */}
            <MyReact />
            <Jsx1 />
        </div>
    );
};

export default App;
