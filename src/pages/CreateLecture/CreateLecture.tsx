import React, { useState } from 'react';

import lectureCategory from '~/constants/category';
import bankName from '~/constants/bank';
import Mypage from '@pages/Mypage/Mypage';
import ContentHeader from '@components/ContentHeader/ContentHeader';
import FormHeader from '@components/Form/FormHeader';
import TextInput from '@components/Form/TextInput';
import Dropdown from '@components/Form/Dropdown';
import DateRangePicker from '@components/Form/DateRangePicker';
import * as formStyle from '@components/Form/StyledForm';

export default function CreateLecture() {
    const paramArr: Array<string> = ['개설 강좌', '강좌 개설하기'];

    const ImageFormHint: JSX.Element = (
        <formStyle.FormHintTitle>
            <formStyle.FormHintBody>허용 파일 포맷 : .jpg .png .bmp</formStyle.FormHintBody>
            <formStyle.FormHintBody>최대 파일 크기 : 1024mb</formStyle.FormHintBody>
        </formStyle.FormHintTitle>
    );

    const ParticipantFormHint: JSX.Element = (
        <formStyle.FormHintTitle>
            <formStyle.FormHintBody>모집 진행시 참여 신청을 할 수 있는 최대 인원 수를 선택해주세요!</formStyle.FormHintBody>
        </formStyle.FormHintTitle>
    );

    const DateFormHint: JSX.Element = (
        <formStyle.FormHintTitle>
            <formStyle.FormHintBody>실제 강좌를 진행할 날짜를 선택해주세요!</formStyle.FormHintBody>
        </formStyle.FormHintTitle>
    );

    const RegionFormHint: JSX.Element = (
        <formStyle.FormHintTitle>
            <formStyle.FormHintBody>실제 강좌가 개설되기전에는 ‘시/군/구'까지만 노출됩니다!</formStyle.FormHintBody>
            <formStyle.FormHintBody>e.g. 경기도 안양시</formStyle.FormHintBody>
        </formStyle.FormHintTitle>
    );

    const PriceFormHint: JSX.Element = (
        <formStyle.FormHintTitle>
            <formStyle.FormHintBody>전체 강좌 진행 기간동안 받을 금액을 적어주세요.</formStyle.FormHintBody>
            <formStyle.FormHintBody>계좌번호는 회원가입시 가입한 이름과 동일한 계좌를 기입해주세요!</formStyle.FormHintBody>
        </formStyle.FormHintTitle>
    );

    const participantArr: string[] = Array(46)
        .fill(5)
        .map((x, y) => x + y);

    const dateUnitArr: string[] = ['월', '주'];
    const dateCountArr: string[] = Array(7)
        .fill(1)
        .map((x, y) => x + y);

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
                                type='text'
                                name='lecture_title'
                                placeholder='강좌의 내용을 잘 나타낼 수 있도록 표현해주세요!'
                                required={true}
                                maxLength={24}
                                erase={true}
                            />
                        </formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Horizontal />

                    <formStyle.Form>
                        <FormHeader title='강좌 유형' required={true}></FormHeader>
                        <formStyle.FormBody>
                            <Dropdown menuUnit='카테고리' menuItems={lectureCategory}></Dropdown>
                        </formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Horizontal />

                    <formStyle.Form>
                        <FormHeader title='모집 최대 인원' required={true} hint={ParticipantFormHint}></FormHeader>
                        <formStyle.FormBody>
                            <Dropdown menuUnit='명' menuItems={participantArr}></Dropdown>
                        </formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Horizontal />

                    <formStyle.Form>
                        <FormHeader title='강좌 진행 기간' required={true} hint={DateFormHint}></FormHeader>
                        <formStyle.FormBody>
                            <Dropdown menuUnit='월/주' menuItems={dateUnitArr}></Dropdown>{' '}
                            <Dropdown menuUnit='횟수' menuItems={dateCountArr}></Dropdown>
                        </formStyle.FormBody>
                        <formStyle.FormBody>
                            <DateRangePicker />
                        </formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Horizontal />

                    <formStyle.Form>
                        <FormHeader title='강좌 진행 지역' required={true} hint={RegionFormHint}></FormHeader>
                        <formStyle.FormBody></formStyle.FormBody>
                    </formStyle.Form>
                    <formStyle.Horizontal />

                    <formStyle.Form>
                        <FormHeader title='가격' hint={PriceFormHint}></FormHeader>
                        <formStyle.FormGroup>
                            <TextInput name='price' placeholder='0' width='30%' type='number' max={1000000} required={true} /> <span>원 </span>
                        </formStyle.FormGroup>
                        <formStyle.FormGroup>
                            <Dropdown menuUnit='은행명' menuItems={Object.keys(bankName)}></Dropdown>
                            <TextInput name='owner' placeholder='예금주' type='text' />
                        </formStyle.FormGroup>
                    </formStyle.Form>
                    <formStyle.Horizontal />
                </formStyle.FormBox>
            </Mypage>
        </>
    );
}
