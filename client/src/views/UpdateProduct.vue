<template>
  <div class="container">
    <div class="contact-box">
      <div class="left"></div>
      <div class="right">
        <h2>Update Shoes</h2>
        <form @submit.prevent="updateProduct">
          <input v-model="code" type="text" class="field" placeholder="Code SKU" />
          <input v-model="name" type="text" class="field" placeholder="Shoes Name" />
          <input v-model="image" type="text" class="field" placeholder="Image URL" />
          <input v-model="quantity" type="number" class="field" placeholder="Quantity" />
          <input v-model="price" type="number" class="field" placeholder="Price" />
          <button class="btn">Submit</button>
          <button class="btn" @click.prevent="cancel">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdateProduct',
  data () {
    return {
      id: this.$store.state.productId.id,
      code: this.$store.state.productId.code_sku,
      name: this.$store.state.productId.name,
      image: this.$store.state.productId.image,
      quantity: this.$store.state.productId.quantity,
      price: this.$store.state.productId.price
    }
  },
  methods: {
    cancel () {
      this.$router.push('/')
    },
    updateProduct () {
      const { id, code, name, image, quantity, price } = this
      this.$store.dispatch('updateProduct', { id, code, name, image, quantity, price })
        .then(() => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 100px;
}

.container:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url("https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fG1vdW50YWlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
    no-repeat center;
  background-size: cover;
  filter: blur(50px);
  z-index: -1;
}
.contact-box {
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
}

.left {
  background: url("https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBzZXJ2aWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
    no-repeat center;
  background-size: cover;
  height: 100%;
}

.right {
  padding: 25px 40px;
}

h2 {
  position: relative;
  padding: 0 0 10px;
  margin-bottom: 10px;
}

h2:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  height: 4px;
  width: 50px;
  border-radius: 2px;
  background-color: #2c3a47;
}

.field {
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: 0.3s;
}

.field:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

textarea {
  min-height: 150px;
}

.btn {
  width: 100%;
  padding: 0.3rem 1rem;
  background-color: #353b48;
  color: #fff;
  font-size: 1.1rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 6px;
}

.btn:hover {
  background-color: #2c3a47;
}

.field:focus {
  border: 2px solid black;
  background-color: #fff;
}

@media screen and (max-width: 880px) {
  .contact-box {
    grid-template-columns: 1fr;
  }
  .left {
    height: 200px;
  }
}
</style>
