<template>
  <div class="About">
    <div class="page_container">
      <p class="page_title">About</p>

      <div class="page_purpose">
        <p>어필하고 싶은 자신의 장점과</p>
        <p>앞으로 해내고 싶은 목표에 대해서 작성해봅시다.</p>
      </div>

      <div class="page_detail">
        <p>좀 더 자세하고 세부적이며 길게 늘여서 쓸만한 자신의 이야기를 작성해봅시다.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @media (min-width: 801px) {
    .About {
      width: 100%;
      color: var(--default-color);

      .page_container {
        width: 1440px;
        margin: auto;
        padding-bottom: 100px;
        font-size: 72px;
        text-align: left;

        .page_title {
          margin: 92px 0px 0px 0px;
          display: inline-block;
          position: relative;
          font-weight: bold;
          letter-spacing: 2.16px;
        }

        .page_title:after {
          content: '';
          width: 147px;
          position: absolute;
          left: 0;
          bottom: -11px;
          border-width: 0 0 6px;
          border-style: solid;
        }

        .page_purpose {
          margin: 88px 0px 0px 0px;
          font-size: 32px;
          color: #232323;
        }

        .page_detail {
          margin: 43px 0px 0px 0px;
          font-size: 24px;
          color: #232323;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .About {
      width: 100%;
      color: var(--default-color);

      .page_container {
        padding-bottom: 50px;

        .page_title {
          position: relative;
          padding-top: 50px;
          margin: 0% 0% 0% 8%;
          font-weight: bold;
          font-size: 36px;
        }

        .page_title:after {
          content: '';
          width: 101px;
          position: absolute;
          left: 0;
          bottom: -11px;
          border-width: 0 0 6px;
          border-style: solid;
        }

        .page_purpose {
          margin: 8% 0% 0% 8%;
          font-size: 24px;
          color: #232323;
        }

        .page_detail {
          margin: 8% 0% 0% 8%;
          font-size: 16px;
          color: #232323;
        }
      }
    }
  }
</style>
