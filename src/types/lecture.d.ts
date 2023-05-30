interface CotentHeaderParam {
    [key: string]: string;
}

interface lectureInfo {
    lectureId: number;
    uid: string;
    maxParticipants: number;
    category: string;
    bankName?: string;
    accoutName?: string;
    accountNumber?: string;
    price?: number;
    title: string;
    content?: string;
    startDate: Date;
    endDate: Date;
    region: string;
    imageUrl?: string;
    createDate: Date;
}

declare module 'lectureInfo';
declare module 'CotentHeaderParam';
