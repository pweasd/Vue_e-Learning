<template>
  <div class="drawer_container">
    <div class="drawer_background"/>
    <div class="drawer_wrapper">
      <div class="drawer_content">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Text"
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

  .drawer_wrapper {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    .drawer_content {
      position: absolute;
      box-sizing: border-box;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);
      overflow: hidden;
    }
  }
}
</style>