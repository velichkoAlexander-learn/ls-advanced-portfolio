<template lang="pug">
  form(@submit.prevent="addNewSkill" :class="{ 'is-blocked': formBlocked }").add-new-skill
    .skill__footer
      .skill__input-wrapper.skill__input-wrapper--skill-name(:class="{error: validation.hasError('skill.title')}")
        input.skill__input(
          type="text"
          name="skill_name"
          placeholder="Новый навык"
          v-model="skill.title"
          required)
        div.error-message {{ validation.firstError('skill.title') }}
      .skill__input-wrapper.skill__input-wrapper--skill-percent(:class="{error: validation.hasError('skill.percent')}")
        input.skill__input(
          type="number"
          min="10"
          max="100"
          name="value"
          value="100"
          v-model="skill.percent"
          required)
        div.error-message {{ validation.firstError('skill.percent') }}
      button(type="submit").skill__btn-add
        span +
</template>

<script>
    import {mapActions} from 'vuex';
    import SimpleVueValidator from 'simple-vue-validator';

    const Validator = SimpleVueValidator.Validator;

    export default {
        name: 'SkillsAddNew',
        props: {
            category: Object
        },
        data() {
            return {
                formBlocked: !this.category,
                skill: {
                    title: '',
                    percent: 0
                }
            };
        },
        validators: {
            'skill.title': value => {
                return Validator.value(value).required('Заполните название');
            },
            'skill.percent': value => {
                return Validator.value(value)
                  .integer('Должно быть числом')
                  .between(0, 100, 'Некорректное значение для процентов')
                  .required('Поле не может быть пустым');
            }
        },
        methods: {
            ...mapActions('skills', ['addSkill']),
            async addNewSkill() {
                if (await this.$validate()) {
                    this.formBlocked = true;
                    this.skill.category = this.category.id;
                    await this.addSkill(this.skill);
                    this.formBlocked = this.skill.title = '';
                    this.skill.percent = 0;
                    this.validation.reset();
                }
            }
        }
    };
</script>

<style  scoped>
  .add-new-skill {
    margin-top: auto;
  }
</style>
