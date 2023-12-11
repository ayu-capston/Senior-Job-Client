interface JobPortalState {
    title: string;
    keyword: string;
    hashtag: string[];
    img?: string;
    url: string;
}

interface LocalJobState {
    title: string;
    img?: string;
    url: string;
}

declare module 'JobPortalState';
declare module 'LocalJobState';
