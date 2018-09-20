<template>
  <div>
    <div class = "title">만다라트</div>
    <div class = "circles">
      <div class = "circle1"></div>
      <div class = "circle2"></div>
      <div class = "circle3"></div>
    </div>
    <router-link class = "arrow1" to = "/makeD"></router-link>
    <router-link class = "arrow2" to = "/makeB"></router-link>
    <div class = "inputTitle">만들어진 2단계의 칸을 눌러<br />3단계의 목표를 정해주세요</div>
    <div class = "introTitle">2단계의 중심 키워드를 가지고 목표를 만들어보세요<br />3단계 목표도 언제든지 수정할 수 있어요</div>
    <div class = "mandal">
      <div class = "mandalLine1">
        <div v-on:click = "Box1Click" v-bind:class = "[Box, {BoxWhite : Box1}]"></div>
        <div v-on:click = "Box2Click" v-bind:class = "[Box, {BoxWhite : Box2}]"></div>
        <div v-on:click = "Box3Click" v-bind:class = "[Box, {BoxWhite : Box3}]"></div>
      </div>
      <div class = "mandalLine2">
        <div v-on:click = "Box4Click" v-bind:class = "[Box, {BoxWhite : Box4}]"></div>
        <div class = "box5">1</div>
        <div v-on:click = "Box6Click" v-bind:class = "[Box, {BoxWhite : Box6}]"></div>  </div>
      <div class = "mandalLine3">
        <div v-on:click = "Box7Click" v-bind:class = "[Box, {BoxWhite : Box7}]"></div>
        <div v-on:click = "Box8Click" v-bind:class = "[Box, {BoxWhite : Box8}]"></div>
        <div v-on:click = "Box9Click" v-bind:class = "[Box, {BoxWhite : Box9}]"></div></div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
// import axios from 'axios'
import Storage from 'vue-web-storage'
Vue.use(Storage)

export default {
  name: 'makeC',
  data () {
    return {
      Box1: (Vue.$localStorage.get('Box1Title') !== null),
      Box2: (Vue.$localStorage.get('Box2Title') !== null),
      Box3: (Vue.$localStorage.get('Box3Title') !== null),
      Box4: (Vue.$localStorage.get('Box4Title') !== null),
      Box6: (Vue.$localStorage.get('Box6Title') !== null),
      Box7: (Vue.$localStorage.get('Box7Title') !== null),
      Box8: (Vue.$localStorage.get('Box8Title') !== null),
      Box9: (Vue.$localStorage.get('Box9Title') !== null)
    }
  }
}
</script>
<style scoped>
ul{
  list-style:none;
  padding:0;
}
.title{
  font-family: 'NotoSansCJKkr-Medium';
  width: 100%;
  height: 7vh;
  background: #fff;
  text-align: center;
  line-height: 7vh;
}
.circles{
  display: flex;
  margin:auto;
  margin-top: 5.5vh;
  width: 12.4vw;
  height: 1.5vh;
  margin-bottom : 6.8vh;
}
.circles > div{
  border-radius: 2em;
  height: 1.1vh;
  width: 1.1vh;
  border: 0.2vh solid #677e52;
}
.circle2, .circle3{
  margin-left: calc( (12.4vw - 4.5vh) / 2);
}
.circle3  {
  background: #677e52;
}
.inputTitle{
  font-family: 'NotoSansCJKkr-Medium';
  font-size: 3vh;
  text-align: center;
  margin-bottom: 1.6vh;
}
.arrow1{
  position: absolute;
  left: 90vw;
  top: 26vh;
  width: 2vh;
  height: 3.5vh;
  background-image: url('../assets/beforeldpi.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.arrow2{
  position: absolute;
  right: 90vw;
  top: 26vh;
  width: 2vh;
  height: 3.5vh;
  background-image: url('../assets/leftldpi.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.introTitle{
  font-family: 'NotoSansCJKkr-Regular';
  color: #677e52;
  text-align: center;
  font-size: 1.6vh;
  margin-bottom: 7vh;
}
.mandal{
  width: 36.8vh;
  height: 36.8vh;
  margin:auto;
}
.mandalLine1, .mandalLine2, .mandalLine3{
  display: flex;
  height: 9.2vh;
  width: 34vh;
  margin:auto;
  margin-bottom: 2vh;
}
.mandalLine1 > div{
  border: 0.16vh solid #677e52;
  width: 9.8vh;
  height: 9.8vh;
  margin:auto;
  font-size: 2.6vh;
  text-align: center;
  line-height: 9vh;
}
.mandalLine2 > div{
  border: 0.16vh solid #677e52;
  width: 9.8vh;
  height: 9.8vh;
  margin:auto;
  font-size: 2.6vh;
  text-align: center;
  line-height: 9vh;
}
.mandalLine3 > div{
  border: 0.16vh solid #677e52;
  width: 9.8vh;
  height: 9.8vh;
  margin:auto;
  font-size: 2.6vh;
  text-align: center;
  line-height: 9vh;
}
.box5{
  color: #fff;
  background: #667e52
}
.BoxWhite{
  background: #fff;
}
</style>
