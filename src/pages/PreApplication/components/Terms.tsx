import React from 'react';
import styles from '../PreApplication.module.scss';

interface Props {
  isTerms : boolean
  setTerms : React.Dispatch<boolean>
}

export default function Terms(props : Props) {
  const { isTerms, setTerms } = props;

  return (
    <div className={styles.terms}>
      <div className={styles.terms__layout}>
        <div className={styles.terms__layout__checkbox} />
        <div className={styles.terms__layout__text}>
          [필수] 개인정보 활용 수집동의
        </div>
        <div className={styles.terms__layout__text2}>자세히 보기</div>
      </div>
    </div>
  );
}
