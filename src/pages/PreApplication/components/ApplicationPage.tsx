import React, { useState } from 'react';
import Input from './Input';
import styles from '../PreApplication.module.scss';
import { InputText } from '../type/type';
import Terms from './Terms';
import { onRegReservation } from '../api/apis';

export default function ApplicationPage() {
  const [stage, setState] = useState<number>(4);
  const [inputText, setInputText] = useState<InputText>({
    name: '', phoneNumber: '', email: '', expectation: '',
  });
  const [isTerms, setTerms] = useState<boolean>(false);

  const onRegNextStop = (step : number, text : string) : boolean => {
    let success = false;
    if (step === 1) {
      success = /^[가-힣a-zA-Z0-9]{2,}$/.test(text) || stage > 0;
    }
    if (step === 2) {
      const regPhoneNumber = /^(010|011)-(\d{4})-(\d{4})$/;
      const phoneNumber = text.replace(regPhoneNumber, '$1$2$3');

      success = /^(010|011)\d{8}$/.test(phoneNumber) || stage > 1;
    }
    if (step === 3) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      success = emailRegex.test(text) || stage > 2;
    }
    return success;
  };

  const nextStage = (e : React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>, step : number) => {
    const success = onRegNextStop(step, e.target.value);
    if (step === 1) {
      setInputText((prev) => ({
        ...prev,
        name: e.target.value,
      }));
    }
    if (step === 2) {
      setInputText((prev) => ({
        ...prev,
        phoneNumber: e.target.value,
      }));
    }
    if (step === 3) {
      setInputText((prev) => ({
        ...prev,
        email: e.target.value,
      }));
    }
    if (step === 4) {
      setInputText((prev) => ({
        ...prev,
        expectation: e.target.value,
      }));
    }
    if (success && step === stage) setState(step + 1);
  };

  const onClickSummit = () => {
    try {
      onRegReservation(inputText).then((res) => {
        console.log('res', res);
        const response = res.data;
        console.log('response', response);
      });
    } catch (e) {
      console.log('e', e);
    }
  };

  return (
    <div
      className={styles.section1}
    >
      <svg width="80" height="50" viewBox="0 0 80 50" fill="none" style={{ marginBottom: '15px' }} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_403_127)">
          <path d="M39.9646 24.7221L0 0H79.928L39.9646 24.7221Z" fill="black" />
          <path d="M39.9646 24.7216L0 49.4436H79.928L39.9646 24.7216Z" fill="black" />
          <path d="M80 24.7221L55.2299 9.44287L0 24.7221L24.698 40.0013L80 24.7221Z" fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_403_127">
            <rect width="80" height="49.4441" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {stage > 0 && <Input step={1} placeholder="* 이름을 작성해 주세요 :)  ex. 이창중" inputText={inputText} nextStage={nextStage} />}
      {stage > 1 && <Input step={2} placeholder="* 연락처를 작성해 주세요 :) ex. 010-XXXX-XXXX" inputText={inputText} nextStage={nextStage} />}
      {stage > 2 && <Input step={3} placeholder="* 이메일을 작성해 주세요 :) ex. ot3233@naver.com" inputText={inputText} nextStage={nextStage} />}
      {stage > 3
          && (
          <>
            <Input step={4} placeholder="하고 싶은 말을 작성해 주세요. (선택사항)" inputText={inputText} nextStage={nextStage} />
            <Terms isTerms={isTerms} setTerms={setTerms} />
            <button type="button" disabled={!isTerms} className={styles.summitBtn} onClick={onClickSummit}>
              <div className={styles.summitBtn__text}>SUBMIT</div>
            </button>
          </>
          )}
    </div>
  );
}
