<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <div class="error">{{ error }}</div>
      <button type="submit">Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import setLogin from "../composables/useLogin.js"

export default {
    setup(){
        
        //ref
        const email = ref('')
        const password = ref('')

        const {error, login} = setLogin()

        const handleSubmit = async () => {
             await login( email.value, password.value )
             if(!error.value){
                 console.log(" User Login ")
             }
        }

        return { email, password, handleSubmit, error }
    }

}
</script>

<style>

</style>