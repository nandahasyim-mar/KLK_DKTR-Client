<template>
  <div>
    <Navbar />
    <input type="text" v-model="search" placeholder="Search by name">
    <main class="main bd-grid">
    <Products
      v-for="product in filterProductByName"
      :key="product.id"
      :product="product"
    />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/components/Products.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    Products, Navbar
  },
  data () {
    return {
      search: '',
      products: this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    filterProductByName () {
      return this.products.filter((product) => {
        const name = product.name.toLowerCase()
        return name.match(this.search)
      })
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap");

input {
  background-color: #cad3c8;
  border: none;
  padding: 12px 15px;
  margin: 8px 3.3%;
  width: 20rem;
  border-radius: 10px;
}

/* .title-shop {
  position: relative;
  margin: 0 2.5rem;
  font-family: "Open Sans";
}
.title-shop::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 72px;
  height: 2px;
  background-color: #161616;
  margin-left: 0.25rem;
} */

.main {
  padding: 2rem 0;
}

.bd-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  max-width: 1200px;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  align-items: center;
  gap: 2rem;
}

</style>
