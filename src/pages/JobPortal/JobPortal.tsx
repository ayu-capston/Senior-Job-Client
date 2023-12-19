import { Link } from 'react-router-dom';
import * as S from './StyledJobPortal';
import JobSearchCard from '~/components/JobPortalCard/JobSearchCard';
import LocalPortalCard from '~/components/JobPortalCard/LocalPortalCard';
import { jobportalsample, localportalsample } from '~/constants/jobportalsample';

const JobPortal = () => {
    return (
        <>
            <S.BannerWrap>
                <p>지금 바로 이력서를 작성해보세요!</p>
                <Link to='/aihelper'>간편 이력서 만들기</Link>
            </S.BannerWrap>
            <S.SiteContainer>
                <div>
                    <S.SiteTitle>일자리 탐색 사이트</S.SiteTitle>
                    <S.SearchCardWrap>
                        {jobportalsample.map((item: JobPortalState) => (
                            <JobSearchCard {...item} />
                        ))}
                    </S.SearchCardWrap>
                </div>
                <div>
                    <S.SiteTitle>우리 지역 일자리 포털</S.SiteTitle>
                    <S.LocalCardWrap>
                        {localportalsample.map((item: LocalJobState) => (
                            <LocalPortalCard {...item} />
                        ))}
                    </S.LocalCardWrap>
                </div>
            </S.SiteContainer>
        </>
    );
};

export default JobPortal;
