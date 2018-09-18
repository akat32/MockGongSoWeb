<template>
  <div>
    <div class = "title">만다라트</div>
    <div class = "circles">
      <div class = "circle1"></div>
      <div class = "circle2"></div>
      <div class = "circle3"></div>
    </div>
    <router-link class = "arrow1" to = "/makeC"></router-link>
    <router-link class = "arrow2" to = "/makeC"></router-link>
    <div class = "inputTitle">2단계 중심 키워드를 바탕으로<br />3단계 목표를 적어주세요</div>
    <div class = "introTitle">2단계의 중심 키워드를 가지고 목표를 만들어보세요<br />3단계 목표도 언제든지 수정할 수 있어요</div>
    <!-- <ul id = "wish">
      <li v-for="item in items" class = "wsihItem">
        <input type="text" class = "index" placeholder="{{ item.index }}"/>
      </li>
    </ul> -->
    <!-- <ul id = "wishList">
      <li v-for="item in items">
        <div class = "wish">{{ item.message }}</div>
      </li>
    </ul> -->
    <!-- <div class = "wish">EDCAN 폐부 하기</div>
    <div class = "add">좋은 클라이언트 만나기</div> -->
    <div class = "plus">+</div>
  </div>
</template>
<script>
import Vue from 'Vue'
// import axios from 'axios'
import Storage from 'vue-web-storage'
Vue.use(Storage)

export default {
  name: 'makeD',
  data () {
    return {
      arrow () {
        alert('예에!')
      }
    }
  }
}
</script>
<style scoped>
ul{
  list-style: none;
  padding: 0;
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
.circle3{
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
  margin-bottom: 6vh;
}
.wish, .plus, .add{
  width: 90vw;
  height: 7vh;
  background: #fff;
  border : 0.2vh solid #677e52;
  margin: auto;
  text-align: center;
  line-height: 7vh;
  margin-bottom: 2.5vh;
  color: #677e52;
  font-size: 2.3vh;
  font-family: 'NotoSansCJKkr-Regular';
}
.add{
  background: #e2e2e2;
}
.plus{
  background: #e2e2e2;
  font-size: 5vh;
  font-weight: bold;
}
</style>
