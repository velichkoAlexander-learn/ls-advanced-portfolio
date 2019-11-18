<template lang="pug">
  section.works 
      .container
        .works__form
          .works__form-header.title-header
            .works__form-title.title-header__title Редактирование работы
          .works-form
            .works-form__image-wrapper
              .works-form__image
                .works-form__image-text Перетащите или загрузите<br>для загрузки изображения
                button(type="button").works-form__image-btn ЗАГРУЗИТЬ
            .works-form__fields
              .input-wrapper(:class="{error: validation.hasError('name')}")
                input.input#name(type="text" name="name"  placeholder=" " required  v-model="name")
                label.input-label(for="name") Название
                div.error-message {{ validation.firstError('name') }}
              .input-wrapper(:class="{error: validation.hasError('link')}")
                input.input#link(type="text" name="link" placeholder=" "  required v-model="link")
                label.input-label(for="link") Ссылка
                div.error-message {{ validation.firstError('link') }}
              .input-wrapper.textarea-wrapper(:class="{error: validation.hasError('description')}")
                label.input-label(for="description") Описание
                .textarea-inner
                  textarea.textarea#description(name="description" placeholder=" " v-model="description")
                div.error-message {{ validation.firstError('description') }}
              .input-wrapper
                input.input#tag(type="text" name="tag" placeholder=" "  required )
                label.input-label(for="tag") Добавление тэга
              .works-form__tags
                ul.tags
                  li.tags__item
                    span HTML
                    a.tags__link(href="#")
                  li.tags__item
                    span CSS
                    a.tags__link(href="#")
                  li.tags__item
                    span Javascript
                    a.tags__link(href="#")
              .works-form__btns
                .control-btns
                  button(type="button").control-btn.control-btn--cancel Отмена
                  button(type="button" @click="save").control-btn.control-btn--save Сохранить
        .works__list
          .works__item
            button(type="button").add-card
              .add-card__content
                .add-card__icon +
                .add_card_text Добавить работу
          .works__item
            .card
              .card__hero
                //- img.card__hero-image(src="../../images/card_hero.jpg" alt="alt") 
                .card__hero-tags
                  ul.tags
                    li.tags__item
                      span HTML
                    li.tags__item
                      span CSS
                    li.tags__item
                      span Javascript
              .card__body
                h2 Сайт школы образования
                p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="//google.com") http://loftschool.ru
              .card__footer
                button(type="button").card__btn.card__btn--edit Править
                button(type="button").card__btn.card__btn--remove Удалить
          .works__item
            .card
              .card__hero
                //- img.card__hero-image(src="../../images/card_hero.jpg" alt="alt")
                .card__hero-tags
                  ul.tags
                    li.tags__item
                      span HTML
                    li.tags__item
                      span CSS
                    li.tags__item
                      span Javascript
              .card__body
                h2 Сайт школы образования
                p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="//google.com") http://loftschool.ru
              .card__footer
                button(type="button").card__btn.card__btn--edit Править
                button(type="button").card__btn.card__btn--remove Удалить
</template>

<script>
    import SimpleVueValidation from 'simple-vue-validator';
    const Validator = SimpleVueValidation.Validator;

    export default {
        name: "AdminWork",
        data() {
            return {
                name: '',
                link: '',
                description: ''
            }
        },
        validators: {
            name: function (value) {
                return Validator.value(value).required();
            },
            link(value) {
                return Validator.value(value).required();
            },
            description(value) {
                return Validator.value(value).required();
            }
        },
        methods: {
            save() {
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