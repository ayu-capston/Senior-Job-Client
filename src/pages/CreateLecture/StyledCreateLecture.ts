import styled from 'styled-components';

const FormBox = styled.section`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 90%;
    height: 2500px;
    padding: 35px 50px 35px 35px;
    border-radius: 20px;
    border: 0.7px solid #ccc;
`;

const Form = styled.div`
    width: 100%;
    padding: 10px 14px;
`;

const FormHead = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: 27px;
    padding: 0px 7px;
    gap: 7px;
`;

const TitleBullet = styled.a`
    width: 2px;
    height: auto;
    background-color: #ccc;
`;

const FormTitle = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const FormTitleTypo = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    font-size: 18px;

    span {
        color: #ff6666;
    }
`;

const FormTitleHint = styled.ul`
    li {
        font-size: 12px;
        color: #124800;
    }
`;

const FormBody = styled.div`
    gap: 5px;
    margin: 14px 7px;
`;

const Horizontal = styled.div`
    border: 0.7px solid #ccc;
`;

export { FormBox, Form, FormHead, TitleBullet, FormTitle, FormTitleTypo, FormTitleHint, FormBody, Horizontal };
