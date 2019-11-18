<template lang="pug">
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
</template>