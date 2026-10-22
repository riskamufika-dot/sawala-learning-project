import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/80">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
                        B
                    </div>
                    <span className="font-extrabold text-slate-900 tracking-tight text-lg group-hover:text-indigo-600 transition-colors">
                        Sawala<span className="text-indigo-600">Blog</span>
                    </span>
                </Link>

                <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Strapi API Active
                </div>
            </div>
        </header>
    );
}