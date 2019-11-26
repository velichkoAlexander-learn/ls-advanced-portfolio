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
                    SkillsItem(v-for="skill in category.skills" :key="skill.id" :skill="skill")
              SkillsAddNew(:category="category")

</template>

<script>

    import {mapActions, mapState} from "vuex";
    import AddSkillsCategoryCard from "../AddSkillsCategoryCard";
    import SkillsTitle from "../SkillsTitle";
    import SkillsAddNew from "../SkillsAddNew";
    import SkillsItem from "../SkillsItem";

    export default {
        components: {
            AddSkillsCategoryCard,
            SkillsTitle,
            SkillsAddNew,
            SkillsItem
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
