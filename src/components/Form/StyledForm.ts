import styled from 'styled-components';

const FormBox = styled.section`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
    height: 2500px;
    padding: 35px 50px 35px 35px;
    border-radius: 20px;
    border: 0.7px solid #ccc;
`;

const Form = styled.div`
    width: 100%;
    padding: 20px 14px;
`;

const FormHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: 27px;
    padding: 0px 7px;
    gap: 7px;
`;

const FormTitle = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const FormTitleBullet = styled.div`
    width: 2px;
    height: auto;
    background-color: #ccc;
`;

const FormTitleTypo = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: SpoqaHanSansNeoMedium;
    font-size: 18px;
`;

const FormRequired = styled.span`
    font-size: 18px;
    color: #ff6666;
`;

const FormHintTitle = styled.ul``;

const FormHintBody = styled.li`
    font-family: SpoqaHanSansNeoRegular;
    font-size: 12px;
    color: #124800;
`;

const FormBody = styled.div`
    gap: 5px;
    margin: 14px 7px;
    font-family: SpoqaHanSansNeoMedium;
    font-size: 14px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    gap: 5px;
    margin: 14px 7px;
    font-family: SpoqaHanSansNeoMedium;
    font-size: 14px;
`;

const Horizontal = styled.div`
    border-bottom: 0.7px solid #ccc;
`;

export {
    FormBox,
    Form,
    FormHeader,
    FormTitle,
    FormTitleBullet,
    FormTitleTypo,
    FormRequired,
    FormHintTitle,
    FormHintBody,
    FormBody,
    FormGroup,
    Horizontal
};
