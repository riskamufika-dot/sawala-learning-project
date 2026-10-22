"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Badge from "../atoms/Badge";
import ArticleCard from "../molecules/ArticleCard";
import { Article } from "@/types/article";

interface ArticleListProps {
    articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    const categories = useMemo(() => {
        const cats = articles.map((a) => a.category || "General");
        return ["Semua", ...Array.from(new Set(cats))];
    }, [articles]);

    const filteredArticles = useMemo(() => {
        return articles.filter((item) => {
            const matchSearch =
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchCat =
                selectedCategory === "Semua" || (item.category || "General") === selectedCategory;
            return matchSearch && matchCat;
        });
    }, [articles, searchQuery, selectedCategory]);

    const headline = filteredArticles[0];
    const listItems = filteredArticles.slice(1);

    return (
        <div className="space-y-12">
            {/* Bar Pencarian & Kategori Modern */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto px-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${selectedCategory === cat
                                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="relative w-full sm:w-72 px-2 sm:px-0">
                    <input
                        type="text"
                        placeholder="Cari topik artikel..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    />
                    <svg
                        className="w-4 h-4 text-slate-400 absolute left-5 sm:left-3 top-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {filteredArticles.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                    <p className="text-slate-500 text-sm">Tidak ada artikel yang cocok dengan pencarian.</p>
                </div>
            ) : (
                <>
                    {/* Headline Banner Besar Elegan */}
                    {headline && selectedCategory === "Semua" && !searchQuery && (
                        <Link
                            href={`/articles/${headline.slug}`}
                            className="group relative block overflow-hidden rounded-3xl bg-slate-950 p-8 sm:p-14 text-white shadow-2xl border border-slate-800 transition-all hover:border-indigo-500/50"
                        >
                            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-600/30 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />

                            <div className="relative z-10 max-w-3xl space-y-5">
                                <div className="flex items-center gap-3">
                                    <Badge label={headline.category || "Sorotan"} />
                                    <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase">
                                        Headline Terkini
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-5xl font-black tracking-tight group-hover:text-indigo-300 transition-colors leading-tight">
                                    {headline.title}
                                </h2>

                                <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                                    {headline.description}
                                </p>

                                <div className="pt-4 flex items-center justify-between border-t border-white/10 text-xs">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white">
                                            {(headline.author || "A").charAt(0).toUpperCase()}
                                        </div>
                                        <span className="font-semibold text-slate-200">{headline.author || "Anonim"}</span>
                                    </div>

                                    <span className="font-bold text-indigo-300 group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                                        Baca Selengkapnya &rarr;
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )}

                    {/* Grid Artikel Sisanya */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                                {selectedCategory === "Semua" && !searchQuery ? "Koleksi Artikel" : `Hasil Pencarian (${filteredArticles.length})`}
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {(selectedCategory === "Semua" && !searchQuery ? listItems : filteredArticles).map((item) => (
                                <ArticleCard key={item.id || item.slug} article={item} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}