class TopNavigation extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <style>
                a {
                    text-decoration: none;
                    color: black;
                }

                .bottom > a {
                    margin: 10px;
                    font-size: 20px;
                }

                .top-navigation {
                    height: 10vh;
                    box-shadow: 1px 0.5px 10px 3px gray;
                    padding: 2.5vh;
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                }

                .right {
                    margin-right: 5vw;
                }

                .sign {
                    margin-right: 4vw;
                    font-size: 20px;
                }

                .left {
                    width: 20vh;
                    height: 60%;
                    overflow: hidden;
                    margin-left: 10vw;
                }

                .logo {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .bottom {
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    transform: translateX(-50%);
                }
            </style>

            <header class="top-navigation">
                <div class="left">
                    <img class="logo" src="../imgs/logo.png"/>
                </div>
                <div class="right">
                    <a href="/login" class="sign">로그인</a>
                    <a href="/register" class="sign">회원가입</a>
                </div>
                <div class="bottom">
                    <a href="/home">홈</a>
                    <a href="/calendar">캘린더</a>
                    <a href="/community">커뮤니티</a>
                    <a href="/food">밥 추천</a>
                    <a href="/myinfo">내 정보</a>
                </div>
            </header>
        `
    }
}

customElements.define('top-navigation', TopNavigation)