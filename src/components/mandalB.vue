<template>
  <div>
    <div class = 'title'>만다라트
      <div v-on:click="gomake" class = "fixBtn"></div>
    </div>
    <div class = 'mandalTitle'>
      <div class = 'titleIndex'>{{ title }}</div>
      <div class = 'achievement' >{{ achievement }}</div>
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
  </div>
</template>
<script>
import Vue from 'vue'
// import axios from 'axios'
import Storage from 'vue-web-storage'
Vue.use(Storage)

Vue.component('Box', {
  props: ['mandal'],
  template: '<div class = "Box">{{ mandal }}</div>'
})
export default {
  name: 'mandal',
  data () {
    var mandal = JSON.parse(Vue.$localStorage.get('mandal'))
    var middleMandal = mandal[Vue.$localStorage.get('mclick')]
    return {
      title: Vue.$localStorage.get('title'),
      achievement: middleMandal.middleTitle,
      MandalChk: Vue.$localStorage.get('MandalChk'),
      Box0: (middleMandal.smallMandalArt1.title !== ''),
      Box1: (middleMandal.smallMandalArt2.title !== ''),
      Box2: (middleMandal.smallMandalArt3.title !== ''),
      Box3: (middleMandal.smallMandalArt4.title !== ''),
      Box4: (middleMandal.smallMandalArt5.title !== ''),
      Box5: (middleMandal.smallMandalArt6.title !== ''),
      Box6: (middleMandal.smallMandalArt7.title !== ''),
      Box7: (middleMandal.smallMandalArt8.title !== '')
    }
  },
  methods: {
    gomake () {
      location.replace('#/fixB')
    },
    click1 () {
      Vue.$localStorage.set('lclick', 0)
      location.replace('#/mandalC')
    },
    click2 () {
      Vue.$localStorage.set('lclick', 1)
      location.replace('#/mandalC')
    },
    click3 () {
      Vue.$localStorage.set('lclick', 2)
      location.replace('#/mandalC')
    },
    click4 () {
      Vue.$localStorage.set('lclick', 3)
      location.replace('#/mandalC')
    },
    click6 () {
      Vue.$localStorage.set('lclick', 4)
      location.replace('#/mandalC')
    },
    click7 () {
      Vue.$localStorage.set('lclick', 5)
      location.replace('#/mandalC')
    },
    click8 () {
      Vue.$localStorage.set('lclick', 6)
      location.replace('#/mandalC')
    },
    click9 () {
      Vue.$localStorage.set('lclick', 7)
      location.replace('#/mandalC')
    },
    goup () {
      location.replace('#/mandalA')
    }
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
