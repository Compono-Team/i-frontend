import cn from 'utils/ClassName';
import styles from '../PreApplicationV2.module.scss';

interface Props {
  progression:number
}

export default function Progress({ progression }:Props) {
  return (
    <section className={styles.progress}>
      <div className={styles.progress__container}>
        <div className={cn({
          [styles.progress__dot]: true,
          [styles['progress__dot--active']]: true,
        })}
        />
        <div className={cn({
          [styles.progress__dot]: true,
          [styles['progress__dot--active']]: progression >= 2,
        })}
        />
        <div className={cn({
          [styles.progress__dot]: true,
          [styles['progress__dot--active']]: progression >= 3,
        })}
        />
        <div className={cn({
          [styles.progress__dot]: true,
          [styles['progress__dot--active']]: progression >= 4,
        })}
        />
      </div>
    </section>
  );
}
