<template>
  <div>
    <router-view name="footer"></router-view>
    <router-link class = "LogoBtn" to = "/">
      <div class = "LogoImg"></div>
    </router-link>
    <div class = "footer">
      <router-link class = "page1" to = "/mandalA">
        <div class = "page1_icon"></div>
      </router-link>
      <router-link class = "page2" to = "/mandalS">
        <div class = "page2_icon"></div>
      </router-link>
      <router-link class = "page3" to = "/shop">
        <div class = "page3_icon"></div>
      </router-link>
      <router-link class = "page4" to = "/setting">
        <div class = "page4_icon"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
// import axios from 'axios'
import Storage from 'vue-web-storage'
Vue.use(Storage)
export default {
  name: 'mandal',
  mounted () {
    if (!Vue.$localStorage.get('token')) location.replace('#/login')
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  height:9.6vh;
  background : #fff;
  display: flex;
}
.page1, .page2, .page3, .page4{
  width: 20%;
  height: 100%;
  display: flex;
}
.page2{
  margin-right: 20vw;
}
.page1_icon{
  background-image: url('../assets/icon1.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 4.8vh;
  height: 4.8vh;
  margin: auto;
  margin-top: auto;
  margin-bottom: auto;
}
.page2_icon{
  background-image: url('../assets/icon2.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 4.8vh;
  height: 4.8vh;
  margin: auto;
  margin-top: auto;
  margin-bottom: auto;
}
.page3_icon{
  background-image: url('../assets/storehdpi.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 4.8vh;
  height: 4.8vh;
  margin: auto;
  margin-top: auto;
  margin-bottom: auto;
}
.page4_icon{
  background-image: url('../assets/icon4.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 4.8vh;
  height: 4.8vh;
  margin: auto;
  margin-top: auto;
  margin-bottom: auto;
}
.LogoBtn{
  width: 9vh;
  height: 9vh;
  border-radius: 50%;
  border: 0.6vh solid #677e52;
  background-color: #b7ca79;
  position: absolute;
  left: 0;
  right: 0;
  margin:auto;
  top: 87vh;
  z-index: 1;
  display: flex;
}
.LogoImg{
  width: 10vh;
  height: 10vh;
  margin-top: auto;
  margin-bottom: auto;
  margin: auto;
  background-image: url('../assets/mainldpi.png');
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 2;
}
</style>
