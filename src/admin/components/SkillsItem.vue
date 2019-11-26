<template lang="pug">
    tr(v-if="editMode" @keyup.enter="editExistedSkill" @keyup.esc="editMode = !editMode")
      td
        input(type="text" name="skillTitle" v-model="editedSkill.title")
      td
        input(type="number" name="skillPercent" v-model="editedSkill.percent")
      td
        .skill__button.skill__button--rigt
          button(type='button' @click="editExistedSkill").skill__btn.skill__btn--agree
          button(type='button' @click="editMode = !editMode").skill__btn.skill__btn--desagree
    tr(v-else)
      td {{ skill.title }}
      td {{ skill.percent }} <span>%</span>
      td
        .skill__button.skill__button--rigt
          button(type='button' @click="editMode = !editMode").skill__btn.skill__btn--edit
          button(type='button' @click="deleteSkill(skill)").skill__btn.skill__btn--remove

</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "SkillsItem",
        props: {
            skill: Object
        },
        data() {
            return {
                editMode: false,
                editedSkill: {...this.skill}
            };
        },
        methods: {
            ...mapActions('skills', ['deleteSkill', 'editSkill']),
            editExistedSkill() {
                this.editMode = !this.editMode;
                this.editSkill(this.editedSkill);
            }
        }
    };
</script>

<style scoped>

</style>
