<template lang="pug">
  header.header
    .container.header__container
      .header__user
        .user
          .user__avatar
            router-link(to="/")
              img(src="../../images/content/user.jpg" alt="user")
          .user__info
            .user__name Владимир Астаханов
            .user__logout
              .logout(title="Выйти" @click="logoutCurrentState") Выйти
      .header__title Панель администрирования
      .header__logout
        .logout(title="Выйти" @click="logoutCurrentState") Выйти
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "AdminHeader",
        methods: {
            ...mapActions("user", ["logout"]),
            async logoutCurrentState() {
                const logout = await this.logout();
                if (logout) {
                    this.$router.replace("/login");
                }
            }
        }
    }
</script>
