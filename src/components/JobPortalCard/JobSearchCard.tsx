import NotFoundImg from '@assets/images/Image-Not-Found.svg';
import HashTag from './HashTag';
import * as S from './StyledJobSearchCard';
import { Link } from 'react-router-dom';

const JobSearchCard = (props: JobPortalState) => {
    return (
        <Link to={props.url}>
            <S.CardWrap>
                <S.CardImg src={props.img ? props.img : NotFoundImg} alt='사이트 이미지' />
                <div>
                    <S.JobDepartment>{props.keyword}</S.JobDepartment>
                    <S.SiteName>{props.title}</S.SiteName>
                    <S.TagWrap>
                        {props.hashtag.map((item) => (
                            <HashTag tagname={item} />
                        ))}
                    </S.TagWrap>
                </div>
            </S.CardWrap>
        </Link>
    );
};

export default JobSearchCard;
