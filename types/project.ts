export type Project = {
    title: string;
    summary: string;
    stack: string[];
    links: { live?: string; repo?: string };
    cover?: string;
    slug: string;
    role?: string;
    year?: number;
};
