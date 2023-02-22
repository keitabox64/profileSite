# profileSite

![OGImage](https://github.com/keitabox64/profileSite/blob/master/KeitaWatanabeOGImage.jpg)

**公開サイト：[the Keita Wataabe Profile Site](https://keita-watanabe.com/)**

### 主な使用技術
言語：HTML/ CSS/ JavaScript

ライブラリ：Vue.js

API：microCMS/ HyperForm

エディタ：VScode

### 制作期間
デザイン：1ヵ月（イラスト発注含めると2ヵ月）コーディング：2ヵ月

### 背景と目的
今回のサイトは当初、フリーランスとしての自身の得意領域を紹介するプロフィールサイトとしてスクール卒業後に考えたものです。

フロントエンドエンジニア志望だったので、このサイトを通して技術的な部分で自走能力があること、新しい技術に挑戦する姿勢があることがアピールできればと考えていました。

フリーランスから転職活動にシフトした経緯としては卒業後に様々な人の話を聞いて、技術と経験を積んでからフリーランスとして独立する方が収入面におけるリスクが低いと考え直したからです。


# 制作したサイトについて【概要と特徴】

まず、どのようなサイトを作ったかについては以下のようになります。

1. サイトの概要
2. サイトの特徴
3. 技術的な内容について

## 1. サイトの概要

このサイトは私自身ができる3つの強みと自身の経歴を簡単に紹介したサイトです。

もともとフリーランスとしてWebデザイン、イベント業、映像制作の3つを柱としてその一つ一つを紹介できるようなサイトを作りたいと思いました。フリーランスから転職活動にシフトした時にはデザイン案がほぼ固まっていて、修正して作ることが難しいと考えたため、構成は変えませんでした。また、企業側にもこのサイトを見て、エンジニアだけでなく、広報活動等に貢献できそうな人材と思ってもらいたいという意図があって構成をそのままにしました。


## 2. サイトの特徴

サイトの構成として次のようになります。

- トップページ
- Webエンジニアのページ
- イベントオーガナイザーのページ
- 映像ディレクター、プロデューサーのページ
- 自己紹介
- 問い合わせ（トップページ）

### 〇トップページ
サイトに訪問した人たちが興味を引くように動きのあるサイトにしました。スライドショーのようにスクロールすると一枚一枚切り替わるようにJavaScriptで制御しています。一番下までたどり着くと一番上に戻るボタンが出現してスライドした一枚一枚をあえて一気に遡るような動きにしてスライド感を出しました。　サイトをやわらかくするためかわいらしい自身のイラストを採用しました。

### 〇Webエンジニアのページ
制作した実績を載せました。実績一つ一つに個別ページを作ろうと考えて、実績が増えても更新しやすいようにヘッドレスCMSのmicroCMSを導入しました。使用実績のあるWordPressを使わなかったのは、WordPressのメンテナンスコストが高いからです。更新作業はmicroCMSのサイトで行い、Getメソッドのみの使用ですが、API連携とVue.jsの相性の良さを理解するのには十分でした。

### 〇イベントオーガナイザーのページ
イベント実績を載せています。どんなイベントだったかは記事のリンクから見て頂ければ伝わると思い、詳細ページは省きました。

### 〇映像ディレクター、プロデューサーのページ
映像制作実績を載せています。こちらも実際に映像を見てもらった方が早いなと思い、詳細ページは省きました。

### 〇自己紹介　
イメージと経歴を簡潔にまとめました。どういう人物かがなるべくわかりやすいようにしました。

### 〇問い合わせ（トップページ）
直接問い合わせができるようにHyperFormを導入しました。理由としては導入がとても簡単でメンテナンスが必要ないからです。microCMSを使わなかったのは、制作期間の制約で問い合わせを作るまでの余力がありませんでした。HTML上にAPIを付け加えるだけで使用できるHyperFormは個人の開発ではとても重宝しました。　

スマホでは問い合わせができなくなって、代わりにメールアドレスを載せています。これは技術的な部分で自身の限界がありました。スマホでのタッチの条件分岐としてスクロールする時は100msec以上スマホにタッチし続け、それ以外はボタンに反応するという書き方をしており、テキスト入力に入力できない問題がありました。この問題がサイト制作期間に解決できなかったため、スマホでの問い合わせの実装を見送りました。


## 3. 技術的な内容について
Vue.jsを使用した理由としてはコーダーではなく、フロントエンドエンジニアとして働きたいと考え、企業で使われているライブラリ、フレームワークを使いたいと思ったからです。

ただし、Nuxt.jsは使いませんでした。理由としては今回のサイト制作でJavaScriptにフォーカスを置いていたため、Nuxt.jsの学習に時間がかけられませんでした。

一般企業で使われている技術要素として、型付け言語であるTypeScriptも使いませんでした。こちらも同様の理由で、JavaScriptの学習にフォーカスをおいたため、TypeScriptの学習に時間がかけられませんでした。


サイトはSPAで構成されており、高速なページ遷移を実現しています。しかし一方で初期表示が遅い、SEOが弱いなどのデメリットもあり、課題が残りました。

## 開発者
Keita Watanabe
[Twitter](https://twitter.com/ke_ke_ke_310)
