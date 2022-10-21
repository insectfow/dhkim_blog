<template>
  <div class="login">
    <div class="container">
      <div class="login-wrap">
        <div class="login-form">
          <h3>Login</h3>
          <div class="input-wrap input-id">
            <input type="text" placeholder="ID" v-model="userId">
          </div>
          <div class="input-wrap input-pw">
            <input type="password" placeholder="PW" v-model="userPassword">
          </div>
          <div class="input-wrap input-button">
            <button @click="login">로그인하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      userPassword: ''
    }
  },
  methods: {
    async login() {
      if (this.userId == '' || this.userPassword == '') return this.$store.commit('toggleModal', {text: '다시 입력해주세요.'});

      await this.$store.dispatch('getLogin', {
        id: this.userId,
        pw: this.userPassword
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 40px;
}
.login-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    display: inline-block;
    min-width: 30%;
    height: initial;
    > h3 {
      text-align: center;
      font-size: 4rem;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .input-wrap {
      width: 100%;
      height: 50px;
      margin-bottom: 10px;
      > input {
        width: 100%;
        height: 100%;
        font-size: 1.8rem;
        box-sizing: border-box;
      }
      > button {
        width: 100%;
        height: 100%;
        font-size: 1.8rem;
        box-sizing: border-box;
      }
    }
    .input-button {
      margin-top: 30px;
    }
  }
}

@media screen and (max-width:1280px) {
  .login-wrap {
    .login-form {
      width: 100%;
    }
  }
}

</style>