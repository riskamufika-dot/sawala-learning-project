const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getArticles() {
    try {
        const res = await fetch(`${STRAPI_URL}/api/articles?populate=*`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch articles: ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching articles:", error);
        return { data: [] };
    }
}

export async function getArticleBySlug(slug: string) {
    try {
        const res = await fetch(
            `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
            { cache: "no-store" }
        );

        if (!res.ok) {
            throw new Error(`Failed to fetch article: ${res.statusText}`);
        }

        const data = await res.json();
        return data.data?.[0] || null;
    } catch (error) {
        console.error("Error fetching article by slug:", error);
        return null;
    }
}