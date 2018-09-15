<template>
  <div>
    <p class = "day">만다라트 11일째 달성중</p>
    <div class = "img">
      <img src="../assets/step_1ldpi.png" class = "inner_img"/>
    </div>
    <p class = "achievement">21<span>%</span></p>
  </div>
</template>

<script>
export default {
  name: 'mainPage'
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
</style>
