import React from 'react';

import category from '~/constants/category';
import CurrentPositionButton from './CurrentPositionButton';
import Dropdown from './Dropdown';
import Button from './Button';
import { ReactComponent as IconHome } from '@images/icon-home.svg';
import { ReactComponent as IconBusiness } from '@images/icon-business.svg';
import { ReactComponent as IconDesign } from '@images/icon-design.svg';
import { ReactComponent as IconDevelopment } from '@images/icon-development.svg';
import { ReactComponent as IconHealth } from '@images/icon-health.svg';
import { ReactComponent as IconBeauty } from '@images/icon-beauty.svg';
import { ReactComponent as IconCooking } from '@images/icon-cooking.svg';
import { ReactComponent as IconEtc } from '@images/icon-etc.svg';

import * as s from './StyledFilterGroup';

interface ParamProps {
    state: LectureState;
    category: LectureCategory;
    provinceOnChange: (value: any) => void;
    countryOnChange: (value: any) => void;
    stateOnChange: (value: LectureState) => void;
    categoryOnChange: (value: LectureCategory) => void;
}

const provinceMenuItems: string[] = [];
const countryMenuItems: string[] = [];

export default function FilterGroup(props: ParamProps) {
    return (
        <s.Filter>
            <s.FilterGroup>
                <s.FilterTitle>
                    <span>지역</span>
                    <CurrentPositionButton />
                </s.FilterTitle>
                <Dropdown menuUnit='시/도 선택' menuItems={provinceMenuItems} onChange={(e: string) => props.provinceOnChange(e)} />
                <Dropdown menuUnit='시/군/구 선택' menuItems={countryMenuItems} onChange={(e: string) => props.provinceOnChange(e)} />
            </s.FilterGroup>
            <s.Horizontal />
            <s.FilterGroup>
                <s.FilterTitle>
                    <span>강좌 상태</span>
                </s.FilterTitle>
                <Button
                    status={props.state.recruit}
                    onClick={() => {
                        props.stateOnChange({ ...props.state, recruit: !props.state.recruit });
                    }}
                >
                    <span>모집중</span>
                </Button>
                <Button
                    status={props.state.wait}
                    onClick={() => {
                        props.stateOnChange({ ...props.state, wait: !props.state.wait });
                    }}
                >
                    <span>개설 대기중</span>
                </Button>
                <Button
                    status={props.state.progress}
                    onClick={() => {
                        props.stateOnChange({ ...props.state, progress: !props.state.progress });
                    }}
                >
                    <span>진행중</span>
                </Button>
            </s.FilterGroup>
            <s.Horizontal />
            <s.FilterGroup>
                <s.FilterTitle>
                    <span>카테고리</span>
                </s.FilterTitle>
                <Button
                    status={props.category.home}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, home: !props.category.home });
                    }}
                >
                    <IconHome />
                    <span>홈/리빙</span>
                </Button>
                <Button
                    status={props.category.business}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, business: !props.category.business });
                    }}
                >
                    <IconBusiness />
                    <span>비즈니스</span>
                </Button>
                <Button
                    status={props.category.design}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, design: !props.category.design });
                    }}
                >
                    <IconDesign />
                    <span>디자인</span>
                </Button>
                <Button
                    status={props.category.development}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, development: !props.category.development });
                    }}
                >
                    <IconDevelopment />
                    <span>개발</span>
                </Button>
                <Button
                    status={props.category.health}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, health: !props.category.health });
                    }}
                >
                    <IconHealth />
                    <span>건강</span>
                </Button>
                <Button
                    status={props.category.beauty}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, beauty: !props.category.beauty });
                    }}
                >
                    <IconBeauty />
                    <span>미용</span>
                </Button>
                <Button
                    status={props.category.cooking}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, cooking: !props.category.cooking });
                    }}
                >
                    <IconCooking />
                    <span>요리</span>
                </Button>
                <Button
                    status={props.category.etc}
                    onClick={() => {
                        props.categoryOnChange({ ...props.category, etc: !props.category.etc });
                    }}
                >
                    <IconEtc />
                    <span>기타</span>
                </Button>
            </s.FilterGroup>
        </s.Filter>
    );
}
