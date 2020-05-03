<template>
  <div class="home">
    <div class="home_background">
      <img src="./../assets/pool-3204359.png">
    </div>

    <div class="home_reservation">
      <div class="home_room">
        <p>객실선택</p>
        
        <el-select v-model="room" placeholder="객실을 선택해주세요">
          <el-option
            v-for="option in optionList"
            :key="option.value"
            :label="option.label"
            :value="option.value">
            <div class="home_room_option">
              <img :src="option.image">
              <span>{{ option.label }}</span>
            </div>
          </el-option>
        </el-select>
      </div>

      <div class="home_date">
        체크인
        체크아웃
        <el-date-picker
          v-model="date"
          type="daterange"
          range-separator="~"
          start-placeholder="Start date"
          end-placeholder="End date">
        </el-date-picker>
      </div>
      <div class="home_person">
        <div>
          <p>성인</p>
          <div class="home_controller">
            <button class="home_minus" @click="adultMinus"></button>
            <span>{{ adult }}</span>
            <button class="home_plus" @click="adultPlus"></button>
          </div>
        </div>
        <div>
          <p>어린이</p>
          <div class="home_controller">
            <button class="home_minus" @click="childrenMinus"></button>
            <span>{{ children }}</span>
            <button class="home_plus" @click="childrenPlus"></button>
          </div>
        </div>
      </div>
      <div class="home_button">
        <button @click="reservationClick">예약하기</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        room: null,
        optionList: [
          {
            image: require('@/assets/img_hotelroom_mini.png'),
            value: 'double101',
            label: '디럭스 더블 101호'
          },
          {
            image: require('@/assets/img_hotelroom_mini2.png'),
            value: 'double102',
            label: '디럭스 더블 102호'
          },
          {
            image: require('@/assets/img_hotelroom_mini3.png'),
            value: 'twin103',
            label: '디럭스 트윈 103호'
          },
        ],
        date: '',
        adult: 0,
        children: 0,
      }
    },
    methods: {
      adultPlus() {
        this.adult++
      },
      adultMinus() {
        if (this.adult === 0) {
          return
        }

        this.adult--
      },
      childrenPlus() {
        this.children++
      },
      childrenMinus() {
        if (this.children === 0) {
          return
        }

        this.children--
      },
      reservationClick() {
        console.log('object');
      },
    }
  }
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
  .home_background {
    width: 1920px;
    height: 759px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .home_reservation {
    position: absolute;
    bottom: 70px;
    left: calc(50% - 590px);

    width: 1180px;
    height: 130px;
    background: #ffffff;
    color: #727272;
    font-size: 14px;

    display: flex;
    .home_room {
      width: 394px;
    }
    .home_date {
      width: 409px;
      border-left: 1px solid #D3D3D3;
      border-right: 1px solid #D3D3D3;
      box-sizing: border-box;
    }
    .home_person {
      width: 235px;
      padding: 0px 20px;
      border-right: 1px solid #D3D3D3;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .home_controller {
        width: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .home_minus {
          width: 25px;
          height: 25px;
          background: url('./../assets/btn_minus.png');
          &:active {
            background: url('./../assets/btn_minus_off.png');
          }
        }
        .home_plus {
          width: 25px;
          height: 25px;
          background: url('./../assets/btn_plus.png');
          &:active {
            background: url('./../assets/btn_plus_off.png');
          }
        }
      }
    }
    .home_button {
      width: 142px;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        width: 100px;
        height: 90px;
        background: #143256;
        color: #ffffff;
        border-radius: 12px;
        font-size: 18px;
        font-weight: bold;
        &:active {
          background: #21497a;
        }
      }
    }
  }
}
</style>