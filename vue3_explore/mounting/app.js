let vm = Vue.createApp({
	data() {
		return {
			message: 'Hello world!',
		};
	},
	beforeCreate() {
		console.log('beforeCreate() function called!', this.message);
	},
	created() {
		console.log('created() function called!', this.message);
	},
	beforeMount() {
		console.log('beforeMount() function called!', this.$el);
	},
	mounted() {
		console.log('mounted() function called!', this.$el);
	},
	beforeUpdate() {
		console.log('beforeUpdate() function called!');
	},
	updated() {
		console.log('updated() function called!');
	},
	beforeUnmount() {
		console.log('beforeUnmount() function called!');
	},
	unmounted() {
		console.log('unmounted() function called!');
	},
	//template: `{{ message }}`,
});

// create component
vm.component('hello-component', {
	template: `<h1>{{ message }}</h1>`,
	data() {
		return {
			message: 'Hello from Component!',
		};
	},
});

vm.mount('#app');

// setTimeout(() => {
// 	vm.unmount('#app');
// }, 3000);

// let vm1 = Vue.createApp({
// 	data() {
// 		return {
// 			message: 'Hello world!',
// 		};
// 	},
// 	render() {
// 		return Vue.h('h1', this.message);
// 	},
// }).mount('#app1');
