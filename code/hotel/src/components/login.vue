<template>
  <div class="hotel_login">
    <div class="hotel_login_header">
      <p class="text">호텔에 오신 것을 환영합니다.</p>
      <p class="close" @click="close">X</p>
    </div>

    <div class="hotel_login_content">
      <div class="login">
        <p class="text">로그인</p>

        <div class="email">
          <p class="text">이메일</p>
          <input type="text" class="input" />
        </div>

        <div class="password">
          <p class="text">패스워드</p>
          <input type="password" class="input" />
        </div>

        <div class="save">
          <el-checkbox v-model="checked">사용자 정보 저장</el-checkbox>
        </div>

        <div class="login_btn">
          <div class="login_text" @click="login">로그인</div>
        </div>
      </div>

      <div class="signUp">
        <p class="text">HOTEL 회원 가입</p>

        <img src="../assets/img_join.png" class="img" />

        <p class="text_price">- 최저 요금 혜택</p>

        <p class="text_benefit">- 그 외 여러가지 혜택을 누리세요.</p>

        <div class="signUp_btn">
          <div class="signUp_text" @click="signUp">가입하기</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: false,
      }
    },
    methods: {
      login() {
        console.log('로그인')
      },
      signUp() {
        console.log('회원가입')
      },
      close() {
        console.log('닫기')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .hotel_login {
    width: 974px;
    height: 620px;
    box-sizing: border-box;
    border: 1px solid red;
    padding-left: 50px;
    padding-right: 44px;
    .hotel_login_header {
      display: flex;
      align-items: center;
      padding-top: 36px;
      margin-bottom: 68px;
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

    .hotel_login_content {
      display: flex;
      width: 100%;
      .login {
        width: 50%;
        border-right: 1px solid #d3d3d3;
        .text {
          font-size: 24px;
          color: #343434;
          font-weight: bold;
          margin-bottom: 28px;
        }

        .email {
          width: 100%;
          .text {
            font-size: 14px;
            color: #727272;
            margin-bottom: 10px;
          }
          .input {
            width: 350px;
            height: 46px;
            padding-left: 5px;
            font-size: 20px;
          }
        }
        .password {
          width: 100%;
          margin-top: 36px;
          .text {
            font-size: 14px;
            color: #727272;
            margin-bottom: 10px;
          }
          .input {
            width: 350px;
            height: 46px;
            padding-left: 5px;
            font-size: 20px;
          }
        }
        .save {
          width: 100%;
          margin-top: 34px;
        }
        .login_btn {
          width: 100%;
          text-align: center;
          margin-top: 38px;
          .login_text {
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

      .signUp {
        width: 50%;
        padding-left: 60px;
        .text {
          font-size: 24px;
          color: #343434;
          font-weight: bold;
          margin-bottom: 14px;
        }
        .img {
          width: 350px;
          height: 202px;
          margin-bottom: 22px;
        }
        .text_price {
          font-size: 14px;
          color: #343434;
          margin-bottom: 10px;
        }
        .text_benefit {
          font-size: 14px;
          color: #343434;
        }
        .signUp_btn {
          width: 350px;
          text-align: center;
          margin-top: 29px;
          border: 1px solid #343434;
          .signUp_text {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 350px;
            height: 54px;
            font-size: 18px;
            color: #343434;
            background: #ffffff;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>