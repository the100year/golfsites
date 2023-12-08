import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Reservation.css'

const Reservation = () => {
    const [activeTab, setActiveTab] = useState('Reservation_common');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className='Reservation'>
            <section className='Reservation_start'>
                <h2>예약서비스</h2>
                <ul className='Reservation_tap'>
                    <li>
                        <button className={`Reservation_tab1 ${activeTab === 'Reservation_common' ? 'active' : ''}`} onClick={() => handleTabClick('Reservation_common')}>일반예약</button>
                    </li>
                    <li>
                        <button className={`Reservation_tab2 ${activeTab === 'Reservation_organization' ? 'active' : ''}`} onClick={() => handleTabClick('Reservation_organization')}>단체예약</button>
                    </li>
                </ul>
                <div id='Reservation_common' className={activeTab === 'Reservation_common' ? 'Reservation_common_tap' : 'dis_none'}>
                    <article>
                        <aside>
                            <div className='Reservation_num'>01</div>
                            <div className='Reservation_title'>예약방법</div>
                        </aside>
                        <aside>
                            <p>인터넷 회원가입을 한 고객님만이 예약을 할 수 있습니다. 예약방식은 실시간 예약 방식입니다.</p>
                        </aside>
                    </article>
                    <article>
                        <aside>
                            <div className='Reservation_num'>02</div>
                            <div className='Reservation_title'>회원가입</div>
                        </aside>
                        <aside>
                            <p>인터넷 회원가입</p>
                            <div><Link to='/Membership'>회원가입</Link></div>
                        </aside>
                    </article>
                    <article>
                        <aside>
                            <div className='Reservation_num'>03</div>
                            <div className='Reservation_title'>예약신청</div>
                        </aside>
                        <asdie className='Reservation_table'>
                            <table>
                                <tr>
                                    <td>구분</td>
                                    <td>주중</td>
                                    <td>주말(공휴일)</td>
                                    <td>예약방법</td>
                                    <td>예약문의</td>
                                </tr>
                                <tr>
                                    <td>예약접수</td>
                                    <td colSpan={2}>3주 전[일]단위 오전09시오픈</td>
                                    <td rowSpan={2}>인터넷예약<br />스마트폰예약</td>
                                    <td rowSpan={2}>에약실 061-339-7197<br />팩스 061-362-2797</td>
                                </tr>
                                <tr>
                                    <td>예약확정</td>
                                    <td colSpan={2}>선착순 확정</td>
                                </tr>
                            </table>
                            <div>
                                <p>예약확정 후 잔여 타임 예약은 실시간 예약 가능합니다</p>
                                <p>확정 통보는 고객님의 문자메시지(SMS)통보와 홈페이지에서 확인 가능합니다.</p>
                            </div>
                        </asdie>
                    </article>
                    <article>
                        <aside>
                            <div className='Reservation_num'>04</div>
                            <div className='Reservation_title'>이용횟수</div>
                        </aside>
                        <aside>
                            <p>이용횟수 제한</p>
                            <p>주중:일2회 주3회 신청가능</p>
                            <p>주말:일1회 주2회 신청가능</p>
                        </aside>
                    </article>
                    <article>
                        <aside>
                            <div className='Reservation_num'>05</div>
                            <div className='Reservation_title'>휴장안내</div>
                        </aside>
                        <aside>
                            <p>코스관리를 위한 비정기적 휴장(휴장시 홈페이지공지 및 문자메시지 전송)</p>
                            <p>혹한기 잔디보호 및 제반 시설 보수를 위한 휴장</p>
                        </aside>
                    </article>
                </div>
                <div id='Reservation_organization' className={activeTab === 'Reservation_organization' ? 'Reservation_organization_tap' : 'dis_none'}>
                    <div className='Reservation_organization_flex'>
                        <div className='Reservation_num'>01</div>
                        <div className='Reservation_title'>단체예약</div>
                    </div>
                    <p>단체 예약시 전화문의 부탁드립니다.</p>
                </div>
            </section>
        </div>
    );
}

export default Reservation;