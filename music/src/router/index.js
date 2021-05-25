import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Manage from '@/views/Manage.vue';
import Song from '@/views/Song.vue';
import store from '@/store';

const routes = [
	{
		name: 'home',
		path: '/',
		component: Home,
	},
	{
		name: 'manage',
		// alias: '/manage',
		path: '/manage-music',
		component: Manage,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/manage',
		redirect: { name: 'manage' },
	},
	{
		name: 'song',
		path: '/song/:id',
		component: Song,
	},
	{
		path: '/:catcgAll(.*)*',
		redirect: { name: 'home' },
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkExactActiveClass: 'text-yellow-500',
});

router.beforeEach((to, from, next) => {
	console.log(from);

	if (!to.matched.some((record) => record.meta.requiresAuth)) {
		next();
		return;
	}

	if (store.state.userLoggedIn) {
		next();
	} else {
		next({ name: 'home' });
	}
});

export default router;
