<template>
  <div class="contact_container">
    <p class="contact_Title">contact</p>
    <div class="contact_Line"></div>

    <div class="contact_EmailImage">
      <img src="@/assets/img_email.png" />
    </div>

    <div class="contact_Area">
      <p>SEOUL, SOUTH KOREA</p>
    </div>

    <div class="contact_Email">
      <p>Honggildong@portfolio.co.kr / 010-1234-5678</p>
    </div>
  </div>
</template>

<script>
export default {
  imagePath: '',
}
</script>

<style lang="scss" scoped>
.contact_container {
  width: 100%;
  height: 571px;

  .contact_Title {
    margin: 92px 0px 0px 240px;
    width: 292px;
    height: 107px;
    font-size: 72px;
    font-style: bold;
    text-align: left;
    letter-spacing: 2.16px;
    color: #111111;
  }

  .contact_Line {
    margin: 6px 0px 0px 240px;
    width: 147px;
    height: 6px;
    background: #1a1a1a 0% 0% no-repeat padding-box;
  }

  .contact_EmailImage {
    width: 60px;
    height: 47px;
    margin: 70px 0px 0px 240px;
  }

  .contact_Area {
    width: 370px;
    height: 47px;
    margin: 25px 0px 0px 240px;
    font-size: 32px;
    text-align: left;
    color: #232323;
  }

  .contact_Email {
    width: 500px;
    height: 36px;
    margin: 14px 0px 0px 240px;
    font-size: 24px;
    text-align: left;
    color: #232323;
  }
}
</style>
