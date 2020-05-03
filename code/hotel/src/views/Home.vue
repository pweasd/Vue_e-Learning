<template>
  <div class="home">
    <div class="home_background">
      <img src="./../assets/pool-3204359.png">
    </div>

    <div class="home_reservation">
      <div class="home_room">
        <p>객실선택</p>
        
        <el-select class="home_room_select" v-model="room" placeholder="객실을 선택해주세요">
          <el-option v-for="option in optionList" :key="option.value" :label="option.label" :value="option.value">
            <div class="home_room_option">
              <img :src="option.image">
              <span>{{ option.label }}</span>
            </div>
          </el-option>
        </el-select>
      </div>

      <div class="home_date">
        <div class="home_date_title">
          <span>체크인</span>
          <span>체크아웃</span>
        </div>

        <el-date-picker
         class="home_date_picker" 
         :editable="false"
         v-model="date" 
         type="daterange" 
         range-separator="~" 
         format="yyyy-MM-dd"
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
        // 인원수 음수 불가
        if (this.adult === 0) {
          return
        }

        this.adult--
      },
      childrenPlus() {
        this.children++
      },
      childrenMinus() {
        // 인원수 음수 불가
        if (this.children === 0) {
          return
        }

        this.children--
      },
      reservationClick() {
        if (this.room === null) {
          alert('방을 선택해주세요')
          return
        }

        if (this.date.length === 0) { // date range picker는 array로 값을 돌려줌
          alert('날짜를 선택해주세요')
          return
        }

        if (this.adult === 0 && this.children === 0) {
          alert('인원수를 입력해주세요')
          return
        }

        // TODO: 예약창
        let startDate = this.dateFormatChange(this.date[0])
        let endDate = this.dateFormatChange(this.date[1])
      },
      dateFormatChange(date) {
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()

        if (month < 10) {
          month = "0" + month
        }

        if (day < 10) {
          day = "0" + day
        }

        return year + '-' + month + '-' + day
      }
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
    text-align: center;

    display: flex;
    .home_room {
      width: 394px;
      padding-top: 34px;
      .home_room_select {
        width: 350px;
        margin-top: 16px;
      }
    }
    .home_date {
      width: 409px;
      padding-top: 34px;
      border-left: 1px solid #D3D3D3;
      border-right: 1px solid #D3D3D3;
      box-sizing: border-box;
      .home_date_title {
        padding: 0px 102px;
        display: flex;
        justify-content: space-between;
      }
      .home_date_picker {
        margin-top: 16px;
      }
    }
    .home_person {
      width: 235px;
      padding: 34px 20px 0px 20px;
      border-right: 1px solid #D3D3D3;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .home_controller {
        width: 90px;
        margin-top: 22px;
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