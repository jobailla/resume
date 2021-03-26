/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Navbar from '../NavBar/Navbar';

export default function Layout({ children }: any): React.ReactElement {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}