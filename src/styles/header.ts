import styled from 'styled-components';

const StyleHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: SpoqaHanSansNeoBold;
    padding: 200px;
`;

const StyleLogo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyleMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 50px;
`;

const StyleMenuTypo = styled.a`
    font-size: 32px;
`;

const StyleButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
`;

const StyleButton = styled.a`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
`;

const StyleButtonTypo = styled.p`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    font-size: 30px;
    color: #124800;
`;

export { StyleHeader, StyleLogo, StyleMenu, StyleMenuTypo, StyleButtonGroup, StyleButton, StyleButtonTypo };
