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

      <img src="@/assets/HOTEL.png" @click="logoClick" />

      <div class="app_menu">
        <button @click="reservationClick">예약확인</button>
        <router-link to="/location">오시는 길</router-link>
      </div>
    </div>

    <router-view />

    <signUp v-if="signUpShow" class="app_dialog signUp_dialog" @close="signUpClose"></signUp>
    <login v-if="loginShow" class="app_dialog login_dialog" @close="loginClose" @signUp="signUpClick"></login>

    <hotelConfirm v-if="hotelConfirmShow" class="app_dialog confirm_dialog" @htelConfirm="htelConfirm" @hotelComfirmClose="hotelComfirmClose"></hotelConfirm>
    <reservationConfirm
      v-if="reservationConfirmShow"
      :reservationInfo="reservationInfo"
      @reservationConfirm="reservationConfirm"
      @reservationConfirmClose="reservationConfirmClose"
    ></reservationConfirm>
  </div>
</template>

<script>
import signUp from './components/signUp'
import login from './components/login'
import hotelConfirm from './components/hotelConfirm'
import reservationConfirm from './components/reservationConfirm'
export default {
  components: {
    signUp,
    login,
    hotelConfirm,
    reservationConfirm,
  },
  data() {
    return {
      signUpShow: false,
      loginShow: false,
      hotelConfirmShow: false,
      reservationConfirmShow: false,

      reservationInfo: null,
    }
  },
  computed: {
    token() {
      return this.$cookie.get('userInfo')
    },
  },
  methods: {
    logoClick() {
      this.$router.push({ name: 'Home' })
    },
    loginClick() {
      this.loginShow = true
    },
    loginClose() {
      this.loginShow = false
    },
    logoutClick() {
      this.$cookie.del('userInfo')
      this.$router.go(0)
    },
    signUpOpen() {
      this.signUpShow = true
    },
    signUpClose() {
      this.signUpShow = false
    },
    signUpClick() {
      this.loginShow = false
      this.signUpShow = true
    },
    reservationClick() {
      this.hotelConfirmShow = true
    },
    htelConfirm() {
      this.reservationInfo = this.$store.state.showReservationRoom
      this.hotelConfirmShow = false
      this.reservationConfirmShow = true
    },
    hotelComfirmClose() {
      this.hotelConfirmShow = false
    },
    reservationConfirm() {
      this.reservationConfirmShow = false
    },
    reservationConfirmClose() {
      this.reservationConfirmShow = false
    },
  },
}
</script>

<style lang="scss">
#app {
  position: relative;
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

.app_dialog {
  position: absolute;
  top: calc(50% - 310px);
}

.signUp_dialog {
  left: calc(50% - 270px);
}

.login_dialog {
  left: calc(50% - 487px);
}

.confirm_dialog {
  left: calc(50% - 487px);
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
