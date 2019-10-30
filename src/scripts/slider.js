import Vue from 'vue';

const SliderTag = {
    template: '#slider-tag',
    props: {
        tags: Array
    }
};

const SliderPreview = {
    template: '#slider-preview',
    props: {
        works: Array,
        currentWork: Object,
    },
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
    props: {
        works: Array,
        currentWork: Object,
        currentIndex: Number
    },
    components: {
        SliderPreview,
        SliderControls
    }
};

const SliderInfo = {
    template: '#slider-info',
    props: {
        currentWork: Object,
    },
    components: {
        SliderTag
    },
    computed: {
        tagsArray() {
            const {techs} = this.currentWork;
            return techs.split(',');
        }
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
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        }
    },
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
    methods: {
        handleSlide(direction) {
            if (direction === 'next') {
                this.currentIndex++;
            }
            if (direction === 'prev') {
                this.currentIndex--;
            }
        },
        handlePreviewClick(id = 0) {
            this.works.forEach((work, index) => {
                if (work.id === id) {
                    this.currentIndex = index;
                }
            });
        }
    }
});
