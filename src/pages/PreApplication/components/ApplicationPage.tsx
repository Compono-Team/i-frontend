import React, { useState } from 'react';
import Input from './Input';
import styles from '../PreApplication.module.scss';
import { InputText } from '../type/type';
import Terms from './Terms';

export default function ApplicationPage() {
  const [stage, setState] = useState<number>(4);
  const [inputText, setInputText] = useState<InputText>({
    name: '', number: '', email: '', todo: '',
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

  const nextStage = (e : React.ChangeEvent<HTMLInputElement>, step : number) => {
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
        number: e.target.value,
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
        todo: e.target.value,
      }));
    }
    if (success && step === stage) setState(step + 1);
  };

  return (
    <div
      className={styles.section1}
      style={{ height: stage > 0 ? `${100 + (stage + 30)}vh` : '100vh' }}
    >
      {stage > 0 && <Input step={1} placeholder="이름을 작성해 주세요" inputText={inputText} nextStage={nextStage} />}
      {stage > 1 && <Input step={2} placeholder="연락처를 입력해 주세요" inputText={inputText} nextStage={nextStage} />}
      {stage > 2 && <Input step={3} placeholder="이메일을 입력해 주세요" inputText={inputText} nextStage={nextStage} />}
      {stage > 3
          && (
          <>
            <Input step={4} placeholder="하고 싶은말" inputText={inputText} nextStage={nextStage} />
            <Terms isTerms={isTerms} setTerms={setTerms} />
            <button className={styles.summitBtn}>
              <div className={styles.summitBtn__text}>SUBMIT</div>
            </button>
          </>
          )}
    </div>
  );
}
