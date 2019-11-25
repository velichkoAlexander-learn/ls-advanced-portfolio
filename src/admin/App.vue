<template lang="pug">
  .inner
    div(v-if="hideOnLogin()")
      AdminHeader
      AdminMenu
    router-view
    Tooltip
</template>

<script>
    import AdminHeader from "./components/AdminHeader";
    import AdminMenu from "./components/AdminMenu";
    import Tooltip from "./components/Tooltip";

    export default {
        components: {
            AdminHeader,
            AdminMenu,
            Tooltip
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
  .inner {
    position: relative;
    height: 100vh;
    background: url("../images/admin.jpg") center center no-repeat;
    background-size: cover;
  }
</style>


