import AINav from '~/components/AIHelper/AINav/AINav';
import * as S from './StyledAIResume';
import AIResumeSchool from '~/components/AIHelper/AIResumeSchool/AIResumeSchool';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AIResume = () => {
    const [schoolItem, setSchoolItem] = useState<JSX.Element[]>([]);
    const [nextId, setNextId] = useState(0);
    const navigate = useNavigate();
    // const [isNext, setIsNext] = useState(false);

    const handleAddSchool = () => {
        const id = nextId;
        setNextId((prevId) => prevId + 1);
        setSchoolItem((prevSchoolItem) => [...prevSchoolItem, <AIResumeSchool key={id} deleteType='y' id={id} onDelete={handleDeleteItem} />]);
    };

    const handleDeleteItem = (id: number) => {
        setSchoolItem((prevSchoolItem) => prevSchoolItem.filter((item) => item.props.id !== id));
    };

    const handleNextStep = () => {
        // setIsNext(true)
        navigate('/aihelper/resume/certificate');
    };

    return (
        <S.ResumeContainer>
            <div>
                <AINav text='학력정보' />
                <S.InputContainer>
                    <AIResumeSchool deleteType='n' />
                    {schoolItem.map((data, index) => (
                        <div key={index}>{data}</div>
                    ))}
                    {/* <AIResumeSchool deleteType='n' /> */}
                    <S.PlusBtn onClick={handleAddSchool}>+</S.PlusBtn>
                </S.InputContainer>
            </div>
            <S.BtnWrap>
                <button onClick={() => navigate(-1)}>이전</button>
                <button onClick={handleNextStep}>다음</button>
            </S.BtnWrap>
        </S.ResumeContainer>
    );
};

export default AIResume;
