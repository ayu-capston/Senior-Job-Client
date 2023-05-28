import IconLabel from '../IconLabel/IconLabel';
import contentIcon from '../../assets/images/icon-contents.svg';
import * as S from './StyledLectureInfo';

const ContentInfo = () => {
    return (
        <S.Infowrap>
            <IconLabel label='강좌 내용' iconimg={contentIcon} />
            <S.Line />
            <p>
                기초부터 전문도배기술 실무를 반복적 실습을 통하여 습득하며, 벽지 종류별 재단 및 초배, 정배를 단계적 시공실습하고 도배기술 전반의
                시공기술을 나름 습득하여 도배전문 기술자로의 모습을 갖습니다. 한지장판을 시공 실습하여 도배기술자 자격증 시험에 대비합니다. 도배,
                바닥재의 유통 구조 및 특판 시판의 현황과 이에 따른 견적 과정을 수업하며 창업에 준하는 교육 또한 실시합니다.
            </p>
        </S.Infowrap>
    );
};

export default ContentInfo;
