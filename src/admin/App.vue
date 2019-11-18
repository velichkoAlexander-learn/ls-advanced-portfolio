<template lang="pug">
    .wrapper
        AdminHeader
        AdminMenu
        router-view

        //- .page-title
        //-   .container.page-title__container
        //-     .page-title__item Блок «Обо мне»
        //-     .page-title__button
        //-       button.add-button(type="button") Добавить группу


        //- section.login
        //-   form.login__form
        //-     h2.login__title Авторизация
        //-     .input-row
        //-       .input-wrapper
        //-         input.input#author(type="text" name="login"  placeholder=" " required )
        //-         label.input-label(for="author") Логин
        //-     .input-row
        //-       .input-wrapper
        //-         input.input#author(type="password" name="passwors"  placeholder=" " required )
                label.input-label(for="author") Пароль


</template>

<script>
    import AdminHeader from "./components/AdminHeader";
    import AdminMenu from "./components/AdminMenu";

    export default {
        components: {
            AdminHeader,
            AdminMenu
        }
    };
</script>

<style lang="postcss">
    @import "normalize.css";
    @import "../styles/mixins.pcss";
    @import "../styles/blocks/admin/*.pcss";
</style>


