import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Logo from '../components/Logo';

function Home(){
    return (
        <div>
            <Head>
                <title>Fale Mais</title>
                <meta name='robots' content='index/follow' />
                <meta name='description' content='Site da Vizir sobre o Fale Mais' />
            </Head>
            <Logo />
        </div>
    );
};

export default Home;