<template>
  <div>
    <div class = "title">만다라트</div>
    <div class = "circles">
      <div class = "circle1"></div>
      <div class = "circle2"></div>
      <div class = "circle3"></div>
    </div>
    <div v-on:click = "click" class = "arrow" to = "/makeB"></div>
    <div class = "inputTitle">만다라트의 제목을<br />입력해주세요</div>
    <div class = "introTitle">지금 적은 제목은 만다라트의<br />중심에 위치합니다</div>
    <div class = "mandalBox">
      <input type="text" class = "mandalTitle" placeholder="1" readonly/>
    </div>
    <div class = "inputBox">
      <input v-model = "title" type="text" class="inputMandalTitle" placeholder="제목을 입력하세요" />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
// import axios from 'axios'
import Storage from 'vue-web-storage'
Vue.use(Storage)

export default {
  name: 'makeA',
  methods: {
    click () {
      Vue.$localStorage.set('newMandalTitle', this.title)
      location.replace('#/makeB')
    }
  },
  data () {
    var ttitle = Vue.$localStorage.get('newMandalTitle')
    console.log(ttitle)
    if (ttitle === 'undefined' || ttitle === null) ttitle = ''
    return {
      title: ttitle
    }
  },
  mounted () {
    if (!Vue.$localStorage.get('token')) location.replace('#/login')
  }
}
</script>
<style scoped>
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
.circle1{
  background: #677e52;
}
.inputTitle{
  font-family: 'NotoSansCJKkr-Medium';
  font-size: 3vh;
  text-align: center;
  margin-bottom: 1.6vh;
}
.introTitle{
  font-family: 'NotoSansCJKkr-Regular';
  color: #677e52;
  text-align: center;
  font-size: 1.6vh;
  margin-bottom: 10vh;
}
.mandalBox{
  width: 20vh;
  height: 20vh;
  margin: auto;
  margin-bottom: 4vh;
}
.mandalTitle{
  width: 20vh;
  height: 20vh;
  text-align: center;
  border : 0.1vh solid #677e52;
  color:#677e52;
  font-size: 2.5vh;
  line-height: 18.9vh;
}
.arrow{
  position: absolute;
  left: 90vw;
  top: 26vh;
  width: 2vh;
  height: 3.5vh;
  background-image: url('../assets/beforeldpi.png');
  background-repeat: no-repeat;
  background-size: contain;
}
.inputBox{
  width: 52vw;
  height: 4vh;
  margin:auto;
}
.inputMandalTitle{
  font-family: 'NotoSansCJKkr-Medium';
  width: 52vw;
  height: 4vh;
  text-align: center;
  border: 0;
  border-bottom: 0.2vh solid #677e52;
  background: #e2e2e2;
  color: #000;
  font-size: 2vh;
}
</style>
