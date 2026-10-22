export interface Article {
    id: number;
    documentId?: string;
    title: string;
    slug: string;
    content: string;
    author: string;
    category?: string;
    description?: string;
    publishedDate?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface StrapiResponse<T> {
    data: T;
    meta?: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}