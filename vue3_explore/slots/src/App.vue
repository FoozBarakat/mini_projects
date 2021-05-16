<template>
	<app-form>
		<template v-slot:help>
			<p>{{ help }}</p>
		</template>
		<template v-slot:fields>
			<input type="text" placeholder="email" />
			<input type="text" placeholder="username" />
			<input type="password" placeholder="password" />
		</template>
		<template v-slot:buttons>
			<button type="submit">Submit</button>
		</template>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, esse
			sunt, atque quibusdam illo iste ipsum velit suscipit pariatur corporis aut
			placeat, quasi itaque. Quod expedita provident suscipit exercitationem
			magnam?
		</p>
	</app-form>

	<app-form>
		<template v-slot:help>
			<p>Contact help text.</p>
		</template>
		<template v-slot:fields>
			<input type="text" placeholder="name" />
			<input type="text" placeholder="message" />
		</template>
		<template v-slot:buttons>
			<button type="submit">Submit</button>
		</template>
	</app-form>
</template>

<script>
import AppForm from './components/Form';

export default {
	name: 'App',
	components: {
		AppForm,
	},
	data() {
		return {
			help: 'This is some help text.',
		};
	},
};
</script>
