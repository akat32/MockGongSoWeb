<template>
  <div>
    <div class = 'title'>만다라트</div>
    <div class = 'mandalTitle'>
      <div class = 'titleIndex'>{{ title }}</div>
      <div class = 'achievement' >지금까지 {{ achievement }}% 달성</div>
    </div>
    <div class = 'mandal'>
      <div class = 'mandalLine1'>
        <Box @click.native="click1" v-bind:class = '{BoxWhite : Box0}'></Box>
        <div style = 'margin-right: 2.5vh;'></div>
        <Box @click.native="click2" v-bind:class = '{BoxWhite : Box1}'></Box>
        <div style = 'margin-right: 2.5vh;'></div>
        <Box @click.native="click3" v-bind:class = '{BoxWhite : Box2}'></Box>
      </div>
      <div class = 'mandalLine2'>
        <Box @click.native="click4" v-bind:class = '{BoxWhite : Box3}'></Box>
        <div style = 'margin-right: 2.5vh;'></div>
        <div class = 'Box5' v-on:click="goup">2</div>
        <Box @click.native="click6" v-bind:class = '{BoxWhite : Box4}'></Box>
      </div>
      <div class = 'mandalLine3'>
        <Box @click.native="click7" v-bind:class = '{BoxWhite : Box5}'></Box>
        <div style = 'margin-right: 2.5vh;'></div>
        <Box @click.native="click8" v-bind:class = '{BoxWhite : Box6}'></Box>
        <div style = 'margin-right: 2.5vh;'></div>
        <Box @click.native="click9" v-bind:class = '{BoxWhite : Box7}'></Box>
      </div>
    </div>
    <div class = "btn1" v-on:click = "goup">돌아가기</div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import Storage from 'vue-web-storage'
Vue.use(Storage)

