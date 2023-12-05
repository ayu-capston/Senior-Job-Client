import { useNavigate } from 'react-router-dom';
import { TextInput } from '@components/Form/TextInput';
import AINav from '../AINav/AINav';
import TipBox from '../TipBox/TipBox';
import Dropdown from '@components/Form/Dropdown';
import * as S from './StyledAIAdditional';

const AIAdditional = () => {
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/aihelper/resume/result');
    };

    return (
        <S.ResumeContainer>
            <div>
                <AINav text='경력정보' />
                <S.InputContainer>
                    <TipBox width='370px' text='이제 다 왔어요! 혹시 이력서에 더 넣고 싶은 정보가 있으신가요?' />
                    <S.DropdownWrap>
                        <S.CategoryTitle>복지카드 유무</S.CategoryTitle>
                        <Dropdown menuUnit='' menuItems={['예', '아니오']} onChange={(e: any) => {}}></Dropdown>
                    </S.DropdownWrap>
                    <S.TitleWrap>
                        <S.CategoryTitle>이력서 제목</S.CategoryTitle>
                        <TextInput
                            type='text'
                            name='lecture_title'
                            placeholder='이력서의 제목을 입력해주세요'
                            required={true}
                            maxLength={24}
                            erase={true}
                            width='100%'
                        />
                    </S.TitleWrap>
                    <S.SignWrap>
                        <p>
                            위 내용은 사실과 틀림이 없으며 만일 사실과 다른 내용이 있을 경우 <br /> 채용상의 어떠한 불이익도 감수하겠습니다.
                        </p>
                        <p>20xx년 x월 x일</p>
                        <p>(회원명)</p>
                    </S.SignWrap>
                </S.InputContainer>
            </div>
            <S.BtnWrap>
                <button onClick={() => navigate(-1)}>이전</button>
                <button onClick={handleNextStep}>이력서 만들기</button>
            </S.BtnWrap>
        </S.ResumeContainer>
    );
};

export default AIAdditional;
