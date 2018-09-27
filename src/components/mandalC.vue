<template>
  <div>
    <div class = "title">만다라트</div>
    <div class = "mandalTitle">
      <div class = "titleIndex">{{title}}</div>
      <div class = "achievement">{{subTitle}}</div>
    </div>
    <div class = "mandal">
      <p> {{achievement}} </p>
      <div v-bind:style="{height: achievement +'%'}" class = "gauge"></div>
    </div>
    <input v-model = "achievement" type ="range" class = "asdasd"/>
    <div v-on:click="doneBtn" class = "doneBtn">수정하기</div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import Storage from 'vue-web-storage'
Vue.use(Storage)

export default {
  name: 'mandal',
  data () {
    var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
    var middleMandal = mandal[Vue.$localStorage.get('mclick')]
    var lowMandal
    if (Vue.$localStorage.get('lclick') === 0) lowMandal = middleMandal.smallMandalArt1
    if (Vue.$localStorage.get('lclick') === 1) lowMandal = middleMandal.smallMandalArt2
    if (Vue.$localStorage.get('lclick') === 2) lowMandal = middleMandal.smallMandalArt3
    if (Vue.$localStorage.get('lclick') === 3) lowMandal = middleMandal.smallMandalArt4
    if (Vue.$localStorage.get('lclick') === 4) lowMandal = middleMandal.smallMandalArt5
    if (Vue.$localStorage.get('lclick') === 5) lowMandal = middleMandal.smallMandalArt6
    if (Vue.$localStorage.get('lclick') === 6) lowMandal = middleMandal.smallMandalArt7
    if (Vue.$localStorage.get('lclick') === 7) lowMandal = middleMandal.smallMandalArt8
    return {
      title: Vue.$localStorage.get('title'),
      subTitle: lowMandal.title,
      achievement: lowMandal.achievement
    }
  },
  methods: {
    async doneBtn () {
      var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
      var lclick = Vue.$localStorage.get('lclick')
      var mclick = Vue.$localStorage.get('mclick')
      if (lclick === 0) mandal[mclick].smallMandalArt1.achievement = this.achievement
      if (lclick === 1) mandal[mclick].smallMandalArt2.achievement = this.achievement
      if (lclick === 2) mandal[mclick].smallMandalArt3.achievement = this.achievement
      if (lclick === 3) mandal[mclick].smallMandalArt4.achievement = this.achievement
      if (lclick === 4) mandal[mclick].smallMandalArt5.achievement = this.achievement
      if (lclick === 5) mandal[mclick].smallMandalArt6.achievement = this.achievement
      if (lclick === 6) mandal[mclick].smallMandalArt7.achievement = this.achievement
      if (lclick === 7) mandal[mclick].smallMandalArt8.achievement = this.achievement
      var result = await axios.post('http://iwin247.kr:3321/setLow/app', {
        token: Vue.$localStorage.get('token'),
        middle: mclick,
        low: lclick,
        achievement: this.achievement
      }).catch((response) => {
        alert('오류..')
      })
      if (result.status === 200) {
        console.log(result.data.achievement)
        Vue.$localStorage.set('achievement', result.data.achievement)
        Vue.$localStorage.set('mandal', JSON.stringify(mandal))
        location.replace('#/mandalB')
      }
    }
  }
}
</script>
<style scoped>
.doneBtn{
  width: 34.3vh;
  height: 6vh;
  background: #b7ca79;
  color: #677e52;
  text-align: center;
  line-height: 6vh;
  border-radius: 0.3em;
  font-size: 2.2vh;
  margin: auto;
  margin-top: 10vh;
  font-weight: bold;
}
.gauge{
  /* position: absolute;
  top: 34.3vh; */
  width: 34.3vh;
  height: 0;
  background: #677e52;
}
.asdasd
{
  width: 34.3vh;
  height: 3vh;
  position: absolute;
  left: 0;
  right: 0;
  margin:auto;
  margin-top:3vh;
}
input[type="range"] {
    -webkit-appearance: none;
    overflow: hidden;
    cursor: pointer;
    border-radius: 0; /* iOS */
}
::-webkit-slider-runnable-track {
    background: #e2e2e2;
}

/*
 * 1. Set to 0 width and remove border for a slider without a thumb
 */
::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 3vh;
    height: 3vh;
    background: #b7ca79;
    box-shadow: -100vw 0 0 100vw  #677e52;
}

::-moz-range-thumb {
    background: #fff;
    height: 40px;
    width: 20px;
    border: 3px solid ##e2e2e2;
}

::-ms-fill-lower {
    background:  #677e52;
}

::-ms-thumb {
    background: #fff;
    border: 2px solid ##e2e2e2;
    height: 40px;
    width: 20px;
    box-sizing: border-box;
}

::-ms-ticks-after {
    display: none;
}

::-ms-ticks-before {
    display: none;
}

::-ms-track {
    background: #e2e2e2;
    color: transparent;
    height: 40px;
    border: none;
}

::-ms-tooltip {
    display: none;
}
p{
  position: absolute;
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  margin : 0;
  font-size: 7.3vh;
  margin-top: auto;
  font-family: 'NotoSansCJKkr-Regular';
  margin-bottom: auto;
  line-height: 33.3vh;
}
.title{
  font-family: 'NotoSansCJKkr-Medium';
  width: 100%;
  height: 7vh;
  background: #fff;
  text-align: center;
  line-height: 7vh;
}
.mandalTitle{
  width: 49vw;
  height: 10vh;
  margin:auto;
  margin-top: 8vh;
}
.titleIndex{
  font-weight: 400;
  width: 100%;
  height: 49%;
  font-size: 2.9vh;
  text-align: center;
  border: 0;
  border-bottom: 0.1vh solid #677e52;
  background:#e2e2e2;
  font-family: 'NotoSansCJKkr-Regular';
  color : #000;
}
.achievement{
  margin-top: 0.5vh;
  text-align: center;
  font-size: 2.1vh;
  border: 0;
  background: #e2e2e2;
  width: 100%;
  font-family: 'NotoSansCJKkr-Light'
}
.mandal{
  position: relative;
  width: 34.3vh;
  height: 34.3vh;
  margin : auto;
  margin-top: 5.5vh;
  background-color: #e2e2e2;
  border : solid 0.2vh #677e52;
}
</style>