Vue.component('Box', {
  props: ['mandal'],
  template: '<div class = "Box">{{ mandal }}</div>'
})
export default {/* eslint-disable */
  name: 'mandal',
  data () {
    var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
    return {
      title: Vue.$localStorage.get('title'),
      achievement: Vue.$localStorage.get('achievement'),
      MandalChk: Vue.$localStorage.get('MandalChk'),
      Box0: (mandal[0].middleTitle !== ''),
      Box1: (mandal[1].middleTitle !== ''),
      Box2: (mandal[2].middleTitle !== ''),
      Box3: (mandal[3].middleTitle !== ''),
      Box4: (mandal[4].middleTitle !== ''),
      Box5: (mandal[5].middleTitle !== ''),
      Box6: (mandal[6].middleTitle !== ''),
      Box7: (mandal[7].middleTitle !== '')
    }
  },
  methods: {
    async click1 () {
      if (this.Box0) {
        this.Box0 = !this.Box0
        var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
        mandal[0].middleTitle = ''
        Vue.$localStorage.set('mandal', JSON.stringify(mandal))
        return 0
      }
      var newTitle = prompt('새로운 목표를 입력해주세요!')
      if (newTitle !== null && newTitle !== '') {
        var result = await axios.post('http://iwin247.kr:3321/setMiddle/app', {
          token: Vue.$localStorage.get('token'),
          order: 0,
          title: newTitle
        }).catch((response) => {
          alert('에러..')
        })
        if (result.status === 200) {
          var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
          mandal[0].middleTitle = newTitle
          Vue.$localStorage.set('mandal', JSON.stringify(mandal))
          this.Box0 = true
          /* eslint-disable */
        }
      }
      else {
        alert('다시 입력해주세요!')
      }
    },
    async click2 () {
      if (this.Box1) {
        this.Box1 = !this.Box1
        var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
        mandal[1].middleTitle = ''
        Vue.$localStorage.set('mandal', JSON.stringify(mandal))
        return 0
      }
      var newTitle = prompt('새로운 목표를 입력해주세요!')
      if (newTitle !== null && newTitle !== '') {
        var result = await axios.post('http://iwin247.kr:3321/setMiddle/app', {
          token: Vue.$localStorage.get('token'),
          order: 1,
          title: newTitle
        }).catch((response) => {
          alert('에러..')
        })
        if (result.status === 200) {
          var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
          mandal[1].middleTitle = newTitle
          Vue.$localStorage.set('mandal', JSON.stringify(mandal))
          this.Box1 = true
          /* eslint-disable */
        }
      }
      else {
        alert('다시 입력해주세요!')
      }
    },
    async click3 () {
      if (this.Box2) {
        this.Box2 = !this.Box2
        var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
        mandal[2].middleTitle = ''
        Vue.$localStorage.set('mandal', JSON.stringify(mandal))
        return 0
      }
      var newTitle = prompt('새로운 목표를 입력해주세요!')
      if (newTitle !== null && newTitle !== '') {
        var result = await axios.post('http://iwin247.kr:3321/setMiddle/app', {
          token: Vue.$localStorage.get('token'),
          order: 2,
          title: newTitle
        }).catch((response) => {
          alert('에러..')
        })
        if (result.status === 200) {
          var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
          mandal[2].middleTitle = newTitle
          Vue.$localStorage.set('mandal', JSON.stringify(mandal))
          this.Box2 = true
          /* eslint-disable */
        }
      }
      else {
        alert('다시 입력해주세요!')
      }
    },
    async click4 () {
      if (this.Box3) {
        this.Box3 = !this.Box3
        var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
        mandal[3].middleTitle = ''
        Vue.$localStorage.set('mandal', JSON.stringify(mandal))
        return 0
      }
      var newTitle = prompt('새로운 목표를 입력해주세요!')
      if (newTitle !== null && newTitle !== '') {
        var result = await axios.post('http://iwin247.kr:3321/setMiddle/app', {
          token: Vue.$localStorage.get('token'),
          order: 3,
          title: newTitle
        }).catch((response) => {
          alert('에러..')
        })
        if (result.status === 200) {
          var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
          mandal[3].middleTitle = newTitle
          Vue.$localStorage.set('mandal', JSON.stringify(mandal))
          this.Box3 = true
          /* eslint-disable */
        }
      }
      else {
        alert('다시 입력해주세요!')
      }
    },
    async click6 () {
      if (this.Box4) {
        this.Box4 = !this.Box4
        var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
        mandal[4].middleTitle = ''
        Vue.$localStorage.set('mandal', JSON.stringify(mandal))
        return 0
      }
      var newTitle = prompt('새로운 목표를 입력해주세요!')
      if (newTitle !== null && newTitle !== '') {
        var result = await axios.post('http://iwin247.kr:3321/setMiddle/app', {
          token: Vue.$localStorage.get('token'),
          order: 4,
          title: newTitle
        }).catch((response) => {
          alert('에러..')
        })
        if (result.status === 200) {
          var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
          mandal[4].middleTitle = newTitle
          Vue.$localStorage.set('mandal', JSON.stringify(mandal))
          this.Box4 = true
          /* eslint-disable */
        }
      }
      else {
        alert('다시 입력해주세요!')
      }
    },
    async click7 () {
      if (this.Box5) {
        this.Box5 = !this.Box5
        var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
        mandal[5].middleTitle = ''
        Vue.$localStorage.set('mandal', JSON.stringify(mandal))
        return 0
      }
      var newTitle = prompt('새로운 목표를 입력해주세요!')
      if (newTitle !== null && newTitle !== '') {
        var result = await axios.post('http://iwin247.kr:3321/setMiddle/app', {
          token: Vue.$localStorage.get('token'),
          order: 5,
          title: newTitle
        }).catch((response) => {
          alert('에러..')
        })
        if (result.status === 200) {
          var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
          mandal[5].middleTitle = newTitle
          Vue.$localStorage.set('mandal', JSON.stringify(mandal))
          this.Box5 = true
          /* eslint-disable */
        }
      }
      else {
        alert('다시 입력해주세요!')
      }
    },
    async click8 () {
      if (this.Box6) {
        this.Box6 = !this.Box6
        var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
        mandal[6].middleTitle = ''
        Vue.$localStorage.set('mandal', JSON.stringify(mandal))
        return 0
      }
      var newTitle = prompt('새로운 목표를 입력해주세요!')
      if (newTitle !== null && newTitle !== '') {
        var result = await axios.post('http://iwin247.kr:3321/setMiddle/app', {
          token: Vue.$localStorage.get('token'),
          order: 6,
          title: newTitle
        }).catch((response) => {
          alert('에러..')
        })
        if (result.status === 200) {
          var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
          mandal[6].middleTitle = newTitle
          Vue.$localStorage.set('mandal', JSON.stringify(mandal))
          this.Box6 = true
          /* eslint-disable */
        }
      }
      else {
        alert('다시 입력해주세요!')
      }
    },
    async click9 () {
      if (this.Box7) {
        this.Box7 = !this.Box7
        var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
        mandal[7].middleTitle = ''
        Vue.$localStorage.set('mandal', JSON.stringify(mandal))
        return 0
      }
      var newTitle = prompt('새로운 목표를 입력해주세요!')
      if (newTitle !== null && newTitle !== '') {
        var result = await axios.post('http://iwin247.kr:3321/setMiddle/app', {
          token: Vue.$localStorage.get('token'),
          order: 7,
          title: newTitle
        }).catch((response) => {
          alert('에러..')
        })
        if (result.status === 200) {
          var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
          mandal[7].middleTitle = newTitle
          Vue.$localStorage.set('mandal', JSON.stringify(mandal))
          this.Box7 = true
          /* eslint-disable */
        }
      }
      else {
        alert('다시 입력해주세요!')
      }
    },
    goup () {
      location.replace('#/mandalA')
    }
  }
}

