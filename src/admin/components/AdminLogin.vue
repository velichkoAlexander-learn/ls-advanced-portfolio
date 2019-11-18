<template lang="pug">
  section.login
    form.login__form
      h2.login__title Авторизация
      .input-row
        .input-wrapper
          input.input#login(type="text" name="login"  placeholder=" " required )
          label.input-label(for="login") Логин
      .input-row
        .input-wrapper
          input.input#password(type="password" name="passwors"  placeholder=" " required )
          label.input-label(for="password") Пароль
      button(class="btn btn--main" type="submit") Отправить
</template>

<script>
    export default {
        name: "AdminLogin"
    }
</script>

<style scoped>
  .login {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(../../images/mountain_baloon.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover ;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(#2d3c4e, .9);
      /*opacity: 0.9;*/
    }
  }

  .login__title {
    margin-bottom: 35px;
    font-size: 36px;
    line-height: 1;
    font-weight: 700;
    color: #414c63;
    text-align: center;
  }
  .login__form {
    position: relative;
    z-index: 10;
    max-width: 560px;
    width: 100%;
    padding: 60px 75px;
    background-color: #ffffff;
  }

  .input-row {
    width: 100%;
    &>* {
      flex: 1 1 100%;
    }
  }

  .input-wrapper {
    padding-left: 45px;
    position: relative;
    width: 100%;
  }

  .input-label {
    left: 45px;
  }

  .input {
    width: 100%;
  }

  .btn {
    margin: 0 auto;
    border: none;
    display: block;


    &--main {
      max-width: 348px;
      width: 100%;
      padding: 31px 20px;
      font-size: 18px;
      font-weight: 700;
      line-height: 1;
      color: #ffffff;
      text-transform: uppercase;
      background-color: white;
      background-image: linear-gradient(to right, #9300e8 0%, #4a00ed 100%);
      border-radius: 40px 5px;

      &:hover {
        background-image: linear-gradient(to right, #bb00ff 0%, #5900ff 100%);
      }
    }
  }

</style>
