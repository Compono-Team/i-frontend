import { useState } from 'react';
import cn from 'utils/ClassName';
import styles from './Modal.module.scss';

interface Props {
  title:string;
  content:string;
  closeModal:Function;
  onClick:Function;
}

export default function Modal({
  title, content, closeModal, onClick,
}:Props) {
  const [isClose, setIsClose] = useState<boolean>(false);

  const handleClose = () => {
    setIsClose(true);

    setTimeout(() => { closeModal(); }, 200);
  };
  return (
    <div className={styles.template}>
      <div className={cn({
        [styles.modal]: true,
        [styles['modal--close']]: isClose,
      })}
      >
        <span className={styles.modal__title}>{title}</span>
        <div className={styles.modal__content}>{content}</div>
        <button
          className={styles.modal__close}
          type="button"
          onClick={() => {
            onClick();
            handleClose();
          }}
        >
          확인
        </button>
      </div>
    </div>
  );
}
