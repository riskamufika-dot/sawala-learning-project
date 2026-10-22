export interface Article {
    id: number;
    title: string;
    content: string;
}

export interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
}

export interface CardProps {
    title: string;
    children: React.ReactNode;
}