import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    productId: {},
    isLogin: true
  },

  mutations: {
    setProducts (state, dataProducts) {
      state.products = dataProducts
    },
    setProduct (state, dataProduct) {
      state.productId = dataProduct
    },
    setProductById (state, productById) {
      state.product = productById
    },
    setLogin (state, param) {
      state.isLogin = param
    }
  },

  actions: {
    fetchProducts (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3001/products'
        // headers: {
        //   access_token: localStorage.getItem('access_token')
        // }
      })
        .then(({ data }) => {
          // console.log(data)
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    getProductById (context, payload) {
      console.log(payload, '<<<< cek data ')
      axios({
        method: 'GET',
        url: `http://localhost:3001/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response.data)
          context.commit('setProductById', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    createProduct ({ dispatch }, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3001/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          code_sku: payload.code,
          name: payload.name,
          image: payload.image,
          quantity: payload.quantity,
          price: payload.price
        }
      })
        .then(({ data }) => {
          dispatch('fetchProducts')
          Swal.fire(
            'Success',
            `Success added product ${data.name}`,
            'success'
          )
        })
        .catch(({ respone }) => {
          Swal.fire(
            'Failed',
            `${respone.data.message}`,
            'error'
          )
        })
    },

    updateProduct (context, payload) {
      return axios({
        method: 'PUT',
        url: `http://localhost:3001/products/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          code_sku: payload.code,
          name: payload.name,
          iamge: payload.image,
          quantity: payload.quantity,
          price: payload.price
        }
      })
        .then(({ data }) => {
          console.log(data)
          Swal.fire(
            'Success',
            'Success update item',
            'success'
          )
          context.dispatch('fetchProducts')
        })
        .catch(({ response }) => {
          console.log(response)
          Swal.fire(
            'Failed',
          `${response.data.message}`,
          'error'
          )
          this.$router.push('/update')
        })
    },

    deleteProduct ({ dispatch }, payload) {
      console.log(payload)
      axios({
        method: 'DELETE',
        url: `http://localhost:3001/products/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(() => {
          dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err, '<<<<<<')
        })
    },

    register (context, payload) {
      console.log(payload, '<<<<< data dari Register.vue')
      return axios({
        method: 'POST',
        url: 'http://localhost:3001/register',
        data: {
          name: payload.name,
          email: payload.email,
          number_phone: payload.numberPhone,
          password: payload.password
        }
      })
    },

    login (context, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3001/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
        })
        .catch(({ response }) => {
          console.log(response)
          Swal.fire(
            'Failed',
          `${response.data.message}`,
          'error'
          )
          this.$router.push('/login')
        })
    }
  }
})
