import IconLabel from '../IconLabel/IconLabel';
import locationIcon from '../../assets/images/icon-location.svg';
import * as S from './StyledLectureInfo';

const RegionInfo = ({ region }) => {
    return (
        <S.Infowrap>
            <IconLabel label='강좌 지역' iconimg={locationIcon} />
            <S.Line />
            <S.Map>지도</S.Map>
            <S.LocationWrap>
                <span>상세 주소는 강좌 개설시 공개됩니다.</span>
                <span>{region}</span>
            </S.LocationWrap>
        </S.Infowrap>
    );
};

export default RegionInfo;
