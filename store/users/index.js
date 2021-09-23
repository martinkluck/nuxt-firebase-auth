import Cookie from 'js-cookie';
import { firebase, auth } from '@/services/firebase';

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
  async ingresarGoogle({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      display: 'popup',
    });
    auth.languageCode = 'es_AR';
    try {
      const result = await auth.signInWithPopup(provider);
      // eslint-disable-next-line no-console
      console.log(result);
      const token = await auth.currentUser.getIdToken();
      const { email, uid } = auth.currentUser;
      Cookie.set('access_token', token);
      commit('SET_USER', { email, uid });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      this.mostrarError('Ocurrió un error validando tu cuenta.');
    }
  },
  async ingresarFacebook({ commit }) {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
      display: 'popup',
    });
    auth.languageCode = 'es_AR';
    try {
      const result = await auth.signInWithPopup(provider);
      // eslint-disable-next-line no-console
      console.log(result);
      const token = await auth.currentUser.getIdToken();
      const { email, uid } = auth.currentUser;
      Cookie.set('access_token', token);
      commit('SET_USER', { email, uid });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error, auth.currentUser);
      this.mostrarError('Ocurrió un error validando tu cuenta.');
    }
  },
  async logout({ commit }) {
    await auth.signOut();
    await Cookie.remove('access_token');
    location.href = '/';
    Cookie.remove('access_token');
    commit('SET_USER', {});
  },
};

export const getters = {
  getUser(state) {
    return state.user;
  },
};
