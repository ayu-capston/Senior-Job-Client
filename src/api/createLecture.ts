import React from 'react';
import axios from 'axios';

const createLecture = (isLectureInfo: any) => {
    const lectrueData = {
        author: '',
        max_participants: isLectureInfo.maxParticipants,
        category: isLectureInfo.category,
        bank_name: isLectureInfo.bankName,
        account_name: '',
        account_number: isLectureInfo.frontAccountNumber + isLectureInfo.rearAccountNumber,
        price: isLectureInfo.price,
        title: isLectureInfo.title,
        content: isLectureInfo.content,
        start_date: isLectureInfo.startDate,
        end_date: isLectureInfo.endDate,
        region: isLectureInfo.region,
        image_url: isLectureInfo.imageUrl
    };

    axios({
        method: 'post',
        url: `/api/lectures`,
        data: lectrueData,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    alert('요청이 정상적으로 완료되었습니다.');
};

export default createLecture;
