import React from 'react';

const Jsx2 = () => {
    const isLogin = true;
    /* if (isLogin) {
        console.log('true');
    } else {
        console.log('false');
    } */
    return (
        <div>
            Jsx2
            {isLogin ? (
                <div>
                    <h2>Admin Menu</h2>
                    <ul>
                        <li>Add Product</li>
                        <li>Update Product</li>
                        <li>Delete Product</li>
                    </ul>
                </div>
            ) : (
                <div>
                    <h2>User Menu</h2>
                    <ul>
                        <li>Login</li>
                        <li>Register</li>
                        <li>Exit</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Jsx2;
