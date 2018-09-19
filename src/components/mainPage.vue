<template>
  <div>
    <template v-if = "MandalChk">
      <div>
        <p class = "day">만다라트 {{ startDay }}일째 달성중</p>
        <div class = "img">
          <img :src = "imgString" v-on:click = "click" class = "inner_img"/>
        </div>
        <p class = "achievement">{{ achievement }}<span>%</span></p>
      </div>
    </template>
    <template v-else>
      <div>
        <p class = "day" style="margin-bottom: 3vh;">아직 만다라트가<br />만들어지지 않았어요:(</p>
        <div class = "circle"></div>
        <div class = "circle"></div>
        <div class = "circle"></div>
        <div class = "img1">
          <img src = "../assets/step0.png" v-on:click = "click" class = "inner_img"/>
        </div>
        <p class = "grayText">맨 왼쪽 하단의 만다라트 탭을 통해<br />당신만의 목표를 지어보세요!</p>
      </div>
    </template>
  </div>
</template>
<script>
import Vue from 'vue'
// import axios from 'axios'
import Storage from 'vue-web-storage'
Vue.use(Storage)

// imageVariable
// imageVariable = require('../assets/step1')
function dateDiff (_date1, _date2) {
  var diffDate1 = _date1 instanceof Date ? _date1 : new Date(_date1)
  var diffDate2 = _date2 instanceof Date ? _date2 : new Date(_date2)
  diffDate1 = new Date(diffDate1.getFullYear(), diffDate1.getMonth() + 1, diffDate1.getDate())
  diffDate2 = new Date(diffDate2.getFullYear(), diffDate2.getMonth() + 1, diffDate2.getDate())
  var diff = Math.abs(diffDate2.getTime() - diffDate1.getTime())
  diff = Math.ceil(diff / (1000 * 3600 * 24))
  return diff
}
export default {
  name: 'mainPage',
  data () {
    var mandalImgString = 'asd'
    var achievement = Vue.$localStorage.get('achievement')
    var start = dateDiff(Vue.$localStorage.get('startDay'), new Date()) + 1
    if (achievement >= 75) mandalImgString = require('../assets/step_4ldpi.png')
    else if (achievement >= 50) mandalImgString = require('../assets/step_3ldpi.png')
    else if (achievement >= 25) mandalImgString = require('../assets/step_2ldpi.png')
    else mandalImgString = require('../assets/step_1ldpi.png')
    return {
      MandalChk: Vue.$localStorage.get('MandalChk'),
      startDay: start,
      imgString: mandalImgString,
      achievement: Vue.$localStorage.get('achievement')
    }
  },
  methods: {
    click () {
      console.log(dateDiff('', new Date()) + 1)
      // Vue.$localStorage.get('startDay')
      // eslint-disable-next-line
    }
  },
  mounted: () => {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.day{
  margin-top: 19.2vh;
  font-size: 2.2vh;
  text-align: center;
  font-family: 'NotoSansCJKkr-Medium';
}
.img{
  width: 10.7vh;
  height: 14.2vh;
  margin:auto;
  margin-top: 6.6vh;
  margin-bottom: 7.8vh;
  display: flex;
}
.inner_img{
  height: 100%;
  width: 100%;
  margin:auto;
  margin-left: auto;
  margin-right: auto;
}
span{
  font-family: 'NotoSansCJKkr-Regular';
  font-size: 4.3vh;
}
.achievement{
  font-family: 'NotoSansCJKkr-Regular';
  font-size: 6.6vh;
  text-align: center;
  font-weight: 500;
}
.step1{
  width: 10.7vh;
  height: 14.2vh;
  margin:auto;
  margin-top: 6.6vh;
  margin-bottom: 7.8vh;
}
.circle{
  width: 1vh;
  height: 1vh;
  margin: auto;
  margin-bottom: 1vh;
  border-radius: 50%;
  background: gray;
}
.img1{
  width: 8vh;
  height: 8vh;
  margin:auto;
  margin-top: 4vh;
  margin-bottom: 4vh;
  display: flex;
}
.grayText{
  text-align: center;
  font-size: 2.1vh;
  font-family: 'NotoSansCJKkr-Regular';
  color: gray;
  line-height: 3vh;
  font-weight: 600;
}
</style>
