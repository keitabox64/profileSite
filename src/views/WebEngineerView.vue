<script setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'
import { createClient } from 'microcms-js-sdk';

const users = ref([]);

const client = createClient({ 
  serviceDomain: import.meta.env.VITE_MICROCMS_DOMAIN, 
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY 
});
// service-domain は XXXX.microcms.io の XXXX 部分
onMounted(() => {
client
  .get({
    endpoint: 'achievement',
  })
  .then((res) => {users.value = res.contents;})
  .catch((err) => console.log(err));
});
</script>

<template>
  <main>
  <div class="common WebDesigner">
    <section class="WebDesignerTitle">
      <h1>WebEngineer</h1>
      <span class="WebDesignerLine"></span>
    </section>
    <section class="WebDesignerExplanation">
      <h2>コミュニケーション能力が武器</h2>
      <p>顧客の強みを把握し、何が課題かをコミュニケーションの中で見出すことができます。メッセージのレスの早さと、顧客に寄り添う姿勢を崩さず、必要とあれば直接先方に駆けつけることも辞さないフットワークの軽さが強みです。
      </p>
    </section>
    <section class="WebDesignerWorks">
      <h2 class="WebDesignerWorksTitle">WORKS</h2>
      <ul class="WebDesignerWorksList">
        <li v-for="user in users" :key="user.id">
          <RouterLink :to="`/webdesigner/${user.id}`">
          <img :src="user.ogpImage.url" :alt="user.title">
          <h3>{{ user.title }}</h3>  
          </RouterLink>
        </li>
      </ul>
    </section>
  </div>
</main>
  <footer class="WebDesignerFooter">
    <div>
      <RouterLink to="/" ref="returnToMain" class="returnToMain">Main Page</RouterLink>
    </div>
    <div class="WebDesignerFooterContent">
      <RouterLink to="/privacy" class="WebDesignerFooterPrivacy">Privacy Policy</RouterLink>
      <small class="WebDesignerFooterCopyright">(C)KEITA WATANABE 2022</small>
    </div>
  </footer>
</template>
  
<style scoped>
main {
  background-color: #ffffff;
}
.WebDesignerTitle {
  position: relative;
  margin-top: 45px;
}

.WebDesignerTitle h1 {
  font-size: 3.2rem;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  color: #5a5a5a;
  z-index: 1;
}

.WebDesignerLine {
  position: absolute;
  height: 20px;
  width: 100%;
  top: 50px;
  background: #ff3300;
  z-index: 0;
}

.WebDesignerExplanation h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #000000;
  text-align: left;
  margin: 10px 15px auto;
}

.WebDesignerExplanation p {
  margin-top: 32px;
  padding: 0 20px;
  font-size: 1.2rem;
  font-weight: 800;
  color: #000000;
}

.WebDesignerWorks h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #000000;
  text-align: center;
  margin: 60px 15px auto;
}
.WebDesignerWorksList {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
}
.WebDesignerWorksList li {
  width: 300px;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 40px auto;
  overflow: hidden; 
  transform: scale(1, 1);
  transition: 0.5s;
}
.WebDesignerWorksList img {
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  transition: 0.5s;
  
}
.WebDesignerWorksList h3 {
  font-size: 1.2rem;
  font-weight: 800;
  color: #000000;
  padding: 10px 20px 20px 20px;
}

.WebDesignerWorksList li:hover{
  transform: scale(1.1, 1.1);
  transition: 0.5s;
}

/**Footer */
.WebDesignerFooter {
  margin-top: 100px;
  background-color: #ff3300;
  padding: 60px 0;
  position: relative;
}

.WebDesignerFooter::before {
  background-color: #ffffff;
  background: linear-gradient(0deg, #ff3300, transparent);
  position: absolute;
  top: -59px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  content: " ";
}

.WebDesignerFooterPrivacy {
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

.WebDesignerFooterCopyright {
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

@media (min-width: 800px) {
  .WebDesignerExplanation {
    max-width: 1080px;
    margin: 0 auto;
  }

  .WebDesignerTitle h1 {
    font-size: 4.8rem;
    text-align: center;
  }

  .WebDesignerLine {
    top: 82px;
  }

  .WebDesignerExplanation h2 {
    font-size: 2.4rem;
    text-align: center;
  }
  .WebDesignerWorksList {
  flex-direction: row;
  flex-wrap: wrap;
}
.WebDesignerWorksList li {
  margin: 40px; 
}
}
</style>