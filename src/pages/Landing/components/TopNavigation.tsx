import { useEffect, useState } from 'react';
import useMediaQuery from 'hooks/useMediaQuery';
import LogoBlack from 'static/image/Logo/both_white_trans.png';
import { useNavigate } from 'react-router-dom';
import styles from '../Landing.module.scss';

export default function TopNavigation() {
  const { isMobile } = useMediaQuery();
  const navigate = useNavigate();
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.scrollY);
  const [visible, setVisible] = useState<boolean>(true);

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

  useEffect(() => {
    let timeOut:any;

    const handleWheel = () => {
      setVisible(false);
      clearTimeout(timeOut);

      timeOut = setTimeout(() => setVisible(true), 1000);
    };

    window.addEventListener('scroll', handleWheel);

    return () => {
      window.removeEventListener('scroll', handleWheel);
    };
  }, []);

  return (
    <div className={styles.nav} style={{ top: isNavVisible ? 0 : '-80px' }}>
      <div className={styles.nav__logo}><img src={LogoBlack} alt="logo" /></div>
      <div className={styles.nav__menu}>
        {!isMobile && (
        <button
          className={styles['nav__menu--register']}
          type="button"
          onClick={() => navigate('/application')}
        >
          사전 신청
        </button>
        )}
      </div>
      {isMobile && (
      <button
        className={styles.nav__mobile}
        type="button"
        style={{ transform: `translate(-50%, ${visible ? 0 : 200}%)` }}
        onClick={() => navigate('/navigate')}
      >
        사전 신청
      </button>
      )}
    </div>
  );
}
