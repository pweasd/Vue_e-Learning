<template>
  <div class="skills">
    <div class="skills_container">
      <p class="skills_top">Skills</p>

      <div class="skills_list">
        <div v-for="skills in skillsList" :key="skills.id" class="skills_list_item">
          <div class="skills_image">
            <img :src="skills.image" class="image" />
          </div>
          <div class="skills_text">
            <div class="skills_text_wrapper">
              {{ skills.text }}
              <div class="indicator"/>
            </div>
          </div>
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
  @media (min-width: 801px) {
    .skills {
      width: 100%;
      background: #eff0f2;
      box-sizing: border-box;
      padding-left: 7%;
      color: var(--default-color);

      .skills_container {
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
          left: 0px;
          bottom: -11px;
          border-width: 0 0 6px;
          border-style: solid;
        }

        .skills_list {
          display: flex;
          flex-wrap: wrap;
          margin-top: 90px;

          .skills_list_item {
            margin-right: 5%;

            &:hover {
              transform: scale(1.05);
              transition: 0.3s;

              .indicator {
                width: 10%;
                height: 2px;
                transform: scaleX(10) translateX(43%);
                background-color: #000;
              }
            }

            .skills_image {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 278px;
              height: 278px;
              border-radius: 50%;
              background: #ffffff;
            }

            .skills_text {
              width: 100%;
              height: 80px;
              margin-top: 10px;
              font-size: 48px;
              text-align: center;
              font-weight: bold;

              .skills_text_wrapper {
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 800px) {
    .skills {
      width: 100%;
      background: #eff0f2;
      color: var(--default-color);

      .skills_container {
        padding-bottom: 50px;
        font-size: 24px;
        text-align: left;

        .skills_top {
          position: relative;
          margin: 0% 0% 0% 8%;
          padding-top: 50px;
          font-size: 36px;
          font-weight: bold;
        }

        .skills_top:after {
          content: '';
          width: 87px;
          position: absolute;
          left: 0px;
          bottom: -11px;
          border-width: 0 0 6px;
          border-style: solid;
        }

        .skills_list {
          width: 80%;
          margin-left: 10%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          .skills_image {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 80%;
            margin-left: 10%;
            margin-top: 40px;
            border-radius: 50%;
            background: #ffffff;

            .image {
              width: 100%;
            }
          }

          .skills_text {
            width: 100%;
            margin-top: 10px;
            font-size: 30px;
            text-align: center;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
