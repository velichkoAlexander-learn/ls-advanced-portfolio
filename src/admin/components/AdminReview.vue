<template lang="pug">
    section.reviews
        .container
            form
                .reviews__form
                    .title-header
                        .title-header__title Новый отзыв
                    .review-form
                        .review-form__avatar-wrapper
                            .review-form__avatar-loader
                                .review-form__avatar-ico
                                .review-form__avatar-text Добавить фото
                        .review-form__fields
                            .input-row
                                .input-wrapper(:class="{error: validation.hasError('author')}")
                                    input.input#author(type="text" name="author"  placeholder=" " required v-model="author")
                                    label.input-label(for="author") Имя автора
                                    div.error-message {{ validation.firstError('author') }}
                                .input-wrapper(:class="{error: validation.hasError('title')}")
                                    input.input#title(type="text" name="title"  placeholder=" " required v-model="title")
                                    label.input-label(for="title") Титул автора
                                    div.error-message {{ validation.firstError('title') }}
                            .input-wrapper.textarea-wrapper(:class="{error: validation.hasError('description')}")
                                label.input-label(for="review") Отзыв
                                .textarea-inner
                                    textarea.textarea#review(name="review" placeholder=" " v-model="description")
                                div.error-message {{ validation.firstError('description') }}
                            .review-form__btns
                                .control-btns
                                    button(type="button").control-btn.control-btn--cancel Отмена
                                    button(type="button" @click="save").control-btn.control-btn--save Сохранить
            .review__list
                .review__item
                    button(type="button").add-card
                        .add-card__content
                            .add-card__icon +
                            .add_card_text Добавить отзыв
                .review__item
                    .card
                        .card__author
                            img.card__author-avatar(src="#")
                            .card__author-info
                                .card__author-name Владимир Сабанцев
                                .card__author-position Преподаватель
                        .card__body
                            p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        .card__footer
                            button(type="button").card__btn.card__btn--edit Править
                            button(type="button").card__btn.card__btn--remove Удалить
                .review__item
                    .card
                        .card__author
                            img.card__author-avatar(src="#")
                            .card__author-info
                                .card__author-name Владимир Сабанцев
                                .card__author-position Преподаватель
                        .card__body
                            p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                        .card__footer
                            button(type="button").card__btn.card__btn--edit Править
                            button(type="button").card__btn.card__btn--remove Удалить
</template>

<script>
    import SimpleVueValidation from 'simple-vue-validator';
    const Validator = SimpleVueValidation.Validator;
    export default {
        name: "AdminReview",
        data() {
            return {
                author: '',
                title: '',
                description: ''
            }
        },
        validators: {
            author: function (value) {
                return Validator.value(value).required();
            },
            title(value) {
                return Validator.value(value).required();
            },
            description(value) {
                return Validator.value(value).required();
            }
        },
        methods: {
            save() {
                console.log('shot');
                this.$validate()
                    .then(function (success) {
                        if (success) {
                            alert('Validation succeeded!');
                        }
                    });
            }
        }
    }
</script>

<style scoped>

</style>