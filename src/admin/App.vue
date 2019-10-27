<template lang="pug">
  .wrapper
    header.header
      .container.header__container
        .header__user
          .user
            .user__avatar
              img(src="../images/content/user.jpg" alt="user")
            .user__info
              .user__name Владимир Астаханов
              .user__logout
                a.logout(href="#" title="Выйти") Выйти
        .header__title Панель администрирования
        .header__logout
          a.logout(href="#" title="Выйти") Выйти
    nav.main-menu
      .container.main-menu__container
        ul.main-menu__list
          li.main-menu__item.main-menu__item--active
            a.main-menu__link(href="#" title="Обо мне") Обо мне
          li.main-menu__item
            a.main-menu__link(href="#" title="Работы") Работы
          li.main-menu__item
            a.main-menu__link(href="#" title="Отзывы") Отзывы
    .page-title
      .container.page-title__container
        .page-title__item Блок «Обо мне»
        .page-title__button
          button.add-button(type="button") Добавить группу
    section.skills
      .container
        .skills__container
          .slills__item
            .skill
              .skill__header
                .skill__input-wrapper
                  input.skill__input(type="text" name="group_name" placeholder="Название новой группы" required)
                .skill__button
                  button(type="button").skill__btn.skill__btn--agree
                  button(type="button").skill__btn.skill__btn--desagree
              .skill__body
              .skill__footer
                .skill__input-wrapper.skill__input-wrapper--skill-name
                  input.skill__input(type="text" name="skill_name" placeholder="Новый навык" required)
                .skill__input-wrapper.skill__input-wrapper--skill-percent
                  input.skill__input(type="number" min="10" max="100" name="value" value="100"  step="5" required)
                button(type="button").skill__btn-add
                  span +
          .slills__item
            .skill
              .skill__header
                .skill__input-wrapper
                  input.skill__input(type="text" name="group_name" placeholder="Название новой группы" value="Frontend"
                    required)
                .skill__button
                  button(type="button").skill__btn.skill__btn--edit
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
              .input-wrapper
                input.input#name(type="text" name="name"  placeholder=" " required )
                label.input-label(for="name") Название
              .input-wrapper
                input.input#link(type="text" name="link" placeholder=" "  required )
                label.input-label(for="link") Ссылка
              .textarea-wrapper
                label.input-label(for="description") Описание
                .textarea-inner
                  textarea.textarea#description(name="description" placeholder=" ")
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
                  button(type="button").control-btn.control-btn--save Сохранить
        .works__list
          .works__item
            button(type="button").add-card
              .add-card__content
                .add-card__icon +
                .add_card_text Добавить работу
          .works__item
            .card
              .card__hero
                img.card__hero-image(src="../images/card_hero.jpg" alt="alt")
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
                img.card__hero-image(src="../images/card_hero.jpg" alt="alt")
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
                img.card__author-avatar(src="../images/avatar2.png")
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
                img.card__author-avatar(src="../images/avatar2.png")
                .card__author-info
                  .card__author-name Владимир Сабанцев
                  .card__author-position Преподаватель
              .card__body
                p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
              .card__footer
                button(type="button").card__btn.card__btn--edit Править
                button(type="button").card__btn.card__btn--remove Удалить


</template>

<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/blocks/admin/*.pcss";
</style>
