import React from 'react';
import { Link } from 'react-router-dom';

import LogoBi from '@images/logo-bi.png';
import LogoTitle from '@images/logo-title.png';
import { ReactComponent as MypageIcon } from '@images/icon-31-mypage.svg';
import { ReactComponent as LogoutIcon } from '@images/icon-38-logout.svg';

import * as s from './StyledNavbar';

export default function Navbar() {
    return (
        <>
            <s.Navbar>
                <s.Logo>
                    <Link to='/'>
                        <img src={LogoBi} width='55px' height='43px' alt='logo-bi' />
                        <img src={LogoTitle} width='80px' height='34px' alt='logo-title' />
                    </Link>
                </s.Logo>
                <s.Menu>
                    <Link to='/lecture'>
                        <s.MenuTypo>강좌 수강</s.MenuTypo>
                    </Link>
                    <Link to='/lecture/propose'>
                        <s.MenuTypo>강좌 제안</s.MenuTypo>
                    </Link>
                    <Link to='/parttime'>
                        <s.MenuTypo>파트타임</s.MenuTypo>
                    </Link>
                </s.Menu>
                <s.ButtonGroup>
                    <Link to='/mypage'>
                        <s.ButtonTypo>
                            <MypageIcon />
                            마이페이지
                        </s.ButtonTypo>
                    </Link>
                    <Link to='/signout'>
                        <s.ButtonTypo>
                            <LogoutIcon />
                            로그아웃
                        </s.ButtonTypo>
                    </Link>
                </s.ButtonGroup>
            </s.Navbar>
        </>
    );
}
