import React from 'react';
import BasicLink from '~/components/BasicLink/BasicLink';
import CardMenu from '~/components/CardMenu/CardMenu';
// import LectureBtn from '~/components/LectureBtn/LectureBtn';
import label from '@assets/images/Icon-big-label.svg';
import location from '@assets/images/Icon-big-location.svg';
import clock from '@assets/images/Icon-big-clock.svg';
import people from '@assets/images/people.svg';
import * as S from './StyledMainPage';

function MainPage() {
    return (
        <S.MinPageWrap>
            <h1 className='hidden'>일벗 메인 페이지</h1>
            <div>
                <S.CardWrap>
                    <h2 className='hidden'>메뉴 카드 선택</h2>
                    <CardMenu img={label} imgdesc='가격 라벨 이미지' title='강좌 수강/개설' text='제 2의 커리어 시작하기' move='/lecture' />
                    <CardMenu img={location} imgdesc='위치 마커 이미지' title='일자리 찾기' text='내 위치에서 가까운' move='/lecture/propose' />
                    <CardMenu img={clock} imgdesc='시계 이미지' title='파트타임 구하기' text='자유로운 근무시간' move='/parttime' />
                </S.CardWrap>
                <S.MoreInfoWrap>
                    <h2 className='hidden'>개인 메뉴 선택</h2>
                    <img src={people} alt='대화를 나누고 있는 사람 이미지' />
                    <S.ContentsWrap>
                        <p>
                            <span>일 벗</span>과 함께
                            <br />
                            새로운 일자리와 경력을 찾아보세요!
                        </p>
                        <div>
                            <BasicLink text='로그인' move='mypage/login' size='s' />
                            <BasicLink text='회원가입' move='mypage/join' size='s' />
                        </div>
                    </S.ContentsWrap>
                </S.MoreInfoWrap>
            </div>
        </S.MinPageWrap>
    );
}

export default MainPage;
