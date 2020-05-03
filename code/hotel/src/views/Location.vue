<template>
  <div class="location">
    <div id="map" style="width:100%;height:400px;"></div>
  </div>
</template>

<script>
  export default {
    mounted() {
      var mapOptions = {
          center: new naver.maps.LatLng(36.7647, 127.2824),
          zoom: 17
      };

      var map = new naver.maps.Map('map', mapOptions);

      var marker = new naver.maps.Marker({
          map: map,
          position: mapOptions.center
      });
    },
  }
</script>

<style lang="scss" scoped>
.location {
  width: 100%;
  height: 100%;
  background: #EFF0F2;
}
</style>