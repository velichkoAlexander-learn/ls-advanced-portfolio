<template lang="pug">
  .not-found-page
    .container
      h1.not-found-page__title 404 - страница не найдена.

</template>

<script>
    export default {
        name: "AdminNotFound"
    }
</script>

<style scoped>
  .not-found-page {
    height: calc(100vh - 153px);
    display: flex;
    justify-content: center;
    align-items: center;

    &__title {
      text-align: center;
    }
  }

</style>
