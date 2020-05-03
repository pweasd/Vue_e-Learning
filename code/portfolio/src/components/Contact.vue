<template>
  <div class="contact">
    <div class="contact_container">
      <p class="contact_Title">Contact</p>

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
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  color: #111111;
  .contact_container {
    width: 1440px;
    margin: auto;
    padding-bottom: 100px;
    font-size: 72px;
    text-align: left;
    .contact_Title {
      margin: 92px 0px 0px 0px;
      display: inline-block;
      position: relative;
      font-weight: bold;
    }
    .contact_Title:after {
      content: '';
      width: 147px;
      position: absolute;
      left: 0;
      bottom: -11px;
      border-width: 0 0 6px;
      border-style: solid;
    }

    .contact_EmailImage {
      width: 60px;
      margin: 70px 0px 0px 0px;
    }
    .contact_Area {
      width: 370px;
      margin: 25px 0px 0px 0px;
      font-size: 32px;
      text-align: left;
      color: #232323;
    }
    .contact_Email {
      width: 550px;
      margin: 14px 0px 0px 0px;
      font-size: 24px;
      text-align: left;
      color: #232323;
    }
  }
}
</style>
