<template>
  <div>
    <div class = "title">만다라트</div>
    <div class = "non_mandal">
      <div class = "Logo"></div>
      <div class = "text">현재 만들어 놓은<br />작은 만다라트가 없어요!</div>
    </div>
    <router-link to = '/makes'>
      <div class = "new_mandal">작은 만다라트 새로 만들기</div>
    </router-link>
  </div>
</template>
<script>
// import Vue from 'Vue'
// import axios from 'axios'
// import Storage from 'vue-web-storage'
// Vue.use(Storage)
export default {
  name: 'NaNMandalS.vue'
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
.non_mandal{
  width: 22vh;
  height: 30vh;
  margin:auto;
  margin-top: 22vh;
  margin-bottom: 10vh;
}
.Logo{
  width: 20.6vh;
  height: 20.6vh;
  background-image: url('../assets/logo2.png');
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin:auto;
}
.text{
  font-family: 'NotoSansCJKkr-Regular';
  text-align: center;
  font-size: 2.2vh;
  margin-top: 1.5vh;
}
.new_mandal{
  font-family: 'NotoSansCJKkr-Regular';
  border-radius: 0.3em;
  width: 79vw;
  height: 8vh;
  background: #fff;
  margin:auto;
  color: #677e52;
  text-align: center;
  line-height: 8vh;
  font-size: 2.1vh;
  box-shadow: 0px 0.2vh 0 gray;
}
</style>
