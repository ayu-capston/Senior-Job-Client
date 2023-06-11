import React from 'react';
import axios from 'axios';

const createLecture = (isLectureInfo: LectureData) => {
    axios({
        method: 'post',
        url: `/api/lectures`,
        data: isLectureInfo,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    alert('요청이 정상적으로 완료되었습니다.');
};

export default createLecture;
