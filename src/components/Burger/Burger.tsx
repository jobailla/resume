import React, { useEffect, useState } from 'react';
import './Burger.scss';

interface Props {
    toggled: boolean
}

export default function Burger({ toggled }: Props): React.ReactElement {
    const [status, setStatus] = useState('close');

    useEffect(() => {
        setStatus(toggled ? 'open' : 'close')
    })

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