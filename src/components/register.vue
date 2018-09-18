<template>
  <div class = "inner">
    <a href="#/login"><div class = "back"></div></a>
    <div class = "title">회원가입</div>
    <div class = "Logo"></div>
    <div class = "inputArea">
      <input v-model = "name" type="text" class = "name" placeholder="이름"/>
      <input v-model = "email" type="email" class = "email" placeholder="E-mail"/>
      <input v-model = "passwd" type="password" class = "passwd" placeholder="Password"/>
      <input v-model = "repasswd" type="password" class = "confirmPasswd" placeholder="Confirm Password"/>
    </div>
    <div class = "RegBtn" v-on:click = "register">가입하기</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'register',
  methods: {
    async register () {
      if (this.passwd !== this.repasswd) {
        alert('비밀번호가 틀렸습니다!')
        return 0
      }
      var result = await axios.post('http://iwin247.kr:3321/signup', {
        name: this.name,
        email: this.email,
        passwd: this.passwd
      }).catch((response) => {
        return alert('이메일이 중복되었어요!')
      })
      if (result.status === 200) {
        alert('환영합니다! ' + this.name + '님!')
        location.replace('#/login')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
}
.inner{
  position: relative;
}
.chuk{
  width: 100%;
  background: #e2e2e2;
  height: 1px;
}
.back{
  position: absolute;
  left: 8.3vw;
  top: -11.4vh;
  width: 2.5vh;
  height: 3.5vh;
  background-image: url('../assets/leftldpi.png');
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 100;
}
.title{
  position: absolute;
  font-family: 'NotoSansCJKkr-Regular';
  font-size: 2.5vh;
  text-align: center;
  line-height: 3.5vh;
  width: 18vw;
  height: 3.5vh;
  top: -11.4vh;
  left: 0;
  right: 0;
  margin:auto;
  z-index: 100;
}
.Logo{
  background-image: url('../assets/logo2.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 14.6vh;
  height: 14.6vh;
  border-radius: 50%;
  margin : auto;
  margin-top: 16.7vh;
}
.inputArea{
  width: 60vw;
  height: 34vh;
  margin:auto;
  margin-top : 9vh;
  margin-bottom: 4.5vh;
}
.inputArea > input{
  margin-bottom: 3.8vh;
  font-family: 'NotoSansCJKkr-Regular';
}
::placeholder{
  font-family: 'NotoSansCJKkr-Regular';
  font-size: 2vh;
  color:#000;
}
.inputArea > input{
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  text-indent: 0.6vh;
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
.RegBtn{
  background: #b7ca79;
  width: 62.6vw;
  height: 6vh;
  margin:auto;
  border-radius: 0.5em;
  text-align: center;
  line-height: 5.5vh;
  font-family: 'NotoSansCJKkr-Medium';
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

</style>
