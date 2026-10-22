import Link from "next/link";
import Badge from "../atoms/Badge";
import { Article } from "@/types/article";

interface ArticleCardProps {
    article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
    const authorInitial = (article.author || "A").charAt(0).toUpperCase();

    // Hitung perkiraan waktu baca
    const wordCount = (article.content || article.description || "").split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    return (
        <Link
            href={`/articles/${article.slug}`}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
        >
            {/* Thumbnail Aksen Visual */}
            <div className="h-44 w-full bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-800 relative p-5 flex flex-col justify-between overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-indigo-500/10 blur-xl group-hover:scale-150 transition-transform duration-500" />

                <div className="flex items-center justify-between z-10">
                    <Badge label={article.category || "General"} />
                    <span className="text-[11px] font-medium text-slate-300 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {readTime} mnt baca
                    </span>
                </div>

                <div className="z-10">
                    <span className="text-3xl font-black text-white/20 select-none">#</span>
                </div>
            </div>

            {/* Konten Kartu */}
            <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                        {article.publishedDate
                            ? new Date(article.publishedDate).toLocaleDateString("id-ID", { dateStyle: "medium" })
                            : "Terbaru"}
                    </span>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug mb-3">
                        {article.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6 font-normal">
                        {article.description}
                    </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs mt-auto">
                    <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                            {authorInitial}
                        </div>
                        <span className="font-semibold text-slate-700">{article.author || "Anonim"}</span>
                    </div>

                    <span className="font-bold text-indigo-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Baca
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}