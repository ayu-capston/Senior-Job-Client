import React, { useState } from 'react';

import SearchBar from '@components/Search/SearchBar';
import Option from '@components/Option/Option';

import * as s from './StyledLectureList';

export default function LectureList() {
    const [isSearchKeyWord, setSearchKeyWord] = useState('');
    const [isOption, setOption] = useState('최신순');

    return (
        <>
            {/* 현재 인기 강좌 */}
            <section></section>
            <s.RecommendBanner>
                <s.RecommendBannerTypo>강좌를 개설하고 직접 수업을 진행해보세요!</s.RecommendBannerTypo>
                <s.RecommendBannerButton>강좌 개설하기</s.RecommendBannerButton>
            </s.RecommendBanner>
            <s.SearchGroup>
                {/* 검색 */}

                <SearchBar
                    name='lectureTitle'
                    value={isSearchKeyWord}
                    placeholder='찾으시는 강좌명을 입력해주세요'
                    onChange={(e) => {
                        setSearchKeyWord(e);
                    }}
                />

                {/* 정렬 */}
                <Option
                    value={isOption}
                    onChange={(e) => {
                        setOption(e);
                    }}
                />
            </s.SearchGroup>
            <section>
                <div>
                    {/* 필터 */}
                    <div></div>
                    {/* 카드뷰 */}
                    <div></div>
                </div>
            </section>
        </>
    );
}
