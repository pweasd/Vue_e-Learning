<template>
  <div id="app">
    <div class="app_top">
      <div class="app_customer" v-if="token">
        <span @click="logoutClick">로그아웃</span>
      </div>
      <div class="app_customer" v-else>
        <span @click="loginClick">로그인</span>
        |
        <span @click="signUpOpen">회원가입</span>
      </div>

      <img src="@/assets/HOTEL.png" @click="logoClick">

      <div class="app_menu">
        <button>예약 확인</button>
        <router-link to="/location">오시는 길</router-link>
      </div>
    </div>

    <router-view />

    <login class="app_dialog login_dialog" v-if="loginShow" @close="loginClose" @signUp="signUpClick"></login>
    <signUp class="app_dialog signup_dialog" v-if="signUpShow" @close="signUpClose"></signUp>
  </div>
</template>

<script>
  import login from './components/login.vue'
  import signUp from './components/signUp.vue'

  export default {
    components: {
      login,
      signUp,
    },
    data() {
      return {
        loginShow: false,
        signUpShow: false,
      }
    },
    computed: {
      token() {
        return this.$cookie.get('userInfo')
      },
    },
    methods: {
      logoutClick() {
        this.$cookie.del('userInfo')
        this.$router.go(0);
      },
      loginClick() {
        this.loginShow = true
      },
      loginClose() {
        this.loginShow = false
      },
      signUpClick() {
        this.loginShow = false
        this.signUpShow = true
      },
      signUpClose() {
        this.signUpShow = false
      },
      signUpOpen() {
        this.signUpShow = true
      },
      logoClick() {
        this.$router.push({ name: 'Home' })
      }
    }
  }
</script>

<style lang="scss">
#app {
  position: relative;
}

.app_top {
  width: 1180px;
  height: 160px;
  padding-top: 18px;
  margin: 0px auto;
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
      font-size: 20px;
      font-weight: bold;
      text-decoration: none;
      color: #686868;
    }
  }
}

.app_dialog {
  position: absolute;
  top: calc(50% - 310px);
}
.login_dialog {
  left: calc(50% - 487px);
}
.signup_dialog {
  left: calc(50% - 270px);
}

// custom
.el-select-dropdown__item {
  height: 85px !important;
  line-height: 85px !important;
  border-bottom: 1px solid #D3D3D3;
  &:nth-last-child(1) {
    border-bottom: 0px;
  }
}
.home_room_option {
  height: 85px;
  display: flex;
  align-items: center;
  img {
    width: 107px;
    height: 67px;
    margin-right: 10px;
  }
  span {
    font-weight: bold;
  }
}
</style>