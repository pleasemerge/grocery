import { SHOW_TOAST, HIDE_TOAST } from './mutationTypes'
const toast = {
  namespaced: true,
  state () {
    return {
      toasts: []
    }
  },
  actions: {
    show ({ commit }, { text }) {
      commit('SHOW_TOAST', { text })
    },
    hide ({ commit }, { id }) {
      commit('HIDE_TOAST', { id })
    }
  },
  mutations: {
    [SHOW_TOAST] (state, { text, timeout = 5000 }) {
      const id = '_' + Math.random().toString(36).substr(2, 9)
      state.toasts.push({
        text,
        id
      })
      setTimeout(() => {
        state.toasts = state.toasts.filter(i => { return i.id !== id })
      }, timeout)
    },
    [HIDE_TOAST] (state, { id }) {
      state.toasts = state.toasts.filter(i => { return i.id !== id })
    }
  }
}

export default toast