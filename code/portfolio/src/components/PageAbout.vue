<template>
  <div class="About">
    <div class="page_Container">
      <p class="page_About">About</p>

      <div class="page_Purpose">
        <p>어필하고 싶은 자신의 장점과</p>
        <P>앞으로 해내고 싶은 목표에 대해 작성.</P>
      </div>

      <div class="page_Detail">
        <p>좀 더 자세하고 세부적이며 길게 늘여 쓸만한 자신의 이야기를 작성.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.About {
  width: 100%;
  color: var(--default-color);

  .page_Container {
    width: 1440px;
    margin: auto;
    padding-bottom: 100px;
    font-size: 72px;
    text-align: left;

    .page_About {
      margin: 92px 0px 0px 0px;
      display: inline-block;
      position: relative;
      font-weight: bold;
      letter-spacing: 2.16px;
    }

    .page_About:after {
      content: '';
      width: 147px;
      position: absolute;
      left: 0;
      bottom: -11px;
      border-width: 0 0 6px;
      border-style: solid;
    }

    .page_Purpose {
      margin: 88px 0px 0px 0px;
      font-size: 32px;
      color: #232323;
    }

    .page_Detail {
      margin: 43px 0px 0px 0px;
      font-size: 24px;
      color: #232323;
    }
  }
}
</style>
