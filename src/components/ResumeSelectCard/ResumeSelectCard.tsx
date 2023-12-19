import ProfileImg from '@assets/images/image-resume-profile.png';

const ResumeSelectCard = (props: ResumeState) => {
    return (
        <>
            <input type='radio' id={props.id} name='shop' />
            <label htmlFor={props.id}>
                <img src={ProfileImg} alt='일벗 프로필 사진' />
                <p>{props.title}</p>
                <p>마지막 수정 : {props.date}</p>
            </label>
        </>
    );
};

export default ResumeSelectCard;
