<template>
  <div class="skills">
    <div class="skills_container">
      <p class="skills_top">Skills</p>

      <div class="skills_list">
        <div class="skills_item" v-for="skills in skillsList" :key="skills.id">
          <div class="skills_image">
            <img :src="skills.image" />
          </div>
          <p class="skills_text">{{ skills.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillsList: [
        { image: require('@/assets/img_html.png'), text: 'HTML' },
        { image: require('@/assets/img_css.png'), text: 'CSS' },
        { image: require('@/assets/img_as.png'), text: 'Android' },
      ],
    }
  },
}
</script>

<style lang="scss">
.skills {
  width: 100%;
  background: #eff0f2;
  color: var(--default-color);

  .skills_container {
    width: 1440px;
    margin: auto;
    padding-bottom: 100px;
    font-size: 72px;
    text-align: left;
    .skills_top {
      margin: 92px 0px 0px 0px;
      display: inline-block;
      position: relative;
      font-weight: bold;
    }
    .skills_top:after {
      content: '';
      width: 147px;
      position: absolute;
      left: 0;
      bottom: -11px;
      border-width: 0 0 6px;
      border-style: solid;
    }
    .skills_list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 1000px;
      margin-top: 90px;
      .skill_item {
        margin-top: 100px;
        .skill_image {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 278px;
          height: 278px;
          border-radius: 50%;
          background: #ffffff;
        }
        .skill_text {
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
