import React from 'react';
import { Container } from 'react-bootstrap';

const UseRef = () => {
    const inputRef = React.useRef(null);
    const buttonRef = React.useRef(null);

    const setFocus = () => {
        /*old way:
         const elInput = document.querySelector('#inputEl');
        elInput.style.backgroundColor = 'pink';
        elInput.focus(); */
        //console.log(inputRef) ---> object

        inputRef.current.style.backgroundColor = 'pink';
        inputRef.current.style.textColor = 'black';
        inputRef.current.focus();
    };

    const changeButton = () => {
        buttonRef.current.style.backgroundColor = 'yellow';
    };

    return (
        <Container className="m-5">
            {/*  <input type="text" id="inputEl" /> */}
            <input type="text" ref={inputRef} />
            <button onClick={setFocus}>UseRef</button>
            <button onClick={changeButton} ref={buttonRef}>Change Button</button>
        </Container>
    );
};

export default UseRef;
