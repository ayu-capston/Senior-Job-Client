import styled from 'styled-components';

const body = styled.div`
    gap: 10px;
    width: 240px;
    margin: 7px 12px;
    padding: 40px 10px;
    border-right: 0.7px solid #ccc;
`;

const title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 52px;
    border-bottom: 2px solid #124800;
`;

const titleTypo = styled.a`
    font-family: SpoqaHanSansNeoBold;
    font-size: 24px;
`;

const menuGroup = styled.div`
    gap: 7px;
    width: 100%;
`;

const menuTitle = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0px, 14px;
    border: none;
    outline: none;
    background: none;
    border-bottom: 2px solid #cccccc;
    font-family: SpoqaHanSansNeoMedium;
    font-size: 17px;
`;

const menuList = styled.div``;

const menuElement = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    padding-left: 28px;
    list-style: none;
    font-family: 'SpoqaHanSansNeoRegular';
    font-size: 14px;

    &:hover {
        font-family: SpoqaHanSansNeoBold;
    }
`;

export { body, title, titleTypo, menuGroup, menuTitle, menuList, menuElement };
