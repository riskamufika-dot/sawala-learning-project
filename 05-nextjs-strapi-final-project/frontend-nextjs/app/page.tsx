import { getArticles } from "@/lib/strapi";
import ArticleList from "@/components/organisms/ArticleList";
import Navbar from "@/components/molecules/Navbar";

export default async function HomePage() {
  const res = await getArticles();
  const articles = res?.data || [];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-24">
          {/* Header Brand */}
          <div className="text-center space-y-4 mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              Developer Space
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              Eksplorasi Fullstack Web
            </h1>
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Catatan teknis seputar arsitektur backend, antarmuka frontend, dan workflow modern.
            </p>
          </div>

          <ArticleList articles={articles} />
        </main>
      </div>

      <footer className="border-t border-slate-200 bg-white py-10 text-center text-xs text-slate-500">
        <p>© 2026 Sawala Learning Project. Ditenagai oleh Next.js App Router & Strapi Headless CMS.</p>
      </footer>
    </div>
  );
}