<template>
  <div>
    <div class = "title">환경설정</div>
    <div class = "setting">
      <div class = "userProfile">
        <div class = "profileImg"></div>
        <div class = "name">고 양 이</div>
        <div class = "achievement">만다라트 7일째 사용중</div>
        <div class = "arrow"></div>
      </div>
      <div class = "innerWith">
        <div class = "lockScreen">잠금화면 만다라트 설정</div>
        <div class = "onBtn">ON</div>
      </div>
      <div class = "innerWith">
        <div class = "push">푸시알림 설정</div>
        <div class = "offBtn">OFF</div>
      </div>
      <div class = "innerWith">
        <div class = "terms">약관 및 개인정보 활용 동의</div>
        <div class = "arrow"></div>
      </div>
      <div class = "withdrawal">회원 탈퇴</div>
      <div class = "logout">로그아웃</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'set',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
.setting {
  margin-top: 1.3vh;
  width: 100vw;
}
.setting > div{
  background: #fff;
}
.userProfile{
  height: 13.7vh;
  width: 100%;
  margin-bottom: 1.3vh;
  position: relative;
  display: flex;
}
.lockScreen, .push, .terms, .withdrawal, .logout{
  height: 7.5vh;
  width: 100%;
  margin-bottom: 0.5vh;
  line-height: 7.5vh;
  font-family: 'NotoSansCJKkr-Regular';
  text-indent: 7.8vw;
  font-size: 1.9vh;
}
.push{
  margin-bottom: 1.3vh;
}
.profileImg{
  position: absolute;
  border-radius: 50%;
  height: 10.3vh;
  width: 10.3vh;
  background: #677e52;
  left:7.8vw;
  top:0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
}
.name{
  position: absolute;
  left: 33.3vw;
  top: 27%;
  font-size: 2.3vh;
  font-family: 'NotoSansCJKkr-Regular';
}
.achievement{
  position: absolute;
  left: 33.3vw;
  top: 54.4%;
  font-size: 1.7vh;
  color: #677e52;
  font-family: 'NotoSansCJKkr-Regular';
}
.arrow{
  position: absolute;
  top: 33%;
  left: 90vw;
  background-image: url('../assets/beforeldpi.png');
  background-repeat: no-repeat;
  background-size: contain;
  height: 2vh;
  width: 2vh;
}
.innerWith{
  position: relative;
}
.innerWith > .arrow{
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
}
.onBtn, .offBtn{
  position: absolute;
  right: calc(10vw - 1.5vh);
  top:0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  height: 4.8vh;
  width: 14vw;
  background-color: #ffffff;
  z-index: 10;
  border-radius: 2em;
  text-align: center;
  line-height: 4.8vh;
  font-family: 'NotoSansCJKkr-Regular';
  font-size: 1.8vh;
}
.onBtn{
  border : solid 0.1vh #b7ca79;
  color: #b7ca79;
}
.offBtn{
  border : solid 0.1vh #000;
}
</style>
