<template>
	<div>
		<h3>{{ msg }}</h3>
		<greeting :age="age" />
		<user :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB" />
	</div>
</template>

<script>
import Greeting from './components/Greeting';
import User from './components/User';

export default {
	name: 'App',
	components: {
		Greeting,
		User,
	},
	data() {
		return {
			msg: 'Hello App!',
			age: 20,
		};
	},
	methods: {
		updateAge(num) {
			this.age += num;
		},
		updateAgeCB(num) {
			this.age += num;
		},
	},
};
</script>
