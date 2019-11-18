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
                                .input-wrapper
                                    input.input#author(type="text" name="author"  placeholder=" " required )
                                    label.input-label(for="author") Имя автора
                                .input-wrapper
                                    input.input#title(type="text" name="title"  placeholder=" " required )
                                    label.input-label(for="title") Титул автора
                            .textarea-wrapper
                                label.input-label(for="review") Отзыв
                                .textarea-inner
                                    textarea.textarea#review(name="review" placeholder=" ")
                            .review-form__btns
                                .control-btns
                                    button(type="button").control-btn.control-btn--cancel Отмена
                                    button(type="button").control-btn.control-btn--save Сохранить
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
    export default {
        name: "AdminReview"
    }
</script>

<style scoped>

</style>