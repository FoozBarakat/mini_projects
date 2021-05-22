import { createStore } from 'vuex';

export default createStore({
	state: {
		authModelShow: false,
	},
	mutations: {
		toggleAuthModel: (state) => {
			state.authModelShow = !state.authModelShow;
		},
	},
	getters: {
		// authModelShow: (state) => state.authModelShow,
	},
});
