import { Link } from 'react-router-dom';

const LectureDetailNav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/lecture'>강좌 수강</Link>
                </li>
                <li>
                    <Link to='/lecturedetail'>강좌 상세 보기</Link>
                </li>
            </ul>
        </nav>
    );
};

export default LectureDetailNav;
