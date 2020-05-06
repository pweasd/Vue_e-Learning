<template>
  <div class="reservation">
    <div class="reservation_header">
      <p class="text">호텔 예약</p>
      <p class="close">X</p>
    </div>

    <div class="reservation_content">
      <p class="text">서울 호텔 예약 정보 입력</p>

      <div class="line"></div>

      <div class="content">
        <img src="../assets/img_hotelroom_mini.png" class="room-image" />
        <div class="room-content">
          <p class="room-name">디럭스 더블 101호</p>
          <p class="room-description">전망시티뷰 | 객실면적 40~46</p>
        </div>
        <div class="room-price">
          <span class="price">KRW</span>
          200,000
        </div>
      </div>
      <div class="reservation_input">
        <div class="name_input">
          <p class="name">성명</p>
          <input type="text" class="input" />
        </div>

        <div class="contact_input">
          <p class="contact">연락처</p>
          <input type="text" class="input" />
        </div>
      </div>
    </div>

    <div class="reservation_confirm">
      <div class="confirm">입력완료</div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .reservation {
    position: fixed;
    top: 230px;
    left: 473px;
    width: 974px;
    height: 620px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #d3d3d3;
    padding-left: 50px;
    padding-right: 44px;
    border-radius: 8px;
    .reservation_header {
      display: flex;
      align-items: center;
      padding-top: 36px;
      .text {
        font-size: 28px;
        font-weight: bold;
        color: #343434;
      }
      .close {
        flex: 1;
        font-size: 28px;
        text-align: right;
        cursor: pointer;
      }
    }

    .reservation_content {
      .text {
        font-weight: bold;
        font-size: 20px;
        color: #5b5b5b;
      }
      .line {
        width: 100%;
        height: 1px;
        background: #d3d3d3;
        margin-top: 9px;
      }
      .content {
        display: flex;
        margin-top: 22px;
        margin-bottom: 22px;
        .room-image {
          width: 276px;
          height: 174px;
        }
        .room-content {
          margin-left: 26px;
          .room-size {
            font-size: 14px;
            color: #5b5b5b;
            margin-bottom: 6px;
          }
          .room-name {
            font-size: 28px;
            color: #343434;
            font-weight: bold;
            margin-bottom: 58px;
          }
          .room-description {
            font-size: 14px;
            color: #5b5b5b;
          }
        }
        .room-price {
          flex: 1;
          font-size: 28px;
          font-weight: bold;
          color: #343434;
          padding-left: 183px;
          text-align: right;
          .price {
            font-size: 18px;
          }
        }
      }
    }

    .reservation_input {
      display: flex;
      width: 100%;
      margin-top: 22px;
      .name_input {
        width: 50%;
        .name {
          font-size: 14px;
          color: #727272;
          margin-bottom: 10px;
        }
        .input {
          width: 100%;
          height: 46px;
          font-size: 24px;
          padding-left: 5px;
        }
      }
      .contact_input {
        width: 50%;
        padding-left: 48px;
        .contact {
          font-size: 14px;
          color: #727272;
          margin-bottom: 10px;
        }
        .input {
          width: 100%;
          height: 46px;
          font-size: 24px;
          padding-left: 5px;
        }
      }
    }

    .reservation_confirm {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
      margin-top: 30px;
      .confirm {
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