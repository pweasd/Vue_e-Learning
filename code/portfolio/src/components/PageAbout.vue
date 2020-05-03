<template>
  <div class="page_Container">
    <p class="page_About">About</p>
    <div class="page_Line"></div>

    <div class="page_Purpose">
      <p>
        어필하고 싶은 자신의 장점과<br />
        앞으로 해내고 싶은 목표에 대해 작성.
      </p>
    </div>

    <div class="page_Detail">
      <p>좀 더 자세하고 세부적이며 길게 늘여 쓸만한 자신의 이야기를 작성.</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.page_Container {
  width: 100%;
  height: 625px;

  .page_About {
    width: 222px;
    height: 107px;
    // margin: 92px 0px 0px 240px;
    padding: 92px 0px 0px 240px;
    text-align: left;
    font-size: 72px;
    font-style: bold;
    letter-spacing: 2.16px;
    color: #111111;
    box-sizing: border-box;
  }

  .page_Line {
    margin: 113px 0px 0px 240px;
    width: 147px;
    height: 6px;
    background: #1a1a1a 0% 0% no-repeat padding-box;
  }

  .page_Purpose {
    margin: 88px 0px 0px 240px;
    width: 550px;
    height: 99px;
    font-size: 32px;
    text-align: left;
    color: #232323;
  }

  .page_Detail {
    margin: 43px 0px 0px 240px;
    width: 750px;
    height: 36px;
    font-size: 24px;
    text-align: left;
    color: #232323;
  }
}
</style>
