import React, { useEffect } from 'react';
import NavbarLogin from '../../../components/NavbarLogin';
import Footer from '../../../components/Footer';
import Main from './main';

export default function Login() {
    useEffect(()=>{
        document.title='Login';
    });

    return (  
        <>
            <NavbarLogin />
            <Main />
            <Footer />
        </>
    );
}
