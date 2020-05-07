<template>
  <div class="drawer_container" v-show="open">
    <div class="drawer_background" :class="openDrawer ? 'fade_in' : 'fade_out'" @click.self="close"/>
    <div class="drawer_content" :class="openDrawer ? 'drawer_in' : 'drawer_out'">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean
    }
  },
  data() {
    return {
      text: "Text",
      openDrawer: false,
    }
  },
  methods: {
    close() {
      this.openDrawer = false
      let emit = () => { this.$emit('close') }
      window.setTimeout(emit, 300)
    }
  },
  watch: {
    open(value) {
      this.openDrawer = value
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
    width: 30%;
    // height: 100%;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);
    overflow: hidden;
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