import { getArticleBySlug } from "@/lib/strapi";
import Badge from "@/components/atoms/Badge";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/molecules/Navbar";

interface ArticleDetailPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const authorInitial = (article.author || "A").charAt(0).toUpperCase();

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
            <div>
                <Navbar />

                <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase text-slate-500 hover:text-indigo-600 transition-colors mb-6"
                    >
                        &larr; Kembali ke daftar artikel
                    </Link>

                    <article className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200 shadow-sm">
                        <header className="space-y-4 pb-8 border-b border-slate-100">
                            <div className="flex items-center gap-3">
                                <Badge label={article.category || "General"} />
                                <span className="text-xs text-slate-400 font-medium">
                                    {article.publishedDate
                                        ? new Date(article.publishedDate).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })
                                        : "Baru saja"}
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                                {article.title}
                            </h1>

                            <div className="flex items-center gap-3 pt-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                                    {authorInitial}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">{article.author || "Anonim"}</p>
                                    <p className="text-xs text-slate-400">Kontributor Penulis</p>
                                </div>
                            </div>
                        </header>

                        <div className="pt-8 text-slate-700 leading-relaxed text-base sm:text-lg whitespace-pre-line font-normal">
                            {article.content}
                        </div>
                    </article>
                </main>
            </div>

            <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500 mt-16">
                <p>© 2026 Sawala Learning Project. Dibangun menggunakan Next.js App Router & Strapi CMS.</p>
            </footer>
        </div>
    );
}