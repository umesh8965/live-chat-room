import { ref } from "vue"
import { projectAuth } from "../firebase/config"


const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(_authuser => {
    user.value = _authuser
})

const getUser = () => {
    return { user }
}

export default getUser