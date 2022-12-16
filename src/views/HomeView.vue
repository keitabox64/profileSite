<script setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'

const wrapper = ref()
const result = ref()

let count = 0
let pos = 0

const scrollToTop = () => {
  const  elements = document.querySelectorAll('section');
  let elTop = getElTop(),
    resetCount = 0
  function getElTop() {
    const elTop = [];
    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      elTop.push(rect.top + window.scrollY);
    }
    return elTop
  }
  window.scrollTo({
    top: elTop[resetCount],
    behavior: 'smooth',
  });
  count = resetCount
  pos = resetCount
}

const SectionScroll = () => {
  'use strict';

  // 変数
  const wrap = wrapper.value,
    elements = document.querySelectorAll('section');
  let elTop = getElTop(),
    wheelFlag = false;
  function getElTop() {
    const elTop = [];
    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      elTop.push(rect.top + window.scrollY);
    }
    return elTop;
  }

  window.addEventListener('resize', function () {
    elTop = getElTop();
    window.scrollTo(0, elTop[count]);
  });
  // マウスホイールのときの処理
  wrap.addEventListener('wheel', function (e) {
    e.preventDefault(); // デフォルトのスクロール動作を削除
    if (!wheelFlag) { // wheelFlagがfalseのときに発動
      wheelFlag = true; // wheelFlagをtrueにして無駄に発動しないように
      if (e.deltaY > 0) { // ホイールが下方向だったら
        if (count >= elements.length - 1) { // 要素の数以上に増えないようにcountが要素の数を超えたら
          count = elements.length - 1; // countを要素の数とする
        } else {
          count++; // それまではcountをプラス
        }
      } else if (e.deltaY < 0) { // ホイールが上方向だったら
        if (count <= 0) { // 0より小さくならないようにcountが0以下なら
          count = 0; // countを0とする
        } else {
          count--; // それまではcountをマイナスしていく
        }
      }
      setTimeout(function () { //0.8秒後にwheelFlagをfalseにして次のページめくれるように
        wheelFlag = false;
      }, 800);
      setTimeout(function () {
        window.scrollTo({ // count番目の要素へスクロール
          top: elTop[count],
          behavior: 'smooth',
        });
      }, 20); // スクロールまで時間差をつけて慣性スクロール対策  
    }
  });
}



function setSwipe(elem) {
  const r = result.value;
  const t = document.querySelector(elem);
  const len = document.querySelectorAll(elem + '> div.wrapper > section').length;
  let startY;
  let moveY;
  let startTime;
  const dist = 30;

  const  elements = document.querySelectorAll('section');
  let elTop = getElTop()
  function getElTop() {
    const elTop = [];
    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      elTop.push(rect.top + window.scrollY);
    }
    return elTop
  }
  
  t.addEventListener('touchstart', function (e) {
    e.preventDefault();
    startY = e.touches[0].pageY;
    startTime = new Date();
  });

  t.addEventListener('touchmove', function (e) {
    e.preventDefault();
    moveY = e.changedTouches[0].pageY;
  });

  t.addEventListener('touchend', function (e) {
    let thisTarget = e.target;
    let now = new Date();
    let diffTime = now - startTime;
    if (diffTime < 100 ) {
      thisTarget.click();
    } else if (startY > moveY && startY > moveY + dist && pos < len) {
      pos++;
      count++;
      window.scrollTo({
    top: elTop[count],
    behavior: 'smooth',
  });
    } else if (startY < moveY && startY + dist < moveY && pos > 0) {
      pos--;
      count--;
      window.scrollTo({
    top: elTop[count],
    behavior: 'smooth',
  });
    }
  });
}


const setElemLeftObserver = () => {
  const target = document.querySelectorAll('.targetElemFromLeft')
  const targetArray = Array.prototype.slice.call(target)
  const options = {
    root: null,
    rootMargin: '0px 300px',
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
        target.classList.add('is-active')
      } else {
        target.classList.remove('is-active')
      }
    })
  }
}

const setElemRightObserver = () => {
  const target = document.querySelectorAll('.targetElemFromRight')
  const targetArray = Array.prototype.slice.call(target)
  const options = {
    root: null,
    rootMargin: '0px 200px',
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
        target.classList.add('is-active')
      } else {
        target.classList.remove('is-active')
      }
    })
  }
}


const scrollDown = ref()

const setSDObserver = () => {
  const target = document.querySelectorAll('.targetSD')
  const targetArray = Array.prototype.slice.call(target)
  const options = {
    root: null,
    rootMargin: '0px 300px',
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
        scrollDown.value.classList.remove('remove')
      } else {
        scrollDown.value.classList.add('remove')
      }
    })
  }
}

