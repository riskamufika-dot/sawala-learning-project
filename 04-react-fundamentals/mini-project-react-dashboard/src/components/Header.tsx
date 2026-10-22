import React from 'react';

export interface HeaderProps {
    title: string;
    subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <header style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
            <h1>{title}</h1>
            {subtitle && <p style={{ color: '#666' }}>{subtitle}</p>}
        </header>
    );
};

export default Header;