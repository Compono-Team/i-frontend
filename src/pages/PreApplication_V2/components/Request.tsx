import { useForm, FormProvider } from 'react-hook-form';
import { useState } from 'react';
import { NAME_REGEXP, PHONE_REGEXP } from 'static/RegExp';
import styles from '../PreApplicationV2.module.scss';
import Progress from './Progress';
import Input from './Input';
import { ApplicationFormParams } from '../type';

export default function Request() {
  const [progression, setProgression] = useState<number>(1);
  const methods = useForm<ApplicationFormParams>({
    mode: 'onChange',
    defaultValues: {
      phoneNumber: '',
      name: '',
      expectation: '',
      email: '',
    },
  });

  const { handleSubmit, formState: { errors } } = methods;

  return (
    <div className={styles.request}>
      <Progress progression={progression} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(() => console.log('hi'))}>
          <Input
            step={1}
            progression={progression}
            setProgression={setProgression}
            field="name"
            placeholder="* 이름을 작성해 주세요.  ex)홍길동"
            regExp={NAME_REGEXP}
            message="※정확한 내용을 적어주셔야 제출하실 수 있습니다."
            error={errors.name?.message}
          />
          <Input
            step={2}
            progression={progression}
            setProgression={setProgression}
            field="phoneNumber"
            placeholder="* 연락처를 적어주세요. ex)010-xxxx-xxxx"
            regExp={PHONE_REGEXP}
            message="※정확한 내용을 적어주셔야 제출하실 수 있습니다."
            error={errors.phoneNumber?.message}
          />
        </form>
      </FormProvider>
      {/* <section className={styles.input}>
        <div className={styles.input__step}>
          <span className={cn({
            [styles['input__step--now']]: true,
          })}
          >
            01
          </span>
          <span className={styles['input__step--entire']}>/</span>
          <span className={styles['input__step--entire']}>04</span>
        </div>
        <input
          className={styles.input__input}
          type="text"
          placeholder="* 이름을 작성해 주세요. ex)홍길동"
          {...register('name', { required: true })}
        />
        <div className={styles.input__warning}>
          * 정확한 내용을 적어주셔야 제출하실 수 있습니다.
        </div>
      </section> */}
    </div>
  );
}
