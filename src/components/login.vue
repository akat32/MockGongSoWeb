<template>
  <div>
    <div class = "Logo"></div>
    <div class = "inputArea">
      <input v-model = "email" type="text" class = "email" placeholder="E-mail"/>
      <input v-model = "passwd" type="password" class = "passwd" placeholder="Password"/>
    </div>
    <div class = "LoginBtn" v-on:click = "login">로그인</div>
    <div class = "signText">
      <span class = "index">계정이 없으신가요? <router-link to="/register">회원가입하기</router-link></span>
    </div>
    <div class = "textSocial">소셜로그인</div>
    <div class = "social">
      <div class = "facebook"></div>
      <div class = "google"></div>
      <div class = "kakaotalk"></div>
    </div>
  </div>
</template>
<script>
import Vue from 'Vue'
import axios from 'axios'
import Storage from 'vue-web-storage'
Vue.use(Storage)

export default {
  name: 'login',
  methods: {
    async login () {
      var result = await axios.post('http://iwin247.kr:3321/signin', {
        email: this.email,
        passwd: this.passwd
      }).catch((response) => {
        alert('아이디, 비밀번호를 확인해주세요!')
        return 0
      })
      if (result.status === 200) {
        Vue.$localStorage.set('token', result.data.data.token)
        Vue.$localStorage.set('name', result.data.data.name)
        Vue.$localStorage.set('title', result.data.data.title)
        Vue.$localStorage.set('MandalChk', result.data.data.MandalChk)
        Vue.$localStorage.set('triMandalChk', result.data.data.triMandalChk)
        Vue.$localStorage.set('startDay', result.data.data.startDay)
        Vue.$localStorage.set('achievement', result.data.data.achievement)
        location.replace('#/')
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  margin : 0;
}
.Logo{
  background-image: url('../assets/main_logoldpi.png');
  background-repeat: no-repeat;
  background-size: contain;
  width: 14.5vh;
  height: 14.5vh;
  margin:auto;
  margin-top:14.7vh;
}
.inputArea{
  width: 58vw;
  height: 12vh;
  margin:auto;
  margin-top : 9vh;
  margin-bottom: 4.5vh;
}
.email{
  margin-bottom: 2vh;
}
.passwd{
}
::placeholder{
  font-family: 'NotoSansCJKkr-Medium';
  font-size: 2vh;
  color:#000;
}
.inputArea > input{
  text-indent: 0.5vh;
  font-size: 2vh;
  background: #e2e2e2;
  border: 0px;
  border-bottom: 2px solid #b7ca79;
  width: 100%;
  height: 4vh;
}
a{
  text-decoration:none;
  color:#000;
  font-weight: bold;
}
.LoginBtn{
  background: #b7ca79;
  width: 60vw;
  height: 6vh;
  margin:auto;
  border-radius: 0.5em;
  text-align: center;
  line-height: 6vh;
  font-family: 'NotoSansCJKkr-Bold';
}
.signText{
  font-family: 'NotoSansCJKkr-Medium';
  width: 47vw;
  text-align: center;
  margin: auto;
  margin-top: 1.8vh;
  margin-bottom: 10vh;
}
.textSocial{
  font-family: 'NotoSansCJKkr-Medium';
  font-size: 1.9vh;
  text-align: center;
  margin-bottom: 2.5vh;
}
.index{
  font-size: 1.9vh;
}
.social{
  background: #e2e2e2;
  width: 23vh;
  height: 6vh;
  margin:auto;
  display: flex;
}
.social > div{
  height: 6vh;
  width: 6vh;
  border-radius: 2em;
}
.facebook{
  background-image: url('../assets/facebook.png');
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 2.5vh;
}
.google{
  background-image: url('../assets/google.png');
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 2.5vh;
}
.kakaotalk{
  background-image: url('../assets/kakao.png');
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
