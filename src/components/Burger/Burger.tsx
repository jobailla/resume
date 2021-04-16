import React, { useState } from 'react';
import './Burger.scss';

export default function Burger(): React.ReactElement {
    const [status, setStatus] = useState('close');
    return (
        <div className="BurgerMenu__container"
            role="button" aria-label="burger button"
            onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
            <i className={status}></i>
            <i className={status}></i>
            <i className={status}></i>
        </div>
    );
}