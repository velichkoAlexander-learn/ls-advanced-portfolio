import Vue from 'vue';

const skill = {
    template: "#skill",
    props: ["skill-name", "skill-percent"]
};

const skillsRow = {
    template: "#skills-row",
    components: {skill},
    props: ["skill"],
    mounted() {
        const circle = this.$refs['const-circle'];
        const dashArray = parseInt(
          getComputedStyle(circle).getPropertyValue("stroke-dasharray")
        );
        const percent = (dashArray / 100) * (100 - this.skillPercent);
    
        circle.style.strokeDashoffset = percent;
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

