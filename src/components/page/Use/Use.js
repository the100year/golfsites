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
                        <li><span className='Use_two_pot'>ㆍ</span>프론트에 등록하실때 코스 및 시간을 재확인 하신 후 락카 번호를 지정받으시고 요금은 일괄 후불로<br /> &nbsp;&nbsp;&nbsp;계산됩니다.</li>
                        <li><span className='Use_two_pot'>ㆍ</span>플레이를 마치신 후 캐디가 골프백을 실어드리며,나가실 때 현관에서 자동차키를 드립니다.</li>
                        <li><span className='Use_two_pot'>ㆍ</span>식당 및 프로샵 이용시는 성함 또는 락카 번호를 말씀하여 주시기 바랍니다.</li>
                    </ul>
                </article>
                <article className='Use_three'>
                    <div>
                        <div className='Use_num'>03</div>
                        <div className='Use_title'>요금안내</div>
                    </div>
                    <aside className='Use_three_money'>
                        <table>
                            <tr className='Use_three_money_first'>
                                <td rowSpan={2}>구분</td>
                                <td colSpan={2}>그린피</td>
                                <td rowSpan={2}>카트료</td>
                                <td rowSpan={2}>캐디피</td>
                            </tr>
                            <tr className='Use_three_money_second'>
                                <td>월~금요일</td>
                                <td>공휴일</td>
                            </tr>
                            <tr className='Use_three_money_third'>
                                <td>금액</td>
                                <td>150,000</td>
                                <td>200,000</td>
                                <td>80,000</td>
                                <td>140,000</td>
                            </tr>
                        </table>
                    </aside>
                </article>
                <article className='Use_four'>
                    <div>
                        <div className='Use_num'>04</div>
                        <div className='Use_title'>악천후 시 이용요금 안내</div>
                    </div>
                    <aside className='Use_four_rain'>
                        <table>
                            <tr>
                                <td rowSpan={2}>구분</td>
                                <td>그린피</td>
                                <td rowSpan={2}>카트료</td>
                                <td rowSpan={2}>캐디피</td>
                            </tr>
                            <tr>
                                <td>월별 홈페이지 공지 그린피</td>
                            </tr>
                            <tr>
                                <td>1홀</td>
                                <td>-</td>
                                <td>무료</td>
                                <td>30,000</td>
                            </tr>
                            <tr>
                                <td>2홀~9홀</td>
                                <td rowSpan={2}>그린 플레이를 완료한 해당 홀 별 1/N 정산</td>
                                <td>50,000</td>
                                <td>80,000</td>
                            </tr>
                            <tr>
                                <td>10홀~18홀</td>
                                <td>100,000</td>
                                <td>150,000</td>
                            </tr>
                            <tr>
                                <td>9홀추가</td>
                                <td>추가한 홀, 그린플레이 완료지점까지 홀 별 1/N 정산</td>
                                <td>150,000</td>
                                <td>230,000</td>
                            </tr>
                        </table>
                    </aside>
                </article>
                <article className='Use_five'>
                    <div>
                        <div className='Use_num'>05</div>
                        <div className='Use_title'>위약 및 예약취소 안내</div>
                    </div>
                    <p>위약 규정을 통하여 공정한 에약질서 및 내장질서를 확립하고, 쾌적한 플레이를 즐기실 수 있도록 할 것 입니다.</p>
                    <aside className='Use_five_cancel'>
                        <table>
                            <tr>
                                <td>구분</td>
                                <td>평일</td>
                                <td>주말(공휴일)</td>
                                <td>위약내용 및 금액</td>
                            </tr>
                            <tr>
                                <td>예약취소</td>
                                <td>이용일 3일전 17시까지</td>
                                <td>이용일 4일전 17시까지</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}>위약</td>
                                <td>이용일 2일전 17시까지</td>
                                <td>이용일 3일전~2일전<br/> 17시까지</td>
                                <td>4개월 예약 및 내장제한 또는 이용 그린피[팀]10%</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>이용일 1일전 17시까지</td>
                                <td>6개월 예약 및 내장제한 또는 이용 그린피[팀]20%</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>이용일 당일(No-Show)</td>
                                <td>12개월 예약 및 내장제한 또는 이용 그린피[팀]30%</td>
                            </tr>
                        </table>
                    </aside>
                </article>
                <article className='Use_six'>
                    <div>
                        <div className='Use_num'>06</div>
                        <div className='Use_title'>퇴장처리규정</div>
                    </div>
                    <aside className='Use_six_out'>
                        <table>
                            <tr>
                                <td>구분</td>
                                <td>내용</td>
                                <td>위반조취</td>
                            </tr>
                            <tr>
                                <td>늦장플레이</td>
                                <td>
                                    <ul>
                                        <li><span>ㆍ</span>진행요원의 경기 집행협조 요청을 2회이상 불이행시</li>
                                        <li><span>ㆍ</span>후속팀으로부터 3회 이상 경기지연에 대한 항의를 받는 경우</li>
                                        <li><span>ㆍ</span>앞 팀과의 거리가 1홀 이상 차이가 나는경우 <br/>&nbsp;&nbsp;&nbsp;(티잉그라운드에서 볼 때 그린이 비어 있는 경우)</li>
                                        <li><span>ㆍ</span>기타 플레이를 지연하여 경기진행에 방해가 되는 경우</li>
                                    </ul>
                                </td>
                                <td rowSpan={2}>라운드 중단 및 퇴장조치,<br/>해당팀 전원 3개월<br/>예약 및 내장정지</td>
                            </tr>
                            <tr>
                                <td>매너불량</td>
                                <td>
                                    <ul>
                                        <li><span>ㆍ</span>근무자 희롱, 욕설, 폭행 또는 직원의 정당한 요구에 대한 불응</li>
                                        <li><span>ㆍ</span>금연구역 위반행위</li>
                                        <li><span>ㆍ</span>음식물 반입 및 취식행위</li>
                                        <li><span>ㆍ</span>지나친 도박, 고성방가, 방뇨 등의 행위</li>
                                        <li><span>ㆍ</span>시설 및 잔디 등의 고의적인 훼손 행위</li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </aside>
                </article>
                <article className='Use_seven'>
                    <div>
                        <div className='Use_num'>07</div>
                        <div className='Use_title'>로컬룰</div>
                    </div>
                    <ul>
                        <li><span>ㆍ</span>아웃오브 바운드(OB)는 백색말뚝, 병행 워터 해저드는 빨간 말뚝으로 표시한다.</li>
                        <li><span>ㆍ</span>수리지는 백색선 또는 적색의 삼각표식으로 하며 보식지 지역은 별도의 수리지 표시가 없더라도 수리지다.</li>
                        <li><span>ㆍ</span>아웃오브 바운드(OB)또는 공을 분실한 경우 2벌타를 받고 OB티 또는 최후지점(공을 잃어버린 곳)에서<br/>&nbsp;&nbsp;&nbsp;홀에 가깝지 않게 2클럽 이내 구역에서 플레이 할 수 있다.</li>
                        <li><span>ㆍ</span>아웃오브 바운드(OB)지역경계선을 넘어 다른 홀에 들어간 공은 코스안에있어도 OB이다.</li>
                        <li><span>ㆍ</span>공이 인공화단(관목, 억세군락지역, 나무보호를 위한 지주지역),방공시설물,배수로,멘홀,카트도로,드롭<br/>&nbsp;&nbsp;&nbsp;플레이표시가 되어 있는곳,기타인공시설물 등에 들어갔을 경우 1클럽길이 이내에서 무벌타 드롭할수있다.</li>
                        <li><span>ㆍ</span>상기이외의 사항은 대한 골프협회 골프규칙을 적용한다.</li>
                        <li><span>ㆍ</span>9홀 스코어가 55타 이상이신 플레이어는 다른 플레이어의 플레이에 방해가 되지 않도록<br/>&nbsp;&nbsp;&nbsp;진행에 협조 부탁드립니다.</li>
                    </ul>
                </article>
            </section>
        </div >
    );
}

export default Use;