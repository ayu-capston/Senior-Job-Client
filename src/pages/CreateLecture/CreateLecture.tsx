import React from 'react';

import Mypage from '../Mypage/Mypage';
import ContentHeader from '../../components/ContentHeader/ContentHeader';

import * as s from './StyledCreateLecture';

export default function CreateLecture() {
    const paramArr: Array<String> = ['개설 강좌', '강좌 개설하기'];
    return (
        <>
            <Mypage>
                <ContentHeader {...paramArr}></ContentHeader>
                <s.FormBox>
                    <s.Form>
                        <s.FormHead>
                            <s.TitleBullet />{' '}
                            <s.FormTitle>
                                <s.FormTitleTypo>
                                    강좌 이미지<span>*</span>
                                </s.FormTitleTypo>
                                <s.FormTitleHint>
                                    <li>허용 파일 포맷 : .jpg .png .bmp</li>
                                    <li>최대 파일 크기 : 1024mb</li>
                                </s.FormTitleHint>
                            </s.FormTitle>
                        </s.FormHead>
                        <s.FormBody></s.FormBody>
                    </s.Form>

                    <s.Horizontal />

                    <s.Form>
                        <s.FormHead>
                            <s.TitleBullet />{' '}
                            <s.FormTitle>
                                <s.FormTitleTypo>
                                    강좌 이름<span>*</span>
                                </s.FormTitleTypo>
                                <s.FormTitleHint>
                                    <li>허용 파일 포맷 : .jpg .png .bmp</li>
                                    <li>최대 파일 크기 : 1024mb</li>
                                </s.FormTitleHint>
                            </s.FormTitle>
                        </s.FormHead>
                        <s.FormBody></s.FormBody>
                    </s.Form>

                    <s.Horizontal />

                    <s.Form>
                        <s.FormHead>
                            <s.TitleBullet />{' '}
                            <s.FormTitle>
                                <s.FormTitleTypo>
                                    강좌 유형<span>*</span>
                                </s.FormTitleTypo>
                                <s.FormTitleHint>
                                    <li>허용 파일 포맷 : .jpg .png .bmp</li>
                                    <li>최대 파일 크기 : 1024mb</li>
                                </s.FormTitleHint>
                            </s.FormTitle>
                        </s.FormHead>
                        <s.FormBody></s.FormBody>
                    </s.Form>
                </s.FormBox>
            </Mypage>
        </>
    );
}
