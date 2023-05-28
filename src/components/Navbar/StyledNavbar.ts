import styled from 'styled-components';

const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 700;
    height: 100px;
    width: auto;
    padding: 0px 140px;
    border-bottom: 1px solid #ccc;
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

const MenuTypo = styled.span`
    font-size: 2.4rem;
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

const ButtonTypo = styled.span`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 7px;
    font-size: 2rem;
    color: #124800;
`;

export { Navbar, Logo, Menu, MenuTypo, ButtonGroup, Button, ButtonTypo };
