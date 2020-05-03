<template>
  <div id="app">
    <div class="home_container">
      <div class="home_nav">
        <button v-for="menu in menuList" :key="menu.id" @click="move(menu)">{{ menu }}</button>
      </div>

      <div class="home_title">
        <p class="text">포트폴리오 사이트를</p>
        <p class="text">만들었습니다.</p>
        <p class="text_bold">Developer 홍길동 입니다.</p>
      </div>

      <span class="author">Made by Hong</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      menuList: [ 'Home', 'About', 'Skiils', 'Project', 'Contact' ]
    }
  },
  method: {
    move(menu) {
      switch (menu) {
        case 'Home':
          window.scroll({ top: 0, left: 0, behavior: 'smooth' })
          break;
        case 'About':
          window.scroll({ top: 0, left: 0, behavior: 'smooth' })
          break
        case 'Skiils':
          window.scroll({ top: 0, left: 0, behavior: 'smooth' })
          break
        case 'Project':
          window.scroll({ top: 0, left: 0, behavior: 'smooth' })
          break
        case 'Contact':
          window.scroll({ top: 0, left: 0, behavior: 'smooth' })
          break
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;

  .home_container {
    position: relative;
    width: 100%;
    height: 930px;
    background-image: url("../src/assets/img_bg.png");
    background-repeat: no-repeat;
    background-size: cover;

    .home_nav {
      display: flex;
      position: absolute;
      top: 30px;
      left: 70%;
      button {
        width: 80px;
        height: 30px;
        background-color: transparent;
        font-size: 18px;
        color: #eeeeee;
        &:hover {
          color: #bbbbbb;
        }
      }
    }

    .home_title {
      position: absolute;
      top: 60%;
      left: 200px;
      color: #EEEEEE;

      .text {
        font-size: 32px;
      }

      .text_bold {
        font-size: 70px;
        font-weight: 500;
      }
    }

    .author {
      position: absolute;
      left: 85%;
      top: 40%;
      color: #EEEEEE;
      font-size: 24px;
      transform: rotate(0.25turn);
    }
  }
}
</style>
