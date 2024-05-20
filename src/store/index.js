import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        clearUser(state) {
            state.user = null;
            localStorage.removeItem('user');
        }
    },
    actions: {
        login({ commit }, user) {
            commit('setUser', user);
        },
        logout({ commit }) {
            commit('clearUser');
        }
    },
    // checkUser({ commit }) {
    //     const user = JSON.parse(localStorage.getItem('user'));
    //     if (user) {
    //       commit('setUser', user);
    //     }
    // },

    getters: {
        isAuthenticated: state => !!state.user,
        getUser: state => state.user
    }
});

export default store;
