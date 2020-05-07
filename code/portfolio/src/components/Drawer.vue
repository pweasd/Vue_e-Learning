<template>
  <div class="drawer_container" v-show="openDrawer">
    <div class="drawer_background" :class="open ? 'fade_in' : 'fade_out'" @click.self="close" />
    <div class="drawer_content" :class="open ? 'drawer_in' : 'drawer_out'">
      <ul>
        <li v-for="menu in menuList" :key="menu.id" @click="move(menu)">{{ menu }}</li>
      </ul>
      <div class="text">
        <img src="../assets/img_git.png" class="image" />
        <p class="text_location">SEOUL, SOUTH KOREA</p>
        <p class="text_contact">Honggildong@portfolio.co.kr</p>
        <p class="text_contact">010-1234-5678</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuList: {
      default: Array,
    },
    open: {
      type: Boolean,
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.$emit('close')
    })
  },
  data() {
    return {
      openDrawer: false,
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    move(menu) {
      this.$emit('move', menu)
    },
  },
  watch: {
    open(value) {
      if (value) this.openDrawer = value
      else
        window.setTimeout(() => {
          this.openDrawer = value
        }, 300)
    },
  },
}
</script>

<style lang="scss" scoped>
.drawer_container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;

  .drawer_background {
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: #000;
  }

  .fade_in {
    animation: fade_in 0.3s;
  }

  .fade_out {
    animation: fade_out 0.3s 1ms;
  }

  @keyframes fade_in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }

  @keyframes fade_out {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }

  .drawer_content {
    position: absolute;
    // left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 60%;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    background-color: #000;

    ul {
      color: #eeeeee;
      font-size: 30px;
      box-sizing: border-box;
      font-weight: bold;
      padding-top: 100px;
      padding-bottom: 170px;
      li {
        opacity: 0.5;
        transition: 0.2s;
        margin-bottom: 15px;
        letter-spacing: 2.5px;
      }
      li:hover {
        opacity: 1;
        transition: 0.2s;
        cursor: pointer;
      }
    }

    .text {
      position: relative;
      color: #eeeeee;
      box-sizing: border-box;

      .image {
        width: 50px;
        margin-bottom: 10px;
      }
      .text_location {
        font-size: 14px;
        margin-bottom: 10px;
      }
      .text_contact {
        font-size: 12px;
        margin-bottom: 5px;
      }
    }
  }

  .drawer_in {
    animation: drawer_in 0.3s;
    box-sizing: border-box;
    padding-left: 10%;
  }

  .drawer_out {
    animation: drawer_out 0.3s 1ms;
  }

  @keyframes drawer_in {
    0% {
      transform: translate(100%);
    }
    100% {
      transform: translate(0);
    }
  }

  @keyframes drawer_out {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(100%);
    }
  }
}
</style>
