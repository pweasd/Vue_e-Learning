<template>
  <div class="hotel_signup">
    <div class="hotel_signup_header">
      <p class="text">호텔 회원가입</p>
      <p class="close" @click="close">X</p>
    </div>

    <div class="email">
      <p class="text">이메일</p>

      <input type="text" class="input" v-model="email" />
    </div>

    <div class="password">
      <p class="text">비밀번호</p>

      <input type="text" class="input" v-model="password" />
    </div>

    <div class="repassword">
      <p class="text">비밀번호 확인</p>

      <input type="text" class="input" v-model="rePassword" />
    </div>

    <div class="signUp_btn">
      <div class="signUp" @click="signUp">회원가입</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        rePassword: '',
      }
    },
    methods: {
      close() {
        this.$emit('close')
      },
      signUp() {
        // 회원가입 처리 필요
        // 회원가입 성공시 창닫기
        this.$emit('close')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .hotel_signup {
    width: 540px;
    height: 620px;
    background: #ffffff;
    border: 1px solid #D3D3D3;
    box-sizing: border-box;
    padding-left: 91px;
    padding-right: 44px;
    .hotel_signup_header {
      display: flex;
      align-items: center;
      padding-top: 36px;
      .text {
        flex: 1;
        font-size: 28px;
        font-weight: bold;
        color: #343434;
        text-align: left;
      }
      .close {
        font-size: 28px;
        text-align: right;
        cursor: pointer;
      }
    }

    .email {
      font-size: 14px;
      color: #727272;
      margin-top: 40px;
      .text {
        margin-bottom: 10px;
      }
      .input {
        width: 350px;
        height: 46px;
        box-sizing: border-box;
        padding-left: 5px;
        font-size: 15px;
      }
    }

    .password {
      font-size: 14px;
      color: #727272;
      margin-top: 24px;
      .text {
        margin-bottom: 10px;
      }
      .input {
        width: 350px;
        height: 46px;
        box-sizing: border-box;
        padding-left: 5px;
        font-size: 15px;
      }
    }

    .repassword {
      font-size: 14px;
      color: #727272;
      margin-top: 24px;
      .text {
        margin-bottom: 10px;
      }
      .input {
        width: 350px;
        height: 46px;
        box-sizing: border-box;
        padding-left: 5px;
        font-size: 15px;
      }
    }

    .signUp_btn {
      width: 100%;
      text-align: center;
      margin-top: 69px;
      .signUp {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 350px;
        height: 54px;
        font-size: 18px;
        color: #ffffff;
        background: #143256;
        cursor: pointer;
      }
    }
  }
</style>