import { useState, useEffect } from 'react';
import { ReactComponent as Logo } from 'static/svg/logo.svg';
import cn from 'utils/ClassName';
import styles from './Landing.module.scss';
import TopNavigation from './components/TopNavigation';

export default function Landing() {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // 스크롤 이벤트에 대한 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 마운트 해제되면 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 이벤트 리스너를 추가
  console.log(1 - ((scrollY - (window.innerHeight * 1)) / window.innerHeight) * 2);

  const handlOpacity = (page:number, weight = 1) => {
    if ((scrollY - (window.innerHeight * (page / 2))) / window.innerHeight < 0.5) {
      return ((scrollY - (window.innerHeight * (page / 2))) / window.innerHeight) * (2 * weight);
    }
    return 1 - ((scrollY - (window.innerHeight * page)) / window.innerHeight) * (2 * weight);
  };

  return (
    <div className={styles.template}>
      <TopNavigation />

      <div
        className={cn({
          [styles.section1]: true,
        })}
      >
        <span
          className={styles.section1__back}
          style={{ opacity: (1 - 2.5 * (scrollY / window.innerHeight)) }}
        >
          All the time
        </span>
        <Logo
          className={styles.section1__logo}
          style={{ opacity: (1.2 - 2.5 * (scrollY / window.innerHeight)) }}
        />
        <span
          className={styles.section1__front}
          style={{ opacity: (1.4 - 2.5 * (scrollY / window.innerHeight)) }}
        >
          All-ganize
        </span>
      </div>
      <div
        className={styles.section2}
      >
        <span style={{ opacity: handlOpacity(1) }}>
          완벽한 시간 관리,

        </span>
        <span style={{ opacity: handlOpacity(1) }}>
          시간의 정보에 대한 완전한 이해로부터

        </span>
        <span />
      </div>
    </div>
  );
}
