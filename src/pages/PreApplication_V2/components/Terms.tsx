import { useState } from 'react';
import { ReactComponent as Close } from 'static/svg/close.svg';
import { useFormContext } from 'react-hook-form';
import styles from '../PreApplicationV2.module.scss';

export default function Terms() {
  const { formState: { isValid } } = useFormContext();
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.terms}>
      {isOpen
      && (
      <section className={styles.privacy}>
        <div className={styles.privacy__modal}>
          <Close className={styles['privacy__modal--close']} onClick={() => setIsOpen(false)} />
          <span className={styles['privacy__modal--title']}>개인정보 수집 동의</span>
          <div className={styles['privacy__modal--sub']}>
            {'이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며\n이외의 용도로는 사용되지 않습니다.'}
          </div>
          <div className={styles['privacy__modal--phrase']}>
            <span>
              {'(주)Compono는 「개인정보 보호법」에 따라 동의를 얻어, 본 설문과 관련하여\n수집한 정보를 관리함에 있습니다.'}
            </span>
            <div>•목적 : 서비스 출시 및 프로모션 알림</div>
            <div>•항목 : 성명, 핸드폰번호, 이메일주소 등 신청서에 기재한 내용</div>
            <div>•개인 정보 보유 및 이용 기간 : 신청자의 수신 거부 요청 시까지</div>
            <div>{'•수집근거 :  「개인정보 보호법」 제 15조 제1항 귀하는 개인정보 제공에\n대한 동의를 거부할 권리가 있으며,동의를 거부할 경우 거부한 내용 관련\n서비스를 받을 수 없습니다.'}</div>
          </div>
        </div>
      </section>
      )}

      <div className={styles.terms__agreement}>
        <input type="checkbox" onChange={(event) => setIsChecked(event.target.checked)} />
        <span className={styles['terms__agreement--phrase']}>[필수] 개인정보 활용 수집동의</span>
        <button
          className={styles['terms__agreement--detail']}
          type="button"
          onClick={() => setIsOpen(true)}
        >
          자세히 보기
        </button>
      </div>

      <div className={styles.terms__submit}>
        <span className={styles['terms__submit--mas']}>SUBMIT</span>
        <button
          type="submit"
          name="Hover"
          disabled={!isChecked || !isValid}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}
