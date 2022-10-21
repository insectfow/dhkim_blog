<template>
  <div class="about">
    <h1>개노답새키</h1>
    <input type="text" placeholder="아이디" v-model="userId">
    <input type="password" placeholder="패스워드" v-model="userPassword">
    <button @click="login">로그인</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: '',
      userPassword: '',
      userData: {
        id: null,
        password: null
      }
    }
  },
  methods: {
    login() {
      if (this.userId == '' || this.userPassword == '') return alert(`똑바로 입력해 시벌럼아`);

      this.userData.id = this.userId;
      this.userData.password = this.userPassword;
      alert(`${this.userData.id}님 로그인 되었습니다.`);

    }
  }  
}
</script>