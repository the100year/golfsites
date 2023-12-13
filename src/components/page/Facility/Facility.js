import React, { useState, useEffect } from 'react';
import './Facility.css'


const Facility = () => {
    const [activeTab, setActiveTab] = useState('Facility_lobby');
    const [lobby, setLobby] = useState(0);
    const [restaurant, setRestaurant] = useState(0);
    const [banquet, setBanquet] = useState(0);
    const [pro, setPro] = useState(0);
    const [shade, setShade] = useState(0);
    const [locker, setLocker] = useState(0);
    const [Pause, setPause] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setLobby(0);
        setRestaurant(0);
        setBanquet(0);
        setPro(0);
        setShade(0);
        setLocker(0);
    };

    const startInterval = (setter, imgCount, interval) => {
        return setInterval(() => {
            if (!Pause) {
                setter((prevValue) => (prevValue + 1) % imgCount);
            }
        }, interval);
    };

    const clearIntervalFn = (intervalId) => clearInterval(intervalId);

    useEffect(() => {
        const intervalId1 = startInterval(setLobby, 6, 3000);
        return () => clearIntervalFn(intervalId1);
    }, [!Pause]);

    useEffect(() => {
        const intervalId2 = startInterval(setRestaurant, 5, 3000);
        return () => clearIntervalFn(intervalId2);
    }, [!Pause]);

    useEffect(() => {
        const intervalId3 = startInterval(setBanquet, 1, 3000);
        return () => clearIntervalFn(intervalId3);
    }, [!Pause]);

    useEffect(() => {
        const intervalId4 = startInterval(setPro, 3, 3000);
        return () => clearIntervalFn(intervalId4);
    }, [!Pause]);

    useEffect(() => {
        const intervalId5 = startInterval(setShade, 3, 3000);
        return () => clearIntervalFn(intervalId5);
    }, [!Pause]);

    useEffect(() => {
        const intervalId6 = startInterval(setLocker, 8, 3000);
        return () => clearIntervalFn(intervalId6);
    }, [!Pause]);

    return (
        <div className="Facility">
            <section className='Facility_start'>
                <article className='Facility_p'>
                    <h2>부대시설</h2>
                    <div>
                        <p>광주컨트리클럽의 클럽하우스는 단지 쉬는 공간이 아닙니다.</p>
                        <p>광주컨트리클럽의 클럽하우스는 단지 쉬는 공간이 아닙니다.영감을 주는 공간입니다.<br />들어서는 순간 긴장이 해소되는 탁 트인 로비,눈길 닫는 곳마다 조형미를 강조한 예술작품과 가구와의 조화는 아트갤러리를 거니는 듯한 느낌을 선사합니다.</p>
                        <p>전면 접이식문으로 실내에 빛과 자연을 한껏 품은 <span>스타트하우스,</span>골프장 풍광이 한눈에 들어오는 데크뷰가 인상적인 <br />레스토랑,자연에서 영감을 얻은 9개의 독립적인<span>Private Dining Room</span>은 당신의 휴식에 서로 다른 가치를 더해줄 것입니다.</p>
                    </div>
                </article>
                <article className='Facility_margin'>
                    <ul className='Facility_tap'>
                        <li>
                            <button className={`Facility_tab1 ${activeTab === 'Facility_lobby' ? 'active' : ''}`} onClick={() => handleTabClick('Facility_lobby')}>로비</button>
                        </li>
                        <li>
                            <button className={`Facility_tab2 ${activeTab === 'Facility_restaurant' ? 'active' : ''}`} onClick={() => handleTabClick('Facility_restaurant')}>레스토랑</button>
                        </li>
                        <li>
                            <button className={`Facility_tab3 ${activeTab === 'Facility_banquet' ? 'active' : ''}`} onClick={() => handleTabClick('Facility_banquet')}>연회실</button>
                        </li>
                        <li>
                            <button className={`Facility_tab4 ${activeTab === 'Facility_pro' ? 'active' : ''}`} onClick={() => handleTabClick('Facility_pro')}>프로샵</button>
                        </li>
                        <li>
                            <button className={`Facility_tab5 ${activeTab === 'Facility_shade' ? 'active' : ''}`} onClick={() => handleTabClick('Facility_shade')}>그늘집</button>
                        </li>
                        <li>
                            <button className={`Facility_tab6 ${activeTab === 'Facility_locker' ? 'active' : ''}`} onClick={() => handleTabClick('Facility_locker')}>락커</button>
                        </li>
                    </ul>
                </article>
                <div className='Facility_img'
                    onMouseEnter={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}>
                        <p>*마우스를 올리면 이미지가 정지됩니다.</p>
                    <article id='Facility_lobby' className={activeTab === 'Facility_lobby' ? 'Facility_lobby_tap' : 'dis_none'}>
                        <img className="Facility_images" src={require(`./img/clubhouse${lobby}.jpg`)} alt={`clubhouse${lobby}`} />
                    </article>
                    <article id='Facility_restaurant' className={activeTab === 'Facility_restaurant' ? 'Facility_restaurant_tap' : 'dis_none'}>
                        <img className="Facility_images" src={require(`./img/restaurant${restaurant}.jpg`)} alt={`restaurant${restaurant}`} />
                    </article>
                    <article id='Facility_banquet' className={activeTab === 'Facility_banquet' ? 'Facility_banquet_tap' : 'dis_none'}>
                        <img className="Facility_images" src={require(`./img/banquet${banquet}.jpg`)} alt={`banquet${banquet}`} />
                    </article>
                    <article id='Facility_pro' className={activeTab === 'Facility_pro' ? 'Facility_pro_tap' : 'dis_none'}>
                        <img className="Facility_images" src={require(`./img/pro${pro}.jpg`)} alt={`pro${pro}`} />
                    </article>
                    <article id='Facility_shade' className={activeTab === 'Facility_shade' ? 'Facility_shade_tap' : 'dis_none'}>
                        <img className="Facility_images" src={require(`./img/shade${shade}.jpg`)} alt={`shade${shade}`} />
                    </article>
                    <article id='Facility_locker' className={activeTab === 'Facility_locker' ? 'Facility_locker_tap' : 'dis_none'}>
                        <img className="Facility_images" src={require(`./img/locker${locker}.jpg`)} alt={`locker${locker}`} />
                    </article>
                </div>
            </section>
        </div>
    );
}

export default Facility;