import React from 'react';
import styles from '../PreApplication.module.scss';

interface Props {
  onClickArrowBtn : () => void
}
export default function InitPage(props : Props) {
  const { onClickArrowBtn } = props;
  return (
    <>
      <div className={styles.logo}>
        <div className={styles.logo__text}>Logo</div>
      </div>
      <div
        className={styles.section1}
      >
        <span
          className={styles.section1__top}
        >
          All the time
        </span>
        <span
          className={styles.section1__bottom}
        >
          All-ganize
        </span>
        <span className={styles.arrowBtn} onClick={onClickArrowBtn}>
          <svg className={styles.arrowBtn__btn} xmlns="http://www.w3.org/2000/svg" width="48" height="85" viewBox="0 0 48 85" fill="none">
            <path d="M24 0.757813L24 81.2578M24 81.2578C20.0235 71.3048 10.953 61.2343 1 56.2578M24 81.2578C27.9765 71.3048 37.047 61.2343 47 56.2578" stroke="black" strokeWidth="2" />
          </svg>
        </span>
      </div>
    </>
  );
}
