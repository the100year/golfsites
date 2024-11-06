/*global kakao*/
import './Main.css';
import { Link } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react';
import Slide from './Slide';
import { MapMarker, Map } from 'react-kakao-maps-sdk'

const Main = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevCalendar = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const nextCalendar = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  const calendarDays = () => {
    const today = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    const rows = [];
    let dayCount = 1;

    for (let i = 0; i < 6; i++) {
      const cells = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth.getDay()) {
          // 빈 셀로 채우기
          cells.push(<td key={j}></td>);
        } else if (dayCount > daysInMonth) {
          // 날짜가 월의 마지막 날을 넘어갔을 때
          cells.push(<td key={j}></td>);
        } else {
          // 유효한 날짜일 때
          const isToday =
            dayCount === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear();
          const isPastDay = dayCount < today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear();
          const cellClass = isToday ? 'today' : isPastDay ? 'past-day' : '';

          cells.push(
            <td key={j} className={cellClass}>
              {isToday ? <span className="circle"></span> : null}
              {dayCount}
            </td>
          );
          dayCount++;
        }
      }
      rows.push(<tr key={i}>{cells}</tr>);
    }

    return rows;
  };
  const eventSlides = [
    {
      title: '2023 하나은행 인비테이셔널 KPGA대회',
      period: '2023년 06월 15일~2023년 06월 19일',
      location: '광주 컨트리클럽 빅토리(OUT), 챌린지(IN) 코스',
      img: require('./img/hanagolf.png'),
      imgClass: 'eventSlides_img'
    },
    {
      title:
        '겨울 가래떡 이벤트',
      period: '2023년 11월 27일~2023년 12월 17일',
      location: '광주 컨트리클럽 그늘집',
      img: require('./img/dduk.png'),
      imgClass: 'eventSlides_img'
    },
    {
      title: '2023 올빼미 골프대회',
      period: '2023년 08월 15일~2023년 09월 31일',
      location: '광주 컨트리클럽 오솔길(OUT), 단풍길(IN) 코스',
      img: require('./img/qdeal.png'),
      imgClass: 'eventSlides_img'
    },
  ];

  const eventSlidesToDisplay = eventSlides.slice(currentIndex, currentIndex + 1);
  useEffect(() => {
    const interval = setInterval(() => {

      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % eventSlides.length);
      }
    }, 5000);
    return () => {

      clearInterval(interval);
    };
  }, [currentIndex, eventSlides.length]);
  const [isPaused, setIsPaused] = useState(false);
  const toggleSlidePause = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % eventSlides.length);
      }
    }, 5000);
    const images = document.querySelectorAll('.event-image');
    images.forEach((image, index) => {
      if (index === currentIndex) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
    return () => {
      clearInterval(interval);
    };

  }, [currentIndex, isPaused, eventSlides.length]);

  const galleryPhoto = [
    require('./img/photo1.png'),
    require('./img/photo2.png'),
    require('./img/photo3.png'),
    require('./img/photo4.png'),
    require('./img/photo5.png'),
    require('./img/photo6.png'),
    require('./img/photo7.png'),
    require('./img/photo8.png'),
    require('./img/photo9.png'),
    require('./img/photo10.png'),
    require('./img/photo11.png'),
    require('./img/photo12.png'),
    require('./img/photo13.png'),
    require('./img/photo14.png'),
    require('./img/photo15.png'),
    require('./img/photo16.png'),
    require('./img/photo17.png'),
    require('./img/photo18.png')
  ]
  const [gallerys, setgallerys] = useState(0);
  const [itemsPerRow, setItemsPerRow] = useState(4);

  useEffect(() => {
    const updateItemsPerRow = () => {
      if (window.innerWidth <= 500) {
        setItemsPerRow(1); // 500px 미만에서 가로로 1개씩
      } else if (window.innerWidth > 500 && window.innerWidth <= 1024) {
        setItemsPerRow(2); // 1024px 이하에서 가로로 2개씩
      } else if (window.innerWidth > 1023 && window.innerWidth <= 1440) {
        setItemsPerRow(3); // 1440px 이하에서 가로로 3개씩
      } else {
        setItemsPerRow(5); // 기본값
      }
    };

    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);

    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, []);
  const firstGallery = () => {
    const startGallerys = gallerys;
    const endGallerys = startGallerys + itemsPerRow * 2;
    const slicedPhotos = galleryPhoto.slice(startGallerys, endGallerys);
    const galleryRows = [];

    for (let i = 0; i < 2; i++) { // 2줄 생성
      const rowPhotos = slicedPhotos.slice(i * itemsPerRow, (i + 1) * itemsPerRow);
      const rowElements = rowPhotos.map((photo, index) => (
        <li key={index}>
          <img src={photo} alt={`photo-${index}`} />
        </li>
      ));
      galleryRows.push(<ul key={i} className="gallery-row">{rowElements}</ul>);
    }

    return galleryRows;
  };

  const PhotoPrev = () => {
    // 이전 버튼 클릭 시 currentIndex 변경
    setgallerys((prevIndex) => Math.max(prevIndex - 5, 0));
  };

  const PhotoNext = () => {
    // 다음 버튼 클릭 시 currentIndex 변경
    setgallerys((prevIndex) => Math.min(prevIndex + 10, galleryPhoto.length - 10));
  };


  return (
    <div className="Main">
      <section className='Main_img'>
        <div className='w1400'>
          <article className='Main_center'>
            <h5>전라남도 최대규모 골프클럽</h5>
            <h2>광주컨트리클럽</h2>
            <div className='Main_view'></div>
          </article>
          <article className='Main_info'>
            <asdie className='Main_info_left'>
              <div className='Main_info_time'>
                <div className='Main_info_time_flex'>
                  <div className='Main_info_time_img'></div>
                  <p>운영시간</p>
                </div>
                <p>일출 20분전~일몰 후 1시간40분<br />
                  전까지 플레이 가능합니다</p>
              </div>
              <div className='Main_info_money'>
                <div className='Main_info_money_flex'>
                  <div className='Main_info_money_img'></div>
                  <p>이용료</p>
                </div>
                <p>별도문의 부탁드립니다</p>
              </div>
              <div className='Main_info_close'>
                <div className='Main_info_close_flex'>
                  <div className='Main_info_close_img'></div>
                  <p>휴업일</p>
                </div>
                <p>연중무휴</p>
                <h4 className='Main_info_close_impact'>*자세한 사항 이용안내 참조</h4>
              </div>
            </asdie>
            <asdie className='Main_info_right'>
              <div><Link to='/Reservation'>이용안내</Link></div>
              <div><Link to='/Road'>오시는길</Link></div>
            </asdie>
          </article>
        </div>
      </section>
      <section className='Main_reservation'>
        <div className='Main_h2'>
          <h2>예약안내</h2>
        </div>
        <div className='Main_reservation_flex'>
          <article className='Main_reservation_left'>
            <asdie className='Main_reservation_left_info'>
              <p>예약안내</p>
              <p>예약은 원칙적으로 회원에 한하여 <br/>할 수 있습니다.</p>
            </asdie>
            <asdie className='Main_reservation_left_method'>
              <p>예약방법</p>
              <p>4주전 같은 요일 9시부터 인터넷/전화<br /><span>
                *자세한 사항 이용안내 참조</span></p>
            </asdie>
          </article>
          <article className='Main_reservation_right back_color'>
            <table className="reservation_right_calendar">
              <thead>
                <tr className='reservation_right_calender_top'>
                  <td onClick={prevCalendar} style={{ cursor: 'pointer' }} className="reservation_right_calendar_font">&#60;</td>
                  <td colSpan="5">
                    <span className="reservation_right_calendar_font">{currentDate.getFullYear()}년</span>
                    <span className="reservation_right_calendar_font">{currentDate.getMonth() + 1}월</span>
                  </td>
                  <td onClick={nextCalendar} style={{ cursor: 'pointer' }} className="reservation_right_calendar_font">&#62;</td>
                </tr>
                <tr className="reservation_right_calendar_day">
                  <td>일</td>
                  <td>월</td>
                  <td>화</td>
                  <td>수</td>
                  <td>목</td>
                  <td>금</td>
                  <td>토</td>
                </tr>
              </thead>
              <tbody className='reservation_right_calendar_today' >
                {calendarDays()}
              </tbody>
            </table>
            <div className="reservation_right_calendar_check"><Link to='/Reservation'>예약확인</Link></div>
          </article>

        </div>
      </section>
      <section className='Main_event'>
        <div className='event_h2'>
          <h2>이벤트·행사</h2>
        </div>
        <div className='Main_event_margin'>
          <article className='Main_event_left'>
            <asdie className='Main_event_left_box'>
              <div>접수하기</div>
              <div>접수마감</div>
            </asdie>
            <asdie className='Main_event_left_slides'>
              {eventSlidesToDisplay.map((slide, index) => (
                <Slide key={index} {...slide} />
              ))}
            </asdie>
            <div className='Main_event_left_button'>
              <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + eventSlides.length) % eventSlides.length)}>
                이전
              </button>
              <button onClick={toggleSlidePause}>
                {isPaused ? '▷' : 'II'}
              </button>
              <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % eventSlides.length)}>
                다음
              </button>
            </div>
          </article>
          <article>
            <aside className='Main_event_right'>
              <div className='Main_event_right_img_position'>
                {eventSlides.map((slide, index) => (
                  <div key={index} className={`event-image ${index === currentIndex ? 'active' : ''}`}>
                    <img className='wi_sm' src={slide.img} />
                  </div>
                ))}
              </div>
            </aside>
          </article>
        </div>
      </section>
      <section className='Main_call'>
        <article>
          <h2>고객센터</h2>
          <p>예약관련 문의는 예약사이트를 참고해주시기 바랍니다.</p>
          <p>문의전화 : 061-399-7100</p>
          <div><Link to='/Service'>문의글 올리기</Link></div>
        </article>
      </section>
      <section className='Main_gallery'>
        <article className='Main_gallery_photo'>
          <h2>클럽 SNS</h2>
          <div className='gal_flex'>
            <button onClick={PhotoPrev}>〈</button>
            <ul>
              {firstGallery()}
            </ul>
            <button onClick={PhotoNext}>〉</button>
          </div>
        </article>
      </section>
      <section className='Main_map'>
        <div className='Main_map_margin'>
          <article className='Main_map_left'>
            <h2>찾아오시는길</h2>
            <Map className='Main_map_kakao'
              center={{ lat: 35.3101401, lng: 127.1699263 }}
              style={{ width: "100%", height: "100%" }}
              level={5}
            >
              <MapMarker className='Main_map_kakao_point' position={{ lat: 35.3101401, lng: 127.1699263 }}>{'광주컨트리클럽'}<div style={{ color: "#999" }}></div>
              </MapMarker>
            </Map>
          </article>
          <article className='Main_map_right'>
            <h2>클럽정보</h2>
            <div className='Main_map_right_info'>
              <ul>
                <li><span className='Main_map_right_info_span1'>공지사항</span><Link to='/Information'>캐디피 인상안내</Link><span className='Main_map_right_info_span2'>관리자&nbsp;&nbsp;&nbsp;&nbsp;2023.05.30</span></li>
                <li><span className='Main_map_right_info_span1'>공지사항</span><Link to='/Information'>광주컨트리CC 리뉴얼 안내</Link><span className='Main_map_right_info_span2'>관리자&nbsp;&nbsp;&nbsp;&nbsp;2023.05.19</span></li>
                <li><span className='Main_map_right_info_span1'>공지사항</span><Link to='/Information'>전기차 충전소 설치</Link><span className='Main_map_right_info_span2'>관리자&nbsp;&nbsp;&nbsp;&nbsp;2023.04.18</span></li>
                <li><span className='Main_map_right_info_span1'>공지사항</span><Link to='/Information'>2023년 단체팀 연부킹 신청안내</Link><span className='Main_map_right_info_span2'>관리자&nbsp;&nbsp;&nbsp;&nbsp;2023.02.15</span></li>
                <li><Link to='/Information'>자세히 보기 〉</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </section>

    </div>
  );
}

export default Main;