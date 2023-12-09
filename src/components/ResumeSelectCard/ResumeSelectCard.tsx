import ProfileImg from '@assets/images/image-resume-profile.png';

interface SelectCardProps {
    id: string;
}

const ResumeSelectCard = ({ id }: SelectCardProps) => {
    return (
        <>
            <input type='radio' id={id} name='shop' />
            <label htmlFor={id}>
                <img src={ProfileImg} alt='일벗 프로필 사진' />
                <p>일벗 평생 학습 센터에서 어쩌구저쩌구</p>
                <p>마지막 수정 : 20xx.xx.xax</p>
            </label>
        </>
    );
};

export default ResumeSelectCard;
