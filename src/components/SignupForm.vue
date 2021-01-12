<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" v-model="displayName" placeholder="Display Name" required>
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
    setup(props, context){

        const {error, signup} = setSignup()

        //ref
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
             await signup(email.value, password.value, displayName.value)
             if(!error.value){
                 context.emit("signupevent")
             }
        }

        return { email, password, displayName, handleSubmit, error }
    }

}
</script>

<style>

</style>