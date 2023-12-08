import React, { useState } from 'react';
import './Facility.css'


const Facility = () => {
    const [activeTab, setActiveTab] = useState('Facility_lobby');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return ( 
        <div className="Facility">
            <section className='Facility_start'>
                <article className='Facility_p'>
                <h2>부대시설</h2>
                <div>
                    <p>광주컨트리클럽의 클럽하우스는 단지 쉬는 공간이 아닙니다.</p>
                    <p>광주컨트리클럽의 클럽하우스는 단지 쉬는 공간이 아닙니다.영감을 주는 공간입니다.<br/>들어서는 순간 긴장이 해소되는 탁 트인 로비,눈길 닫는 곳마다 조형미를 강조한 예술작품과<br/>가구와의 조화는 아트갤러리를 거니는 듯한 느낌을 선사합니다.</p>
                    <p>전면 접이식문으로 실내에 빛과 자연을 한껏 품은 <span>스타트하우스,</span>골프장 풍광이 한눈에 들어오는<br/>데크뷰가 인상적인 레스토랑,자연에서 영감을 얻은 9개의 독립적인<br/><span>Private Dining Room</span>은 당신의 휴식에 서로 다른 가치를 더해줄 것입니다</p>
                </div>
                </article>
                <article>
                <ul className='Facility_tap'>
                    <li>
                        <button className={`Facility_tab1 ${activeTab === 'Facility_lobby' ? 'active' : ''}`} onClick={() => handleTabClick('Reservation_lobby')}>로비</button>
                    </li>
                    <li>
                        <button className={`Facility_tab2 ${activeTab === 'Facility_restaurant' ? 'active' : ''}`} onClick={() => handleTabClick('Reservation_restaurant')}>레스토랑</button>
                    </li>
                    <li>
                        <button className={`Facility_tab3 ${activeTab === 'Facility_banquet ' ? 'active' : ''}`} onClick={() => handleTabClick('Reservation_banquet')}>연회실</button>
                    </li>
                    <li>
                        <button className={`Facility_tab4 ${activeTab === 'Facility_pro' ? 'active' : ''}`} onClick={() => handleTabClick('Reservation_pro')}>프로샵</button>
                    </li>
                    <li>
                        <button className={`Facility_tab5 ${activeTab === 'Facility_shade' ? 'active' : ''}`} onClick={() => handleTabClick('Reservation_shade')}>그늘집</button>
                    </li>
                    <li>
                        <button className={`Facility_tab6 ${activeTab === 'Facility_locker' ? 'active' : ''}`} onClick={() => handleTabClick('Reservation_locker')}>락커</button>
                    </li>
                </ul>
                </article>
                <article id='Facility_lobby' className={activeTab === 'Facility_lobby' ? 'Facility_lobby_tap' : 'dis_none'}>
                </article>
                <article id='Facility_restaurant' className={activeTab === 'Facility_restaurant' ? 'Facility_restaurant_tap' : 'dis_none'}>
                </article>
                <article id='Facility_banquet' className={activeTab === 'Facility_banquet' ? 'Facility_banquet_tap' : 'dis_none'}>
                </article>
                <article id='Facility_pro' className={activeTab === 'Facility_pro' ? 'Facility_pro_tap' : 'dis_none'}>
                </article>
                <article id='Facility_shade' className={activeTab === 'Facility_shade' ? 'Facility_shade_tap' : 'dis_none'}>
                </article>
                <article id='Facility_locker' className={activeTab === 'Facility_locker' ? 'Facility_locker_tap' : 'dis_none'}>
                </article>
            </section>
        </div>
     );
}
 
export default Facility;