const homeFooter = ref()

const setHFObserver = () => {
  const target = document.querySelectorAll('.targetHF')
  const targetArray = Array.prototype.slice.call(target)
  const options = {
    root: null,
    rootMargin: '0px 300px',
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
        homeFooter.value.classList.remove('removeFooter')
      } else {
        homeFooter.value.classList.add('removeFooter')
      }
    })
  }
}

const yellowReverse = ref()
const redReverse = ref()
const orengeReverse = ref()
const blueReverse = ref()
const greenReverse = ref()
const yellow = ref()
const red = ref()
const orenge = ref()
const blue = ref()
const green = ref()

const setLineTopObserver = () => {
  const target = document.querySelectorAll('.targetTop')
  const targetArray = Array.prototype.slice.call(target)
  const options = {
    root: null,
    rootMargin: '0px 0px',
    threshold: [0, 1]
  };

  const observer = new IntersectionObserver(callback, options)
  targetArray.forEach(function (tgt) {
    observer.observe(tgt)
  })

  function callback(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        yellow.value.classList.add('h40px')
        red.value.classList.add('h120px')
        orenge.value.classList.add('h80px')
        blue.value.classList.add('h180px')
        green.value.classList.add('h220px')
        yellowReverse.value.classList.add('h40px')
        redReverse.value.classList.add('h120px')
        orengeReverse.value.classList.add('h80px')
        blueReverse.value.classList.add('h180px')
        greenReverse.value.classList.add('h220px')
      } else {
        yellow.value.classList.remove('h40px')
        red.value.classList.remove('h120px')
        orenge.value.classList.remove('h80px')
        blue.value.classList.remove('h180px')
        green.value.classList.remove('h220px')
        yellowReverse.value.classList.remove('h40px')
        redReverse.value.classList.remove('h120px')
        orengeReverse.value.classList.remove('h80px')
        blueReverse.value.classList.remove('h180px')
        greenReverse.value.classList.remove('h220px')
      }
    })
  }
}

const setLineWDObserver = () => {
  const target = document.querySelectorAll('.targetWD')
  const targetArray = Array.prototype.slice.call(target)
  const options = {
    root: null,
    rootMargin: '0px 0px',
    threshold: [0, 1]
  };

  const observer = new IntersectionObserver(callback, options)
  targetArray.forEach(function (tgt) {
    observer.observe(tgt)
  })

  function callback(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        yellow.value.classList.add('h80px')
        red.value.classList.add('h220px')
        orenge.value.classList.add('h180px')
        blue.value.classList.add('h120px')
        green.value.classList.add('h40px')
        yellowReverse.value.classList.add('h80px')
        redReverse.value.classList.add('h220px')
        orengeReverse.value.classList.add('h180px')
        blueReverse.value.classList.add('h120px')
        greenReverse.value.classList.add('h40px')
      } else {
        yellow.value.classList.remove('h80px')
        red.value.classList.remove('h220px')
        orenge.value.classList.remove('h180px')
        blue.value.classList.remove('h120px')
        green.value.classList.remove('h40px')
        yellowReverse.value.classList.remove('h80px')
        redReverse.value.classList.remove('h220px')
        orengeReverse.value.classList.remove('h180px')
        blueReverse.value.classList.remove('h120px')
        greenReverse.value.classList.remove('h40px')
      }
    })
  }
}

const setLineEOObserver = () => {
  const target = document.querySelectorAll('.targetEO')
  const targetArray = Array.prototype.slice.call(target)
  const options = {
    root: null,
    rootMargin: '0px 0px',
    threshold: [0, 1]
  };

  const observer = new IntersectionObserver(callback, options)
  targetArray.forEach(function (tgt) {
    observer.observe(tgt)
  })

  function callback(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        yellow.value.classList.add('h40px')
        red.value.classList.add('h120px')
        orenge.value.classList.add('h80px')
        blue.value.classList.add('h220px')
        green.value.classList.add('h180px')
        yellowReverse.value.classList.add('h40px')
        redReverse.value.classList.add('h120px')
        orengeReverse.value.classList.add('h80px')
        blueReverse.value.classList.add('h220px')
        greenReverse.value.classList.add('h180px')
      } else {
        yellow.value.classList.remove('h40px')
        red.value.classList.remove('h120px')
        orenge.value.classList.remove('h80px')
        blue.value.classList.remove('h220px')
        green.value.classList.remove('h180px')
        yellowReverse.value.classList.remove('h40px')
        redReverse.value.classList.remove('h120px')
        orengeReverse.value.classList.remove('h80px')
        blueReverse.value.classList.remove('h220px')
        greenReverse.value.classList.remove('h180px')
      }
    })
  }
}

