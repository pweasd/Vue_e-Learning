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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuList: ['Home', 'About', 'Skills', 'Project', 'Contact'],
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
    }
  }
</style>
