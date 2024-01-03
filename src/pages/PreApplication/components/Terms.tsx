/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import styles from '../PreApplication.module.scss';

interface Props {
  isTerms : boolean
  setTerms : React.Dispatch<boolean>
}

export default function Terms(props : Props) {
  const modalRef: any = useRef();
  const { isTerms, setTerms } = props;

  return (
    <>
      <div className={styles.terms}>
        <div className={styles.terms__layout}>
          <input
            type="checkbox"
            defaultChecked={isTerms}
            onClick={() => { setTerms(!isTerms); }}
            className={styles.terms__layout__checkbox}
          />
          <div className={styles.terms__layout__text}>
            [필수] *개인정보 활용 수집동의
          </div>
          <div
            onClick={() => { modalRef?.current?.showModal(); }}
            className={styles.terms__layout__text2}
          >
            자세히 보기
          </div>
        </div>
      </div>
      <dialog
        ref={modalRef}
        style={{
          outline: 'none',
          border: 'none',
          borderRadius: '6px',
          backgroundColor: 'rgba(0, 0, 0, 0.001)',
        }}
      >
        <div className={styles.frame}>
          <div className={styles.frame__rectangle} />
          <div className={styles.frame__group}>
            <p className={styles.frame__compono}>
              Compono는 「개인정보 보호법」에 따라 동의를 얻어, 본 설문과 관련하여 수집한 정보를 관리함에 있습니다.
              <br />
              <br />
              목적 : 서비스 출시 및 프로모션 알림
              <br />
              항목 : 성명, 핸드폰번호, 이메일주소 등 신청서에 기재한 내용
              <br />
              개인 정보 보유 및 이용 기간 : 신청자의 수신 거부 요청 시까지
              <br />
              수집근거 :&nbsp;&nbsp;「개인정보 보호법」 제 15조 제1항 귀하는 개인정보 제공에 대한 동의를 거부할 권리가
              있으며,동의를 거부할 경우 거부한 내용 관련 서비스를 받을 수 없습니다.
            </p>
            <div className={styles.frame__text}>개인정보 수집 동의</div>
            <p className={styles.frame__div}>
              이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며 이외의 용도로는 사용되지 않습니다.
            </p>
          </div>
          <svg className={styles.frame__img} onClick={() => { modalRef?.current?.close(); }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.246647 0.246647C0.575509 -0.0822157 1.1087 -0.0822157 1.43756 0.246647L15.7534 14.5624C16.0822 14.8913 16.0822 15.4245 15.7534 15.7534C15.4245 16.0822 14.8913 16.0822 14.5624 15.7534L0.246647 1.43756C-0.0822157 1.1087 -0.0822157 0.575509 0.246647 0.246647Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M15.7534 0.246647C15.4245 -0.0822157 14.8913 -0.0822157 14.5624 0.246647L0.246648 14.5624C-0.0822163 14.8913 -0.0822163 15.4245 0.246648 15.7534C0.57551 16.0822 1.1087 16.0822 1.43756 15.7534L15.7534 1.43756C16.0822 1.1087 16.0822 0.575509 15.7534 0.246647Z" fill="black" />
          </svg>
        </div>
      </dialog>
    </>
  );
}