const setLinePDObserver = () => {
  const target = document.querySelectorAll('.targetPD')
  const targetArray = Array.prototype.slice.call(target)
  const options = {
    root: null,
    rootMargin: '0px 0px',
    threshold: [0, 1]
  };

  const observer = new IntersectionObserver(callback, options)
  targetArray.forEach(function (tgt) {
    observer.observe(tgt)
  })

  function callback(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        yellow.value.classList.add('h220px')
        red.value.classList.add('h80px')
        orenge.value.classList.add('h40px')
        blue.value.classList.add('h180px')
        green.value.classList.add('h120px')
        yellowReverse.value.classList.add('h220px')
        redReverse.value.classList.add('h80px')
        orengeReverse.value.classList.add('h40px')
        blueReverse.value.classList.add('h180px')
        greenReverse.value.classList.add('h120px')
      } else {
        yellow.value.classList.remove('h220px')
        red.value.classList.remove('h80px')
        orenge.value.classList.remove('h40px')
        blue.value.classList.remove('h180px')
        green.value.classList.remove('h120px')
        yellowReverse.value.classList.remove('h220px')
        redReverse.value.classList.remove('h80px')
        orengeReverse.value.classList.remove('h40px')
        blueReverse.value.classList.remove('h180px')
        greenReverse.value.classList.remove('h120px')
      }
    })
  }
}

const setLineAbObserver = () => {
  const target = document.querySelectorAll('.targetAb')
  const targetArray = Array.prototype.slice.call(target)
  const options = {
    root: null,
    rootMargin: '0px 0px',
    threshold: [0, 1]
  };

  const observer = new IntersectionObserver(callback, options)
  targetArray.forEach(function (tgt) {
    observer.observe(tgt)
  })

  function callback(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        yellow.value.classList.add('h120px')
        red.value.classList.add('h40px')
        orenge.value.classList.add('h220px')
        blue.value.classList.add('h80px')
        green.value.classList.add('h180px')
        yellowReverse.value.classList.add('h120px')
        redReverse.value.classList.add('h40px')
        orengeReverse.value.classList.add('h220px')
        blueReverse.value.classList.add('h80px')
        greenReverse.value.classList.add('h180px')
      } else {
        yellow.value.classList.remove('h120px')
        red.value.classList.remove('h40px')
        orenge.value.classList.remove('h220px')
        blue.value.classList.remove('h80px')
        green.value.classList.remove('h180px')
        yellowReverse.value.classList.remove('h120px')
        redReverse.value.classList.remove('h40px')
        orengeReverse.value.classList.remove('h220px')
        blueReverse.value.classList.remove('h80px')
        greenReverse.value.classList.remove('h180px')
      }
    })
  }
}

const setLineCoObserver = () => {
  const target = document.querySelectorAll('.targetCo')
  const targetArray = Array.prototype.slice.call(target)
  const options = {
    root: null,
    rootMargin: '0px 0px',
    threshold: [0, 1]
  };

  const observer = new IntersectionObserver(callback, options)
  targetArray.forEach(function (tgt) {
    observer.observe(tgt)
  })

  function callback(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        yellow.value.classList.add('h40px')
        red.value.classList.add('h120px')
        orenge.value.classList.add('h80px')
        blue.value.classList.add('h180px')
        green.value.classList.add('h220px')
        yellowReverse.value.classList.add('h40px')
        redReverse.value.classList.add('h120px')
        orengeReverse.value.classList.add('h80px')
        blueReverse.value.classList.add('h180px')
        greenReverse.value.classList.add('h220px')
      } else {
        yellow.value.classList.remove('h40px')
        red.value.classList.remove('h120px')
        orenge.value.classList.remove('h80px')
        blue.value.classList.remove('h180px')
        green.value.classList.remove('h220px')
        yellowReverse.value.classList.remove('h40px')
        redReverse.value.classList.remove('h120px')
        orengeReverse.value.classList.remove('h80px')
        blueReverse.value.classList.remove('h180px')
        greenReverse.value.classList.remove('h220px')
      }
    })
  }
}

onMounted(() => {

  scrollToTop()
  SectionScroll()
  setSwipe('.carousel')
  setSDObserver()
  setHFObserver()
  setLineTopObserver()
  setLineWDObserver()
  setLineEOObserver()
  setLinePDObserver()
  setLineAbObserver()
  setLineCoObserver()
  setElemLeftObserver()
  setElemRightObserver()
})

</script>

