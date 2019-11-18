<template lang="pug">
header.header
  .container.header__container
    .header__user
      .user
        .user__avatar
          img(src="../../images/content/user.jpg" alt="user")
        .user__info
          .user__name Владимир Астаханов
          .user__logout
            a.logout(href="#" title="Выйти") Выйти
    .header__title Панель администрирования
    .header__logout
      a.logout(href="#" title="Выйти") Выйти
</template>