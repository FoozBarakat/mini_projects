<template>
	<p>The user is {{ age }} yers old</p>
	<button @click="onClickAge">Update Age</button>
	<button @click="ageChangeFn(3)">Update Age CB</button>
	<p>{{ ageDoubled }}</p>
</template>

<script>
export default {
	name: 'User',
	props: {
		age: {
			type: [Number],
			// required: true,
			// default: 20,
			validator(value) {
				return value < 130;
			},
		},
		ageChangeFn: Function,
	},
	emits: ['age-change'],
	computed: {
		ageDoubled() {
			return this.age * 2;
		},
	},
	methods: {
		onClickAge() {
			this.$emit('age-change', 3);
		},
	},
};
</script>
