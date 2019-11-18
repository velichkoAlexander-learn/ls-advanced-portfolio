<template lang="pug">
    .inner
        div(v-if="hideOnLogin()")
          AdminHeader
          AdminMenu
        router-view

        //- .page-title
        //-   .container.page-title__container
        //-     .page-title__item Блок «Обо мне»
        //-     .page-title__button
        //-       button.add-button(type="button") Добавить группу





</template>

<script>
    import AdminHeader from "./components/AdminHeader";
    import AdminMenu from "./components/AdminMenu";

    export default {
        components: {
            AdminHeader,
            AdminMenu
        },
        methods: {
            hideOnLogin() {
                return !this.$route.path.includes('/login')
            }
        }
    };
</script>

<style lang="postcss">
    @import "normalize.css";
    @import "../styles/mixins.pcss";
    @import "../styles/blocks/admin/*.pcss";
</style>


