<template lang="pug">
  .not-found-page
    .container
      h1.not-found-page__title 404 - page not found.

</template>

<script>
    export default {
        name: "AdminNotFound"
    }
</script>

<style scoped>
  .not-found-page {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__title {
      text-align: center;
    }
  }

</style>