<template>
  <main>
    <div class="carousel">
      <div class="wrapper" ref="wrapper">
        <section>
          <div class="section structure">
            <div class="titleTop targetTop targetSD targetElemFromLeft">
              <div class="subTitle">
                <h1 class="subTitle__text"><span class="blackSquare">3 TYPES OF</span></h1>
                <h1 class="subTitle__text"><span class="blackSquare">MY WORK STYLE</span></h1>
              </div>
              <div>
                <h1 class="mainTitle__text">KEITA</h1>
                <h1 class="mainTitle__text">WATANABE</h1>
              </div>
            </div>
            <div class="mainVisual visualPositionShort">
              <div class="squarePortrait  targetElemFromRight">
                <ul>
                  <li><img class="WebDesigner" src="../assets/img/KeityWebDesinger.png" alt=""></li>
                  <li><img class="Organizer" src="../assets/img/KeityOrganizer.png" alt=""></li>
                  <li><img class="Director" src="../assets/img/KeityDirector.png" alt=""></li>
                </ul>
              </div>
              <div class="rearSquareTop  targetElemFromRight"></div>
            </div>
          </div>
        </section>
        <section>
          <div class="section structure">
            <div class="titleWorks targetWD">
              <div class="subTitle targetElemFromLeft">
                <h1 class="subTitle__text"><span class="blackSquare">WORK TYPE 01</span></h1>
              </div>
              <div class="targetElemFromLeft">
                <h1 class="mainTitle__text">Web</h1>
                <h1 class="mainTitle__text">Designer</h1>
              </div>
              <p class="message targetElemFromLeft">Work that require skill and sence.</p>
            </div>
            <div class="mainVisual visualPositionShort">
              <div class="squarePortrait targetElemFromRight">
                <ul>
                  <li><img class="WebDesigner__main" src="../assets/img/KeityWebDesinger.png" alt=""></li>
                </ul>
              </div>
              <div class="rearSquareRed targetElemFromRight"></div>
            </div>
            <div class="btn-position">
              <RouterLink to="/webdesigner" class="btn slideRed targetElemFromLeft">VIEW MORE</RouterLink>
            </div>
          </div>
        </section>
        <section>
          <div class="section structure">
            <div class="titleWorks targetEO">
              <div class="subTitle targetElemFromLeft">
                <h1 class="subTitle__text"><span class="blackSquare">WORK TYPE 02</span></h1>
              </div>
              <div class="targetElemFromLeft">
                <h1 class="mainTitle__text">Event</h1>
                <h1 class="mainTitle__text">Organizer</h1>
              </div>
              <p class="message targetElemFromLeft">Work that connects people.</p>
            </div>
            <div class="mainVisual visualPositionShort">
              <div class="squarePortrait targetElemFromRight">
                <ul>
                  <li><img class="Organizer__main" src="../assets/img/KeityOrganizer.png" alt=""></li>
                </ul>

              </div>
              <div class="rearSquareBlue targetElemFromRight"></div>
            </div>
            <div class="btn-position">
              <RouterLink to="/Organizer" class="btn slideBlue targetElemFromLeft">VIEW MORE</RouterLink>
            </div>
          </div>
        </section>
        <section>
          <div class="section structure">
            <div class="titleWorks targetPD">
              <div class="subTitle targetElemFromLeft">
                <h1 class="subTitle__text"><span class="blackSquare">WORK TYPE 03</span></h1>
              </div>
              <div class="targetElemFromLeft">
                <h1 class="mainTitle__text">Producer &</h1>
                <h1 class="mainTitle__text">Director</h1>
              </div>
              <p class="message targetElemFromLeft">Work that produces creative products.</p>
            </div>
            <div class="mainVisual visualPositionShort">
              <div class="squarePortrait targetElemFromRight">
                <ul>
                  <li><img class="Director__main" src="../assets/img/KeityDirector.png" alt=""></li>
                </ul>

              </div>
              <div class="rearSquareYellow targetElemFromRight"></div>
            </div>
            <div class="btn-position">
              <RouterLink to="/producer-director" class="btn slideYellow targetElemFromLeft">VIEW MORE</RouterLink>
            </div>
          </div>
        </section>
        <section>
          <div class="section structure">
            <div class="titleAbout targetAb">
              <div class="subTitle targetElemFromLeft">
                <h1 class="subTitle__text"><span class="blackSquare">Let me introduce</span></h1>
                <h1 class="subTitle__text"><span class="blackSquare">myself...</span></h1>
              </div>
              <div class="targetElemFromLeft">
                <h1 class="mainTitle__text">About Me</h1>
              </div>
              <p class="message targetElemFromLeft">Who is Keita Watanabe.</p>
            </div>
            <div class="mainVisual visualPositionLong">
              <div class="squareBox targetElemFromRight">
                <ul>
                  <li><img class="About" src="../assets/img/About.png" alt=""></li>
                </ul>

              </div>
              <div class="rearSquareOrenge targetElemFromRight"></div>
            </div>
            <div class="btn-position">
              <RouterLink to="/about" class="btn slideOrenge targetElemFromLeft">VIEW MORE</RouterLink>
            </div>
          </div>
        </section>
        <section>
          <div class="section structure">
            <div class="titleContact targetCo targetHF">
              <div class="targetElemFromLeft">
                <h1 class="mainTitle__text">Contact</h1>
              </div>
            </div>
            <form method="post" action="https://hyperform.jp/api/Ryzf6ZEI" target="_blank" enctype="multipart/form-data"
              class="targetElemFromLeft">
              <h3>お名前</h3>
              <input type="text" name="name" placeholder="名前太郎">
              <h3>メールアドレス</h3>
              <input type="text" name="email" placeholder="メールアドレス">
              <h3>お問い合わせ内容</h3>
              <textarea name="message"></textarea>
              <button type="submit">送信</button>
            </form>
            <div class="mainVisual visualPositionLong contactDisplay">
              <div class="squareBox targetElemFromRight">
                <ul>
                  <li><img class="Contact" src="../assets/img/contact.png" alt=""></li>
                </ul>
              </div>
              <div class="rearSquareGreen targetElemFromRight"></div>
            </div>
            <div class="contactAddress targetElemFromLeft">
              <h3>keitabox128@gmail.com</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
    
    <div class="scrollDown" ref="scrollDown">scrolldown</div>
    <div class="colorBar">
      <div class="colorBarTop">
        <li><span class="yellowReverse" ref="yellowReverse"></span></li>
        <li><span class="redReverse" ref="redReverse"></span></li>
        <li><span class="orengeReverse" ref="orengeReverse"></span></li>
        <li><span class="blueReverse" ref="blueReverse"></span></li>
        <li><span class="greenReverse" ref="greenReverse"></span></li>
      </div>
      <div class="colorBarBottom">
        <ul>
          <li><span class="yellow" ref="yellow"></span></li>
          <li><span class="red" ref="red"></span></li>
          <li><span class="orenge" ref="orenge"></span></li>
          <li><span class="blue" ref="blue"></span></li>
          <li><span class="green" ref="green"></span></li>
        </ul>
      </div>
    </div>
  </main>
    <footer>
      <div class="homeFooter" ref="homeFooter">
        <div class="homeFooterContent">
          <RouterLink to="/privacy" class="homeFooterPrivacy" @click="scrollToTop()">Privacy Policy</RouterLink>
          <small class="homeFooterCopyright">(C)KEITA WATANABE 2022</small>
        </div>
        <div class="scrollToTop">
          <div class="returnToTop" @click="scrollToTop()">Top Page</div>
        </div>
      </div>
    </footer>
