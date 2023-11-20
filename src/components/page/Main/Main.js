import './Main.css';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

const Main = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

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



  return (
    <div className="Main">
      <section className='Main_img'>
        <article className='Main_line'>
          <div className='Main_logo'>
            <div className='Main_main_logo'></div>
            <div className='Main_main_mutual'>
              <h2>광주컨트리클럽</h2>
              <h4>Gwangju Cuntry Club</h4>
            </div>
          </div>
          <ul className='Main_menu'>
            <li><Link to='/Introduce'>클럽소개</Link></li>
            <li><Link to='/Use'>이용안내</Link></li>
            <li><Link to='/Course'>코스소개</Link></li>
            <li><Link to='/Reservation'>예약서비스</Link></li>
            <li><Link to='/Membership'>부대시설</Link></li>
            <li><Link to='/Event'>이벤트</Link></li>
            <li><Link to='/Information'>클럽정보</Link></li>
          </ul>
          <ul className='Main_login'>
            <li><Link to='/Login'>로그인</Link></li>
            <li><Link to='/Membership'>회원가입</Link></li>
          </ul>
        </article>
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
      </section>
      <section className='Main_reservation'>
        <div className='Main_reservation_flex'>
          <article className='Main_reservation_left'>
            <h2>예약안내</h2>
            <asdie className='Main_reservation_left_info'>
              <p>예약안내</p>
              <p>예약은 원칙적으로 회원에 한하여 <br />할 수 있습니다.</p>
            </asdie>
            <asdie className='Main_reservation_left_method'>
              <p>예약방법</p>
              <p>4주전 같은 요일 9시부터 인터넷/전화<br /><span>
                *자세한 사항 이용안내 참조</span></p>
            </asdie>
            <asdie className='Main_reservation_left_box'>
              <div>요금표</div>
              <div></div>
              <div><Link to='/Reservation'>예약하기</Link></div>
            </asdie>
          </article>
          <article className='Main_reservation_right back_color'>

            <table className="reservation_right_calendar">
              <thead>
                <tr>
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
              <tbody>
              </tbody>
            </table>
            <div className="reservation_right_calendar_check"><Link to='/Reservation'>예약확인</Link></div>
          </article>

        </div>
      </section>

    </div>
  );
}

export default Main;