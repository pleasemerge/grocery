import { ADD_TO_CART, REMOVE_FROM_CART } from './mutationTypes'
import _ from 'lodash'

export default {
  namespaced: true,
  state () {
    return {
      items: []
    }
  },
  getters: {
    items (state) {
      return state.items
    },
    isEmpty (state) {
      return state.items.length === 0
    },
    unique (state) {
      return _.groupBy(state.items, 'id')
    },
    itemInCart: (state) => ({ item }) => {
      return state.items.find(i => { return i.id === item.id })
    },
    itemQuantity: (state) => ({ item }) => {
      return state.items.filter(i => { return i.id === item.id }).length
    }
  },
  actions: {
    addToCart ({ commit, dispatch }, { item }) {
      commit('ADD_TO_CART', { item })
      dispatch('products/setItemStock', { id: item.id, stock: item.stock -= 1 }, { root: true })
    },
    removeFromCart ({ commit, dispatch }, { item }) {
      commit('REMOVE_FROM_CART', { item })
      dispatch('products/setItemStock', { id: item.id, stock: item.stock += 1 }, { root: true })
    }
  },
  mutations: {
    [ADD_TO_CART] (state, { item }) {
      if (item.stock === 0) return
      state.items.push(item)
    },
    [REMOVE_FROM_CART] (state, { item }) {
      state.items.splice(state.items.findIndex(i => i.id === item.id), 1)
    }
  }
}
