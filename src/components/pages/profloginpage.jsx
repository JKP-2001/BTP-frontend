import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../layouts/header';
import Proflogin from '../layouts/proflogin';

const Mainlogin=()=>{
    // const [tokenPresent,setTokenPresent] = useState(false);

    const Navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token'))
        {
            Navigate(`/owner`);
        }
    })
    return(
        <div>
            <Header />
            <div className='body2div'>
                <Link className='goback' to={`/`}><i class="fa-sharp fa-solid fa-arrow-left text-3xl md:text-4xl my-4 md:my-2 ml-2"/></Link>
                <Proflogin />
            </div>
        </div>
    )
}
export default Mainlogin;