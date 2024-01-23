import {
  useState, useEffect, useRef, useLayoutEffect,
} from 'react';
import cn from 'utils/ClassName';
import useMediaQuery from 'hooks/useMediaQuery';
import Logo from 'static/image/Logo/logo_white_trans.png';
import namelogo from 'static/image/Logo/logo_phrase_trans.png';
import LandingWeb from 'static/image/Landing/landing_web.png';
import LandingWidget from 'static/image/Landing/landing_widget.png';
import LandingCrawling from 'static/image/Landing/landing_crawling.png';
import LandingPhoto from 'static/image/Landing/landing_photo.png';
import LandingList from 'static/image/Landing/landing_list.png';
import LandingMain from 'static/image/Landing/landing_main.png';
import LandingSummary from 'static/image/Landing/landing_summary.png';
import { ReactComponent as LogoPhrase } from 'static/svg/logo_phrase.svg';
import { useNavigate } from 'react-router-dom';
import styles from './Landing.module.scss';
import TopNavigation from './components/TopNavigation';

export default function Landing() {
  const { isMobile } = useMediaQuery();
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const firstRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState<number>(0);
  const imageCount: number = 260;
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const landingVideoImages = Array.from({ length: imageCount }, (_, i) => `/videos/Image_Sequence/${String(i + 1).padStart(4, '0')}.png`);

  useEffect(() => {
    const imageSequence = Array.from({ length: imageCount }, (_, i) => `/videos/Image_Sequence/${String(i + 1).padStart(4, '0')}.png`);
    const intervalId = setInterval(() => setSlideIndex((prev) => (prev + 1) % 3), 3000);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const imageSequenceInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSequence.length);
    }, 50);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageSequenceInterval);
      clearInterval(intervalId);
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

  useLayoutEffect(() => {
    Array.from({ length: imageCount }, (_, i) => `/videos/Image_Sequence/${String(i + 1).padStart(4, '0')}.png`).forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, []);

  return (
    <div className={styles.template}>
      <TopNavigation />
      <div
        className={cn({
          [styles.section1]: true,
        })}
        ref={firstRef}
        style={{
          transform: `translateY(${((window.scrollY === 0) ? 0 : -100)}%)`,
          opacity: window.scrollY === 0 ? 1 : 0,
        }}
      >
        <span>
          All the time
        </span>
        {window.scrollY === 0 && (
        <div className={styles.section1__logo}>
          <img
            src={landingVideoImages[currentImageIndex]}
            alt={`Frame ${currentImageIndex}`}
          />
        </div>
        )}
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
            시간에 대한 완전한 이해로부터
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
            style={{ opacity: handlScrollDegree(0.9) === 1 ? 1 : 0 }}
          >
            시간은 공간의 흐름이고,
            {isMobile ? '\n' : ' '}
            공간은 시간의 내용이다.
            <div style={{ opacity: handlScrollDegree(1.1) === 1 ? 1 : 0 }}>
              시간과 공간은 본디 하나로 얽혀 있기에
              {'\n'}
              공간의 흐름이 결여된 시간은 결코
              {isMobile ? '\n' : ' '}
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
            style={{ width: `${20 * handlScrollDegree(1.5)}%` }}
          />
          <span
            className={cn({
              [styles.line]: true,
              [styles.line__right]: true,
            })}
            style={{ width: `${20 * handlScrollDegree(1.5)}%` }}
          />
        </div>

        <div className={styles['section2-3']}>
          <span style={{
            opacity: handlScrollDegree(1.8),
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
            style={{ opacity: handlScrollDegree(1.55) === 1 ? 1 : 0 }}
          >
            모든 시간을 정의하고 정리하다.
            <div style={{ opacity: handlScrollDegree(1.7) === 1 ? 1 : 0 }}>
              시간은 때와 그 사이로 정의됩니다.
              {'\n'}
              시점의 유실물까지 한 데 모아
              {isMobile ? '\n' : ' '}
              이루어지는 온전한 시간을 지향합니다.
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
          style={{ opacity: handlScrollDegree(2.8) }}
        >
          <span>
            당신의 치열했던 하루의 시간,
            {'\n'}
            <LogoPhrase />
            가 알아서 정리해드릴게요.
          </span>
          <div className={styles['section2-4__explain']}>
            <div className={styles['section2-4__explain--info']}>
              <img style={{ opacity: !isMobile || slideIndex === 0 ? 1 : 0 }} src={LandingMain} alt="main.png" />
              <img style={{ opacity: !isMobile || slideIndex === 1 ? 1 : 0 }} src={LandingList} alt="list.png" />
              <img style={{ opacity: !isMobile || slideIndex === 2 ? 1 : 0 }} src={LandingSummary} alt="summary.png" />
            </div>
          </div>
        </div>

        <div
          className={styles.section3}
          style={{ opacity: handlScrollDegree(isMobile ? 3.5 : 4) }}
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
            일상의 순간을 일정으로 포착하다
            <div>
              AXYZ의 혁신적인 알고리즘을 통해 완성된
              {'\n'}
              <span>
                사진 인식 기반 자동 일정화 기능
              </span>
              은 사진 속
              {' '}
              {'\n'}
              텍스트, 시간, 장소, 심지어 이벤트의 성격까지
              {'\n'}
              분석해 사용자만을 위한 일정을 디자인 합니다.
            </div>
          </div>
        </div>
        <div
          className={styles['section3-2']}
          style={{ opacity: handlScrollDegree(isMobile ? 5.5 : 6) }}
        >
          <div className={styles['section3-2__phrase']}>
            NAVI를 따라 누구보다 빠르게
            <div>
              NAVI는 사용자가 따로 검색해서 정리하지 않아도
              {'\n'}
              자동으로 필요한 정보를 찾아 일정에 편입하는 등
              {'\n'}
              무한한 가능성을 잠재한&nbsp;
              <span>
                시간 관리 최적화 AI
              </span>
              입니다.
              {'\n'}
              물론 당신의 말 한마디만으로 NAVI를 깨울 수도 있죠.
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
            <img className={styles['section3-3__photo--mobile']} src={LandingWidget} alt="mobile" />
          </div>
          <div className={styles['section3-3__phrase']}>
            A부터 XYZ까지 집요하게
            <div>
              AXYZ는 사용자의 입장에서 접근성과
              {'\n'}
              편의성 향상을 위해 끊임없이 고민합니다.
              {'\n'}
              웹 서비스, 모바일 위젯 등 각각의 기기에
              {'\n'}
              최적화된 형태로 설계된 인터페이스를 통해
              {'\n'}
              <span>다채로운 사용자 경험</span>
              을 제공합니다.
            </div>
          </div>
        </div>
        <div
          className={styles['section3-4']}
          style={{ opacity: handlScrollDegree(isMobile ? 7.5 : 8) }}
        >
          <div className={styles['section3-4__phrase']}>
            <img className={styles['section3-4__logo']} src={Logo} alt="logo" />
            <img className={styles['section3-4__title']} src={namelogo} alt="logo" />
            <span className={styles['section3-4__phrase--text']}>
              <span>사전예약</span>
              하고
              {' '}
              <span>출시 알림</span>
              을 받아보세요!
            </span>
          </div>
          <button
            className={styles['section3-4__reserve']}
            type="button"
            onClick={() => navigate('/application')}
          >
            서비스 출시 알림 받기
          </button>
        </div>
      </div>
    </div>

  );
}
