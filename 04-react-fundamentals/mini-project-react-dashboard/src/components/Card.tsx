import React from 'react';
import type { CardProps } from '../types';

export const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <div className="card">
            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', color: '#0f172a' }}>{title}</h3>
            <div>{children}</div>
        </div>
    );
};