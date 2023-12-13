import { useNavigate } from 'react-router-dom';
import Mypage from '../Mypage/Mypage';
import ProfileSample from '@assets/images/image-profile-sample.png';
import ResumeSelectCard from '~/components/ResumeSelectCard/ResumeSelectCard';
import { resumesample } from '~/constants/jobportalsample';
import * as S from './StyledMainMypage';

const MainMypage = () => {
    const navigate = useNavigate();

    const handleGoFix = () => {
        navigate('/mypage/profile');
    };
    return (
        <>
            <Mypage>
                <S.MyProfileTitle>마이 프로필</S.MyProfileTitle>
                <S.SubTitle>기본 정보</S.SubTitle>
                <S.BasicInformWrap>
                    <img src={ProfileSample} alt='프로필 이미지' />
                    <S.BasicInform>
                        <button onClick={handleGoFix}>수정하기</button>
                        <div>김일벗</div>
                        <div>010-1234-5678</div>
                    </S.BasicInform>
                </S.BasicInformWrap>
                <S.SubTitle>AI 이력서 & 면접 질문 확인하기</S.SubTitle>
                <S.ResumeSelectWrap>
                    {resumesample.map((item: ResumeState) => (
                        <ResumeSelectCard {...item} />
                    ))}
                </S.ResumeSelectWrap>
                <S.BtnWrap>
                    <S.GoInterview
                        onClick={() => {
                            navigate('/aihelper/resume/result');
                        }}
                    >
                        이력서 확인하기
                    </S.GoInterview>
                </S.BtnWrap>
            </Mypage>
        </>
    );
};

export default MainMypage;
