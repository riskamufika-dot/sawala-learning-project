import React from 'react';
import type { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
    return (
        <button className={`btn btn-${variant}`} onClick={onClick}>
            {label}
        </button>
    );
};