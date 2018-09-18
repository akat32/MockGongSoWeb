<template>
  <div>
    <div class = "title">만다라트</div>
    <div class = "mandalTitle">
      <div class = "titleIndex">{{title}}</div>
      <div class = "achievement">서브 제목</div>
    </div>
    <div class = "mandal">
      <p> {{achievement}} </p>
    </div>
  </div>
</template>
<script>
import Vue from 'Vue'
// import axios from 'axios'
import Storage from 'vue-web-storage'
Vue.use(Storage)

export default {
  name: 'mandal',
  data () {
    return {
      title: Vue.$localStorage.get('title'),
      achievement: Vue.$localStorage.get('achievement')
    }
  }
}
</script>
<style scoped>
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
