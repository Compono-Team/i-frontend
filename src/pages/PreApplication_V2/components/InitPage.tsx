import { ReactComponent as Arrow } from 'static/svg/arrow.svg';
import React, { useEffect, useRef, useState } from 'react';
import cn from 'utils/ClassName';
import styles from '../PreApplicationV2.module.scss';

export default function InitPage() {
  const initRef = useRef<HTMLDivElement>(null);
  const touchRef = useRef<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const init = initRef?.current;
    if (!init) return;

    init.addEventListener('wheel', (event:WheelEvent) => {
      if (event.deltaY > 0) { setVisible(false); }
    });
    init.addEventListener('touchmove', (event) => {
      if (touchRef.current > event.touches[0].clientY)setVisible(false);
      touchRef.current = event.touches[0].clientY;
    });

    // eslint-disable-next-line consistent-return
    return () => {
      init.removeEventListener('wheel', (event:WheelEvent) => {
        if (event.deltaY > 0) { setVisible(false); }
      });
      init.removeEventListener('touchmove', (event) => {
        if (touchRef.current > event.touches[0].clientY)setVisible(false);
        touchRef.current = event.touches[0].clientY;
      });
    };
  }, []);

  return (
    <div
      className={cn({
        [styles.init]: true,
        [styles['init--hidden']]: !visible,
      })}
      ref={initRef}
    >
      <div className={styles.init__phrase}>
        ALL THE TIME
        {'\n'}
        ALL-GANIZE
      </div>
      <Arrow className={styles.init__arrow} onClick={() => setVisible(false)} />
    </div>
  );
}
