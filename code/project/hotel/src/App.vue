<template>
  <div id="app">
    <div class="app_top">
      <div class="app_customer">
        <span @click="loginClick">로그인</span>
        |
        <span @click="signUpOpen">회원가입</span>
      </div>

      <img src="@/assets/HOTEL.png" @click="logoClick" />

      <div class="app_menu">
        <button @click="logoClick">Home</button>
        <router-link to="/location">오시는 길</router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    logoClick() {
      this.$router.push({ name: 'Home' })
    },
    loginClick() {
      alert('로그인 클릭')
    },
    signUpOpen() {
      alert('회원가입 클릭')
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Spoqa Han Sans Regular';
}

.app_top {
  width: 1180px;
  height: 160px;
  margin: 0px auto;
  padding-top: 18px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  .app_customer {
    position: absolute;
    right: 0px;
    font-size: 14px;
    color: #666666;
    span {
      cursor: pointer;
    }
  }

  img {
    cursor: pointer;
  }

  .app_menu {
    padding-top: 28px;
    button {
      margin-right: 90px;
      background: none;
      font-size: 20px;
      font-weight: bold;
      color: #686868;
    }
    a {
      text-decoration: none;
      font-size: 20px;
      font-weight: bold;
      color: #686868;
    }
  }
}

.el-select-dropdown__item {
  height: 85px !important;
  line-height: 85px !important;
  border-bottom: 1px solid #d3d3d3;
  &:nth-last-child(1) {
    border-bottom: 0px;
  }
}
.home_room_option {
  height: 85px;
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
  span {
    font-weight: bold;
  }
}
</style>
