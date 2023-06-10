import React from 'react';
import BasicLink from '~/components/BasicLink/BasicLink';
import CardMenu from '~/components/CardMenu/CardMenu';
import LectureBtn from '~/components/LectureBtn/LectureBtn';

function MainPage() {
    return (
        <>
            <CardMenu />
            <LectureBtn />
            <BasicLink />
        </>
    );
}

export default MainPage;
