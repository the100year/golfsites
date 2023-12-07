import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div>
            <section className='header_img'>
                <article className='header_line'>
                    <div className='header_logo'>
                    <Link to='./Main'><div className='header_main_logo'></div></Link>
                        <div className='header_main_mutual'>
                            <h2>광주컨트리클럽</h2>
                            <h4>Gwangju Cuntry Club</h4>
                        </div>
                    </div>
                    <ul className='header_menu'>
                        <li><Link to='/introduce'>클럽소개</Link></li>
                        <li><Link to='/use'>이용안내</Link></li>
                        <li><Link to='/course'>코스소개</Link></li>
                        <li><Link to='/reservation'>예약서비스</Link></li>
                        <li><Link to='/membership'>부대시설</Link></li>
                        <li><Link to='/event'>이벤트</Link></li>
                        <li><Link to='/information'>클럽정보</Link></li>
                    </ul>
                    <ul className='header_login'>
                        <li><Link to='/login'>로그인</Link></li>
                        <li><Link to='/membership'>회원가입</Link></li>
                    </ul>
                </article>
            </section>
        </div>
    )
}

export default Header;