<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <main>
    <section class="privacy">
        <div class="privacyTitle">
            <h2>プライバシーポリシー</h2>
        </div>
        <div class="privacyContent">
            <p>Keita Watanabe Profile Site（以下、「当サイト」と言います。）では、「<a
                    href="https://elaws.e-gov.go.jp/document?lawid=415AC0000000057">個人情報の保護に関する法律</a>」を遵守すると共に、以下に定めるプライバシーポリシーに従って、皆様の個人情報を安全かつ適切に取り扱うことを宣言致します。
            </p>

            <h2><strong>個人情報の定義</strong></h2>

            <p>本プライバシーポリシーにおいて、個人情報とは生存する個人に関する情報であり、氏名、生年月日、住所、電話番号、メールアドレス等、特定の個人を識別することができるものをいいます。</p>

            <h2>個人情報の利用目的</h2>

            <p>当サイトでは、皆様からお問い合わせをいただく際に、お名前やメールアドレス等の個人情報をご提供いただく場合がございます。取得した個人情報は、予約、お問い合わせ対応のために利用するものとし、それ以外の目的では利用致しません。
            </p>

            <h2>個人情報の管理</h2>

            <p>取得した個人情報は、漏えい、紛失、不正アクセス等が起こらないよう、慎重かつ適切に管理致します。</p>

            <h2>個人情報の第三者提供</h2>

            <p>個人情報の保護に関する法律に基づく場合を除き、ご本人様の同意を得ずに、個人情報を第三者に提供することはありません。</p>

            <h2>個人情報の開示・訂正・削除について</h2>

            <p>個人情報の開示・訂正・削除をご希望の場合は、ご本人様よりお申し出ください。個人情報の保護に関する法律に基づき、適切かつ迅速に対応致します。</p>

            <h2>Cookie（クッキー）について</h2>

            <p>Cookie（クッキー）とは、ウェブサイトの閲覧履歴を、コンピュータやスマートフォンに保存する仕組みです。</p>

            <p>なお、Cookieに含まれる情報は当サイトや他サイトへのアクセスに関する情報のみであり、氏名、住所、メール アドレス、電話番号などの個人情報は含まれません。</p>

            <p>従って、Cookieに保存されている情報からお客様個人を特定することはできません。</p>

            <h2>アクセス解析ツールについて</h2>

            <p>当サイトは、「Googleアナリティクス」を利用しています。Googleアナリティクスは、皆様のトラフィックデータを収集し、アクセス解析を行うツールです。その仕組みについては、「<a
                    href="https://policies.google.com/technologies/partner-sites">Google のサービスを使用するサイトやアプリから収集した情報の
                    Google による使用&nbsp;</a>」をご確認ください。</p>

            <p>トラフィックデータの収集を拒否するには、ブラウザの設定でCookieを無効します。なお、トラフィックデータは匿名で収集されており、個人を特定できるものではありません。詳しくは、「<a
                    href="https://marketingplatform.google.com/about/analytics/terms/jp/">Googleアナリティクス利用規約</a>」をご確認ください。
            </p>

            <h2><strong>免責事項</strong></h2>

            <p>当サイトに掲載されている情報・資料の内容については、万全の注意を払って掲載しておりますが、掲載された情報の正確性を何ら保証するものではありません。従いまして、当サイトに掲載された情報・資料を利用、使用、ダウンロードする等の行為に起因して生じる結果に対し、一切の責任を負いません。
            </p>

            <p>なお、当サイトに掲載された情報の正確性を鑑みた際に、予告なしで情報の変更・削除を行う場合がございますので、予めご了承ください。</p>

            <h2><strong>著作権について</strong></h2>

            <p>当サイトに掲載している、文章・画像・動画等の著作物を無断で複製し、転載することを禁じます。</p>

            <p>なお、当サイトに掲載している文章を引用する際は、出典元の明記をお願い致します。</p>

            <h2>プライバシーポリシーの変更</h2>

            <p>個人情報の保護に関する法律の改正等により、事前の予告なくプライバシーポリシーを変更する場合があります。</p>

            <hr class="wp-block-separator has-alpha-channel-opacity" />

            <p>2022年12月2日改訂</p>
        </div>
    </section>
</main>
    <footer class="privacyFooter">
    <div>
      <RouterLink to="/" ref="returnToMain" class="returnToMain">Main Page</RouterLink>
    </div>
    <div class="privacyFotterContent">
      <RouterLink to="/privacy" class="privacyFooterPrivacy">Privacy Policy</RouterLink>
      <small class="privacyFooterCopyright">(C)KEITA WATANABE 2022</small>
    </div>
  </footer>
</template>

<style scoped>
main {
  background-color: #ffffff;
}
.privacyTitle {
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 48px;
    
}
.privacyTitle h2 {
    
    font-size: 2rem;
    text-align: center;
    color: #000000;
}

.privacyContent {
    display: block;
    margin: 0 auto;
    width: 90%;
    text-align: left;
}

.privacyContent h2 {
    margin-top: 32px;
    font-size: 1.2rem;
    text-align: left;
    color: #000000;
}

.privacyContent p {
    margin-top: 16px;
    font-size: 1rem;
    color: #000000;
}

.privacyContent a {
    color: #1573ff;
    text-decoration: underline;
}

.privacyContent hr {
    margin: 40px auto;
}

/* tablet版 */
@media (min-width: 550px) {
    .privacyTitle {
        margin: 0 auto;
        padding-top: 100px;
        padding-bottom: 72px;
    }
    .privacyTitle h2 {
        text-align: center;
        font-size: 4rem;
    }

    .privacyContent h2 {
        margin-top: 40px;
        font-size: 2rem;
        text-align: left;
    }

    .privacyContent p {
        margin-top: 18px;
        font-size: 1.2rem;
    }

}

/* PC版 */
@media (min-width: 1080px) {
    .privacyTitle {
        margin: 0 auto;
        padding-top: 100px;
        padding-bottom: 72px;
    }

    .privacyContent {
        max-width: 1080px;

    }
}
.privacyFooter {
  margin-top: 100px;
  background-color: #5a5a5a;
  padding: 60px 0;
  position: relative;
}

.privacyFooter::before {
    background-color: #ffffff;
  background: linear-gradient(0deg, #5a5a5a, transparent);
  position: absolute;
  top: -59px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  content: " ";
}

.privacyFooterPrivacy {
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

.privacyFooterCopyright {
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
</style>