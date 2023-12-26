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

  const handlScrollDegree = (page = 1, weight = 1) => {
    if (((scrollY
      - (window.innerHeight * page)) / window.innerHeight) * (2) + 1 * weight < 0) return 0;

    if (((scrollY
    - (window.innerHeight * page)) / window.innerHeight) * (2) + 1 * weight < 1) {
      return ((scrollY
      - (window.innerHeight * page)) / window.innerHeight) * (2) + 1 * weight;
    }
    // return ((scrollY - (window.innerHeight * (page / 2))) / window.innerHeight) * (2 * weight);
    // return 1 - ((scrollY - (window.innerHeight * page)) / window.innerHeight) * (2 * weight);
    return 1;
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
          style={{ opacity: (1.2 - 2.5 * (scrollY / window.innerHeight)), transform: `rotate(${(scrollY / window.innerHeight) * 180}deg)` }}
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
        <span style={{ opacity: handlScrollDegree(1) }}>
          완벽한 시간 관리,
        </span>
        <span style={{ opacity: handlScrollDegree(1) }}>
          시간의 정보에 대한 완전한 이해로부터

        </span>
        <span />
      </div>

      <div className={styles.section3}>
        <span style={{ opacity: handlScrollDegree(2) }}>
          <span>
            시공
          </span>
          <div className={styles.section3__sub}>
            時+空
          </div>

        </span>
        <div
          className={styles.section3__phrase}
          style={{ opacity: handlScrollDegree(2) === 1 ? 1 : 0 }}
        >
          시간은 공간의 흐름이고, 공간은 시간의 내용이다
          <div>
            시간과 공간은 본디 하나로 얽혀 있기에
            {'\n'}
            공간의 흐름이 결여된 시간은 결코 온전한 정보를 담지 못합니다.
          </div>
        </div>
        <span
          className={cn({
            [styles.line]: true,
            [styles.line__top]: true,
          })}
          style={{ height: `${20 * handlScrollDegree(2)}%` }}
        />
        <span
          className={cn({
            [styles.line]: true,
            [styles.line__left]: true,
          })}
          style={{ height: `${20 * handlScrollDegree(2)}%` }}
        />
        <span
          className={cn({
            [styles.line]: true,
            [styles.line__right]: true,
          })}
          style={{ height: `${20 * handlScrollDegree(2)}%` }}
        />

      </div>
    </div>
  );
}
