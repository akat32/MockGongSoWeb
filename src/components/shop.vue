<template>
  <div>
    <div class = "title">상점</div>
    <div class = "advertising1"></div>
    <div class = "target">
      <div class = "ad"></div>
    </div>
    <div class = "advertising2"></div>
  </div>
</template>
<script>
export default {
  name: 'shop',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  font-family: 'NotoSansCJKkr-Medium';
  width: 100%;
  height: 7vh;
  background: #fff;
  text-align: center;
  line-height: 7vh;
}
.bar{
  background: #b7ca79;
  position: absolute;
  top: 90.4vh;
  width: 20%;
  right: 20%;
  height: 0.7vh;
  z-index: 100;
}
.advertising1, .advertising2{
  width: 90vw;
  height: 27vh;
  margin:auto;
  margin-top : 2.7vh;
  border: 0.2vh solid #677e52;
  background: #fff;
}
.target{
  width: 90vw;
  height: 16vh;
  margin : auto;
  margin-top : 2.2vh;
  border: 0.2vh solid #677e52;
  background: #677e52;
  display: flex;
}
.advertising2{
  margin-top: 2.2vh;
}
.ad{
  margin-left: 1.3%;
  margin-top: auto;
  margin-bottom: auto;
  width: 48.9%;
  height: 86.9%;
  background: #fff;
}
</style>
