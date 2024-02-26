import React from 'react';
import Admin from './Admin';
import User from './User';

const ControlMenu = () => {
    const isLogin = false;
    return <div>{isLogin ? <Admin /> : <User />}</div>;
};

export default ControlMenu;
