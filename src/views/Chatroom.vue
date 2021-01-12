<template>
  <div class="container">
      <Navbar />
  </div>
</template>

<script>
import { watch } from 'vue'
import { useRouter } from 'vue-router'

import Navbar from "../components/Navbar"
import getUser from "../composables/getUser"

export default {

    components: { Navbar },
    setup(){
      const { user } = getUser()
      const router = useRouter()

      watch(user, () => {
        if(!user.value){
          router.push({ name: "Welcome" })
        }
      })

      return { user }
    }

}
</script>

<style>

</style>