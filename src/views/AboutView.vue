<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const returnToMain = ref()

const setBBObserver = () => {
  const target = document.querySelectorAll('.targetBottomBtn')
  const targetArray = Array.prototype.slice.call(target)
  const options = {
    root: null,
    rootMargin: '0px 0px',
    threshold: [0, 0.1]
  };

  const observer = new IntersectionObserver(callback, options)
  targetArray.forEach(function (tgt) {
    observer.observe(tgt)
  })

  function callback(entries) {
    entries.forEach(function (entry) {
      const target = entry.target
      if (entry.isIntersecting) {
        returnToMain.value.classList.add('is-on')
        console.log("add is-on")
      } else {
        returnToMain.value.classList.remove('is-on')
      }
    })
  }
}

</script>

<template>
  <main>
    <div class="about wrapper">
      <section class="aboutTitle">
        <h1>About Me</h1>
        <span class="aboutLine"></span>
      </section>
      <section class="selfIntroduction targetBottomBtn">
        <h2>自己紹介</h2>
        <div class="selfIntroductionContent">
          <div class="aboutImageObject">
            <img src="../assets/img/profileImage.jpg" alt="selfImage" class="aboutImage">

            <div class="rearSquare"></div>
          </div>
          <div class="selfIntroductionDetail">
            <div class="name">
              <h3>名前</h3>
              <h5>ワタナベ ケイタ</h5>
              <h4>渡邊 啓太</h4>
            </div>
            <div class="oneWord">
              <h3>プロフィール</h3>
              <h4>モノづくりが好きです。好奇心とアンテナ感度が高く、何かをする時は新しい技術や手法を取り入れるようにしています。人と接することも好きで、実務やプライベートでも人と関わる経験を数多くしてきました。リーダータイプのオタクとよく言われます。</h4>
            </div>
            <div class="SNS">
              <h3>SNS</h3>
              <ul class="SNSIcon">
                <li><a href="https://twitter.com/ke_ke_ke_310" target="_blank"><img src="../assets/img/logoTwitter.svg"
                      alt=""></a></li>
                <li><a href="https://note.com/k_notebook" target="_blank"><img src="../assets/img/logoNote.svg"
                      alt=""></a></li>
                <li><a href="https://github.com/keitabox64" target="_blank"><img src="../assets/img/logoGitHub.svg"
                      alt=""></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="skill">
        <h2>SKILL</h2>
        <div class="skillList">
          <div class="engineering">
            <h3>エンジニアリング</h3>
            <ul>
              <li>電波工学 / 無線工学</li>
              <li>宇宙工学（超小型人工衛星）</li>
              <li>EMC（環境電磁工学技術）</li>
            </ul>
          </div>
          <div class="WebDesign">
            <h3>Webデザイン : 使用言語 / ツール</h3>
            <ul>
              <li>HTML / CSS / SCSS / JavaScript / jQUery / Vue.js / PHP / MySQL</li>
              <li>Github / VScode / MAMP / Figma / XD / Illustrator / Photoshop</li>
            </ul>
          </div>
          <div class="videoProduction">
            <h3>映像制作・配信 : 機材 / ツール</h3>
            <ul>
              <li>ZV-1 / iPhone / OBS Studio / Premire Pro / Affter Effect / Davinchi Resolve</li>
            </ul>
          </div>
          <div class="management">
            <h3>マネジメント経験</h3>
            <ul>
              <li>DJイベント（メンバー10人、3ヶ月）</li>
              <li>映画祭（メンバー30人、1年）</li>
              <li>自主制作映画（メンバー50人、3年）</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="career">
        <h2>CAREER</h2>
        <ul class="timeLine">
          <li>
            <h6 class="timeLineDate">2014.04</h6>
            <div class="timeLineContent">
              <p>大学院を卒業し、空調機メーカーに就職する。電磁波適合試験部門に配属され、電磁波の試験エンジニアとして従事する。</p>
            </div>
          </li>
          <li>
            <h6 class="timeLineDate">2017.03</h6>
            <div class="timeLineContent">
              <p>3年かけて制作した特撮の自主制作映画が完成し、上映会を実施し、120人が集まった。翌月に開催された全国自主怪獣映画祭で田口清隆賞を受賞した。</p>
            </div>
          </li>
          <li>
            <h6 class="timeLineDate">2018.02</h6>
            <div class="timeLineContent">
              <p>クラウドファンディングサイトのCAMPFIREとご縁があって企画を任されたホリエモン万博CAMPFIRE映画祭を実施した。メーカーでの仕事と並行して企画、運営に携わった。</p>
            </div>
          </li>
          <li>
            <h6 class="timeLineDate">2018.06</h6>
            <div class="timeLineContent">
              <p>
                4年間勤めたメーカーを退職する。メーカーでの仕事と様々なアクティビティを経験する中で一つにとらわれない働き方とソフト開発エンジニアへキャリアチェンジするため、個人事業主として開業し電磁波適合試験の業務委託を受けながらプログラミングの自己研鑽をする。
              </p>
            </div>
          </li>
          <li>
            <h6 class="timeLineDate">2019.03</h6>
            <div class="timeLineContent">
              <p>個人事業主を廃業する。</p>
            </div>
          </li>
          <li>
            <h6 class="timeLineDate">2021.10</h6>
            <div class="timeLineContent">
              <p>デジタルハリウッド STUDIO by LIGに入学する。</p>
            </div>
          </li>
          <li>
            <h6 class="timeLineDate">2022.07</h6>
            <div class="timeLineContent">
              <p>業務の都合の関係もあり、個人事業主として開業する。</p>
            </div>
          </li>
          <li>
            <h6 class="timeLineDate">2022.08</h6>
            <div class="timeLineContent">
              <p>デジタルハリウッド STUDIO by LIGを卒業する。</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </main>
  <footer class="aboutFooter">
    <div>
      <RouterLink to="/" ref="returnToMain" class="returnToMain">Main Page</RouterLink>
    </div>
    <div class="aboutFotterContent">
      <RouterLink to="/privacy" class="aboutFooterPrivacy">Privacy Policy</RouterLink>
      <small class="aboutFooterCopyright">(C)KEITA WATANABE 2022</small>
    </div>
  </footer>
