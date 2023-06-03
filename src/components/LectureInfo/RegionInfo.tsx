import IconLabel from '../IconLabel/IconLabel';
import locationIcon from '../../assets/images/icon-location.svg';
import * as S from './StyledLectureInfo';
import KakaoMap from '../Map/KakaoMap';

interface RegionInfoProps {
    region?: string;
}

const RegionInfo = ({ region }: RegionInfoProps) => {
    const defaultRegion = '';
    const sliceRegion = (region || defaultRegion).split(' ').slice(0, 2).join(' ');
    return (
        <S.Infowrap>
            <IconLabel label='강좌 지역' iconimg={locationIcon} />
            <S.Line />
            <S.Map>
                <KakaoMap value={sliceRegion} />
            </S.Map>
            <S.LocationWrap>
                <span>상세 주소는 강좌 개설시 공개됩니다.</span>
                <span>{sliceRegion}</span>
            </S.LocationWrap>
        </S.Infowrap>
    );
};

export default RegionInfo;
