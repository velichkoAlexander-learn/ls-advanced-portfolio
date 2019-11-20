<template lang="pug">
    section.login
        form.login__form
            h2.login__title Авторизация
            .input-row
                .input-wrapper.input-wrapper--login(:class="{error: validation.hasError('login')}")
                    input.input#login(type="text" name="login"  placeholder=" " required v-model="login" )
                    label.input-label(for="login") Логин
                    div.error-message {{ validation.firstError('login') }}
            .input-row
                .input-wrapper.input-wrapper--password(:class="{error: validation.hasError('password')}")
                    input.input#password(type="password" name="passwors"  placeholder=" " required v-model="password")
                    label.input-label(for="password") Пароль
                    div.error-message {{ validation.firstError('password') }}
            button(class="btn btn--main" type="button" @click="submit") Отправить
</template>

<script>
    import SimpleVueValidation from 'simple-vue-validator';

    const Validator = SimpleVueValidation.Validator;
    export default {
        name: "AdminLogin",
        data() {
            return {
                login: '',
                password: ''
            }
        },
        validators: {
            login: function (value) {
                return Validator.value(value).required().minLength(6);
            },
            password(value) {
                return Validator.value(value).required().minLength(6);
            }
        },
        methods: {
            submit() {
                this.$validate()
                    .then(function (success) {
                        if (success) {
                            alert('Validation succeeded!');
                        }
                    });
            }
        }
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
        background-size: cover;

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

        & > * {
            flex: 1 1 100%;
        }
    }

    .input-wrapper {
        padding-left: 45px;
        position: relative;
        width: 100%;

        &.error {
            border-color: #cd1515;
            .error-message {
                opacity: 1;
                visibility: visible;

            }
        }

      &--login {
        &.error::after {
          background-image: svg-load('avatar-login.svg', fill=#cd1515, width=100%, height=100%);
          opacity: 1;
        }
        &::after {
          content: '';
          background-image: svg-load('avatar-login.svg', fill=#414c63, width=100%, height=100%);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 26px;
          height: 30px;
          opacity: 0.3;
        }
      }

      &--password {
        &.error::after {
          background-image: svg-load('key.svg', fill=#cd1515, width=100%, height=100%);
          opacity: 1;
        }
        &::after {
          content: '';
          background-image: svg-load('key.svg', fill=#414c63, width=100%, height=100%);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 28px;
          height: 28px;
          opacity: 0.3;
        }
      }
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
