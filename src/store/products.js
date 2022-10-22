import { products as productsList, productGroups } from './seed'
import { UPDATE_GROUPS_FILTER, SET_ITEM_STOCK, RESET_GROUP_FILTER } from './mutationTypes'

export default {
  namespaced: true,
  state () {
    return {
      items: productsList,
      groups: productGroups,
      filterProductGroups: []
    }
  },
  getters: {
    items (state) {
      return state.items
    },
    groups (state) {
      return state.groups
    },
    filterByGroupID (state) {
      if (state.filterProductGroups.length === 0) return state.items
      return state.items.filter(product => state.filterProductGroups.includes(product.group_id))
    },
    trending (state) {
      return state.items.filter(i => { return i.trending })
    },
    featured (state) {
      return state.items.filter(i => { return i.hot })
    },
    filters (state) {
      return state.filterProductGroups
    }
  },
  actions: {
    updateGroupsFilter ({ commit }, { group_id }) {
      group_id = parseInt(group_id)
      commit('UPDATE_GROUPS_FILTER', { group_id })
    },
    setItemStock ({ commit }, { id, stock }) {
      commit('SET_ITEM_STOCK', { id, stock })
    },
    resetGroupsFilter ({ commit }) {
      commit('RESET_GROUP_FILTER')
    }
  },
  mutations: {
    [UPDATE_GROUPS_FILTER] (state, { group_id }) {
      // If group_id already filtered, pull it
      if (state.filterProductGroups.includes(group_id)) {
        const groupIndex = state.filterProductGroups.indexOf(group_id)
        return state.filterProductGroups.splice(groupIndex, 1)
      }
      state.filterProductGroups.push(group_id)
    },
    [SET_ITEM_STOCK] (state, { id, stock }) {
      const item = state.items.find(i => { return i.id === id })
      item.stock = stock
    },
    [RESET_GROUP_FILTER] (state) {
      state.filterProductGroups = []
    }
  }
}
