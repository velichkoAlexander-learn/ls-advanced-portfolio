<template lang="pug">
    nav.main-menu
        .container.main-menu__container
            ul.main-menu__list
                router-link(
                    tag="li"
                    to="/about"
                    active-class="main-menu__item--active"
                ).main-menu__item
                    .main-menu__link(title="Обо мне") Обо мне
                router-link(
                    tag="li"
                    to="/work"
                    active-class="main-menu__item--active"
                ).main-menu__item
                    .main-menu__link(title="Работы") Работы
                router-link(
                    tag="li"
                    to="/review"
                    active-class="main-menu__item--active"
                ).main-menu__item
                    .main-menu__link(title="Отзывы") Отзывы
</template>
