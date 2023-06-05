import IconLabel from '../IconLabel/IconLabel';
import contentIcon from '../../assets/images/icon-contents.svg';
import * as S from './StyledLectureInfo';

interface ContentInfoProps {
    content?: string;
}

const ContentInfo = ({ content }: ContentInfoProps) => {
    return (
        <S.Infowrap>
            <IconLabel label='강좌 내용' iconimg={contentIcon} />
            <S.Line />
            <p>{content}</p>
        </S.Infowrap>
    );
};

export default ContentInfo;
