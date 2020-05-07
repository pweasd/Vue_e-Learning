<template>
  <div class="contact">
    <div class="contact_container">
      <p class="contact_top">Contact</p>

      <div class="contact_emailImage">
        <img src="@/assets/img_email.png" />
      </div>

      <div class="contact_area">
        <p>SEOUL, SOUTH KOREA</p>
      </div>

      <div class="contact_email">
        <p>Honggildong@portfolio.co.kr / 010 - 1234 - 5678</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @media (min-width: 801px) {
    .contact {
      width: 100%;
      box-sizing: border-box;
      padding-left: 7%;
      color: var(--default-color);

      .contact_container {
        margin: auto;
        padding-bottom: 100px;
        font-size: 72px;
        text-align: left;

        .contact_top {
          margin: 92px 0px 0px 0px;
          display: inline-block;
          position: relative;
          font-weight: bold;
        }

        .contact_top:after {
          content: '';
          width: 147px;
          position: absolute;
          left: 0;
          bottom: -11px;
          border-width: 0 0 6px;
          border-style: solid;
        }

        .contact_emailImage {
          width: 60px;
          margin: 70px 0px 0px 0px;
        }

        .contact_area {
          margin-top: 5px;
          font-size: 32px;
          color: #232323;
        }

        .contact_email {
          margin: 14px 0px 0px 0px;
          font-size: 24px;
          color: #232323;
        }
      }
    }
  }
  @media (max-width: 800px) {
    .contact {
      width: 100%;
      color: var(--default-color);

      .contact_container {
        padding-bottom: 50px;
        font-size: 24px;
        text-align: left;

        .contact_top {
          margin: 0% 0% 0% 8%;
          font-size: 36px;
          padding-top: 50px;
          position: relative;
          font-weight: bold;
        }

        .contact_top:after {
          content: '';
          width: 131px;
          position: absolute;
          left: 0;
          bottom: -11px;
          border-width: 0 0 6px;
          border-style: solid;
        }

        .contact_emailImage {
          width: 60px;
          margin: 10% 0% 0% 8%;
        }

        .contact_area {
          margin: 5% 0% 0% 8%;
          font-size: 24px;
          color: #232323;
        }

        .contact_email {
          margin: 5% 0% 0% 8%;
          font-size: 18px;
          color: #232323;
        }
      }
    }
  }
</style>
