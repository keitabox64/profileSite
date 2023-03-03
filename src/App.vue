<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const navMenu = ref()
const navToggleIcon = ref()

const setToggle = () => {
  const navToggle = document.querySelector('.headerNavToggle')
  const MenuToggleHome = document.querySelector('.toggle1')
  const MenuToggleAbout = document.querySelector('.toggle2')
  const MenuToggleWebdesigner = document.querySelector('.toggle3')
  const MenuToggleOrganizer = document.querySelector('.toggle4')
  const MenuToggleDirector = document.querySelector('.toggle5')

  navToggle.addEventListener('click', () => {
    navMenu.value.classList.toggle('activeMenu')
    navToggleIcon.value.classList.toggle('activeMenu')
  })
  MenuToggleHome.addEventListener('click', () => {
    console.log("remove")
    navMenu.value.classList.remove('activeMenu')
    navToggleIcon.value.classList.remove('activeMenu')
  })
  MenuToggleAbout.addEventListener('click', () => {
    console.log("remove")
    navMenu.value.classList.remove('activeMenu')
    navToggleIcon.value.classList.remove('activeMenu')
  })
  MenuToggleWebdesigner.addEventListener('click', () => {
    console.log("remove")
    navMenu.value.classList.remove('activeMenu')
    navToggleIcon.value.classList.remove('activeMenu')
  })
  MenuToggleOrganizer.addEventListener('click', () => {
    console.log("remove")
    navMenu.value.classList.remove('activeMenu')
    navToggleIcon.value.classList.remove('activeMenu')
  })
  MenuToggleDirector.addEventListener('click', () => {
    console.log("remove")
    navMenu.value.classList.remove('activeMenu')
    navToggleIcon.value.classList.remove('activeMenu')
  })

}

onMounted(() => {
  setToggle()
})

</script>

<template>
  <header class="headerWrapper">
    <div class="headerContent">
      <RouterLink to="/" class="headerLogo">Keita Watanabe</RouterLink>
      <div class="headerNavToggle" ref="navToggleIcon"></div>
      <nav class="globalNavMenu" ref="navMenu">
        <ul class="globalNavMenuList">
          <li>
            <RouterLink to="/" class="globalNavMenuListContent toggle1">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/webengineer" class="globalNavMenuListContent toggle3">WebEngineer</RouterLink>
          </li>
          <li>
            <RouterLink to="/Organizer" class="globalNavMenuListContent toggle4">Organizer</RouterLink>
          </li>
          <li>
            <RouterLink to="/producer-director" class="globalNavMenuListContent toggle5">Producer & Director</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="globalNavMenuListContent toggle2">About Me</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="appWrapper">
    <RouterView />
  </div>
</template>

<style scoped>

.headerWrapper {
  background-color: #ffffff;
}
.appWrapper {
  background-color: #ffffff;
}
.headerContent {
  position: fixed;
  height: 50px;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 6;
}

.headerLogo {
  margin-left: 20px;
  font-size: 1rem;
  font-weight: 800;
  color: #000000;
}

.headerNavToggle {
  position: relative;
  margin-right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 7;
}

.headerNavToggle::before {
  content: "";
  width: 100%;
  height: 3px;
  top: 8px;
  right: 0;
  background-color: #000;
  position: absolute;
  transition: transform 0.5s, opacity 0.5s;
  z-index: 8;
}

.headerNavToggle::after {
  content: "";
  width: 100%;
  height: 3px;
  bottom: 8px;
  right: 0;
  background-color: #000;
  position: absolute;
  transition: transform 0.5s, opacity 0.5s;
  z-index: 8;
}
.globalNavMenu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  background-color: #ffffff;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s, visibility 0.5s;
}
.globalNavMenuList {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 32px auto 0;
  list-style: none;
}
.globalNavMenuList li {
  margin-top: 32px;
}
.globalNavMenuListContent {
  font-size: 1.8rem;
  font-weight: 800;
  color: #000000;
}
.activeMenu {
  opacity: 1;
  visibility: visible;
}
.headerNavToggle.activeMenu::before {
  transform: translateY(6px) rotate(-45deg);
}
.headerNavToggle.activeMenu::after {
  transform: translateY(-5px) rotate(45deg);
}

/**タブレット */
@media (min-width: 550px) {
  .globalNavMenuList li {
  margin-top: 40px;
}
.globalNavMenuListContent {
  font-size: 3.6rem;
}
}
</style>
