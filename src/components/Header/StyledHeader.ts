import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: SpoqaHanSansNeoBold;
    height: 100px;
    width: auto;
    padding-left: 140px;
    padding-right: 140px;
`;

const Logo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Menu = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
`;

const MenuTypo = styled.a`
    font-size: 24px;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
`;

const Button = styled.a`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
`;

const ButtonTypo = styled.p`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 7px;
    font-size: 20px;
    color: #124800;
`;

export { Header, Logo, Menu, MenuTypo, ButtonGroup, Button, ButtonTypo };
