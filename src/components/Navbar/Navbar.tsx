import React from 'react';

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
                    <img src={LogoBi} width='75px' height='55px' alt='logo-bi' />
                    <img src={LogoTitle} width='80px' height='34px' alt='logo-title' />
                </s.Logo>
                <s.Menu>
                    <s.MenuTypo>강좌 수강</s.MenuTypo>
                    <s.MenuTypo>강좌 제안</s.MenuTypo>
                    <s.MenuTypo>파트타임</s.MenuTypo>
                </s.Menu>
                <s.ButtonGroup>
                    <s.Button>
                        <s.ButtonTypo>
                            <MypageIcon />
                            마이페이지
                        </s.ButtonTypo>
                        <s.ButtonTypo>
                            <LogoutIcon />
                            로그아웃
                        </s.ButtonTypo>
                    </s.Button>
                </s.ButtonGroup>
            </s.Navbar>
        </>
    );
}
