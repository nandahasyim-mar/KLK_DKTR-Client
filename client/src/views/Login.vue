<template>
  <div class="container">
    <div class="form-container sign-in-container">
      <form @submit.prevent="login">
        <h1>Sign in</h1>
        <!-- social media -->
        <!-- <span>or use your account</span> -->
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <a href="#">Forgot your password</a>
        <button class="form">Sign In</button>
        <button class="form" @click.prevent="toHome">Cancel</button>

      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details</p>
          <button @click.prevent="toRegister" class="ghost" id="signUp">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register')
    },

    toHome () {
      this.$router.push('/')
    },

    login () {
      const { email, password } = this
      this.$store.dispatch('login', { email, password })
        .then(() => {
          this.$router.push('/')
        })
        .catch(({ response }) => {
          console.log(response)
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  font-family: 'Montserrat', sans-serif;

}

h1 {
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.form-container form {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.form-container input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.form{
  color: #fff;
}

button{
  margin-top: 0.5rem;
  border-radius: 20px;
  border: 1px solid #16a085;
  background-color: #16a085;
  color: #000;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active{
  transform: scale(0.95);
}

button:focus{
  outline: none;
}

button.ghost{
  background: transparent;
  border-color: #000;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container{
  left: 0;
  width: 50%;
  z-index: 2;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.overlay{
  /* background:#cad3c8; */
  background: linear-gradient(to right,#cad3c8, #cad4c6) no-repeat 0 0 / cover;
  color: #000;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateX(0);
  transition: transfrom 0.6s ease-in-out;
}

.overlay-right{
  right: 0;
  transform: translateX(0);
}

</style>>
