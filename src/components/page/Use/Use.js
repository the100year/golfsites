import './Use.css'
import { Link } from 'react-router-dom';

const Use = () => {
    return (
        <div className='Use'>
            <section className='Use_start'>
                <h2>이용안내</h2>
                <article className='Use_one'>
                    <div>
                        <div className='Use_num'>01</div>
                        <div className='Use_title'>예약방법</div>
                    </div>
                    <p>인터넷회원 가입 후 <br />공정하고 투명한 예약시스템으로 실시간 예약 가능합니다</p>
                    <div className='Use_link'>
                        <Link to='./Membership'>회원가입</Link>
                        <Link to='./Reservation'>예약안내</Link>
                    </div>
                </article>
                <article className='Use_two'>
                    <div>
                        <div className='Use_num'>02</div>
                        <div className='Use_title'>이용안내</div>
                    </div>
                    <ul>
                        <li><span className='Use_two_pot'>ㆍ</span>Tee-off시간 30분 전까지는 도착하시어 Play준비를 하여 주시기 바랍니다.</li>
                        <li><span className='Use_two_pot'>ㆍ</span>프론트에 등록하실때 코스 및 시간을 재확인 하신 후 락카 번호를 지정받으시고 요금은 일괄 후불로<br/> &nbsp;&nbsp;&nbsp;계산됩니다.</li>
                        <li><span className='Use_two_pot'>ㆍ</span>플레이를 마치신 후 캐디가 골프백을 실어드리며,나가실 때 현관에서 자동차키를 드립니다.</li>
                        <li><span className='Use_two_pot'>ㆍ</span>식당 및 프로샵 이용시는 성함 또는 락카 번호를 말씀하여 주시기 바랍니다.</li>
                    </ul>
                </article>
                <article className='Use_three'>
                    <div>
                        <div className='Use_num'>03</div>
                        <div className='Use_title'>요금안내</div>
                    </div>
                    <aside>
                        <div>
                            <p>구분</p>
                            <div>
                                <p>그린피</p>
                                <div>
                                    <p>월~금요일</p>
                                    <p>공휴일</p>
                                </div>
                            </div>
                            <p>카트료</p>
                            <p>캐디피</p>
                        </div>
                        <div>
                            <p>금액</p>
                            <p>150,000</p>
                            <p>200,000</p>
                            <p>80,000</p>
                            <p>140,000</p>
                        </div>
                    </aside>
                </article>
                <article className='Use_four'>
                    <div>
                        <div className='Use_num'>01</div>
                        <div className='Use_title'>예약방법</div>
                    </div>
                </article>
                <article className='Use_five'>
                    <div>
                        <div className='Use_num'>01</div>
                        <div className='Use_title'>예약방법</div>
                    </div>
                </article>
                <article className='Use_six'>
                    <div>
                        <div className='Use_num'>01</div>
                        <div className='Use_title'>예약방법</div>
                    </div>
                </article>
                <article className='Use_seven'>
                    <div>
                        <div className='Use_num'>01</div>
                        <div className='Use_title'>예약방법</div>
                    </div>
                </article>
            </section>
        </div >
    );
}

export default Use;