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
    price?: number;
    title: string;
    content?: string;
    cycle?: string;
    count?: number;
    start_date: string;
    end_date: string;
    region: string;
    image_url?: string;
    createdDate?: Date;
}

declare module 'LectureData';
declare module 'CotentHeaderParam';
