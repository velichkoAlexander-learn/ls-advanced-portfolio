import Vue from 'vue';

const skill = {
    template: "#skill",
    props: {
        skillName: String,
        skillPercent: Number
    },
    methods: {
        drawColoredCircle() {
            const circle = this.$refs["color-circle"];
            const dashArray = parseInt(
              getComputedStyle(circle).getPropertyValue("stroke-dasharray")
            );
            circle.style.strokeDashoffset = (dashArray / 100) * (100 - this.skillPercent);
        }
    },
    mounted() {
        this.drawColoredCircle();
    }
};

const skillsRow = {
    template: "#skills-row",
    components: {skill},
    props: {
        skill: Object
    }
   
};

new Vue({
    el: "#skills-component",
    template: "#skills-list",
    components: {skillsRow},
    data: () => ({
        skills: {}
    }),
    created() {
        this.skills = require('../data/skills');
    }
});

