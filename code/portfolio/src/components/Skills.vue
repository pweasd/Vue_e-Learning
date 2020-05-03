<template>
  <div class="skils_container">
    <div class="skils_header">
      <div>Skils</div>
      <div class="line"></div>
    </div>
    <div class="skils_content">
      <div v-for="skil in skils" :key="skil.id" class="content">
        <div class="content_image">
          <img :src="skil.image" />
        </div>
        <div class="content_text">{{skil.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        skils: [
          { image: require('@/assets/img_html.png'), text: 'HTML' },
          { image: require('@/assets/img_css.png'), text: 'CSS' },
          { image: require('@/assets/img_as.png'), text: 'Android Studio' },
        ],
      }
    },
  }
</script>

<style lang="scss">
  .skils_container {
    width: 100%;
    height: 100%;
    background: #eff0f2;
    .skils_header {
      width: 177px;
      height: 107px;
      font-size: 72px;
      font-weight: bold;
      color: #111111;
      padding-top: 92px;
      padding-left: 240px;
    }
    .line {
      width: 147px;
      height: 6px;
      background: #1a1a1a;
    }
    .skils_content {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 83px;
      .content {
        margin-right: 124px;
      }

      .content_image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 278px;
        height: 278px;
        background: #ffffff;
        border-radius: 50%;
      }
      .content_text {
        width: 278px;
        height: 80px;
        text-align: center;
        font-size: 54px;
        font-weight: bold;
        color: #111111;
      }
    }
  }
</style>