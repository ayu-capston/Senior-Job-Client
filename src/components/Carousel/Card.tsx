import React from 'react';
import * as s from './StyledCard';

const Card = () => {
    return (
        <s.Card>
            <s.Thumbnail>
                <s.Category>
                    <div>{/* 아이콘 */}아이콘</div>
                </s.Category>
                <img src='https://pbs.twimg.com/media/EA9UJBjU4AAdkCm.jpg' alt='강좌 썸네일 이미지' />
            </s.Thumbnail>
            <s.Description>
                <s.Title>
                    {/* <h4>타이틀</h4> */}
                    <h4>글자수테스트입니다최대길이는스물넷입니다람쥐똥꾸</h4>
                </s.Title>
                <s.Region>
                    <span>부산시 사하구</span>
                </s.Region>
            </s.Description>
        </s.Card>
    );
};

export default Card;
