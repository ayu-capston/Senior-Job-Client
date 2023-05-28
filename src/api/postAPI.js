import axios from 'axios';

const postAPI = {
    async getPostDetail(lectureid) {
        const response = await axios.get(`/api/lectures/${lectureid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.data;
        return data;
    }

    // async getPostDetail(lectureid) {
    //     const response = await fetch(`/api/lectures/${lectureid}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json'
    //         }
    //     });
    //     const data = await response.json();
    //     return data;
    // }
};

export default postAPI;
