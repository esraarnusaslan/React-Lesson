import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const Icons = () => {
    return (
        <div>
            {/* //! React Icons */}
            <p>React Icons</p>
            <AiFillApple
                style={{
                    color: 'white',
                    fontSize: '150px',
                    backgroundColor: 'gray',
                    padding: '10px',
                }}
            />
            <div style={{ marginTop: '50px' }}>
                {' '}
                {/*  //! Material Icons */}
                <p>Material Icons</p>
                <Stack direction="row" spacing={2}>
                    <Button color="secondary">Secondary</Button>
                    <Button variant="contained" color="success">
                        Success
                    </Button>
                    <Button variant="outlined" color="error">
                        Error
                    </Button>
                </Stack>
                <Stack
                    direction="row"
                    spacing={2}
                    style={{ marginTop: '50px' }}
                >
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Stack>
            </div>
        </div>
    );
};

export default Icons;
