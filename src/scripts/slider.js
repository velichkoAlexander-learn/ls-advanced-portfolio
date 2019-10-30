import Vue from 'vue';

const SliderTag = {
	template: '#slider-tag'
};

const SliderPreview = {
	template: '#slider-preview',
	props: [ 'works', 'currentWork' ],
	computed: {
		reverseWorks() {
			return [ ...this.works ].reverse();
		}
	}
};

const SliderControlls = {
	template: '#slider-controlls'
};

const SliderMain = {
	template: '#slider-main',
	props: [ 'works', 'currentWork' ],
	components: {
		SliderPreview,
		SliderControlls
	}
};

const SliderInfo = {
	template: '#slider-info',
	props: [ 'works', 'currentWork' ],
	components: {
		SliderTag
	}
};

new Vue({
	el: '#slider-component',
	template: '#slider',
	components: { SliderInfo, SliderMain },
	data: () => ({
		works: [],
		currentWork: {},
		currentIndex: 0
	}),
	created() {
		fetch('https://webdev-api.loftschool.com/works/174').then((res) => res.json()).then((data) => {
			data.map((item) => (item.photo = `https://webdev-api.loftschool.com/${item.photo}`));
			this.works = data;
			this.currentWork = this.works[this.currentIndex];
		});
	}
});
