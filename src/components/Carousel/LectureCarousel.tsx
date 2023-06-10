import React from 'react';

import Card from './Card';
import { ReactComponent as LeftArrow } from '@images/icon-carousel-left-arrow.svg';
import { ReactComponent as RightArrow } from '@images/icon-carousel-right-arrow.svg';

import * as s from './StyledLectureCarousel';

const Carousel = () => {
    return (
        <>
            <s.Carousel>
                <s.Header>
                    <h4>현재 인기 강좌</h4>
                </s.Header>
                <s.Body>
                    <button>
                        <LeftArrow />
                    </button>
                    <s.CardGroup>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </s.CardGroup>
                    <button>
                        <RightArrow />
                    </button>
                </s.Body>
            </s.Carousel>
            ;
        </>
    );
};

export default Carousel;
