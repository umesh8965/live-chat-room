<template>
  <nav>
      <div>
          <p>Welcome! </p>
          <p class="email">CUrrently logged in as</p>
      </div>
      <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import setLogout from "../composables/useLogout"

export default {
    setup(){

        const { error, logout } = setLogout()

        const handleLogout = async () => {
            await logout()
            if (!error.value) {
                console.log("user Logout")
            }
        }

        return { handleLogout }
    }
}
</script>

<style>
 nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>