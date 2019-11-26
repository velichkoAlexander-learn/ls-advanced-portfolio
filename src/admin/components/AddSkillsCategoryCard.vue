<template lang="pug">
  .slills__item
    .skill
      .skill__header
        .skill__input-wrapper
          input.skill__input(
            type="text"
            name="group_name"
            placeholder="Название новой группы"
            v-model="skillTitle"
            required)
        .skill__button
          button(type="button" @click="addSkillGroup" ).skill__btn.skill__btn--agree
          button(type="button" @click="$emit('closeCard')").skill__btn.skill__btn--desagree
      .skill__body
      .skill__footer
        .skill__input-wrapper.skill__input-wrapper--skill-name
          input.skill__input(type="text" name="skill_name" placeholder="Новый навык" required disabled)
        .skill__input-wrapper.skill__input-wrapper--skill-percent
          input.skill__input(type="number" min="10" max="100" name="value" value="100"  step="5" required disabled)
        button(type="button" disabled).skill__btn-add

          span +
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        name: "AddSkillsCategoryCard",

        data() {
            return {
                skillTitle: ""
            };
        },
        methods: {
            ...mapActions("categories", ["addCategory"]),
            async addSkillGroup() {
                try {
                    await this.addCategory(this.skillTitle);
                    this.skillTitle = "";
                    this.$emit('closeCard');
                } catch (error) {
                    alert(error.message)
                }
            }
        }
    }
</script>

<style scoped>

</style>
