import React from 'react';
import logo from './logo.svg';
import './loader.css';

export function Loader() {
    return <div className='loader-container'>
        <img src={logo} alt={''} className='App-logo' />
    </div>
}