import React from 'react';
import * as styled from '../../styles/header';

export default function Header() {
    return (
        <styled.StyleHeader>
            <styled.StyleLogo>
                <img src='./logo-bi.png' width='110px' height='82px' />
                <img src='./logo-title.png' width='120px' height='51px' />
            </styled.StyleLogo>
            <styled.StyleMenu>
                <styled.StyleMenuTypo>강좌 수강</styled.StyleMenuTypo>
                <styled.StyleMenuTypo>강좌 제안</styled.StyleMenuTypo>
                <styled.StyleMenuTypo>파트타임</styled.StyleMenuTypo>
            </styled.StyleMenu>
            <styled.StyleButtonGroup>
                <styled.StyleButton>
                    <styled.StyleButtonTypo>
                        <svg width='28' height='31' viewBox='0 0 28 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M14 15.75C9.83984 15.75 6.5 12.4102 6.5 8.25C6.5 4.14844 9.83984 0.75 14 0.75C18.1016 0.75 21.5 4.14844 21.5 8.25C21.5 12.4102 18.1016 15.75 14 15.75ZM19.2148 17.625C23.5508 17.625 27.125 21.1992 27.125 25.5352V27.9375C27.125 29.5195 25.8359 30.75 24.3125 30.75H3.6875C2.10547 30.75 0.875 29.5195 0.875 27.9375V25.5352C0.875 21.1992 4.39062 17.625 8.72656 17.625H9.72266C11.0117 18.2695 12.4766 18.5625 14 18.5625C15.5234 18.5625 16.9297 18.2695 18.2188 17.625H19.2148Z'
                                fill='#124800'
                            />
                        </svg>
                        마이페이지
                    </styled.StyleButtonTypo>
                    <styled.StyleButtonTypo>
                        <svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M4.66667 37.75C3.52084 37.75 2.53959 37.3417 1.72292 36.525C0.906253 35.7083 0.498615 34.7278 0.500004 33.5833V4.41667C0.500004 3.27084 0.908337 2.28959 1.725 1.47292C2.54167 0.656253 3.52223 0.248615 4.66667 0.250004H19.25V4.41667H4.66667V33.5833H19.25V37.75H4.66667ZM27.5833 29.4167L24.7188 26.3958L30.0312 21.0833H13V16.9167H30.0312L24.7188 11.6042L27.5833 8.58334L38 19L27.5833 29.4167Z'
                                fill='#124800'
                            />
                        </svg>
                        로그아웃
                    </styled.StyleButtonTypo>
                </styled.StyleButton>
            </styled.StyleButtonGroup>
        </styled.StyleHeader>
    );
}
