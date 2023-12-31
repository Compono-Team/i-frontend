import React, { useMemo } from 'react';
import styles from '../PreApplication.module.scss';
import { InputText } from '../type/type';

interface Props {
  step : number
  placeholder : string;
  nextStage : (e: React.ChangeEvent<HTMLInputElement>, step: number)=>void;
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
      <span
        className={styles.application__top}
      >
        {`Q.${step}`}
      </span>
      <span
        className={styles.application__bottom}
      >
        {placeholder}
      </span>
      <input
        value={text}
        className={styles.application__input}
        onChange={(e) => nextStage(e, step)}
        onKeyDown={(e) => { console.log('keydown', e); }}
        onBlur={(e) => { console.log('blur', e); }}
      />
    </>
  );
}
export default Input;
