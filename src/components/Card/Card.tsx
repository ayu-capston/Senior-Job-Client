import React from 'react';
import * as s from './StyledCard';

const Card = () => {
    return (
        <s.Card>
            <s.Thumbnail>
                <s.Category>
                    <div>{/* 아이콘 */}</div>
                    <span>요리</span>
                </s.Category>
                <img src='https://pbs.twimg.com/media/EA9UJBjU4AAdkCm.jpg' alt='강좌 썸네일 이미지' />
                <s.Status>모집중</s.Status>
            </s.Thumbnail>
            <s.Description>
                <s.Title>
                    {/* <h4>타이틀</h4> */}
                    <h4>글자수테스트입니다최대길이는24자입니다람쥐똥구멍</h4>
                </s.Title>
                <s.UserName>
                    <span>김아무개</span>
                </s.UserName>
                <s.Region>
                    <span>부산시 사하구</span>
                </s.Region>
                <s.Price>
                    <span>39,800원</span>
                </s.Price>
            </s.Description>
        </s.Card>
    );
};

export default Card;