</template>

<style scoped>
main {
  background-color: #ffffff;
}

.aboutTitle {
  position: relative;
  margin-top: 45px;
}

.aboutTitle h1 {
  font-size: 3.2rem;
  font-weight: 800;
  color: #5a5a5a;
  z-index: 1;
}

.aboutLine {
  position: absolute;
  height: 20px;
  width: 100%;
  top: 50px;
  background: #ff9900;
  z-index: 0;
}

.about h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #000000;
  text-align: center;
  margin: 60px 15px auto;
}

.aboutImageObject {
  position: relative;
  margin: 40px 0 20px 0;
  height: 340px;
}

.aboutImage {
  position: absolute;
  width: 320px;
  height: 320px;
  border: solid 5px #5a5a5a;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
}

.rearSquare {
  position: absolute;
  width: 320px;
  height: 320px;
  top: 15px;
  left: 50%;
  transform: translateX(-43%);
  background: #ff9900;
  z-index: -1;
}

.selfIntroductionDetail {
  margin-top: 52px;
  padding: 0 20px;
  text-align: left;
  color: #000000;
}

.selfIntroductionDetail h3 {
  font-size: 1.4rem;
  font-weight: 800;
  color: #455174;
}

.name h5 {
  margin-top: 3px;
  font-size: 1rem;
  font-weight: 800;
}

.name h4 {
  margin-top: -8px;
  font-size: 2rem;
  font-weight: 800;
}

.dateOfBirth {
  margin-top: 32px;
}

.dateOfBirth h4 {
  font-size: 1rem;
  margin-top: 3px;
  font-weight: 800;
}

.oneWord {
  margin-top: 32px;
  font-weight: 800;
}

.oneWord h4 {
  font-size: 1rem;
  margin-top: 3px;
  font-weight: 800;
}

