import { useState, useEffect, useRef } from 'react';
import cn from 'utils/ClassName';
import useMediaQuery from 'hooks/useMediaQuery';
import Logo from 'static/image/Logo/logo_white_trans.png';
import LandingWeb from 'static/image/Landing/landing_web.png';
import LandingMobile from 'static/image/Landing/landing_mobile.png';
import LandingCrawling from 'static/image/Landing/landing_crawling.png';
import LandingPhoto from 'static/image/Landing/landing_photo.png';
import LandingList from 'static/image/Landing/landing_list.png';
import LandingMain from 'static/image/Landing/landing_main.png';
import LandingSummary from 'static/image/Landing/landing_summary.png';
import styles from './Landing.module.scss';
import TopNavigation from './components/TopNavigation';

export default function Landing() {
  const { isMobile } = useMediaQuery();
  const firstRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlScrollDegree = (page = 1, weight = 1) => {
    if (((scrollY
      - (window.innerHeight * page)) / window.innerHeight) * (2) + 1 * weight < 0) return 0;

    if (((scrollY
        - (window.innerHeight * page)) / window.innerHeight) * (2) + 1 * weight < 1) {
      return ((scrollY
            - (window.innerHeight * page)) / window.innerHeight) * (2) + 1 * weight;
    }

    return 1;
  };

  return (
    <div className={styles.template}>
      <TopNavigation />
      <div
        className={cn({
          [styles.section1]: true,
        })}
        ref={firstRef}
        style={{ transform: `translateY(${((window.scrollY === 0) ? 0 : -100)}%)` }}
      >
        <span className={styles.section1__back}>
          All the time
        </span>
        <video className={styles.section1__logo} muted autoPlay loop width="100%" height="100%">
          <source src="/videos/landing.webm" type="video/webm" />
        </video>
        <span className={styles.section1__front}>
          All-ganize
        </span>
      </div>

      <div className={styles.content}>
        <div
          className={styles['section2-1']}
          style={{
            opacity: `${(window.scrollY === 0) ? 0 : 1}`,
            transform: `translateY(${(window.scrollY === 0) ? 100 : 0}%)`,
          }}
        >
          <span>
            완벽한 시간 관리,
          </span>
          <span>
            시간의 정보에 대한 완전한 이해로부터

          </span>
          <span />
        </div>

        <div className={styles['section2-2']}>
          <span style={{ opacity: handlScrollDegree(1) }}>
            <span>
              시공
            </span>
            <div className={styles['section2-2__sub']}>
              時+空
            </div>

          </span>
          <div
            className={styles['section2-2__phrase']}
            style={{ opacity: handlScrollDegree(0.8) === 1 ? 1 : 0 }}
          >
            시간은 공간의 흐름이고,
            {isMobile && '\n'}
            {' '}
            공간은 시간의 내용이다
            <div style={{ opacity: handlScrollDegree(1) === 1 ? 1 : 0 }}>
              시간과 공간은 본디 하나로 얽혀 있기에
              {'\n'}
              공간의 흐름이 결여된 시간은 결코
              {isMobile && '\n'}
              {' '}
              온전한 정보를 담지 못합니다.
            </div>
          </div>
          <span
            className={cn({
              [styles.line]: true,
              [styles.line__top]: true,
            })}
            style={{ height: `${10 * handlScrollDegree(0.7)}%` }}
          />
          <span
            className={cn({
              [styles.line]: true,
              [styles.line__left]: true,
            })}
            style={{ width: `${20 * handlScrollDegree(1.3)}%` }}
          />
          <span
            className={cn({
              [styles.line]: true,
              [styles.line__right]: true,
            })}
            style={{ width: `${20 * handlScrollDegree(1.3)}%` }}
          />
        </div>

        <div className={styles['section2-3']}>
          <span style={{
            opacity: handlScrollDegree(1.7),
            justifyContent: 'flex-start',
          }}
          >
            <span>
              시간
            </span>
            <div className={styles['section2-3__sub']}>
              時+間
            </div>

          </span>

          <div
            className={styles['section2-3__phrase']}
            style={{ opacity: handlScrollDegree(1.5) === 1 ? 1 : 0 }}
          >
            시간은
            {' '}
            <span>{'\'시점\''}</span>
            과
            {' '}
            <span>{'\'사이\''}</span>
            에
            {' '}
            {isMobile && '\n'}
            의해 정의된다
            <div style={{ opacity: handlScrollDegree(1.7) === 1 ? 1 : 0 }}>
              시점과 사이를 이어 하루가 되고,
              {'\n'}
              한 주, 한 달, 한 해, 그 너머의 시간에 이르러
              {isMobile && '\n'}
              {' '}
              하나의 시선이 완성됩니다.
            </div>
          </div>
          <span
            className={cn({
              [styles.line]: true,
              [styles.line__bottom]: true,
            })}
            style={{ height: `${20 * handlScrollDegree(2.5)}%` }}
          />
        </div>
        <div
          className={styles['section2-4']}
          style={{ opacity: handlScrollDegree(2.5) }}
        >
          <span>
            이제, 당신의 치열했던 하루의 시간,
            {'\n'}
            {' '}
            AXYZ가 알아서 정리해드릴게요.
          </span>
          <div className={styles['section2-4__explain']}>
            <div className={styles['section2-4__explain--info']}>
              <img src={LandingMain} alt="" />
              <img src={LandingSummary} alt="" />
              <img src={LandingList} alt="" />
            </div>
          </div>
        </div>

        <div
          className={styles.section3}
          style={{ opacity: handlScrollDegree(3.5) }}
        >
          모든 것이 하나로
          {'\n'}
          하나에서 시작되는 모든 것
        </div>

        <div
          className={styles['section3-1']}
          style={{ opacity: handlScrollDegree(isMobile ? 4.5 : 5) }}
        >
          <div className={styles['section3-1__photo']}>
            <img src={LandingPhoto} alt="landing_photo" />
          </div>
          <div className={styles['section3-1__phrase']}>
            일상의 순간, 그 순간을 일정으로.
            <div>
              AXYZ의 혁신적인 알고리즘을 통해 완성된
              {'\n'}
              {'\'사진 인식 기반 자동 일정화\''}
              는 사진 속 텍스트,
              {'\n'}
              {' '}
              장소, 시간, 그리고 이벤트의 성격까지 분석해,
              {'\n'}
              {' '}
              사용자만을 위한 일정을 디자인 합니다.
            </div>
          </div>
        </div>
        <div
          className={styles['section3-2']}
          style={{ opacity: handlScrollDegree(isMobile ? 5.5 : 6) }}
        >
          <div className={styles['section3-2__phrase']}>
            AXST, 바쁜 당신을 위한 최고의 동반자
            <div>
              AXYZ의 AXST는 사용자가 인터넷 검색 없이
              {'\n'}
              자동으로 필요한 정보를 찾아
              {'\n'}
              일정에 편입하고 여러가지 도움을 주는
              {'\n'}
              당신만의 맞춤형 비서입니다.
              {'\n'}
              더욱 놀라운 점은 이 모든 것이
              {'\n'}
              사용자의 목소리만으로도 가능하다는 것이죠.
            </div>
          </div>
          <div className={styles['section3-2__photo']}>
            <img src={LandingCrawling} alt="crawling" />
          </div>
        </div>
        <div
          className={styles['section3-3']}
          style={{ opacity: handlScrollDegree(isMobile ? 6.5 : 7) }}
        >
          <div className={styles['section3-3__photo']}>
            <img className={styles['section3-3__photo--web']} src={LandingWeb} alt="web" />
            <img className={styles['section3-3__photo--mobile']} src={LandingMobile} alt="mobile" />
          </div>
          <div className={styles['section3-3__phrase']}>
            간편하게, 그러나 강력하게
            <div>
              AXYZ는 기존과 다른 방식의 연동성을 추구
              {'\n'}
              합니다. 그러나 기존보다 훨씬 간편하고 강
              {'\n'}
              력한 힘을 가지고 있죠. 모든 조작방식은 각
              {'\n'}
              각의 기기에 알맞는 형태로 설계되어 있어
              {'\n'}
              사용자의 편의성을 극대화합니다.
            </div>
          </div>
        </div>
        <div
          className={styles['section3-4']}
          style={{ opacity: handlScrollDegree(isMobile ? 7.5 : 8) }}
        >
          <div className={styles['section3-4__phrase']}>
            <img src={Logo} alt="logo" />
            AXYZ
            <span className={styles['section3-4__phrase--text']}>사전예약 하고 출시 알림을 받아보세요!</span>
          </div>
          <button className={styles['section3-4__reserve']} type="button">서비스 출시 알림 받기</button>
        </div>
      </div>
    </div>

  );
}
