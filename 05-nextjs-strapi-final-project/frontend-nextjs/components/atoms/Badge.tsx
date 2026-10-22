interface BadgeProps {
    label: string;
}

export default function Badge({ label }: BadgeProps) {
    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-indigo-50/80 text-indigo-700 border border-indigo-200/60 shadow-sm backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            {label}
        </span>
    );
}