.SNS {
  margin-top: 32px;
}

.SNSIcon {
  display: flex;
  flex-direction: row;
  padding-left: 0;
  list-style: none;
}

.SNSIcon li {
  margin-right: 20px;
}

.SNSIcon img {
  width: 50px;
  height: 50px;
}

.skillList {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}

.skillList h3 {
  font-size: 1.4rem;
  font-weight: 800;
  color: #455174;
  margin-top: 32px;
  margin-bottom: 6px;
}

.skillList li {
  font-size: 1rem;
  font-weight: 800;
  color: #000000;
}

.timeLine {
  margin-top: 32px;
  margin-bottom: 6px;
  padding: 0 20px;
}

.timeLineDate {
  font-size: 1rem;
  font-weight: 800;
  margin-top: 16px;
  margin-bottom: 6px;
  color: #455174;
}

.timeLineContent p {
  font-size: 1rem;
  font-weight: 800;
  color: #000000;
}

.aboutFooter {
  margin-top: 100px;
  background-color: #ff9900;
  padding: 60px 0;
  position: relative;
}

.aboutFooter::before {
  background: linear-gradient(0deg, #ff9900, transparent);
  position: absolute;
  top: -59px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  content: " ";
}

.aboutFooterPrivacy {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-weight: 100;
  font-size: 0.8rem;
  display: inline-block;
  text-decoration: underline;
  color: #000000;
}

.aboutFooterCopyright {
  position: absolute;
  bottom: -30px;
  left: 0px;
  width: 100%;
  text-align: center;
  font-weight: 100;
  font-size: 0.8rem;
  color: #000000;
}

/**メインページに戻るボタン */
.returnToMain {
  position: absolute;
  bottom: -30px;
  right: 20px;
  width: 80px;
  height: 80px;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 100;
  background-color: #000000;
  color: #ffffff;
  z-index: 3;
}

.returnToMain::before {
  content: "";
  display: block;
  width: 40px;
  height: 40px;
  background-image: url(../assets/img/arrowIconLeft.svg);
  background-size: contain;
  background-repeat: no-repeat;
  top: 10px;
  left: 20px;
  margin-bottom: 10px;
}


.is-on {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: .8s;
}

/**PC */
@media (min-width: 800px) {
  .selfIntroduction {
    margin: 0 auto;
    max-width: 1080px;
  }

  .skill {
    margin: 0 auto;
    max-width: 1080px;
  }

  .career {
    margin: 0 auto;
    max-width: 1080px;
  }

  .aboutTitle {
    position: relative;
    margin-top: 45px;
  }

  .aboutTitle h1 {
    font-size: 4.8rem;
    font-weight: 800;
    color: #5a5a5a;
    text-align: center;
  }

  .aboutLine {
    width: 100%;
    top: 82px;

  }

  .selfIntroductionContent {
    display: flex;
    justify-content: center;
  }

  .aboutImageObject {
    position: relative;
    margin: 65px 60px 20px 40px;
    height: 340px;
    width: 420px;
  }

  .selfIntroductionDetail {
    padding: 0 20px;
  }

  .dateOfBirth {
    margin-top: 16px;
  }

  .oneWord {
    margin-top: 16px;
  }

  .oneWord h4 {
    width: 400px;
  }

  .SNS {
    margin-top: 16px;
  }

  .skillList {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 auto;
  }

  .skillList div {
    width: calc(50% - 20px);
    padding: 0 10px
  }

  .timeLine li {
    display: flex;
    flex-direction: row;
  }

  .timeLineDate {
    margin-top: 24px;
    padding: 0 40px;
    width: 140px;
    display: inline-block;
  }

  .timeLineContent {
    display: inline-block;
    padding: 24px 0 24px 40px;
    border-left: 3px #ff9900 solid;
  }

  .timeLineContent::before {
    content: '';
    width: 12px;
    height: 12px;
    background: #455174;
    position: absolute;
    left: -7px;
    top: 30px;
    border-radius: 100%;
  }
}
</style>
