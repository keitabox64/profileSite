<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <main>
    <div class="common Director">
      <section class="DirectorTitle">
        <h1>Producer & Director</h1>
        <span class="DirectorLine"></span>
      </section>
      <section class="DirectorExplanation">
        <h2>映像制作から映像総合プロデュースまで</h2>
        <p>2014年1月から自主制作映画のプロデューサーを務めたのをきっかけに映像制作を手掛けるようになる。培った経験と人脈で、映像制作にとどまらず、ライブ配信やドローンの空撮も行える映像総合プロデュースを手掛ける。</p>
      </section>
      <section class="DirectorWorks">
        <h2 class="DirectorWorksTitle">WORKS</h2>
        <ul class="DirectorWorksList">
          <li>
            <div class="youtubeWrap">
              <div class="youtube">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7peUrm7Repo"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
            </div>
            <div class="youtubeDetail">
              <h4>SF特撮ミリタリーアクション映画「U.M.B.F.」</h4>
              <p>監督　山下武昭</p>
              <p>プロデューサー　渡邊啓太</p>
              <p>VFXスーパバイザー　粕谷昌宏</p>
            </div>
          </li>
          <li>
            <div class="youtubeWrap">
              <div class="youtube">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/0l0hz9iyERs"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
            </div>
            <div class="youtubeDetail space">
              <h4>異業種格闘技HATASHIAI 選手紹介動画</h4>
              <p>ディレクター　渡邊啓太</p>
            </div>
          </li>
          <li>
            <div class="youtubeDetail">
              <h4>異業種格闘技HATASHIAI　イベント生配信</h4>
              <p>配信ディレクター　渡邊啓太</p>
            </div>
          </li>
          <li>
            <div class="youtubeWrap">
              <div class="youtube">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fHh_ulvD8vc"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
            </div>
            <div class="youtubeDetail">
              <h4>バカデミーシネマラボチャンネル</h4>
              <p>ディレクター　渡邊啓太</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </main>
  <footer class="DirectorFooter">
    <div>
      <RouterLink to="/" ref="returnToMain" class="returnToMain">Main Page</RouterLink>
    </div>
    <div class="DirectorFotterContent">
      <RouterLink to="/privacy" class="DirectorFooterPrivacy">Privacy Policy</RouterLink>
      <small class="DirectorFooterCopyright">(C)KEITA WATANABE 2022</small>
    </div>
  </footer>

</template>
  
<style scoped>
main {
  background-color: #ffffff;
}

.DirectorTitle {
  position: relative;
  margin-top: 45px;
}

.DirectorTitle h1 {
  font-size: 3.2rem;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  color: #5a5a5a;
  z-index: 1;
}

.DirectorLine {
  position: absolute;
  height: 20px;
  width: 100%;
  top: 50px;
  background: #efd700;
  z-index: 0;
}

.DirectorExplanation h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #000000;
  text-align: left;
  margin: 10px 15px auto;
}

.Director p {
  margin-top: 32px;
  padding: 0 20px;
  font-size: 1rem;
  font-weight: 800;
  color: #000000;
}

.DirectorWorks h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #000000;
  text-align: center;
  margin: 60px 15px auto;
}

.DirectorWorksList {
  margin-top: 30px;
}

.DirectorWorksList li {
  text-align: center;
}

.youtube {
  margin: 0 auto;
  height: 56.25vw;
  max-width: 1080px;
  max-height: 607.5px;
}

.youtubeDetail {
  margin: 20px auto 80px auto;
  padding: 0 20px;
  max-width: 1080px;
  text-align: left;
}

.youtubeDetail h4 {
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 800;
  color: #455174;
}

.youtubeDetail p {
  margin-top: 2px;
  padding-left: 0;
}

.space {
  margin-bottom: 0;
}

.DirectorFooter {
  margin-top: 100px;
  background-color: #efd700;
  padding: 60px 0;
  position: relative;
}

.DirectorFooter::before {
  background-color: #ffffff;
  background: linear-gradient(0deg, #efd700, transparent);
  position: absolute;
  top: -59px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  content: " ";
}

.DirectorFooterPrivacy {
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

.DirectorFooterCopyright {
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
  /*
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  */
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

@media (min-width: 800px) {
  .DirectorExplanation {
    max-width: 1080px;
    margin: 0 auto;
  }

  .DirectorTitle h1 {
    font-size: 4.8rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    color: #5a5a5a;
  }

  .DirectorLine {
    position: absolute;
    height: 20px;
    width: 120%;
    top: 82px;
    left: -100px;
    background: #efd700;
    z-index: -1;
  }

  .DirectorExplanation h2 {
    font-size: 2.4rem;
    text-align: center;
  }
}
</style>