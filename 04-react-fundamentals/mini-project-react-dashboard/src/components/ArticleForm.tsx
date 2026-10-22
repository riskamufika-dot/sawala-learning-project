import React, { useState } from 'react';
import { Button } from './Button';

interface ArticleFormProps {
    onAddArticle: (title: string, content: string) => Promise<void>;
}

export const ArticleForm: React.FC<ArticleFormProps> = ({ onAddArticle }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        setSubmitting(true);
        await onAddArticle(title, content);
        setTitle('');
        setContent('');
        setSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.75rem' }}>
            <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                    Judul Artikel
                </label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Masukkan judul..."
                    required
                    style={{
                        width: '100%',
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        boxSizing: 'border-box'
                    }}
                />
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                    Konten Artikel
                </label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Tulis ringkasan atau isi artikel..."
                    rows={3}
                    required
                    style={{
                        width: '100%',
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        boxSizing: 'border-box'
                    }}
                />
            </div>

            <div style={{ justifySelf: 'start' }}>
                <Button
                    label={submitting ? 'Menyimpan...' : 'Simpan Artikel'}
                    onClick={() => { }}
                    variant="primary"
                />
            </div>
        </form>
    );
};