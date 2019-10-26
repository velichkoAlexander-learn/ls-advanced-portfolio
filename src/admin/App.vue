<template lang="pug">
  header.header
    .container.header__container
      .header__user
        .user
          .user__avatar
            img(src="../images/content/user.jpg" alt="user")
          .user__info
            .user__name Владимир Астаханов
            .user__logout
              a.logout(href="#") Выйти
      .header__title Панель администрирования
      .header__logout
        a.logout(href="#") Выйти


</template>

<style lang="postcss">
  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgba(255, 255, 255, 0.9);
  }

  a {
    color: inherit;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
  .maincontent {
    overflow: hidden;
    min-height: 100%;
    position: relative;
  }

  .container {
    max-width: 1110px;
    width: calc(100% - 30px);
    padding: 0 15px;
    margin: 0 auto;
  }

  /* header */
  .header {
    padding: 16px 0;
    background-color: #3e3e59;
    background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
  }

  .header__container {
    display: flex;
    align-items: center;
  }

  .header__user {
    margin-right: 28px;
  }

  .header__title {
    font-size: 14px;
    line-height: 2.43;
    font-weight: 400;
    color: rgba(#ffffff, .5);

    @media screen and (max-width: 570px) {
      display: none;
    }
  }

  .header__logout {
    margin-left: auto;

    @media screen and (max-width: 360px) {
      display: none;
    }
  }

  /* header end */

  /* logout */
  .logout {
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    color: rgba(#ffffff, 0.7);
    border-bottom: 1px solid currentColor;
    transition: color .25s;

    &:hover {
      border: none;
      color: rgba(#ffffff, .9);
    }
  }
  /* end logout */

  /* user */
  .user {
    display: flex;
    align-items: center;
  }

  .user__info {
    line-height: 1.3;
  }

  .user__avatar {
    margin-right: 20px;
    width: 44px;
    height: 45px;
    overflow: hidden;
    border-radius: 50%;
  }

  .user__name {
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
  }

  .user__logout {
    @media screen and (min-width: 361px) {
      display: none;
    }
  }

  /*  end user */


</style>
