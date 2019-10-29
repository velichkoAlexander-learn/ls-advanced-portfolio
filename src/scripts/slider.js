import Vue from 'vue';

const SliderTag = {
	template: '#slider-tag'
};

const SliderPreview = {
	template: '#slider-preview'
};

const SliderControlls = {
	template: '#slider-controlls'
};

const SliderMain = {
	template: '#slider-main',
	components: {
		SliderPreview,
		SliderControlls
	}
};

const SliderInfo = {
	template: '#slider-info',
	components: {
		SliderTag
	}
};

new Vue({
	el: '#slider-component',
	template: '#slider',
	components: { SliderInfo, SliderMain },
	data: () => ({}),
	created() {
		// this.skills = require('../data/skills');
	}
});
