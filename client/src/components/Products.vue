<template>
  <article class="card">
    <div class="card__img">
      <img :src="product.image" alt="" />
    </div>
    <div class="card__name">
      <p>{{ product.name }}</p>
    </div>
    <div class="card__precis">
      <a type="button" @click.prevent="toUpdate" class="card__icon"
        ><ion-icon name="create-outline"></ion-icon
      ></a>
      <div>
        <span class="card__preci card__preci--after">{{
          product.code_sku
        }}</span>
        <span class="card__preci card__preci--now">{{ product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</span>
        <span class="card__preci card__preci--before">stock: {{
          product.quantity
        }}</span>
      </div>
      <a type="button" @click="deleteProduct(product.id)" class="card__icon"
        ><ion-icon name="trash-outline"></ion-icon
      ></a>
    </div>
  </article>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Products',
  props: ['product'],
  data () {
    return {}
  },
  methods: {
    toUpdate () {
      if (localStorage.getItem('access_token')) {
        this.$store.commit('setProduct', this.product)
        this.$store.dispatch('getProductById', this.product.id)
        this.$router.push(`/update/${this.product.id}`)
      } else {
        Swal.fire('Failed', 'You must be login to have this access!', 'error')
      }
    },

    deleteProduct (id) {
      if (localStorage.getItem('access_token')) {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#45aaf2',
          cancelButtonColor: '#e84118',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('deleteProduct', { id })
          }
        })
      } else {
        Swal.fire('Failed', 'You must be login to have this access!', 'error')
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

@media screen and (min-width: 768px) {
  :root {
    --h1-font-size: 2rem;
    --normal-font-size: 1rem;
    --smaller-font-size: 0.813rem;
  }
}

img {
  max-width: 100%;
  max-height: 6rem;
}

a {
  text-decoration: none;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  overflow: hidden;
}

article {
  background-color: #cad3c8;
}

.card__img {
  width: 180px;
  height: auto;
  padding: 3rem 0;
  transition: 0.5s;
}

.card__name {
  position: absolute;
  left: -25%;
  top: 0;
  width: 3.5rem;
  height: 100%;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  background-color: #161616;
  color: #fff;
  font-weight: bold;
  transition: 0.5s;
}

.card__icon {
  font-size: 1.5rem;
  color: #161616;
}

.card__icon:hover {
  color: #ff5151;
}

.card__precis {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.card__preci {
  display: block;
  text-align: center;
}

.card__preci--after {
  font-size: 0.9rem;
  color: #c0392b;
  margin-bottom: 0.25rem;
  font-weight: bold;
}

.card__preci--before {
  margin-top: 5px;
  font-size: 0.8rem;
  color: #ff5151;
  margin-bottom: 0.25rem;
  font-weight: bold;
}

.card__preci--now {
  font-size: 1rem;
  font-weight: bold;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem #d1d9e6;
}

.card:hover .card__name {
  left: 0;
}

.card:hover .card__img {
  transform: rotate(30deg);
  margin-left: 3.5rem;
}
.card:hover .card__precis {
  margin-left: 3.5rem;
  padding: 0 1.5rem;
}
</style>>
