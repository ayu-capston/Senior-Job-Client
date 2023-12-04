import TipBox from '../TipBox/TipBox';
import { TextArea } from '@components/Form/TextInput';

const SelfIntroduction = () => {
    return (
        <>
            <TipBox width='422px' text='직접 자기소개서를 작성해보세요. 일벗 AI가 맞춤법 및 표현을 수정해줄게요!' />
            <br />
            <br />
            <TextArea
                name='lecture_content'
                placeholder='< 자기소개서 작성 Tip >&#13;&#13;&#10;1. 간단하고 명료하게 작성한다.&#13;2. 사실대로 작성한다. &#13;3. 정성껏 작성한다. '
                required={true}
                maxLength={500}
                erase={true}
                width='100%'
            />
        </>
    );
};

export default SelfIntroduction;
