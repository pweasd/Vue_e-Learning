<template>
  <div class="drawer_container" v-show="openDrawer">
    <div class="drawer_background" :class="open ? 'fade_in' : 'fade_out'" @click.self="close"/>
    <div class="drawer_content" :class="open ? 'drawer_in' : 'drawer_out'">
      <ul>
        <li v-for="menu in menuList" :key="menu.id">{{ menu }}</li>
      </ul>
      <p>SEOUL, SOUTH KOREA</p>
      <p>이메일@입력하세요.</p>
      <p>010-번호를-입력하세요.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuList: {
      default: Array
    },
    open: {
      type: Boolean
    }
  },
  data() {
    return {      
      openDrawer: false,
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  },
  watch: {
    open(value) {
      if (value) this.openDrawer = value
      else window.setTimeout(() => {
        this.openDrawer = value
      }, 300)
    }
  }

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
    // height: 100%;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);
    overflow: hidden;
    background-color: #000;

    ul {
      color: #EEEEEE;
      font-size: 30px;
      font-weight: bold;
      li {
        opacity: 0.5;
        transition: 0.2s;
      }
      li:hover {
        opacity: 1;
        transition: 0.2s;
      }
    }
  }

  .drawer_in {
    animation: drawer_in 0.3s;
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