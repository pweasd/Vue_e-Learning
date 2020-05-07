<template>
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
    <button class="menu_icon" :class="open ? 'active' : ''" @click="open ? (open = false) : (open = true)">
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>
    </button>
    <Drawer :menuList="menuList" :open="open" @close="open = false" @move="move"></Drawer>
  </div>
</template>

<script>
import Drawer from './Drawer'

export default {
  components: {
    Drawer,
  },
  data() {
    return {
      menuList: ['Home', 'About', 'Skills', 'Project', 'Contact'],
      open: false,
    }
  },
  methods: {
    move(menu) {
      this.$emit('move', menu)
    },
  },
}
</script>

<style lang="scss" scoped>
@media (min-width: 801px) {
  .home_container {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('../assets/img_bg.png');
    background-repeat: no-repeat;
    background-size: cover;

    .home_nav {
      display: flex;
      justify-content: flex-end;
      box-sizing: border-box;
      padding-top: 30px;
      padding-right: 180px;
      button {
        width: 80px;
        height: 30px;
        background-color: transparent;
        font-size: 18px;
        color: var(--title-color);
        &:hover {
          color: #bbbbbb;
        }
      }
    }

    .home_title {
      position: absolute;
      top: 60%;
      left: 200px;
      color: var(--title-color);

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
      color: var(--title-color);
      font-size: 24px;
      transform: rotate(0.25turn);
    }
  }

  .menu_icon {
    display: none;
  }
}
@media (max-width: 800px) {
  .home_container {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('../assets/img_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .home_nav {
      display: none;
    }

    .home_title {
      position: absolute;
      top: 60%;
      left: 8%;
      color: var(--title-color);

      .text {
        font-size: 24px;
      }

      .text_bold {
        margin-top: 25px;
        font-size: 36px;
        font-weight: 500;
      }
    }

    .author {
      position: absolute;
      left: 80%;
      top: 20%;
      color: var(--title-color);
      font-size: 14px;
      transform: rotate(0.25turn);
    }

    .menu_icon {
      position: fixed;
      left: 86%;
      top: 3%;
      display: block;
      width: 20px;
      height: 20px;
      background-color: transparent;
      z-index: 2;

      .line {
        width: 100%;
        height: 2px;
        background-color: #fff;
        margin-bottom: 8px;
        transition: 0.3s;
        &:last-child {
          margin-bottom: 0px;
        }
      }
    }

    .active {
      .line {
        margin: 0;
      }
      .line1 {
        width: 24px;
        // transform: translateX(-4px) rotate(45deg) translateY(-8px);
        transform: translateX(-5px) rotate(45deg) translateY(0px);
      }
      .line2 {
        width: 24px;
        // transform: translateX(-8px) rotate(-45deg) translateY(14px);
        transform: translateX(-3px) rotate(-45deg) translateY(-3px);
      }
      .line3 {
        opacity: 0;
      }
    }
  }
}
</style>
