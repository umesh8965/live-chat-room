<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" v-model="displayname" placeholder="Display Name" required>
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <div class="error">{{ error }}</div>
      <button type="submit">Signup</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import setSignup from "../composables/useSignup"

export default {
    setup(){

        const {error, signup} = setSignup()

        //ref
        const displayname = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
             await signup(email.value, password.value, displayname.value)
        }

        return { displayname, email, password, handleSubmit, error }
    }

}
</script>

<style>

</style>