<template>
	<!-- Header -->
	<header id="header" class="bg-gray-700">
		<nav class="container mx-auto flex justify-start items-center py-5 px-4">
			<!-- App Name -->
			<router-link
				class="text-white font-bold uppercase text-2xl mr-4"
				:to="{ name: 'home' }"
				exact-active-class="no-active"
				>Music</router-link
			>

			<div class="flex flex-grow items-center justify-end">
				<!-- Primary Navigation -->
				<ul class="flex flex-row mt-1">
					<!-- Navigation Links -->
					<li v-if="!userLoggedIn">
						<a
							class="px-2 text-white"
							href="#"
							@click.prevent="toggleAuthModel"
							>{{ $t('header.register') }}</a
						>
					</li>
					<template v-else>
						<li>
							<router-link class="px-2 text-white" :to="{ name: 'manage' }">{{
								$t('header.manage')
							}}</router-link>
						</li>
						<li class="ml-10">
							<a class="px-2 text-white" href="#" @click.prevent="signOut">{{
								$t('header.logout')
							}}</a>
						</li>
					</template>
					<li class="ml-10">
						<a href="#" class="px-2 text-white" @click.prevent="changeLocale">
							{{ currentLocale }}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
	name: 'Header',
	computed: {
		...mapState(['userLoggedIn']),
		currentLocale() {
			return this.$i18n.locale === 'ar' ? 'عربي' : 'English';
		},
	},
	methods: {
		...mapMutations(['toggleAuthModel']),
		signOut() {
			this.$store.dispatch('signOut');

			if (this.$route.meta.requiresAuth) {
				this.$router.push({ name: 'home' });
			}
		},
		changeLocale() {
			this.$i18n.locale = this.$i18n.locale === 'ar' ? 'en' : 'ar';
		},
	},
};
</script>
