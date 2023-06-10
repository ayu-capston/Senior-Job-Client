interface CotentHeaderParam {
    [key: string]: string;
}

interface LectureData {
    create_id?: number;
    creator: string;
    max_participants: number;
    category?: string;
    bank_name?: string;
    account_name?: string;
    account_number?: string;
}
interface LectureData {
    create_id?: number;
    creator: string;
    max_participants: number;
    category?: string;
    bank_name?: string;
    account_name?: string;
    account_number?: string;
    price?: number;
    title: string;
    content?: string;
    cycle?: string;
    count?: number;
    start_date: string;
    end_date: string;
    cycle?: string;
    count?: number;
    start_date: string;
    end_date: string;
    region: string;
    image_url?: string;
    createdDate?: Date;
}

interface LectureState {
    recruit: boolean;
    wait: boolean;
    progress: boolean;
}

interface LectureCategory {
    home: boolean;
    business: boolean;
    design: boolean;
    development: boolean;
    health: boolean;
    beauty: boolean;
    cooking: boolean;
    etc: boolean;
}

declare module 'CotentHeaderParam';
declare module 'LectureData';
declare module 'LectureState';
declare module 'LectureCategory';
