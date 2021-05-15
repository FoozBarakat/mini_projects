let vm = Vue.createApp({
	data() {
		return {
			isPurple: false,
			selectedColor: '',
			size: 150,
			deg: 0,
		};
	},
	computed: {
		circle_classes() {
			return { purple: this.isPurple };
		},
		changeSize() {
			return {
				width: this.size + 'px',
				height: this.size + 'px',
				lineHeight: this.size + 'px',
			};
		},
		changeDeg() {
			return { transform: `rotate(${this.deg}deg)` };
		},
	},
}).mount('#app');
