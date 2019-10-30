import Vue from 'vue';

const SliderTag = {
    template: '#slider-tag'
};

const SliderPreview = {
    template: '#slider-preview',
    props: ['works', 'currentWork'],
    computed: {
        reverseWorks() {
            return [...this.works].reverse();
        }
    }
};

const SliderControls = {
    template: '#slider-controls'
};

const SliderMain = {
    template: '#slider-main',
    props: ['works', 'currentWork','currentIndex'],
    components: {
        SliderPreview,
        SliderControls
    }
};

const SliderInfo = {
    template: '#slider-info',
    props: ['works', 'currentWork'],
    components: {
        SliderTag
    }
};

new Vue({
    el: '#slider-component',
    template: '#slider',
    components: {SliderInfo, SliderMain},
    data: () => ({
        works: [],
        currentIndex: 0
    }),
    created() {
        fetch('https://webdev-api.loftschool.com/works/174').then((res) => res.json()).then((data) => {
            data.map((item) => (item.photo = `https://webdev-api.loftschool.com/${item.photo}`));
            this.works = data;
        });
    },
    watch: {
        currentIndex(value) {
            const worksAmount = this.works.length - 1;
            if (value < 0) {
                this.currentIndex = worksAmount;
            }
            if (value > worksAmount) {
                this.currentIndex = 0;
            }
            
        }
        
        
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        }
    },
    methods: {
        handleSlide(direction) {
            if (direction === 'next') {
                this.currentIndex++;
            }
            if (direction === 'prev') {
                this.currentIndex--;
            }
        }
    }
});
