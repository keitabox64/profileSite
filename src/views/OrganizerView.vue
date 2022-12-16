<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
  <div class="common Organizer">
    <section class="OrganizerTitle">
      <h1>Event Organizer</h1>
      <span class="OrganizerLine"></span>
    </section>
    <section class="OrganizerExplanation">
      <h2>領域に特化したユニークな企画が得意</h2>
      <p>
        学生時代に飲み会を企画する楽しさを覚え、入社したメーカーの70人の新卒全員飲み会を実施したり、働きながらイベントを企画するようになる。2018年2月に著名ゲストを招いた数百人規模の映画祭を企画と運営に携わったことでプレッシャーに強くなった。企画の特徴見つけ、それに合わせたイベントを組み立てるのが得意。
      </p>
    </section>
    <section class="OrganizerWorks">
      <h2 class="OrganizerWorksTitle">WORKS</h2>
      <ul class="OrganizerWorksList">
        <li>
          <a href="https://natalie.mu/eiga/news/268113" target="_blank">
            <img src="../assets/img/HCFFF_logo.jpg" alt="CAMPFIRE映画祭">
            <h4>2018年</h4>
            <p>ホリエモン万博CAMPFIRE映画祭</p>
          </a>
        </li>
        <li>
          <a href="https://note.com/k_notebook/n/n45363cabbe4a" target="_blank">
          <img src="../assets/img/cmh_logo.jpg" alt="CreatorsMusicHour">
          <h4>2022年</h4>  
          <p>Creator's Music Hour</p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</main>
  <footer class="OrganizerFooter">
    <div>
      <RouterLink to="/" ref="returnToMain" class="returnToMain">Main Page</RouterLink>
    </div>
    <div class="OrganizerFotterContent">
      <RouterLink to="/privacy" class="OrganizerFooterPrivacy">Privacy Policy</RouterLink>
      <small class="OrganizerFooterCopyright">(C)KEITA WATANABE 2022</small>
    </div>
  </footer>
</template>
  
<style scoped>
main {
  background-color: #ffffff;
}
.OrganizerTitle {
  position: relative;
  margin-top: 45px;
}

.OrganizerTitle h1 {
  font-size: 3.2rem;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  color: #5a5a5a;
  z-index: 1;
}

.OrganizerLine {
  position: absolute;
  height: 20px;
  width: 100%;
  top: 50px;
  background: #00ccff;
  z-index: 0;
}

.OrganizerExplanation h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #000000;
  text-align: left;
  margin: 10px 15px auto;
}

.OrganizerExplanation p {
  margin-top: 32px;
  padding: 0 20px;
  font-size: 1.2rem;
  font-weight: 800;
  color: #000000;
}

.OrganizerWorks h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #000000;
  text-align: center;
  margin: 60px 15px auto;
}
.OrganizerWorksList {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
}
.OrganizerWorksList li {
  width: 300px;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 40px auto;
  overflow: hidden;
  transform: scale(1, 1);
  transition: 0.5s; 
}
.OrganizerWorksList img {
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  transition: 0.5s;
  
}
.OrganizerWorksList h4 {
  font-size: 1.2rem;
  font-weight: 800;
  color: #000000;
  padding: 10px 20px 0 20px;
}
.OrganizerWorksList p {
  font-size: 1.2rem;
  font-weight: 800;
  color: #000000;
  padding: 0 20px 20px 20px;
}
.OrganizerWorksList li:hover{
  transform: scale(1.1, 1.1);
  transition: 0.5s;
}
.OrganizerFooter {
  margin-top: 100px;
  background-color: #00ccff;
  padding: 60px 0;
  position: relative;
}

.OrganizerFooter::before {
  background-color: #ffffff;
  background: linear-gradient(0deg, #00ccff, transparent);
  position: absolute;
  top: -59px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  content: " ";
}

.OrganizerFooterPrivacy {
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

.OrganizerFooterCopyright {
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
  .OrganizerExplanation {
    max-width: 1080px;
    margin: 0 auto;
  }

  .OrganizerTitle h1 {
    font-size: 4.8rem;
    text-align: center;
  }

  .OrganizerLine {
    top: 82px;
  }

  .OrganizerExplanation h2 {
    font-size: 2.4rem;
    text-align: center;
  }
  .OrganizerWorksList {
  flex-direction: row;
  flex-wrap: wrap;
}
.OrganizerWorksList li {
  margin: 40px; 
}
}
</style>