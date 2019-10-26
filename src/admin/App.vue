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
          .works__form-header
            .works__form-title Редактирование работы
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
              .works-form__btns
                .control-btns
                  button(type="button").control-btn.control-btn--cancel Отмена
                  button(type="button").control-btn.control-btn--save Сохранить




</template>

<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/blocks/admin/*.pcss";
</style>
