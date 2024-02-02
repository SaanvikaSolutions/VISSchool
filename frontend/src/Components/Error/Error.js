import React from 'react';
import './Error.css';
import { useNavigate } from 'react-router-dom';

function Error(){
    const navigate = useNavigate();
    return(
        <>
            <div className='error-con'>
                <h1>This page is under Construction</h1>
                <button onClick={()=>navigate('/')}>Back To Home</button>
            </div>
        </>
    );
}

export default Error;