import { useForm, FormProvider } from 'react-hook-form';
import { useState } from 'react';
import { EMAIL_REGEXP, PHONE_REGEXP } from 'static/RegExp';
import AutoHypen from 'utils/AutoHypen';
import { createPortal } from 'react-dom';
import styles from '../PreApplicationV2.module.scss';
import Progress from './Progress';
import Input from './Input';
import { ApplicationFormParams, ModalData } from '../type';
import usePreApplication from '../hooks/usePreApplication';
import Modal from './Modal/Modal';

export default function Request() {
  const [modalData, setModalData] = useState<ModalData>({
    title: '',
    content: '',
    isOpen: false,
    action: () => {},
  });
  const { preRegister } = usePreApplication({ setModalData });
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

  const { setValue, handleSubmit, formState: { errors } } = methods;

  return (
    <div className={styles.request}>
      {modalData.isOpen && createPortal(<Modal
        title={modalData.title}
        content={modalData.content}
        closeModal={() => setModalData((prev) => ({ ...prev, isOpen: false }))}
        onClick={modalData.action}
      />, document.body)}
      <Progress progression={progression} />
      <FormProvider {...methods}>
        <form
          className={styles.form}
          onSubmit={handleSubmit((data) => preRegister(data))}
        >
          <Input
            step={1}
            progression={progression}
            setProgression={setProgression}
            field="name"
            placeholder="* 이름을 작성해 주세요.  ex)홍길동"
            regExp={/^.{2,20}$/}
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
            onChange={(event:React.ChangeEvent<HTMLInputElement>) => AutoHypen({ event, setPhoneNumber: (value:string) => setValue('phoneNumber', value, { shouldValidate: true }) })}
          />
          <Input
            step={3}
            progression={progression}
            setProgression={setProgression}
            field="email"
            placeholder="* 이메일을 작성해 주세요. ex)abs2333@naver.com"
            regExp={EMAIL_REGEXP}
            message="※정확한 내용을 적어주셔야 제출하실 수 있습니다."
            error={errors.email?.message}
          />
          <Input
            step={4}
            progression={progression}
            setProgression={setProgression}
            field="expectation"
            placeholder="하고 싶은 말을 작성해 주세요. (선택사항)"
          />
        </form>
      </FormProvider>
    </div>
  );
}
