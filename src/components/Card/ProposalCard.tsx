import { Link } from 'react-router-dom';
import * as S from './StyledProposalCard';
import regionParser from '~/utils/parser/regionParser';
import priceParser from '~/utils/parser/priceParser';
import CategoryIcon from './CategoryIcon';

const ProposalCard = (props: LectureData) => {
    return (
        <Link to={`/proposal/detail/${props.create_id}`}>
            <S.LectureCard>
                <S.LectureCategoryWrap>
                    <S.Category>
                        <CategoryIcon category={props.category} />
                        <span>{props.category}</span>
                    </S.Category>
                    <S.LectureAutoDelete>14일 후에 자동으로 삭제됩니다!</S.LectureAutoDelete>
                </S.LectureCategoryWrap>
                <S.LectureDetailWrap>
                    <S.LectureTitle>{props.title}</S.LectureTitle>
                    <S.LectureContent>{props.content}</S.LectureContent>
                    <S.LectureLocation>{regionParser(props.region)}</S.LectureLocation>
                    <S.LectureCost>{priceParser(props.price)}원</S.LectureCost>
                </S.LectureDetailWrap>
            </S.LectureCard>
        </Link>
    );
};

export default ProposalCard;
