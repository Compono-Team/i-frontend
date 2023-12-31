import React, { useState } from 'react';
import cn from 'utils/ClassName';
import styles from './PreApplication.module.scss';
import InitPage from './components/InitPage';
import ApplicationPage from './components/ApplicationPage';

function PreApplication() {
  const [step, setStep] = useState<number>(0);
  const onClickArrowBtn = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className={cn({ [styles.template]: true })}>
      {step === 0 && <InitPage onClickArrowBtn={onClickArrowBtn} /> }
      {step === 1 && <ApplicationPage />}
    </div>
  );
}

export default PreApplication;
