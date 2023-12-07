import './Introduce.css'


const Introduce = () => {
    return (
        <div className="Introduce">
            <section className='Introduce_main'>
                <article className='Introduce_main_club'>
                    <h2>클럽소개</h2>
                    <p>THE BEST PLACE FOR THE BEST</p>
                </article>
                <article className='Introduce_main_intro'>
                    <div className='Introduce_main_intro_first'>
                        <p><span>광주센트리클럽</span> 에게 골프는 소수를 위한 스포츠가 아닙니다.<br />그것은 삶을 바라보는 태도이자 즐기는 방식입니다.</p>
                        <div></div>
                    </div>
                    <div className='Introduce_main_intro_second'>
                        <p>남과 나를 구분 짓기보다 자연과 나의 경계를 허물고 플레이 그자체의 맛과 멋을 향유할 줄 아는 당신,<br /> 자신만의 합리적인 가치를 추구하는 당신을 위해 광주센트리클럽은 태어났습니다.</p>
                        <div></div>
                    </div>
                    <div className='Introduce_main_intro_third'>
                        <p>대자연의 파노라마 속에서 만나는 광주컨트리클럽만의 다이내믹한 코스,사려깊고 세심한 서비스,<br />세련된 시설들은 당신에게 최고의 선수가 된 듯한 경험을 제공할 것입니다.</p>
                        <div></div>
                    </div>
                </article>
                <p  className='Introduce_main_intro_last'>골프 그 이상의 새로운 문화를 만들어가는곳, 광주컨트리클럽 의 주인공은 바로 당신입니다.</p>
            </section>
        </div>
    );
}

export default Introduce;