</script>
<style scoped>
.btn1{
  width: 78vw;
  height: 7vh;
  margin:auto;
  margin-top: 3vh;
  background: #677e52;
  border-radius: 0.5em;
  text-align: center;
  line-height: 7vh;
  font-size: 2.5vh;
  color: #b7ca79;
  font-family: 'NotoSansCJKkr-Medium';
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
::placeholder{
  color : #000;
}
.bar{
  background: #b7ca79;
  position: absolute;
  top: 90.4vh;
  width: 20%;
  height: 0.7vh;
  z-index: 100;
}
.mandal{
  width: 45vh;
  height: 45vh;
  margin : auto;
  margin-top: 5.5vh;
}
.mandalLine1, .mandalLine2, .mandalLine3{
  width: 100%;
  height: 13vh;
  display: flex;
}
.Box{
  width: 13vh;
  height: 13vh;
  background-color: #e2e2e2;
  border: 0.2vh solid #677e52;
}
.Box1, .Box2, .Box3{
  width: 13vh;
  height: 13vh;
  background-color: #e2e2e2;
  border: 0.2vh solid #677e52;
}
.Box4, .Box5, .Box6{
  width: 13vh;
  height: 13vh;
  background-color: #e2e2e2;
  border: 0.2vh solid #677e52;
}
.Box7, .Box8, .Box9{
  width: 13vh;
  height: 13vh;
  background-color: #e2e2e2;
  border: 0.2vh solid #677e52;
}
.Box1, .Box2, .Box4, .Box5, .Box7, .Box8{
  margin-right: 2.5vh
}
.mandalLine1, .mandalLine2{
  margin-bottom: 2.5vh;
}
.Box5{
  background-color: #b7ca79;
  border: 0.2vh solid #b7ca79;
  font-size: 3.5vh;
  color: #677e52;
  font-weight: bold;
  text-align: center;
  line-height: 12vh;
}
.BoxWhite{
  background-color: #fff;
}
.Logo{
  width: 20.6vh;
  height: 20.6vh;
  background-image: url('../assets/main_logoldpi.png');
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
.non_mandal{
  width: 20.6vh;
  height: 30vh;
  margin:auto;
  margin-top: 22vh;
  margin-bottom: 10vh;
}
</style>