</template>

<style scoped>
/* 共通パーツ */
main {
  background-color: #ffffff;
}
.wrapper {
  scroll-snap-type: y mandatory;
}

.section {
  scroll-snap-align: start;
  width: 100%;
  height: 100vh;
}

.structure {
  position: relative;
}

.blackSquare {
  padding: 0 10px 2px 10px;
  font-weight: 100;
  color: #FFFFFF;
  background: #000000;
}

.subTitle {
  margin: 20px 0;
}

.subTitle__text {
  font-size: 2.0rem;
  line-height: 3.0rem;
}

.mainTitle__text {
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 3.2rem;
  color: #000000;
}

.message {
  display: none;
}

.targetElemFromLeft {
  transform: translate3d(-300px, 0, 0);
}

.targetElemFromRight {
  opacity: 0;
  transform: translate3d(100px, 0, 0);
}

.is-active {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: .8s;
}

.mainVisual {
  position: absolute;
}

.visualPositionShort {
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
}

.squarePortrait {
  position: relative;
  width: 300px;
  height: 400px;
  background: #ffffff;
  border: solid 5px #5a5a5a;
  z-index: 3;
}

.btn-position {
  position: absolute;
  top: 535px;
  left: 8%;
}

.btn {
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

/* About Contact 共通パーツ */
.visualPositionLong {
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}

.squareBox {
  position: relative;
  width: 300px;
  height: 300px;
  background: #ffffff;
  border: solid 5px #5a5a5a;
  z-index: 3;
}

.titleAbout {
  position: absolute;
  top: 325px;
  left: 8%;
  z-index: 5;
}

.titleContact {
  position: absolute;
  top: 450px;
  left: 8%;
  z-index: 5;
}


/* トップヴィジュアル */
.titleTop {
  position: absolute;
  top: 350px;
  left: 8%;
  z-index: 5;
}

.WebDesigner {
  position: absolute;
  width: 115px;
  top: 15px;
  left: 145px;
  z-index: 4;
}

.Organizer {
  position: absolute;
  width: 140px;
  top: 70px;
  left: 0px;
  z-index: 4;
}

.Director {
  position: absolute;
  width: 140px;
  top: 185px;
  left: 85px;
  z-index: 4;
}

.rearSquareTop {
  position: absolute;
  width: 300px;
  height: 400px;
  background: #efefef;
  top: 20px;
  left: 20px;
  z-index: 0;
}

/* title property */
.titleWorks {
  position: absolute;
  top: 325px;
  left: 8%;
  z-index: 5;
}

/* WebDesigner */
.WebDesigner__main {
  position: absolute;
  width: 275px;
  top: 10px;
  left: 5px;
  z-index: 4;
}

.rearSquareRed {
  position: absolute;
  width: 300px;
  height: 400px;
  background: #ff3300;
  top: 20px;
  left: 20px;
  z-index: 0;
}

.btn.slideRed {
  overflow: hidden;
  position: relative;
  z-index: 3;
}

.btn.slideRed::after {
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

.btn.slideRed:hover::after {
  transform-origin: left top;
  transform: skewX(-30deg) scale(1, 1);
}

/* Orgnaizer */
.Organizer__main {
  position: absolute;
  width: 275px;
  top: 10px;
  left: 10px;
  z-index: 4;
}

.rearSquareBlue {
  position: absolute;
  width: 300px;
  height: 400px;
  background: #00ccff;
  top: 20px;
  left: 20px;
  z-index: 0;
}

.btn.slideBlue {
  overflow: hidden;
  position: relative;
  z-index: 3;
}

.btn.slideBlue::after {
  background: #00ccff;
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

.btn.slideBlue:hover::after {
  transform-origin: left top;
  transform: skewX(-30deg) scale(1, 1);
}

/* Director/Producer */
.Director__main {
  position: absolute;
  width: 275px;
  top: 0;
  left: 10px;
  z-index: 4;
}

.rearSquareYellow {
  position: absolute;
  width: 300px;
  height: 400px;
  background: #efd700;
  top: 20px;
  left: 20px;
  z-index: 0;
}

.btn.slideYellow {
  overflow: hidden;
  position: relative;
  z-index: 3;
}

.btn.slideYellow::after {
  background: #efd700;
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

.btn.slideYellow:hover::after {
  transform-origin: left top;
  transform: skewX(-30deg) scale(1, 1);
}

/* About Me */
.About {
  position: absolute;
  width: 300px;
  top: -10px;
  left: -5px;
  z-index: 4;
}

.rearSquareOrenge {
  position: absolute;
  width: 300px;
  height: 300px;
  background: #ff9900;
  top: 20px;
  left: 20px;
  z-index: 0;
}

.btn.slideOrenge {
  overflow: hidden;
  position: relative;
  z-index: 3;
}

.btn.slideOrenge::after {
  background: #ff9900;
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

.btn.slideOrenge:hover::after {
  transform-origin: left top;
  transform: skewX(-30deg) scale(1, 1);
}

/* Contact */
.Contact {
  position: absolute;
  width: 300px;
  top: -10px;
  left: -5px;
}

.rearSquareGreen {
  position: absolute;
  width: 300px;
  height: 300px;
  background: #009143;
  top: 20px;
  left: 20px;
  z-index: 0;
}

.contactAddress {
  position: absolute;
  top: 510px;
  left: 8%;
  z-index: 5;
}
.contactAddress h3 {
  color: #000000;
  font-size: 1.2rem;
  font-weight: 800;
}

form {
  display: none;
  position: absolute;
  top: 170px;
  left: 8%;
  width: 320px;
  z-index: 1;
}

form h3 {
  text-align: left;
  color: #000000;
  font-size: 1.2rem;
  font-weight: 900;
  padding: 5px 0;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  border-radius: 4px;
  border: none;
  background-color: #d9d9d9;
  padding: 12px 8px;
  display: block;
  margin-bottom: 16px;
  color: #5a5a5a;
  font-size: 1rem;
  font-weight: 100;
}

textarea {
  width: 100%;
  height: 12rem;
  border-radius: 4px;
  border: none;
  background-color: #d9d9d9;
  padding: 12px 8px;
  display: block;
  color: #5a5a5a;
  margin-bottom: 16px;
  font-size: 1rem;
  font-weight: 100;
}

button {
  background: #000000;
  letter-spacing: 0.2em;
  width: 50%;
  height: 40px;
  padding: 6px;
  color: #ffffff;
  border-radius: 4px;
  display: inline-block;
  margin-left: auto;
  margin-top: 16px;
  cursor: pointer;
  border: none;
  transition: 0.5s;
  font-size: 1.2rem;
  font-weight: 900;
}


/* footer */
.homeFooterPrivacy {
  position: fixed;
  bottom: 60px;
  left: 8%;
  text-align: center;
  font-weight: 100;
  font-size: 1.2rem;
  display: inline-block;
  text-decoration: underline;
  color: #000000;
  opacity: 1;
  transform: translateY(0);
  transition: 1s;
}

.homeFooterCopyright {
  position: fixed;
  left: 8%;
  bottom: 30px;
  font-weight: 100;
  font-size: 1.2rem;
  color: #000000;
  display: inline-block;
  opacity: 1;
  transform: translateY(0);
  transition: 1s;
}

.returnToTop {
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 80px;
  height: 80px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 100;
  background-color: #000000;
  color: #ffffff;
  z-index: 3;
  opacity: 1;
  transform: translateY(0);
  transition: 0.2s;
}

.returnToTop::before {
  content: "";
  display: block;
  width: 40px;
  height: 40px;
  background-image: url(../assets/img/arrowIconTop.svg);
  background-size: contain;
  background-repeat: no-repeat;
  top: 10px;
  left: 20px;
  margin-bottom: 10px;
}

.scrollDown {
  font-size: 1.2rem;
  color: #000000;
  position: fixed;
  left: 10%;
  bottom: 20px;
  opacity: 1;
  transform: translateY(0);
  transition: 1s;
}

.scrollDown::after {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  background-image: url(../assets/img/arrowIcon.svg);
  background-size: contain;
  background-repeat: no-repeat;
  top: 10px;
  left: -50%;
}

.remove {
  opacity: 1;
  transform: translateY(180%);
  transition: 1s;
}

.removeFooter {
  opacity: 1;
  transform: translateY(180%);
  transition: 1s;
}

.colorBarTop {
  display: none;
}

.colorBarBottom {
  display: block;
}

.yellow {
  position: fixed;
  width: 3px;
  background: #efd700;
  bottom: 0;
  right: 200px;
  z-index: 0;
}

.red {
  position: fixed;
  width: 3px;
  background: #ff3300;
  bottom: 0;
  right: 160px;
  z-index: 0;
}

.orenge {
  position: fixed;
  width: 3px;
  background: #ff9900;
  bottom: 0;
  right: 120px;
  z-index: 0;
}

.blue {
  position: fixed;
  width: 3px;
  background: #00ccff;
  bottom: 0;
  right: 80px;
  z-index: 0;
}

.green {
  position: fixed;
  width: 3px;
  background: #009143;
  bottom: 0;
  right: 40px;
  z-index: 0;
}

.h40px {
  height: 40px;
  transition: .5s;
}

.h80px {
  height: 80px;
  transition: .5s;
}

.h120px {
  height: 120px;
  transition: .5s;
}

.h180px {
  height: 180px;
  transition: .5s;
}

.h220px {
  height: 220px;
  transition: .5s;
}

/** タブレット */
@media (min-width: 550px) {
  .visualPositionShort {
    top: 200px;
    right: 150px;
    transform: none;
  }

  .visualPositionLong {
    top: 200px;
    right: 150px;
    transform: none;
  }

  .squarePortrait {
    width: 350px;
    height: 350px;
  }

  .squareBox {
    width: 350px;
    height: 350px;
  }

  .btn-position {
    top: 500px;
  }

  /* Top */
  .titleTop {
    top: 250px;
  }

  .WebDesigner {
    width: 120px;
    top: 90px;
    left: -5px;
  }

  .Organizer {
    width: 150px;
    top: 60px;
    left: 95px;
  }

  .Director {
    width: 150px;
    top: 60px;
    left: 200px;
  }

  .rearSquareTop {
    width: 350px;
    height: 350px;
  }

  /* 3 Works */
  .titleWorks {
    top: 250px;
  }

  .WebDesigner__main {
    width: 250px;
    top: -5px;
    left: 40px;
  }

  .Organizer__main {
    width: 250px;
    top: -5px;
    left: 40px;
  }

  .Director__main {
    width: 250px;
    top: -5px;
    left: 40px;
  }

  .rearSquareRed {
    width: 350px;
    height: 350px;
  }

  .rearSquareBlue {
    width: 350px;
    height: 350px;
  }

  .rearSquareYellow {
    width: 350px;
    height: 350px;
  }

  /* About */
  .titleAbout {
    top: 250px;
  }

  .About {
    width: 350px;
  }

  .rearSquareOrenge {
    width: 350px;
    height: 350px;
  }

  /**Contact */
  .titleContact {
    top: 400px;
  }
  .rearSquareGreen {
  width: 350px;
  height: 350px;
}

  .Contact {
  width: 350px;
}
  .contactAddress {
  top: 470px;
}
.contactAddress h3 {
  font-size: 1.8rem;
}
}

/** PC */
@media (min-width: 960px) {
  .section {
    margin: 0 auto;
    max-width: 1200px;
  }

  .subTitle__text {
    font-size: 3.2rem;
    line-height: 4.5rem;
  }

  .mainTitle__text {
    font-size: 4.8rem;
    font-weight: 800;
    line-height: 4.8rem;
    color: #000000;
  }

  .message {
    display: block;
    margin: 40px 0;
    font-size: 1.6rem;
    font-weight: 100;
    line-height: 1.5rem;
    color: #000000;
  }

  .visualPositionShort {
    top: 150px;
    right: 80%;
    transform: none;
  }

  .visualPositionLong {
    top: 150px;
    right: 80%;
    transform: none;
  }

  .squarePortrait {
    width: 550px;
    height: 550px;
  }

  .squareBox {
    width: 550px;
    height: 550px;
  }

  .btn-position {
    top: 630px;
  }

  .btn {
    padding: 15px 30px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 100;
    text-align: center;
    transition: .8s;
  }

  /* Top */
  .titleTop {
    top: 250px;
  }

  .WebDesigner {
    width: 240px;
    top: 110px;
    left: -30px;
  }

  .Organizer {
    width: 270px;
    top: 80px;
    left: 135px;
  }

  .Director {
    width: 270px;
    top: 80px;
    left: 300px;
  }

  .rearSquareTop {
    width: 550px;
    height: 550px;
  }

  /* 3 Works */
  .titleWorks {
    top: 250px;
  }

  .WebDesigner__main {
    width: 380px;
    top: 10px;
    left: 70px;
  }

  .Organizer__main {
    width: 400px;
    top: -8px;
    left: 70px;
  }

  .Director__main {
    width: 390px;
    top: 0px;
    left: 70px;
  }

  .rearSquareRed {
    width: 550px;
    height: 550px;
  }

  .rearSquareBlue {
    width: 550px;
    height: 550px;
  }

  .rearSquareYellow {
    width: 550px;
    height: 550px;
  }

  /* About */
  .titleAbout {
    top: 250px;
  }

  .About {
    width: 550px;
  }

  .rearSquareOrenge {
    width: 550px;
    height: 550px;
  }

  /**Contact */
  form {
    display: block;
    width: 40%;
  }

  .titleContact {
  top: 50px;
}


  .Contact {
    width: 550px;
  }

  .rearSquareGreen {
    width: 550px;
    height: 550px;
  }
  .contactAddress {
  display: none;
}

  /**footer */
  .scrollDown {
    font-size: 1.8rem;
    font-weight: 100;
    bottom: 30px;
  }

  .scrollDown::after {
    width: 15px;
    height: 15px;
    top: 20px;
    left: -50%;
  }

  .colorBarTop {
    display: block;
  }

  .yellowReverse {
    position: fixed;
    width: 5px;
    background: #efd700;
    top: 0;
    left: 410px;
    z-index: 0;
  }

  .redReverse {
    position: fixed;
    width: 5px;
    background: #ff3300;
    top: 0;
    left: 350px;
    z-index: 0;
  }

  .orengeReverse {
    position: fixed;
    width: 5px;
    background: #ff9900;
    top: 0;
    left: 290px;
    z-index: 0;
  }

  .blueReverse {
    position: fixed;
    width: 5px;
    background: #00ccff;
    top: 0;
    left: 230px;
    z-index: 0;
  }

  .greenReverse {
    position: fixed;
    width: 5px;
    background: #009143;
    top: 0;
    left: 170px;
    z-index: 0;
  }

  .yellow {
    width: 5px;
    left: 350px;
  }

  .red {
    width: 5px;
    left: 410px;
  }

  .orenge {
    width: 5px;
    left: 470px;
  }

  .blue {
    width: 5px;
    left: 530px;
  }

  .green {
    width: 5px;
    left: 590px;
  }
}

/** PC(1440px超えた時) */
@media (min-width: 1440px) {

  /**footer */
  .scrollDown {
    left: 15%;
  }

  .yellowReverse {
    left: 580px;
  }

  .redReverse {
    left: 520px;
  }

  .orengeReverse {
    left: 460px;
  }

  .blueReverse {
    left: 400px;
  }

  .greenReverse {
    left: 340px;
  }

  .yellow {
    left: 520px;
  }

  .red {
    left: 580px;
  }

  .orenge {
    left: 640px;
  }

  .blue {
    left: 700px;
  }

  .green {
    left: 760px;
  }
}
</style>
