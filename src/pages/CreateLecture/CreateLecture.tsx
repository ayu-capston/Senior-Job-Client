import React from 'react';

import Mypage from '@pages/Mypage/Mypage';
import ContentHeader from '@components/ContentHeader/ContentHeader';

import FormHeader from '@components/Form/FormHeader';
import TextInput from '@components/Form/TextInput';
import * as formStyle from '@components/Form/StyledForm';

export default function CreateLecture() {
    const paramArr: Array<string> = ['개설 강좌', '강좌 개설하기'];

    const ImageFormHint: JSX.Element = (
        <formStyle.FormHintTitle>
            <formStyle.FormHintBody>허용 파일 포맷 : .jpg .png .bmp</formStyle.FormHintBody>
            <formStyle.FormHintBody>최대 파일 크기 : 1024mb</formStyle.FormHintBody>
        </formStyle.FormHintTitle>
    );

    return (
        <>
            <Mypage>
                <ContentHeader {...paramArr}></ContentHeader>
                <formStyle.FormBox>
                    <formStyle.Form>
                        <FormHeader title='강좌 이미지' required={true} hint={ImageFormHint}></FormHeader>
                        <formStyle.FormBody></formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Horizontal />

                    <formStyle.Form>
                        <FormHeader title='강좌 명칭' required={true}></FormHeader>
                        <formStyle.FormBody>
                            <TextInput
                                name='lecture_title'
                                placeholder='강좌의 내용을 잘 나타낼 수 있도록 표현해주세요!'
                                required={true}
                                maxLength={24}
                            />
                        </formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Horizontal />
                </formStyle.FormBox>
            </Mypage>
        </>
    );
}
