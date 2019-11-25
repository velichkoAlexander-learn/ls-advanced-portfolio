<template lang="pug">
  .tooltip-container(:class="{isVisible:tooltip.active }")
    .tooltip(:class="`tooltip--${tooltip.status}`")
      .tooltip__text {{ tooltip.massage }}
      button(@click="closeExistTooltip").tooltip__close
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        name: "Tooltip",
        computed: {
            ...mapState("tooltip", {
                tooltip: state => state.tooltip
            })
        },
        methods: {
            ...mapActions("tooltip",['closeTooltip']),
            closeExistTooltip() {
                this.closeTooltip();
            }
        }
    }
</script>

<style lang="postcss" scoped>
  @import '../../styles/mixins.pcss';

  .tooltip {

    &-container {
      z-index: 100;
      width: 100%;
      display: flex;
      justify-content: center;
      position: fixed;
      bottom: -100%;
      left: 50%;
      transform: translateX(-50%);
      visibility: hidden;
      transition: 0.3s;

      &.isVisible {
        bottom: 0;
        visibility: visible;
      }
    }

    color: #fff;
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    max-width: 400px;
    background: #4bb133;
    padding: 22px;

    @include phones {
      max-width: 100%;
    }

    &__close {
      width: 20px;
      height: 20px;
      background: svg-load('cross.svg', fill=#fff) center center no-repeat;
      cursor: pointer;
      margin-left: 20px;
      border: none;
    }

    &--warning {
      background: #b18333;
    }

    &--error {
      background: #b13333;
    }
  }
</style>
