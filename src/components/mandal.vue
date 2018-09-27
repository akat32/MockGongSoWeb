<template>
  <div>
    <template v-if = 'MandalChk'>
      <div>
        <div class = 'title'>만다라트
          <div v-on:click="gomake" class = "fixBtn"></div>
        </div>
        <div class = 'mandalTitle'>
          <div class = 'titleIndex'>{{ title }}</div>
          <div class = 'achievement' >지금까지 {{ achievement }}% 달성 </div>
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
            <div class = 'Box5'>1</div>
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
    <template v-else>
      <div>
        <div class = 'title'>만다라트</div>
        <div class = 'non_mandal'>
          <div class = 'Logo'></div>
          <div class = 'text'>현재 만들어 놓은<br />만다라트 가 없어요!</div>
        </div>
        <router-link to = '/makeA'>
          <div v-on:click='click' class = 'new_mandal'>만다라트 새로 만들기</div>
        </router-link>
      </div>
    </template>
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
    click () {
      var newMandalArt = {
        'middle': [
          {
            'small': ['', '', '', '', '', '', '', ''],
            'title': ''
          },
          {
            'small': ['', '', '', '', '', '', '', ''],
            'title': ''
          },
          {
            'small': ['', '', '', '', '', '', '', ''],
            'title': ''
          },
          {
            'small': ['', '', '', '', '', '', '', ''],
            'title': ''
          },
          {
            'small': ['', '', '', '', '', '', '', ''],
            'title': ''
          },
          {
            'small': ['', '', '', '', '', '', '', ''],
            'title': ''
          },
          {
            'small': ['', '', '', '', '', '', '', ''],
            'title': ''
          },
          {
            'small': ['', '', '', '', '', '', '', ''],
            'title': ''
          }
        ],
        title: '',
        token: Vue.$localStorage.get('token')
      }
      Vue.$localStorage.set('newMandal', JSON.stringify(newMandalArt))
    },
    gomake () {
      location.replace('#/fixA')
    },
    click1 () {
      Vue.$localStorage.set('mclick', 0)
      location.replace('#/mandalB')
    },
    click2 () {
      Vue.$localStorage.set('mclick', 1)
      location.replace('#/mandalB')
    },
    click3 () {
      Vue.$localStorage.set('mclick', 2)
      location.replace('#/mandalB')
    },
    click4 () {
      Vue.$localStorage.set('mclick', 3)
      location.replace('#/mandalB')
    },
    click6 () {
      Vue.$localStorage.set('mclick', 4)
      location.replace('#/mandalB')
    },
    click7 () {
      Vue.$localStorage.set('mclick', 5)
      location.replace('#/mandalB')
    },
    click8 () {
      Vue.$localStorage.set('mclick', 6)
      location.replace('#/mandalB')
    },
    click9 () {
      Vue.$localStorage.set('mclick', 7)
      location.replace('#/mandalB')
    }
  },
  mounted () {
    if (!Vue.$localStorage.get('token')) location.replace('#/login')
  }
}

</script>
<style scoped>
.fixBtn{
  position: absolute;
  top: 2vh;
  right: 2vh;
  background-image: url('../assets/edit_greenldpi.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 3vh;
  height: 4vh;
}
.title{
  position: relative;
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
  font-size: 3.5vh;
  color: #677e52;
  font-weight: bold;
  text-align: center;
  line-height: 12vh;
  background-color: #b7ca79;
  border: 0.2vh solid #b7ca79;
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
