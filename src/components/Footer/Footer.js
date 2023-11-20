import './Footer.css';



const Footer = () => {
    return (
        <div className="Footer">
            <section className="Footer_flex">
                <article className="Footer_logo">
                    <div className='Footer_logoName'>
                    <aside className="Footer_logo_imgs">
                        <div className="Footer_logo_img"></div>
                        <div className="Footer_logo_kcc">KCC</div>
                    </aside>
                    <aside className="Footer_logo_name">
                        <div>광주컨트리클럽</div>
                        <div>kwangju Contry Club</div>
                    </aside>
                    </div>
                    <aside className="Footer_logo_adr">
                        <p>(31246)전라남도 곡성군 옥과면 입면로 455 광주컨트리클럽 사업자등록번호:408-81-03379 법인명:광주관광개발(주) 대표이사:이영</p>
                        <p>개인정보 관리 책임자:이영 예약실 061-339-7191 대표번호 061.339.7100 팩스번호 061.362.2797</p>
                        <p>Copyright © 2016. Kwangju Country Club. All Rights Reserved.</p>
                    </aside>
                </article>
                <article className="Footer_info">
                    <aside>
                    <h4>개인정보처리방침</h4>
                    <h5>이용약관</h5>
                    <h5>저작권보호정책</h5>
                    <h5>찾아오시는길</h5>
                    </aside>
                    <aside className='Footer_img_flex'>
                        <div><a className="Footer_img_inst"  href='https://www.instagram.com'></a></div>
                        <div><a className="Footer_img_face" href='https://www.facebook.com'></a></div>
                        <div><a className="Footer_img_kakao" href='https://www.kakaocorp.com'></a></div>
                        <div><a className="Footer_img_twi" href='https://twitter.com'></a></div>
                    </aside>
                </article>
            </section>
        </div>
      );
}
 
export default Footer;