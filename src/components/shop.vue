<template>
  <div>
    <template v-if = "done">
      <div>
        <div class = "title">상점</div>
        <div class = "advertising1"></div>
        <div class = "target">
          <div class = "ad"></div>
        </div>
        <div class = "advertising2"></div>
      </div>
    </template>
    <template v-else>
      <div>
        <div class = "title">상점</div>
        <p class = "day" style="margin-bottom: 3vh;">목공소는 지금<br />공사중</p>
        <div class = "circle"></div>
        <div class = "circle"></div>
        <div class = "circle"></div>
        <div class = "img1">
          <img src = "../assets/vector_smart_object.png" class = "inner_img"/>
        </div>
        <p class = "grayText">더 좋은 기능을 위해<br />조금만 기다려주세요!</p>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'shop',
  data () {
    return {
      done: false
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inner_img{
  height: 100%;
  width: 100%;
  margin:auto;
  margin-left: auto;
  margin-right: auto;
}
.day{
  line-height: 5.3vh;
  margin-top: 19.2vh;
  font-size: 2.1vh;
  font-weight: 600;
  text-align: center;
  font-family: 'NotoSansCJKkr-Regular';
}
.circle{
  width: 0.8vh;
  height: 0.8vh;
  margin: auto;
  margin-bottom: 1.8vh;
  border-radius: 50%;
  background: black;
}
.img1{
  width: 23vh;
  height: 6.4vh;
  margin:auto;
  margin-top: 4vh;
  margin-bottom: 6vh;
  display: flex;
}
.grayText{
  letter-spacing: 0.1vh;
  text-align: center;
  font-size: 2.1vh;
  font-family: 'NotoSansCJKkr-Regular';
  color: black;
  line-height: 3vh;
  font-weight: 600;
}
.title{
  font-family: 'NotoSansCJKkr-Regular';
  width: 100%;
  height: 7vh;
  background: #fff;
  text-align: center;
  line-height: 7vh;
}
.advertising1, .advertising2{
  width: 90vw;
  height: 27vh;
  margin:auto;
  margin-top : 2.7vh;
  border: 0.2vh solid #677e52;
  background: #fff;
}
.target{
  width: 90vw;
  height: 16vh;
  margin : auto;
  margin-top : 2.2vh;
  border: 0.2vh solid #677e52;
  background: #677e52;
  display: flex;
}
.advertising2{
  margin-top: 2.2vh;
}
.ad{
  margin-left: 1.3%;
  margin-top: auto;
  margin-bottom: auto;
  width: 48.9%;
  height: 86.9%;
  background: #fff;
}
</style>
