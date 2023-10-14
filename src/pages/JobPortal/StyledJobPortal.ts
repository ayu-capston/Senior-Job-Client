import styled from 'styled-components';
import BannerImage from '@assets/images/image-phone-typing.jpg';

export const BannerWrap = styled.div`
    text-align: center;
    color: #2b4800;
    font-weight: 700;
    background-image: url(${BannerImage});
    background-repeat: no-repeat;
    background-size: cover;

    & p {
        padding: 89px 0 20px 0;
        font-size: 3.3rem;
        line-height: 4rem;
    }

    & a {
        display: inline-block;
        margin-bottom: 51px;
        padding: 9px 33px;
        border-radius: 33px;
        color: #2b4800;
        font-size: 2rem;
        line-height: 2.4rem;
        background: #fff;
        box-shadow: 0px 2.66667px 2.66667px 0px rgba(18, 72, 0, 0.25);
    }
`;

export const SiteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SiteTitle = styled.div`
    margin-top: 60px;
    padding: 13px;
    border-bottom: 2px solid #124800;
    color: #000;
    text-align: center;
    font-size: 3.3rem;
    font-weight: 700;
    line-height: 3.9rem;
`;

export const SearchCardWrap = styled.div`
    padding: 20px 10px;
    & > div + div {
        margin-top: 20px;
    }
`;

export const LocalCardWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    width: 1014px;
    margin: 20px 0 95px 0;
    padding: 20px 54px;
`;
