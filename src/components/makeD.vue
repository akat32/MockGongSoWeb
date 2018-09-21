<template>
  <div>
    <div class = "title">만다라트</div>
    <div class = "circles">
      <div class = "circle1"></div>
      <div class = "circle2"></div>
      <div class = "circle3"></div>
    </div>
    <router-link class = "arrow2" to = "/makeC"></router-link>
    <div class = "inputTitle">만다라트의 원하는 위치에<br />3단계 목표를 정해주세요</div>
    <div class = "introTitle">3단계 목표의 성취도를 변경해<br /> 만다라트의 완성도를 높일 수 있어요</div>
    <div class = "mandal">
      <div class = "mandalLine1">
        <div v-on:click = "Box1Click" v-bind:class = "[Box, {BoxWhite : Bx1}]">{{ Bx1 }}</div>
        <div v-on:click = "Box2Click" v-bind:class = "[Box, {BoxWhite : Bx2}]">{{ Bx2 }}</div>
        <div v-on:click = "Box3Click" v-bind:class = "[Box, {BoxWhite : Bx3}]">{{ Bx3 }}</div>
      </div>
      <div class = "mandalLine2">
        <div v-on:click = "Box4Click" v-bind:class = "[Box, {BoxWhite : Bx4}]">{{ Bx4 }}</div>
        <div v-on:click = "Box5Click" class = "box5">2</div>
        <div v-on:click = "Box6Click" v-bind:class = "[Box, {BoxWhite : Bx6}]">{{ Bx6 }}</div>
      </div>
      <div class = "mandalLine3">
        <div v-on:click = "Box7Click" v-bind:class = "[Box, {BoxWhite : Bx7}]">{{ Bx7 }}</div>
        <div v-on:click = "Box8Click" v-bind:class = "[Box, {BoxWhite : Bx8}]">{{ Bx8 }}</div>
        <div v-on:click = "Box9Click" v-bind:class = "[Box, {BoxWhite : Bx9}]">{{ Bx9 }}</div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import Vue from 'vue'
// import axios from 'axios'
import Storage from 'vue-web-storage'
Vue.use(Storage)

export default {
  name: 'makeD',
  data () {
    var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
    var middle = mandal.middle[Vue.$localStorage.get('middleNum')]
    return {
      Bx1: (middle.small[0] !== '') ? 3 : '',
      Bx2: (middle.small[1] !== '') ? 3 : '',
      Bx3: (middle.small[2] !== '') ? 3 : '',
      Bx4: (middle.small[3] !== '') ? 3 : '',
      Bx6: (middle.small[4] !== '') ? 3 : '',
      Bx7: (middle.small[5] !== '') ? 3 : '',
      Bx8: (middle.small[6] !== '') ? 3 : '',
      Bx9: (middle.small[7] !== '') ? 3 : ''
    }
  },
  methods: {
    Box5Click () {
      location.replace('#/makeC')
    },
    Box1Click () {
      if (this.Bx1 === 3){
        this.Bx1 = ''
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[0] = ''
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        return 0
      }
      var lowTitle = prompt('3단계 목표를 정해주세요!')
      if (lowTitle === null || lowTitle === '') {
        alert('다시 입력해주세요..')
        return 0
        // eslint-disable-next-line
      }
      else {
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[0] = lowTitle
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        this.Bx1 = 3
        // eslint-disable-next-line
      }
    },
    Box2Click () {
      if (this.Bx2 === 3){
        this.Bx2 = ''
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[1] = ''
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        return 0
      }
      var lowTitle = prompt('3단계 목표를 정해주세요!')
      if (lowTitle === null || lowTitle === '') {
        alert('다시 입력해주세요..')
        return 0
        // eslint-disable-next-line
      }
      else {
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[1] = lowTitle
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        this.Bx2 = '3'
        // eslint-disable-next-line
      }
    },
    Box3Click () {
      if (this.Bx3 === 3){
        this.Bx3 = ''
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[2] = ''
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        return 0
      }
      var lowTitle = prompt('3단계 목표를 정해주세요!')
      if (lowTitle === null || lowTitle === '') {
        alert('다시 입력해주세요..')
        return 0
        // eslint-disable-next-line
      }
      else {
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[2] = lowTitle
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        this.Bx3 = 3
        // eslint-disable-next-line
      }
    },
    Box4Click () {
      if (this.Bx4 === 3){
        this.Bx4 = ''
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[3] = ''
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        return 0
      }
      var lowTitle = prompt('3단계 목표를 정해주세요!')
      if (lowTitle === null || lowTitle === '') {
        alert('다시 입력해주세요..')
        return 0
        // eslint-disable-next-line
      }
      else {
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[3] = lowTitle
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        this.Bx4 = 3
        // eslint-disable-next-line
      }
    },
    Box6Click () {
      if (this.Bx6 === 3){
        this.Bx6 = ''
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[4] = ''
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        return 0
      }
      var lowTitle = prompt('3단계 목표를 정해주세요!')
      if (lowTitle === null || lowTitle === '') {
        alert('다시 입력해주세요..')
        return 0
        // eslint-disable-next-line
      }
      else {
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[4] = lowTitle
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        this.Bx6 = 3
        // eslint-disable-next-line
      }
    },
    Box7Click () {
      if (this.Bx7 === 3){
        this.Bx7 = ''
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[5] = ''
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        return 0
      }
      var lowTitle = prompt('3단계 목표를 정해주세요!')
      if (lowTitle === null || lowTitle === '') {
        alert('다시 입력해주세요..')
        return 0
        // eslint-disable-next-line
      }
      else {
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[5] = lowTitle
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        this.Bx7 = 3
        // eslint-disable-next-line
      }
    },
    Box8Click () {
      if (this.Bx8 === 3){
        this.Bx8 = ''
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[6] = ''
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        return 0
      }
      var lowTitle = prompt('3단계 목표를 정해주세요!')
      if (lowTitle === null || lowTitle === '') {
        alert('다시 입력해주세요..')
        return 0
        // eslint-disable-next-line
      }
      else {
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[6] = lowTitle
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        this.Bx8 = 3
        // eslint-disable-next-line
      }
    },
    Box9Click () {
      if (this.Bx9 === 3){
        this.Bx9 = ''
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[7] = ''
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        return 0
      }
      var lowTitle = prompt('3단계 목표를 정해주세요!')
      if (lowTitle === null || lowTitle === '') {
        alert('다시 입력해주세요..')
        return 0
        // eslint-disable-next-line
      }
      else {
        var mandal = JSON.parse(Vue.$localStorage.get('newMandal'))
        var num = Vue.$localStorage.get('middleNum')
        mandal.middle[num].small[7] = lowTitle
        Vue.$localStorage.set('newMandal', JSON.stringify(mandal))
        this.Bx9 = 3
        // eslint-disable-next-line
      }
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
