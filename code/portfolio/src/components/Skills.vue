<template>
  <div class="skils">
    <div class="skils_container">
      <p class="skils_top">Skils</p>

      <div class="skils_list">
        <div class="skil_item" v-for="skil in skilList" :key="skil.id">
          <div class="skil_image">
            <img :src="skil.image" />
          </div>
          <p class="skil_text">{{ skil.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skilList: [
        { image: require('@/assets/img_html.png'), text: 'HTML' },
        { image: require('@/assets/img_css.png'), text: 'CSS' },
        { image: require('@/assets/img_as.png'), text: 'Android' },
      ],
    }
  },
}
</script>

<style lang="scss">
.skils {
  width: 100%;
  background: #eff0f2;
  color: #111111;
  .skils_container {
    width: 1440px;
    margin: auto;
    padding-bottom: 100px;
    font-size: 72px;
    text-align: left;
    .skils_top {
      margin: 92px 0px 0px 0px;
      display: inline-block;
      position: relative;
      font-weight: bold;
    }
    .skils_top:after {
      content: '';
      width: 147px;
      position: absolute;
      left: 0;
      bottom: -11px;
      border-width: 0 0 6px;
      border-style: solid;
    }
    .skils_list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 1000px;
      .skil_item {
        margin-top: 100px;
        .skil_image {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 278px;
          height: 278px;
          border-radius: 50%;
          background: #ffffff;
        }
        .skil_text {
          width: 100%;
          height: 80px;
          text-align: center;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
