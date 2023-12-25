import { useEffect, useState } from 'react';
import styles from '../Landing.module.scss';

export default function TopNavigation() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setIsNavVisible(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div className={styles.nav} style={{ top: isNavVisible ? 0 : '-80px' }}>
      <div className={styles.nav__logo}>Logo</div>
      <div className={styles.nav__menu}>
        <button
          className={styles['nav__menu--item']}
          type="button"
        >
          About
        </button>
        <button
          className={styles['nav__menu--item']}
          type="button"
        >
          Contact
        </button>
      </div>
    </div>
  );
}
