import styled from 'styled-components';
import LocationIcon from '@images/icon-location-black.svg';
import WonIcon from '@images/icon-won-blue.svg';

export const LectureCard = styled.div`
    width: 737px;
    padding: 17px 28px 15px 21px;
    border-radius: 11px;
    border: 1px solid #ccc;
`;

export const LectureCategoryWrap = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
`;

export const Category = styled.div`
    display: flex;
    padding: 10px 14px 10px 10px;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    border-radius: 7px;
    border: 1px solid #ffb30e;
    color: #ffb30e;
    font-weight: 700;
    line-height: 2rem;

    svg {
        fill: #ffb30e;
    }
`;

export const LectureCategory = styled.span`
    display: inline-block;
    padding: 10px 7px;
    border-radius: 7px;
    border: 1px solid #ffb30e;
    color: #ffb30e;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
`;

export const LectureAutoDelete = styled.span`
    display: inline-block;
    padding: 10px 7px;
    border-radius: 7px;
    color: #ffffff;
    background-color: #b4b2b0;
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 2rem;
`;

export const LectureDetailWrap = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: end; */
    /* gap: 28px; */
`;

export const LectureTitle = styled.p`
    margin-bottom: 7px;
    color: #124800;
    text-align: right;
    font-size: 2.1rem;
    font-weight: 700;
    line-height: 2.6rem;
`;

export const LectureContent = styled.p`
    margin-bottom: 7px;
    color: #908c8c;
    text-align: right;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const LectureLocation = styled.p`
    margin-bottom: 7px;
    text-align: right;
    color: #333;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
    &::before {
        content: '';
        display: inline-block;
        width: 17px;
        height: 20px;
        margin-right: 7px;
        background-image: url(${LocationIcon});
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: bottom;
    }
`;

export const LectureCost = styled.p`
    color: #2e5bb8;
    text-align: right;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem; /* 20px */
    &::before {
        content: '';
        display: inline-block;
        width: 21px;
        height: 20px;
        margin-right: 7px;
        background-image: url(${WonIcon});
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: bottom;
    }
`;
