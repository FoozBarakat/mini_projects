const vm = Vue.createApp({
	data() {
		return {
			firstName: 'Fooz',
			middleName: '',
			lastName: 'Barakat',
			url: 'http://google.com',
			raw_url: '<a href="http://google.com" target="_blank">Google</a>',
			age: 20,
		};
	},
	// alwys use regular functions not es6
	methods: {
		increment() {
			this.age++;
		},
		updateLastName(msg, event) {
			console.log(msg);
			this.lastName = event.target.value;
		},
		updateMiddleName(event) {
			this.middleName = event.target.value;
		},
	},
	computed: {
		fullName() {
			return `${this.firstName} ${
				this.middleName
			} ${this.lastName.toUpperCase()}`;
		},
	},
	watch: {
		age(newVal, oldVal) {
			setTimeout(() => {
				this.age = 20;
			}, 3000);
		},
	},
}).mount('#app');

setTimeout(() => {
	vm.lastName = 'Ahmed Barakat';
}, 2000);

// Vue.createApp({
// 	data() {
// 		return {
// 			firstName: 'hi',
// 			lastName: 'there',
// 		};
// 	},
// }).mount('#app1');
