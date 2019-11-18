<template lang="pug">
header.header
  .container.header__container
    .header__user
      .user
        .user__avatar
          img(src="#" alt="user")
        .user__info
          .user__name Владимир Астаханов
          .user__logout
            a.logout(href="#" title="Выйти") Выйти
    .header__title Панель k
    .header__logout
      a.logout(href="#" title="Выйти") Выйти
</template>