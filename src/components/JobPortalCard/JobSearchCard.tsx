import WorknetImg from '@assets/images/image-Worknet.jpg';
import HashTag from './HashTag';
import * as S from './StyledJobSearchCard';

const JobSearchCard = () => {
    const tagList = ['채용정보 직업-진로', '고용복지 정책', '훈련정보', '인재정보'];
    return (
        <S.CardWrap>
            <S.CardImg src={WorknetImg} alt='사이트 이미지' />
            <div>
                <S.JobDepartment>고용노동부</S.JobDepartment>
                <S.SiteName>워크넷</S.SiteName>
                <S.TagWrap>
                    {tagList.map((item) => (
                        <HashTag tagname={item} />
                    ))}
                </S.TagWrap>
            </div>
        </S.CardWrap>
    );
};

export default JobSearchCard;
