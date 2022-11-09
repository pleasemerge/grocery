<template>
<div class="app-container px-2 md:px-0">
  <div class="my-4 columns-1 md:columns-2" v-if="!cartIsEmpty">
    <div class="break-inside-avoid">
      <div class="w-full p-4 bg-gray-100 break-inside-avoid">
        <h1 class="text-2xl">Delivery Address</h1>
        <div class="bg-white rounded-md p-2 my-2">
          <div class="text-gray-500 font-medium">Full name</div>
          <div>
            <input type="text" class="w-full block" placeholder="Please enter">
          </div>
        </div>
        <div class="bg-white rounded-md p-2 my-2">
          <div class="text-gray-500 font-medium">Address line</div>
          <div>
            <input type="text" class="w-full block" placeholder="Please enter">
          </div>
        </div>
        <div class="columns-1 md:columns-2 gap-2">
          <div class="bg-white rounded-md p-2">
            <div class="text-gray-500 font-medium">Postal code</div>
            <div>
              <input type="text" class="w-full block" placeholder="123456">
            </div>
          </div>
          <div class="bg-white rounded-md p-2 my-2 md:my-0">
            <div class="text-gray-500 font-medium">Phone number</div>
            <div>
              <input type="text" class="w-full block" placeholder="+123456789">
            </div>
          </div>
        </div>
      </div>
      <div class="w-full p-4 bg-gray-100 break-inside-avoid my-2">
        <h1 class="text-2xl">Payment</h1>
        <div class="flex">
          <div class="text-sm text-gray-600">
            Transactions are secured <br/>
            & encrypted
          </div>
          <div class="mx-2">
            <img :src="`${$publicPath}img/icons/lock_icon.png`" width="25" />
          </div>
        </div>

        <div class="flex flex-wrap gap-3 my-4">
          <div class="flex justify-between items-center w-full">
            <div>
              <div class="flex items-center mb-4">
                  <input id="default-radio-1" checked type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="default-radio-1" class="ml-2 font-medium text-gray-900 dark:text-gray-300">Credit card</label>
              </div>
              
            </div>
            <div class="flex gap-2">
              <img :src="`${$publicPath}img/icons/visa.png`" width="40" />
              <img :src="`${$publicPath}img/icons/mastercard.png`" width="40" />
            </div>
          </div>

          <div class="flex justify-between items-center w-full">
            <div>
              <div class="flex items-center mb-4">
                  <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="default-radio-1" class="ml-2 font-medium text-gray-900 dark:text-gray-300">Paypal</label>
              </div>
            </div>
            <div class="flex gap-2">
              <img :src="`${$publicPath}img/icons/paypal.png`" width="50" />
            </div>
          </div>
        </div>

        <div class="bg-white rounded-md p-2 my-2">
          <div class="text-gray-500 font-medium">Card number</div>
          <div>
            <input type="text" class="w-full block" placeholder="1234 1234 1234 1234">
          </div>
        </div>
        <div class="bg-white rounded-md p-2 my-2">
          <div class="text-gray-500 font-medium">Name on card</div>
          <div>
            <input type="text" class="w-full block" placeholder="Please enter">
          </div>
        </div>
        <div class="columns-1 md:columns-2 gap-2">
          <div class="bg-white rounded-md p-2">
            <div class="text-gray-500 font-medium">Expiration date</div>
            <div>
              <input type="text" class="w-full block" placeholder="01/25">
            </div>
          </div>
          <div class="bg-white rounded-md p-2 my-2 md:my-0">
            <div class="text-gray-500 font-medium">Security code</div>
            <div>
              <input type="text" class="w-full block" placeholder="123">
            </div>
          </div>
        </div>

        <div class="flex gap-2 my-2 items-center">
          <div class="w-full md:w-1/2">
            <a href="javascript:;" class="w-full bg-gray-500 rounded-md text-white p-2 text-center block">Checkout ${{total.toFixed(2)}}</a>
          </div>
          <div class="w-full md:w-1/2 bg-white rounded-md p-2 my-2 md:my-0">
            <div class="text-gray-500 font-medium">Discount code</div>
            <div>
              <input type="text" class="w-full block" placeholder="-">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full break-inside-avoid flex flex-wrap gap-2">
      <div v-for="(item, index) of uniqueCartItems" :key="index" class="w-full border border-gray-100 justify-between flex flex-wrap">
        <div>
          <img :src="item[0].img" width="50" class=" h-16 object-cover float-left m-4" />
          <div class="inline-block px-2">
            <h2 class="text-xl font-medium">
              <product-name :name="item[0].name" />
            </h2>
            <div>
              <product-country :country="item[0].country" />
            </div>
            <div class="my-2">
              <span class="inline-block text-sm bg-gray-100 px-4 py-1 rounded-md">x{{item.length}}</span>
              <a href="javascript:;" class="border rounded-md py-1 px-2 mx-2" @click="removeFromCart({item: item[0]})">-</a>
            </div>
          
          </div>
        </div>

        <div class="p-2">
          <div class="text-2xl w-12 text-center font-bold relative">
            ${{item[0].discountedPrice}}
            
            <div class="absolute w-12  h-2 bg-lime-600 bottom-1 left-0 opacity-30" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <h1>Cart is empty</h1>
    <router-link :to="{ name: 'Shop' }" class="inline-block btn-lime-600 rounded-md">Shop now</router-link>
  </div>
</div>
</template>

<script>
import ManageCartItem from '@/components/Cart/ManageItem'
import ProductName from '@/components/Product/Name'
import ProductCountry from '@/components/Product/Country'

export default {
  components: {
    ManageCartItem,
    ProductName,
    ProductCountry
  },
  methods: {
    removeFromCart ({ item }) {
      this.$store.dispatch('cart/removeFromCart', { item })
    }
  },
  computed: {
    cartIsEmpty () {
      return this.$store.getters['cart/isEmpty']
    },
    cart () {
      return this.$store.getters['cart/items']
    },
    uniqueCartItems () {
      return this.$store.getters['cart/unique']
    },
    total () {
      return this.cart.reduce((acc, current) => {
        return acc += current.discountedPrice
      }, 0)
    }
  }
}
</script>
