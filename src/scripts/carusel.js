import Vue from 'vue';
import {Carousel, Slide} from 'vue-carousel';

const EventBus = new Vue();

const carouselItem = {
    template: "#carousel-item",
    props: {
        review: Object
    }
};

const carousel = {
    template: "#carousel",
    components: {
        carouselItem,
        Carousel,
        Slide
    },
    data() {
        return {
            reviews: {},
            slidesPerPage: 2
        }
    },
    mounted() {
        fetch('https://webdev-api.loftschool.com/reviews/174')
          .then(res => res.json())
          .then(data => {
              data.map(item => item.photo = `https://webdev-api.loftschool.com/${item.photo}`);
              this.reviews = data;
              EventBus.$emit('pages', this.pages());
          })
          .catch(err => console.log(err));
        
        EventBus.$on('slide', direction => {
            switch (direction) {
                case "prev" :
                    document.querySelector('.VueCarousel-navigation-prev').click();
                    break;
                case "next" :
                    document.querySelector('.VueCarousel-navigation-next').click();
                    break;
            }
        });
        this.calcSlidesPerPage(this);
    },
    
    methods: {
        pageChange(number) {
            EventBus.$emit('activePage', number);
        },
        pages() {
            const reviewLength = this.reviews.length;
            
            if (this.slidesPerPage > 1) {
                console.log('computed',reviewLength % 2 === 1 ? (reviewLength - 1) / 2 : (reviewLength / 2 - 1));
                return reviewLength % 2 === 1 ? (reviewLength - 1) / 2 : (reviewLength / 2 - 1);
            }
            return reviewLength - 1;
        },
        calcSlidesPerPage(self) {
            function calc() {
                self.slidesPerPage = window.innerWidth <= 768 ? 1 : 2;
            }
            
            calc();
            window.addEventListener('resize', calc);
        }
    },
    watch: {
        slidesPerPage() {
            EventBus.$emit('pages', this.pages());
        }
    }
    
};

new Vue({
    el: '#reviews',
    components: {
        carousel
    },
    data: {
        activePage: 0,
        pages: 0,
    },
    methods: {
        slide(direction) {
            EventBus.$emit('slide', direction);
        }
    },
    mounted() {
        EventBus.$on('activePage', number => this.activePage = number);
        EventBus.$on('pages', number => this.pages = number)
    }
    
});


