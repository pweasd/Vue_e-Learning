<template>
  <div id="app">
    <div class="app_top">
      <img src="@/assets/HOTEL.png" @click="logoClick">

      <div class="app_menu">
        <button>예약 확인</button>
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
      }
    }
  }
</script>

<style lang="scss">
#app {
}

.app_top {
  width: 100%;
  height: 160px;
  padding-top: 18px;
  text-align: center;
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