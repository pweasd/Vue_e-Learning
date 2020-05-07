<template>
  <div class="home">
    <div class="home_background">
      <img src="./../assets/pool-3204359.png" />
    </div>

    <div class="home_reservation">
      <div class="home_room">
        <p>객실선택</p>

        <el-select class="home_room_select" v-model="room" placeholder="객실을 선택해주세요">
          <el-option v-for="option in optionList" :key="option.id" :label="option.label" :value="option.value">
            <div class="home_room_option">
              <img :src="option.image" />
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

        <el-date-picker v-model="date" type="daterange" rage-separator="~" start-placeholder="Start date" end-placeholder="End date" :editable="false"> </el-date-picker>
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

    <reservation v-if="reservationModal" :roomInfo="roomInfo" @close="reservationClose" @reservationOk="reservationOk"></reservation>
    <reservationComplete v-if="reservationComplete" @close="close" @complete="complete" :reservationInfo="reservationInfo"></reservationComplete>
  </div>
</template>

<script>
import reservation from '../components/reservation'
import reservationComplete from '../components/reservationComplete'
export default {
  components: {
    reservation,
    reservationComplete,
  },
  computed: {
    token() {
      return this.$cookie.get('userInfo')
    },
  },
  data() {
    return {
      room: '',
      optionList: [
        {
          image: require('@/assets/img_hotelroom_mini.png'),
          value: 'double101',
          label: '디럭스 더블 101호',
        },
        {
          image: require('@/assets/img_hotelroom_mini2.png'),
          value: 'double102',
          label: '디럭스 더블 102호',
        },
        {
          image: require('@/assets/img_hotelroom_mini3.png'),
          value: 'twin103',
          label: '디럭스 트윈 103호',
        },
      ],
      date: '',
      adult: 0,
      children: 0,
      startDate: '',
      endDate: '',
      roomName: '',
      roomImage: '',
      price: '',
      roomDescription: '',
      reservationNumber: '',

      reservationModal: false,
      reservationComplete: false,

      roomInfo: null,
      reservationInfo: null,
    }
  },
  methods: {
    adultMinus() {
      if (this.adult === 0) {
        return
      }

      this.adult--
    },
    adultPlus() {
      this.adult++
    },
    childrenMinus() {
      if (this.children === 0) {
        return
      }

      this.children--
    },
    childrenPlus() {
      this.children++
    },
    reservationClick() {
      if (this.token === null) {
        alert('로그인이 필요합니다.')
        return
      }

      if (this.room === null) {
        alert('방을 선택해주세요.')
        return
      }

      if (this.date.length === 0) {
        alert('날짜를 선택해주세요.')
        return
      }

      if (this.adult === 0 && this.children === 0) {
        alert('인원수를 입력해주세요.')
        return
      }

      this.startDate = this.dateFormatChange(this.date[0])
      this.endDate = this.dateFormatChange(this.date[1])

      // 객실정보
      this.roomCheck()

      let info = {
        email: this.token,
        room: this.roomName,
        roomImage: this.roomImage,
        startDate: this.startDate,
        endDate: this.endDate,
        adult: this.adult,
        children: this.children,
        price: this.price,
        roomDescription: this.roomDescription,
      }

      this.roomInfo = info

      this.reservationModal = true
    },
    reservationClose() {
      this.reservationModal = false
    },
    reservationOk(name, phone) {
      //객실정보
      this.roomCheck()

      // 예약번호
      this.reservationNumber = this.reservationNum()

      let info = {
        email: this.token,
        room: this.roomName,
        roomImage: this.roomImage,
        startDate: this.startDate,
        endDate: this.endDate,
        adult: this.adult,
        children: this.children,
        price: this.price,
        name: name,
        phone: phone,
        reservationNumber: this.reservationNumber,
        roomDescription: this.roomDescription,
      }

      this.reservationInfo = info
      //예약 입력창 닫기
      this.reservationModal = false
      //예약완료 창 켜기
      this.reservationComplete = true
    },
    complete() {
      //호텔예약 완료
      let data = this.$ls.get('reservationList')

      let list = JSON.parse(data)

      if (list === null) {
        list = []
      }

      list.push(this.reservationInfo)

      this.$ls.set('reservationList', JSON.stringify(list))

      this.reservationComplete = false
    },
    close() {
      //호텔 예약완료 닫기
      this.reservationComplete = false
    },
    roomCheck() {
      if (this.room === 'double101') {
        this.roomName = '디럭스 더블 101호'
        this.price = '250,000'
        this.roomImage = require('@/assets/img_hotelroom_mini.png')
        this.roomDescription = '전망 시티뷰 | 객실 면적 40~46'
      } else if (this.room === 'double102') {
        this.roomName = '디럭스 더블 102호'
        this.price = '300,000'
        this.roomImage = require('@/assets/img_hotelroom_mini2.png')
        this.roomDescription = '오션뷰 | 객실 면전 60~66'
      } else {
        this.roomName = '디럭스 트윈 103호'
        this.price = '400,000'
        this.roomImage = require('@/assets/img_hotelroom_mini3.png')
        this.roomDescription = '오션뷰 | 객실 면적 70~80'
      }
    },
    dateFormatChange(date) {
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()

      if (month < 10) {
        month = '0' + month
      }

      if (day < 10) {
        day = '0'
      }

      return year + '-' + month + '-' + day
    },
    reservationNum() {
      let result = Math.floor(Math.floor(Math.random() * 1000000) + 100000)

      if (result > 1000000) {
        result = result - 100000
      }

      return result
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  .home_background {
    width: 1920px;
    height: 777px;
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

    display: flex;
    text-align: center;
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
      border-left: 1px solid #d3d3d3;
      border-right: 1px solid #d3d3d3;
      box-sizing: border-box;
      .home_date_title {
        padding: 0px 102px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
      }
    }
    .home_person {
      width: 235px;
      padding: 34px 20px 0px 20px;
      border-right: 1px solid #d3d3d3;
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
