<template>
  <div class="project">
    <div class="project_container">
      <p class="project_top">Project</p> <!-- 밑줄긋기시 css 가상요소 설명 -->

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
            image: require('./../assets/img_pj1.png'), // require 설명
            title: 'Project 제목 1',
            content: 'Project 세부 내용dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',// 단어 길 경우 설명(css - word-break)
            date: 'Web . 2019 . 12 ~ 2020 . 01',
          },
          {
            image: require('./../assets/img_pj2.png'),
            title: 'Project 제목 2',
            content: 'Project 세부 내용',
            date: 'Mobile . 2019 . 12 ~ 2020 . 01',
          },
          // 2 -> 3 개수 늘리면서 flex-wrap 설명
          {
            image: require('./../assets/img_pj2.png'),
            title: 'Project 제목 3',
            content: 'Project 세부 내용',
            date: 'Mobile . 2019 . 12 ~ 2020 . 01',
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.project {
  width: 100%;
  background: #0D0D0D;
  color: #EEEEEE;
  .project_container {
    width: 1440px;
    margin: auto;
    padding-bottom: 100px;
    font-size: 72px;
    text-align: left;
    .project_top {
      margin: 92px 0px 0px 0px;
      display: inline-block;
      font-weight: bold;
      position: relative;
    }
    .project_top:after {
      content: '';
      width: 176px;
      position: absolute;
      left: 0;
      bottom: -11px;
      border-width: 0 0 6px;
      border-style: solid;
    }
    .project_list {
      display: flex;
      justify-content: space-between;
      flex-wrap : wrap;
      .project_item {
        width: 688px;
        margin-top: 100px;
        display: inline-block;
        img {
          margin: 0px;
        }
        .project_title {
          margin: 10px 0px 0px 0px;
          font-weight: 500;
          font-size: 36px;
        }
        .project_content {
          margin: 4px 0px 0px 0px;
          font-size: 32px;
          word-break: break-all;
        }
        .project_date {
          margin: 25px 0px 0px 0px;
          font-size: 24px;
          color: #989898;
        }
      }
    }
  }
}
</style>
