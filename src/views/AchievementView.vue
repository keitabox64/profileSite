<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { createClient } from 'microcms-js-sdk';

const route = useRoute();
const user = ref([]);

const id = route.params.id;

const client = createClient({
    serviceDomain: import.meta.env.VITE_MICROCMS_DOMAIN,
    apiKey: import.meta.env.VITE_MICROCMS_API_KEY
});

onMounted(() => {
    client
        .get({
            endpoint: 'achievement',
            contentId: `${id}`,
        })
        .then((res) => { user.value = res })
        .catch((err) => console.log(err));
});

</script>
<template>
    <main>
        <div class="common Works">
            <section class="WorksTitle">
                <h1>WebEngineerWorks</h1>
                <span class="WorksLine"></span>
            </section>
            <section class="WorksExplanation">
                <h2>{{ user.title }}</h2>
                <p>{{ user.content }}</p>
                <p>{{ user.term }}</p>
                <p>{{ user.tech }}</p>
                <a :href="user.webSite" class="WorksExplanationLink" target="_blank">Webサイトはこちら</a>
                <br>
                <br>
                <div class="mainText" v-html="user.mainText"></div>
                <br>
                <br>
                <div class="wrap">
                    <ul class="WorksContent">
                        <li class="itemPC js-item">
                            <img :src="user.pcImage && user.pcImage.url" alt="">
                        </li>
                        <li class="itemSP js-item">
                            <img :src="user.spImage && user.spImage.url" alt="">
                        </li>
                    </ul>
                </div>
            </section>
            <div class="btnPosition">
                <RouterLink to="/webengineer" class="returnToWebDesigner slideRed">Return to WebEngineer Page
                </RouterLink>
            </div>
        </div>
    </main>
    <footer class="WorksFooter">
        <div>
            <RouterLink to="/" ref="returnToMain" class="returnToMain">Main Page</RouterLink>
        </div>
        <div class="WorksFooterContent">
            <RouterLink to="/privacy" class="WorksFooterPrivacy">Privacy Policy</RouterLink>
            <small class="WorksFooterCopyright">(C)KEITA WATANABE 2022</small>
        </div>
    </footer>
</template>
<style scoped>
main {
    background-color: #ffffff;
}

.WorksTitle {
    position: relative;
    margin-top: 45px;
}

.WorksTitle h1 {
    font-size: 3.2rem;
    font-weight: 800;
    white-space: nowrap;
    overflow: hidden;
    color: #5a5a5a;
    z-index: 1;
}

.WorksLine {
    position: absolute;
    height: 20px;
    width: 100%;
    top: 50px;
    background: #ff3300;
    z-index: 0;
}

.WorksExplanation h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #000000;
    text-align: left;
    margin: 10px 15px auto;
}

.WorksExplanation p {
    margin-top: 32px;
    padding: 0 20px;
    font-size: 1.2rem;
    font-weight: 800;
    color: #000000;
}
.WorksExplanationLink {
    margin-top: 32px;
    padding: 0 20px;
    font-size: 1.2rem;
    font-weight: 400;
    color: #2b2b2b;
}
.WorksExplanationLink::before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    background-image: url(../assets/img/Link.png);
    background-size: contain;
    background-repeat: no-repeat;
    top: 2px;
    left: 0px;
    margin-top: 32px;
    margin-right: 10px;
}

.wrap {
    width: 90%;
    margin: 0 auto;
}

.WorksContent {
    margin: 0 auto;
    list-style: none;
}

.itemPC {
    margin: 80px auto 20px auto;
    width: 300px;
}

.itemSP {
    margin: 20px auto;
    width: 300px;
}

.itemPC p {
    padding-left: 0;
}

.itemSP p {
    padding-left: 0;
}

.itemPC img {
    width: 100%;
}

.itemSP img {
    width: 100%;
}

.mainText ::v-deep {
    line-height: 1.6rem;
    color: #000000;
    font-size: 1.2rem;
    padding: 0 20px;
}

.mainText img ::v-deep {
    text-align: center;
    width: 600px;
}

/**WebDesingerページに戻るボタン */
.btnPosition {
    margin-top: 40px;
    display: flex;
    justify-content: center;
}

.returnToWebDesigner {
    background: #000;
    color: #f9f9f9;
    display: inline-block;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 100;
    text-align: center;
    transition: .8s;
}

.returnToWebDesigner.slideRed {
    overflow: hidden;
    position: relative;
    z-index: 3;
}

.returnToWebDesigner.slideRed::after {
    background: #ff3300;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 140%;
    height: 100%;
    transform: skewX(-30deg) scale(0, 1);
    transform-origin: right top;
    transition: transform .2s;
    z-index: -1;
}

.returnToWebDesigner.slideRed:hover::after {
    transform-origin: left top;
    transform: skewX(-30deg) scale(1, 1);
}


/**Footer */
.WorksFooter {
    margin-top: 100px;
    background-color: #ff3300;
    padding: 60px 0;
    position: relative;
}

.WorksFooter::before {
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

.WorksFooterPrivacy {
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

.WorksFooterCopyright {
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
    .WorksExplanation {
        max-width: 1080px;
        margin: 0 auto;
    }

    .WorksTitle h1 {
        font-size: 4.8rem;
        text-align: center;
    }

    .WorksLine {
        top: 82px;
    }

    .WorksExplanation h2 {
        font-size: 2.4rem;
        text-align: center;
    }

    .wrap {
        width: 100%;
    }

    .WorksContent {
        display: flex;
        justify-content: center;
    }

    .itemPC {
        display: inline-block;
        margin: 20px;
        width: 500px;
    }

    .itemSP {
        display: inline-block;
        margin: 20px;
        width: 250px;
    }

    .itemPC p {
        padding-left: 0;
    }

    .itemSP p {
        padding-left: 0;
    }

    .itemPC img {
        width: 100%;
    }

    .itemSP img {
        width: 100%;
    }

    .returnToWebDesigner {
        padding: 15px 20px;
        cursor: pointer;
        font-size: 1.8rem;
        font-weight: 100;
        text-align: center;
        transition: .8s;
    }
}
</style>