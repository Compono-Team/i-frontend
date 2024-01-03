import React, { useState } from 'react';
import Input from './Input';
import styles from '../PreApplication.module.scss';
import { InputText } from '../type/type';
import Terms from './Terms';
import onRegReservation from '../api/apis';

export default function ApplicationPage() {
  const [inputText, setInputText] = useState<InputText>({
    name: '', phoneNumber: '', email: '', expectation: '',
  });
  const [isTerms, setTerms] = useState<boolean>(false);
  const [warningList, setWarningLit] = useState<boolean[]>([false, false, false]);
  const nextStage = (e : React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>, step : number) => {
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
  };

  const onClickSummit = () => {
    try {
      let Pass = true;
      Object.keys(inputText).forEach((key, idx) => {
        if (idx !== 3 && !Pass) {
          Pass = inputText[key].replaceAll(' ', '') !== '';
        }
      });
      if (isTerms && Pass && warningList.filter((item) => item).length === 0) {
        onRegReservation(inputText).then(() => {
          const currentURL = window.location.href;
          const url = new URL(currentURL);
          url.pathname = '/';
          window.location.href = url.toString();
        });
      }
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
      <svg xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '30px' }} width="80" height="25" viewBox="0 0 80 25" fill="none">
        <g clipPath="url(#clip0_403_132)">
          <path d="M0 24.1423L10.6645 0.443481H14.9975L25.6961 24.1423H21.0915L11.9176 2.77926H13.6786L4.53638 24.1423H0ZM18.8909 15.2047L20.0758 18.6585L18.8909 15.2047ZM4.90905 18.6572L6.09399 15.2035L4.90905 18.6572Z" fill="black" />
          <path d="M21.0586 24.1426L31.046 10.397V13.7143L21.5323 0.443726H26.5096L33.5851 10.2618L31.5538 10.2959L38.5611 0.443726H43.335L33.8896 13.4781V10.2959L43.9451 24.1426H38.8668L31.4186 13.7156H33.4158L26.0687 24.1426H21.0586Z" fill="black" />
          <path d="M48.6167 24.1426V14.7641L49.5982 17.4725L39.3064 0.443726H44.0121L52.2725 14.1552H49.6323L57.961 0.443726H62.294L52.0022 17.4725L53.0179 14.7641V24.1426H48.6167Z" fill="black" />
          <path d="M59.7891 24.1426V21.1966L75.0922 2.5079L75.6001 4.16657H60.0266V0.443726H79.5617V3.38966L64.2585 22.0784L63.7166 20.4197H80.0013V24.1438H59.7891V24.1426Z" fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_403_132">
            <rect width="80" height="23.6989" fill="white" transform="translate(0 0.444092)" />
          </clipPath>
        </defs>
      </svg>
      <Input step={1} placeholder="* 이름을 작성해 주세요  ex. 홍길동" inputText={inputText} nextStage={nextStage} warning={warningList} setWarningLit={setWarningLit} />
      <Input step={2} placeholder="* 연락처를 작성해 주세요  ex. 010-XXXX-XXXX" inputText={inputText} nextStage={nextStage} warning={warningList} setWarningLit={setWarningLit} />
      <Input step={3} placeholder="* 이메일을 작성해 주세요  ex. axyz@today.com" inputText={inputText} nextStage={nextStage} warning={warningList} setWarningLit={setWarningLit} />
      <Input step={4} placeholder="하고 싶은 말을 작성해 주세요. (선택사항)" inputText={inputText} nextStage={nextStage} />
      <Terms isTerms={isTerms} setTerms={setTerms} />
      <button type="button" disabled={!isTerms} className={styles.summitBtn} onClick={onClickSummit}>
        <div className={styles.summitBtn__text}>SUBMIT</div>
      </button>

    </div>
  );
}
