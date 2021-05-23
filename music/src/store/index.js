import { createStore } from 'vuex';
import { auth, usersCollection } from '@/includes/firebase';

export default createStore({
	state: {
		authModelShow: false,
		userLoggedIn: false,
	},
	mutations: {
		toggleAuthModel: (state) => {
			state.authModelShow = !state.authModelShow;
		},
		toggleAuth: (state) => {
			state.userLoggedIn = !state.userLoggedIn;
		},
	},
	getters: {
		// authModelShow: (state) => state.authModelShow,
	},
	actions: {
		async register({ commit }, payload) {
			const userCred = await auth.createUserWithEmailAndPassword(
				payload.email,
				payload.password,
			);

			await usersCollection.doc(userCred.user.uid).set({
				name: payload.name,
				email: payload.email,
				age: payload.age,
				country: payload.country,
			});

			await userCred.user.updateProfile({ displayName: payload.name });

			commit('toggleAuth');
		},
		async login({ commit }, payload) {
			await auth.signInWithEmailAndPassword(payload.email, payload.password);

			commit('toggleAuth');
		},
		init_login({ commit }) {
			const user = auth.currentUser;

			if (user) {
				commit('toggleAuth');
			}
		},
		async signOut({ commit }) {
			await auth.signOut();

			commit('toggleAuth');
		},
	},
});
