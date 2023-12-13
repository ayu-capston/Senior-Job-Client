import Mypage from '../Mypage/Mypage';
import ContentHeader from '@components/ContentHeader/ContentHeader';
import * as S from './StyledProposeLectureApproval';
import { LectureProposeApproval } from '~/constants/psample';

const ProposeLectureApproval = () => {
    const paramArr: CotentHeaderParam = { '제안 강좌': '/mypage/lecture/propose', '선생님 승인하기': '/mypage/lecture/propose/approval/1' };

    return (
        <>
            <Mypage>
                <ContentHeader {...paramArr}></ContentHeader>
                <S.ListWrap>
                    <S.ListHeader>
                        <span>번호</span>
                        <span>이름</span>
                        <span>신청 이유</span>
                        <span>승인 여부</span>
                    </S.ListHeader>
                    <S.ListItemWrap>
                        {LectureProposeApproval.map((data, index) => {
                            return (
                                <S.ListItem>
                                    <span>{String(index + 1).padStart(2, '0')}</span>
                                    <span>{data.name}</span>
                                    <span>{data.reason ? data.reason : '-'}</span>
                                    <span>
                                        <input type='checkbox' id='cb1'></input>
                                    </span>
                                </S.ListItem>
                            );
                        })}
                    </S.ListItemWrap>
                </S.ListWrap>
                <S.StateBtnWrap>
                    <button>강좌 모집 마감하기</button>
                    <button>강좌 진행하기</button>
                </S.StateBtnWrap>
            </Mypage>
        </>
    );
};

export default ProposeLectureApproval;
