<template>
  <nav class="navbar">
    <a class="logo" href="#"> DYARKA</a>
    <ul class="nav">
      <li v-if="!login" @click.prevent="toLogin">
        <a href="#" type="button">Login</a>
      </li>
      <li v-if="!login" @click.prevent="toRegister">
        <a href="#" type="button">Register</a>
      </li>
      <li v-if="login">
        <a class="login add" type="button" @click.prevent="toCreate"
          ><ion-icon name="add-outline"></ion-icon
        ></a>
      </li>
      <li v-if="login">
        <a class="login logout" type="button" @click.prevent="logout"
          ><ion-icon name="log-out-outline"></ion-icon
        ></a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Navbar',
  data () {
    return {
      login: localStorage.getItem('access_token')
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    },
    toRegister () {
      this.$router.push('/register')
    },
    toCreate () {
      this.$router.push('/create')
    },
    logout () {
      Swal
        .fire({
          title: 'Wait!',
          text: 'Are you sure want to logout',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#45aaf2',
          cancelButtonColor: '#e84118',
          confirmButtonText: 'Yes'
        })
        .then((result) => {
          if (result.isConfirmed) {
            localStorage.clear()
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.add:hover {
  color: #40739e;
}

.logout:hover {
  color: #c23616;
}

.navbar {
  margin: 0;
  padding: 0;
  left: 0px;
  top: 0px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #cad3c8;
  width: 100%;
  height: 75px;
  z-index: 1;
  font-family: "Montserrat", sans-serif;
}

.login {
  font-size: 25px;
}

.logo {
  margin-right: 44%;
  margin-left: 10%;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 35px;
}

.nav {
  display: flex;
  justify-content: right;
  list-style: none;
  margin-right: 15%;
}

a {
  margin: 15px;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
}

a:hover {
  color: #000;
}
</style>>
