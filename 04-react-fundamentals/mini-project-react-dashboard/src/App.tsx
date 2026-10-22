import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { Button } from './components/Button';
import { ArticleForm } from './components/ArticleForm';
import type { Article } from './types';

function App() {
  const [count, setCount] = useState<number>(0);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = () => {
    fetch('http://localhost:5001/api/articles')
      .then((res) => {
        if (!res.ok) throw new Error('Gagal mengambil data dari server');
        return res.json();
      })
      .then((resData) => {
        if (Array.isArray(resData)) {
          setArticles(resData);
        } else if (resData.data && Array.isArray(resData.data)) {
          setArticles(resData.data);
        } else {
          setArticles([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleAddArticle = async (title: string, content: string) => {
    try {
      const res = await fetch('http://localhost:5001/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) throw new Error('Gagal menambahkan artikel');
      fetchArticles();
    } catch (err: any) {
      alert(err.message || 'Terjadi kesalahan saat menyimpan artikel');
    }
  };

  const handleDeleteArticle = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:5001/api/articles/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Gagal menghapus artikel');
      fetchArticles();
    } catch (err: any) {
      alert(err.message || 'Terjadi kesalahan saat menghapus artikel');
    }
  };

  return (
    <main style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <Header
        title="Admin Dashboard"
        subtitle="Modul Pembelajaran Minggu 7-8: React Fundamentals"
      />

      <section style={{ display: 'grid', gap: '1.5rem' }}>
        <Card title="Interaksi State & Event">
          <p>Total Hitungan: <strong>{count}</strong></p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
            <Button label="Tambah" onClick={() => setCount(count + 1)} />
            <Button label="Reset" variant="secondary" onClick={() => setCount(0)} />
          </div>
        </Card>

        <Card title="Tambah Artikel Baru">
          <ArticleForm onAddArticle={handleAddArticle} />
        </Card>

        <Card title="Daftar Artikel (dari API Express :5001)">
          {loading && <p>Memuat data artikel...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          {!loading && !error && articles.length === 0 && <p>Tidak ada artikel.</p>}

          {!loading && !error && articles.length > 0 && (
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
              {articles.map((item) => (
                <li
                  key={item.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 0',
                    borderBottom: '1px solid #f1f5f9'
                  }}
                >
                  <div>
                    <h4 style={{ margin: 0, color: '#0f172a' }}>{item.title}</h4>
                    <p style={{ margin: '0.25rem 0 0', color: '#64748b', fontSize: '0.9rem' }}>
                      {item.content}
                    </p>
                  </div>
                  <Button
                    label="Hapus"
                    variant="danger"
                    onClick={() => handleDeleteArticle(item.id)}
                  />
                </li>
              ))}
            </ul>
          )}
        </Card>
      </section>
    </main>
  );
}

export default App;