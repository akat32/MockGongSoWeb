<template v-if = "triMandalChk">
  <div>
    <div class = "title">만다라트</div>
    <div class = "mandalTitle">
      <div class = "titleIndex">방학 숙제 끝내기</div>
    </div>
    <div class = "mandal">
      <div class = "tri1_border">
        <div class = "tri1"></div>
      </div>
      <div class = "tri_line">
        <div class = "tri2_border">
          <div class = "tri2"></div>
        </div>
        <div class = "triMain_border">
          <!-- <div class = "triMain"></div> -->
        </div>
        <div class = "tri3_border">
          <div class = "tri3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<template v-else>
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
import Vue from 'Vue'
import Storage from 'vue-web-storage'
Vue.use(Storage)
export default {
  name: 'subMandal',
  data () {
    return {
      triMandalChk: Vue.$localStorage.get('triMandalChk')
    }
  }
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
.bar{
  background: #b7ca79;
  position: absolute;
  top: 90.4vh;
  left:20%;
  width: 20%;
  height: 0.7vh;
  z-index: 100;
}
.mandal{
  width: 44vh;
  height: calc( calc(Math.sqrt(21vh) * 2) + 2vh);
  margin : auto;
  margin-top: 7.1vh;
}
.tri1_border, .tri2_border, .tri3_border{
  position: relative;
  width: 0;
  height: 0;
  border-style:solid;
  border-style:solid;
  border-color: transparent transparent #677e52;
  border-width: 0 10.5vh calc(1.732 * 10.5vh) 10.5vh;
}

.tri_line{
  display: flex;
  position: relative;
}
.tri1_border{
  margin : auto;
  margin-bottom: 2vh;
}
.tri1, .tri2, .tri3{
  width: 0;
  height: 0;
  border-style:solid;
  border-style:solid;
  border-color: transparent transparent #fff;
  border-width: 0 10vh calc(1.732 * 10vh) 10vh;
  position: absolute;
  top: 0.6vh;
  left: -10vh;
}
.tri2_border{
  margin-right : 2vh;
}
.tri2, .tri3{
  border-color: transparent transparent #e2e2e2;
}
.triMain_border{
  position: absolute;
  width: 0;
  height: 0;
  border-right: 10.5vh solid transparent;
  border-left: 10.5vh solid transparent;
  border-top: calc(1.732 * 10.5vh) solid #b7ca79;
  left: 0;
  right: 0;
  top:-0.8vh;
  margin : auto;
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
