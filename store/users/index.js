import Cookie from 'js-cookie';
import { auth } from '@/services/firebase';

export const state = () => ({
  user: null,
});

export const mutations = {
  SET_USER: (state, account) => {
    state.user = account;
  },
};

export const actions = {
  async login({ commit }, account) {
    // eslint-disable-next-line no-useless-catch
    try {
      await auth.signInWithEmailAndPassword(account.email, account.password);
      const token = await auth.currentUser.getIdToken();
      const { email, uid } = auth.currentUser;
      Cookie.set('access_token', token);
      commit('SET_USER', { email, uid });
    } catch (error) {
      throw error;
    }
  },
  async ingresarFacebook() {
    const provider = new auth.FacebookAuthProvider();
    provider.setCustomParameters({
      display: 'popup',
    });
    auth.languageCode = 'es_AR';
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      this.mostrarError('Ocurrió un error validando tu cuenta.');
    }
  },
  async ingresarGoogle() {
    const provider = new auth.GoogleAuthProvider();
    provider.setCustomParameters({
      display: 'popup',
    });
    auth.languageCode = 'es_AR';
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      this.mostrarError('Ocurrió un error validando tu cuenta.');
    }
  },
  logout({ commit }) {
    Cookie.remove('access_token');
    commit('SET_USER', {});
  },
};

export const getters = {
  getUser(state) {
    return state.user;
  },
};
