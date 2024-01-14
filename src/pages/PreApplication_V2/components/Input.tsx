import cn from 'utils/ClassName';
import { useFormContext } from 'react-hook-form';
import styles from '../PreApplicationV2.module.scss';

interface Props {
  step: number;
  progression: number;
  setProgression:React.Dispatch<React.SetStateAction<number>>;
  field: string;
  placeholder?: string;
  regExp: RegExp;
  message: string;
  error?:string;
}

export default function Input({
  step, progression, setProgression, field, placeholder, regExp, message = '※정확한 내용을 적어주셔야 제출하실 수 있습니다.', error,
}:Props) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <section className={cn({
      [styles.input]: true,
      [styles['input--disable']]: step > progression,
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
      <input
        className={styles.input__input}
        type="text"
        placeholder={placeholder}
        {...register(`${field}`, {
          required: true,
          pattern: {
            value: regExp,
            message,
          },
          onChange: (event) => {
            if (progression === step && !errors[field]
              && event.target.value.length !== 0) { setProgression(step + 1); }
          }
          ,
        })}
      />
      <div className={styles.input__warning}>{error}</div>
    </section>
  );
}
