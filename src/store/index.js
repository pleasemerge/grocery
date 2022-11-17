import { createStore } from 'vuex'
import products from './products'
import cart from './cart'
import toast from './toast'

const store = createStore({
  modules: {
    toast,
    cart,
    products
  }
})

export default store
