<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        //ref
        const email = ref('')
        const password = ref('')

        const handleSubmit = () => {
             
        }

        return { email, password, handleSubmit }
    }

}
</script>

<style>

</style>