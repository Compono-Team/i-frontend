import React, { useMemo } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { cloneDeep } from 'lodash-es';
import styles from '../PreApplication.module.scss';
import { InputText } from '../type/type';

interface Props {
  step : number
  placeholder : string;
  nextStage : (e: React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>, step: number)=>void;
  inputText : InputText;
  warning ?: boolean[];
  setWarningLit ?: React.Dispatch<boolean[]>;
}

function
Input(props : Props) {
  const {
    step, placeholder, nextStage, inputText, warning, setWarningLit,
  } = props;

  const text = useMemo(() => inputText[`${Object.keys(inputText)[step - 1]}`], [inputText, step]);

  const onCheckWarning = () => {
    let success = false;
    const cloneWarning = cloneDeep(warning);
    if (step === 1) {
      success = /^[가-힣a-zA-Z0-9]{2,}$/.test(text);
    }
    if (step === 2) {
      const regPhoneNumber = /^(010|011)-(\d{4})-(\d{4})$/;
      const phoneNumber = text.replace(regPhoneNumber, '$1$2$3');

      success = /^(010|011)\d{8}$/.test(phoneNumber);
    }
    if (step === 3) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      success = emailRegex.test(text);
    }
    if (cloneWarning) {
      cloneWarning[step - 1] = !success;
      if (text.length > 0 && setWarningLit) setWarningLit(cloneWarning);
    }
  };

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
          <>
            <input
              value={text}
              placeholder={placeholder}
              className={styles.application__input}
              style={{
                textAlign: text.length > 0 && step === 4 ? 'left' : 'center',
                border: warning && warning[step - 1] ? ' 1px solid #E00000' : 'initial',
              }}
              maxLength={50}
              onChange={(e) => nextStage(e, step)}
              onBlur={() => { onCheckWarning(); }}
            />
            {warning && warning[step - 1] && (
            <span className={styles.application__warning}>※정확한 내용을 적어주셔야 제출하실 수 있습니다.</span>
            )}
          </>
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
