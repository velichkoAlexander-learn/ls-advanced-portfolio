<template lang="pug">
  .wrapper
    header.header
      .container.header__container
        .header__user
          .user
            .user__avatar
              img(src="../images/content/user.jpg" alt="user")
            .user__info
              .user__name Владимир Астаханов
              .user__logout
                a.logout(href="#" title="Выйти") Выйти
        .header__title Панель администрирования
        .header__logout
          a.logout(href="#" title="Выйти") Выйти
    nav.main-menu
      .container.main-menu__container
        ul.main-menu__list
          li.main-menu__item.main-menu__item--active
            a.main-menu__link(href="#" title="Обо мне") Обо мне
          li.main-menu__item
            a.main-menu__link(href="#" title="Работы") Работы
          li.main-menu__item
            a.main-menu__link(href="#" title="Отзывы") Отзывы
    .page-title
      .container.page-title__container
        .page-title__item Блок «Обо мне»
        .page-title__button
          button.add-button(type="button") Добавить группу
    section.skills
      .container
        .skills__container
          .slills__item
            .skill
              .skill__header
                .skill__input-wrapper
                  input.skill__input(type="text" name="group_name" placeholder="Название новой группы" required)
                .skill__button
                  button(type="button").skill__btn.skill__btn--agree
                  button(type="button").skill__btn.skill__btn--desagree
              .skill__body
              .skill__footer
                .skill__input-wrapper.skill__input-wrapper--skill-name
                  input.skill__input(type="text" name="skill_name" placeholder="Новый навык" required)
                .skill__input-wrapper.skill__input-wrapper--skill-percent
                  input.skill__input(type="number" min="10" max="100" name="value" value="100"  step="5" required)
                button(type="button").skill__btn-add
                  span +
          .slills__item
            .skill
              .skill__header
                .skill__input-wrapper
                  input.skill__input(type="text" name="group_name" placeholder="Название новой группы" value="Frontend"
                    required)
                .skill__button
                  button(type="button").skill__btn.skill__btn--edit
              .skill__body
                table.skill__table
                  tbody
                    tr
                      td Git
                      td 100 <span>%</span>
                      td
                        .skill__button.skill__button--rigt
                          button(type="button").skill__btn.skill__btn--edit
                          button(type="button").skill__btn.skill__btn--remove
                      tr
                        td Terminal
                        td 90 <span>%</span>
                        td
                          .skill__button.skill__button--rigt
                            button(type="button").skill__btn.skill__btn--edit
                            button(type="button").skill__btn.skill__btn--remove
                      tr
                        td Gulp
                        td 80 <span>%</span>
                        td
                          .skill__button.skill__button--rigt
                            button(type="button").skill__btn.skill__btn--edit
                            button(type="button").skill__btn.skill__btn--remove
                      tr
                        td Webpack
                        td 85 <span>%</span>
                        td
                          .skill__button.skill__button--rigt
                            button(type="button").skill__btn.skill__btn--edit
                            button(type="button").skill__btn.skill__btn--remove
              .skill__footer
                .skill__input-wrapper.skill__input-wrapper--skill-name
                  input.skill__input(type="text" name="skill_name" placeholder="Новый навык" required)
                .skill__input-wrapper.skill__input-wrapper--skill-percent
                  input.skill__input(type="number" min="10" max="100" name="value" value="100"  step="5" required)
                button(type="button").skill__btn-add
                  span +

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

  * {
    box-sizing: border-box;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    color: inherit;
    cursor: pointer;
  }

  button[type="button"] {
    cursor: pointer;
    background-color: transparent;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  .wrapper {
    background-color: #f7f9fe;
    min-height: 100vh;
  }

  .container {
    max-width: 1110px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;

    @media screen and (max-width: 570px) {
      width: 100%;
      padding: 0 20px;
    }
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
    @media screen and (max-width: 570px) {
      font-size: 14px;
    }

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
    flex-shrink: 0;
  }

  .user__name {
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;

    @media screen and (max-width: 570px) {
      font-size: 16px;
    }
  }

  .user__logout {
    @media screen and (min-width: 361px) {
      display: none;
    }
  }

  /*  end user */

  /* main-menu */

  .main-menu {
    background-color: #ffffff;
  }

  .main-menu__list {
    display: flex;
    @media screen and (max-width: 420px) {
      justify-content: space-between;
    }
  }

  .main-menu__item {
    position: relative;
    color: #414c63;
    font-weight: 400;

    &:hover {
      font-weight: 600;
    }

    &--active {
      color: #383bcf;
      font-weight: 600;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background-color: currentColor;
      }
    }
  }

  .main-menu__link {
    padding: 30px;
    font-size: 16px;
    line-height: 1;
    font-weight: inherit;
    color: currentColor;
    display: inline-block;
    text-decoration: none;

    @media screen and (max-width: 570px) {
      padding: 30px 17px;
      font-size: 14px;
    }

    &::after {
      display: block;
      content: attr(title);
      font-weight: 600;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
  }

  /*  page-title */
  .page-title {
    padding: 60px 0;

    @media screen and (max-width: 570px) {
      padding: 40px 0;
    }
  }

  .page-title__container {
    display: flex;
    align-items: center;
    @media screen and (max-width: 570px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .page-title__item {
    margin-right: 60px;
    font-size: 21px;
    font-weight: 700;
    color: #414c63;
    @media screen and (max-width: 570px) {
      font-size: 18px;
      line-height: 1;
      margin-bottom: 30px;
    }

  }

  /*  end page-title */
  /*  add-button*/
  .add-button {
    padding-left: 34px;
    position: relative;
    font-size: 16px;
    line-height: 2.12;
    font-weight: 600;
    color: #383bcf;
    background-color: transparent;
    border: none;
    @media screen and (max-width: 570px) {
      font-size: 14px;
      line-height: 1;
    }

    &::after {
      content: '+';
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 21px;
      height: 21px;
      font-size: 15px;
      line-height: 1.01;
      font-weight: 400;
      color: #ffffff;
      background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
      border-radius: 50%;
    }
  }

  /*  end add-button*/

  /*  skill */
  .skill {
    /*max-width: 525px;*/
    min-height: 387px;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);

  }

  .skill__header {
    padding: 14px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(#1f232d, .15);

    .skill__input-wrapper {
      max-width: 273px;
      width: 100%;
    }
  }

  .skill__input {
    font-size: 18px;
    font-family: 'Open Sans', Helvetica, sans-serif;
    line-height: 1.89;
    font-weight: 600;
    color: #414c63;
    width: 100%;
    border: none;
    border-bottom: 1px solid transparent;

    @media screen and (max-width: 420px) {
      font-size: 16px;
    }


    &::placeholder {
      color: rgba(#414c63, .51);
    }

    &:focus {
      border-color: #000000;
    }
  }

  .skill__button {
    display: flex;
    align-items: center;

    &--rigt {
      justify-content: flex-end;
    }
  }

  .skill__btn {
    width: 16px;
    height: 16px;
    border: none;
    transition: fill .25s;

    &:not(:last-child) {
      margin-right: 20px;
    }

    &--agree {
      background: svg-load('Tick.svg', fill=#00d70a, width=100%, height=100%);
    }

    &--desagree {
      background: svg-load('Cross.svg', fill=#bf2929, width=100%, height=100%);
    }

    &--edit {
      background: svg-load('pencil.svg', fill=#a0a5b1, width=100%, height=100%);

      &:hover {
        background: svg-load('pencil.svg', fill=#414c63, width=100%, height=100%);
      }
    }

    &--remove {
      background: svg-load('trash.svg', fill=#a0a5b1, width=100%, height=100%);

      &:hover {
        background: svg-load('trash.svg', fill=#414c63, width=100%, height=100%);
      }
    }
  }

  .skill__body {
    padding: 30px 0;
  }

  .skill__table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    font-size: 16px;
    line-height: 2;
    font-weight: 400;
    color: #414c63;

    @media screen and (max-width: 420px) {
      font-size: 14px;
    }

    tr {
      transition: background-color .25s;

      &:hover {
        background-color: #f7f9fe;
      }
    }

    td {
      width: 16%;
      text-align: center;

      &:nth-of-type(1) {
        width: 67%;
        text-align: left;
        @media screen and (max-width: 760px) {
          width: 50%;
        }
      }

      span {
        font-size: 16px;
        line-height: 2;
        font-weight: 400;
        color: #414c63;
        opacity: 0.7;
      }
    }
  }

  .skill__footer {
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .skill__btn-add {
    position: relative;
    width: 40px;
    height: 40px;
    font-size: 30px;
    line-height: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    color: #ffffff;
    border-radius: 50%;
    flex-shrink: 0;
    border: none;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);

    span {
      position: relative;
      z-index: 2;
      font-size: 30px;
      line-height: 1;
    }

    &:hover {
      &::after {
        opacity: 1;
      }
    }

    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      opacity: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to right, #3f35cb 0%, #006aed 100%);
      border-radius: 50%;
      transition: opacity .35s;
    }
  }

  .skill__input-wrapper {
    &--skill-name {
      max-width: 218px;
      margin-right: 10px;

      input {
        padding: 0 20px;
        border-color: #a0a5b1;
      }
    }

    &--skill-percent {
      position: relative;
      margin-right: 35px;
      flex-shrink: 0;

      &:focus, &:hover {
        &::before {
          display: none;
        }
      }

      input {
        padding: 0 10px;
        font-size: 16px;
        line-height: 2;
        font-weight: 400;
        color: #414c63;
        border-color: #a0a5b1;
      }

      &::before {
        content: '%';
        z-index: 1;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-family: 'Open Sans', Helvetica, sans-serif;
        font-size: 16px;
        line-height: 2;
        font-weight: 400;
        color: #414c63;
        opacity: 0.7;

      }
    }
  }

  .skills__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;

    @media screen and (max-width: 990px) {
      grid-gap: 20px
    }

    @media screen and (max-width: 760px) {
      grid-template-columns: 1fr ;
    }
    @media screen and (max-width: 420px) {
      margin: 0 -20px;
    }

  }


</style>
