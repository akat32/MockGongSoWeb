<template>
  <div>
    <router-view name="footer"></router-view>
    <div class = "LogoBtn" v-on:click = "goMain">
      <div class = "LogoImg"></div>
    </div>
    <div class = "footer">
      <div class = "page1" v-on:click = "goPage1">
        <div class = "page1_icon"></div>
      </div>
      <div class = "page2" v-on:click = "goPage2">
        <div class = "page2_icon"></div>
      </div>
      <div class = "page3" v-on:click = "goPage3">
        <div class = "page3_icon"></div>
      </div>
      <div class = "page4" v-on:click = "goPage4">
        <div class = "page4_icon"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mandal',
  methods: {
    goMain () {
      location.replace('/#/')
    },
    goPage1 () {
      location.replace('/#/mandalA')
    },
    goPage2 () {
      location.replace('/#/mandalS')
    },
    goPage3 () {
      location.replace('/#/shop')
    },
    goPage4 () {
      location.replace('/#/setting')
    }
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
.footer > div{
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
  background-image: url('../assets/icon3.png');
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
