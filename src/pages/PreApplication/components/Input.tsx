import React, { useMemo } from 'react';
import styles from '../PreApplication.module.scss';
import { InputText } from '../type/type';

interface Props {
  step : number
  placeholder : string;
  nextStage : (e: React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>, step: number)=>void;
  inputText : InputText;
}

function
Input(props : Props) {
  const {
    step, placeholder, nextStage, inputText,
  } = props;

  const text = useMemo(() => inputText[`${Object.keys(inputText)[step - 1]}`], [inputText, step]);

  return (
    <>
      {step === 1
      && (
      <span
        className={styles.application__top}
      >
        사전 신청 정보
      </span>
      )}
      {step !== 4
        ? (
          <input
            value={text}
            placeholder={placeholder}
            className={styles.application__input}
            style={{ textAlign: text.length > 0 && step === 4 ? 'left' : 'center' }}
            maxLength={50}
            onChange={(e) => nextStage(e, step)}
            onBlur={(e) => { console.log('blur', e); }}
          />
        )
        : (
          <textarea
            value={text}
            placeholder={placeholder}
            className={styles.application__textarea}
            style={{ textAlign: text.length < 0 && step === 4 ? 'left' : 'center' }}
            maxLength={200}
            onChange={(e) => nextStage(e, step)}
          />
        )}
    </>
  );
}
export default Input;
