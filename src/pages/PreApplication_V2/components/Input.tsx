import cn from 'utils/ClassName';
import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import styles from '../PreApplicationV2.module.scss';

interface Props {
  step: number;
  progression: number;
  setProgression:React.Dispatch<React.SetStateAction<number>>;
  field: string;
  placeholder?: string;
  regExp?: RegExp;
  message?: string;
  error?:string;
}

export default function Input({
  step, progression, setProgression, field, placeholder = '', regExp = /^./, message = '※정확한 내용을 적어주셔야 제출하실 수 있습니다.', error = '',
}:Props) {
  const { register, setError, formState: { errors } } = useFormContext();
  const [isFocus, setIsFocus] = useState(false);

  return (
    <section className={cn({
      [styles.input]: true,
      [styles['input--disable']]: step > progression,
      [styles['input--wide']]: step === 4,
    })}
    >
      <div className={styles.input__step}>
        <span className={cn({
          [styles['input__step--now']]: true,
          [styles['input__step--before']]: step === progression,
        })}
        >
          {`0${step}`}
        </span>
        <span className={styles['input__step--entire']}>/</span>
        <span className={styles['input__step--entire']}>04</span>
      </div>
      {step !== 4 && (
        <>
          <input
            className={cn({
              [styles.input__input]: true,
              [styles['input__input--error']]: !!errors[field],
            })}
            type="text"
            placeholder={isFocus ? '' : placeholder}
            onFocus={() => setIsFocus(true)}
            {...register(`${field}`, {
              required: true,
              validate: (value) => regExp.test(value),
              onBlur: (e) => {
                setIsFocus(false);
                if (!regExp.test(e.target.value)) {
                  setError(field, { message });
                }
              },
              onChange: (event) => {
                if (progression === step && !errors[field]
              && event.target.value.length !== 0) { setProgression(step + 1); }
              }
              ,
            })}
          />
          <div className={styles.input__warning}>{error}</div>
        </>
      )}
      {step === 4 && (
        <textarea
          className={styles.input__textarea}
          placeholder={isFocus ? '' : placeholder}
          onFocus={() => setIsFocus(true)}
          {...register(`${field}`, {
            onBlur: () => setIsFocus(false),
          })}
        />
      )}
    </section>
  );
}
