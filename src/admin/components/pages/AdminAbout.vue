<template lang="pug">
  div
    .page-title
      .container.page-title__container
        .page-title__item Блок «Обо мне»
        .page-title__button
          button.add-button(
            type="button"
            @click="showCard"
            v-if="!showSkillsCard"
          ) Добавить группу
    section.skills

      .container
        .skills__container
          AddSkillsCategoryCard(v-if="showSkillsCard"  v-on:closeCard="showCard")

          .slills__item(
            v-for="category in categories"
            :key="category.id"
          )
            .skill
              SkillsTitle(:category="category")
              .skill__body
                table.skill__table
                  tbody
                    tr
                      td Git
                      td 100 <span>%</span>
                      td
                        .skill__button.skill__button--rigt
                          button(type="button").skill__btn.skill__btn--edit
                          button(type="button").skill__btn.skill__btn--remove
                      tr
                        td Terminal
                        td 90 <span>%</span>
                        td
                          .skill__button.skill__button--rigt
                            button(type="button").skill__btn.skill__btn--edit
                            button(type="button").skill__btn.skill__btn--remove
                      tr
                        td Gulp
                        td 80 <span>%</span>
                        td
                          .skill__button.skill__button--rigt
                            button(type="button").skill__btn.skill__btn--edit
                            button(type="button").skill__btn.skill__btn--remove
                      tr
                        td Webpack
                        td 85 <span>%</span>
                        td
                          .skill__button.skill__button--rigt
                            button(type="button").skill__btn.skill__btn--edit
                            button(type="button").skill__btn.skill__btn--remove
              .skill__footer
                .skill__input-wrapper.skill__input-wrapper--skill-name
                  input.skill__input(type="text" name="skill_name" placeholder="Новый навык" required)
                .skill__input-wrapper.skill__input-wrapper--skill-percent
                  input.skill__input(type="number" min="10" max="100" name="value" value="100"  step="5" required)
                button(type="button").skill__btn-add
                  span +

</template>

<script>

    import {mapActions, mapState} from "vuex";
    import AddSkillsCategoryCard from "../AddSkillsCategoryCard";
    import SkillsTitle from "../SkillsTitle";

    export default {
        components: {
            AddSkillsCategoryCard,
            SkillsTitle
        },
        data: () => ({
            title: "",
            showSkillsCard: false

        }),
        created() {
            this.fetchCategories(this.userID);
        },
        computed: {
            ...mapState("categories", {
                categories: state => state.categories
            }),
            ...mapState('user', {
                userID: state => state.user.id
            })
        },
        methods: {
            ...mapActions("categories", ["addCategory", "fetchCategories"]),
            async addNewCategory() {
                try {
                    await this.addCategory(this.title);
                } catch (error) {
                    alert(error.message);
                }
            },
            showCard() {
                this.showSkillsCard = !this.showSkillsCard;
            }
        }
    };
</script>
