<template lang="pug">
    nav.main-menu
        .container.main-menu__container
            ul.main-menu__list
                router-link(
                    tag="li"
                    to="/admin/about"
                    active-class="main-menu__item--active"
                ).main-menu__item
                    .main-menu__link Обо мне
                router-link(
                    tag="li"
                    to="/admin/work"
                    active-class="main-menu__item--active"
                ).main-menu__item
                    .main-menu__link Работы
                router-link(
                    tag="li"
                    to="/admin/review"
                    active-class="main-menu__item--active"
                ).main-menu__item
                    .main-menu__link Отзывы
</template>