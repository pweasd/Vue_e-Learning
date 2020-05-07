<template>
  <div class="project">
    <div class="project_container">
      <p class="project_top">Project</p>

      <div class="project_list">
        <div class="project_item" v-for="project in projectList" :key="project.id">
          <img :src="project.image" />
          <p class="project_title">{{ project.title }}</p>
          <p class="project_content">{{ project.content }}</p>
          <p class="project_date">{{ project.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        projectList: [
          {
            image: require('./../assets/img_pj1.png'),
            title: 'Project 제목 1',
            content: 'Project 세부 내용 1 을 적어주세요',
            date: 'Web . 2019 . 12 ~ 2020 . 01',
          },
          {
            image: require('./../assets/img_pj2.png'),
            title: 'Project 제목 2',
            content: 'Project 세부 내용 2를 적어주세요',
            date: 'Web . 2019 . 12 ~ 2020 . 03',
          },
          {
            image: require('./../assets/img_pj2.png'),
            title: 'Project 제목 3',
            content: 'Project 세부 내용 3을 적어주세요',
            date: 'Web . 2019 . 11 ~ 2020 . 02',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  @media (min-width: 800px) {
    .project {
      width: 100%;
      background: #0d0d0d;
      color: var(--title-color);

      .project_container {
        margin: auto;
        padding-bottom: 100px;
        font-size: 72px;
        text-align: left;

        .project_top {
          margin: 92px 0px 0px 7%;
          display: inline-block;
          font-weight: bold;
          position: relative;
        }

        .project_top:after {
          content: '';
          width: 147px;
          position: absolute;
          left: 0;
          bottom: -14px;
          border-width: 0 0 6px;
          border-style: solid;
        }

        .project_list {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          .project_item {
            width: 45%;
            margin-left: 5%;
            margin-top: 100px;
            display: inline-block;

            img {
              width: 90%;
              margin: 0px;
            }

            .project_title {
              margin: 10px 10% 0px 0px;
              font-weight: 500;
              font-size: 36px;
            }

            .project_content {
              margin: 4px 10% 0px 0px;
              font-size: 32px;
              word-break: break-all;
            }

            .project_date {
              margin: 25px 10% 0px 0px;
              font-size: 24px;
              color: #989898;
            }
          }
        }
      }
    }
  }
  @media (max-width: 800px) {
    .project {
      width: 100%;
      background: #0d0d0d;
      color: var(--title-color);

      .project_container {
        padding-bottom: 50px;
        font-size: 24px;
        text-align: left;

        .project_top {
          margin: 0% 0% 0% 8%;
          padding-top: 50px;
          font-size: 36px;
          font-weight: bold;
          position: relative;
        }

        .project_top:after {
          content: '';
          width: 120px;
          position: absolute;
          left: 0;
          bottom: -14px;
          border-width: 0 0 6px;
          border-style: solid;
        }

        .project_list {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          .project_item {
            width: 80%;
            margin-top: 50px;
            margin-left: 10%;
            display: inline-block;

            img {
              width: 100%;
              margin: 0px;
            }

            .project_title {
              margin: 10px 0px 0px 0px;
              font-weight: 500;
              font-size: 24px;
            }

            .project_content {
              margin: 4px 0px 0px 0px;
              font-size: 16px;
              word-break: break-all;
            }

            .project_date {
              margin: 25px 0px 0px 0px;
              font-size: 16px;
              color: #989898;
            }
          }
        }
      }
    }
  }
</style>
