<template>
  <div class="login">
    <singIn :text="text" :signPage="false" @saveForm='logInUser'/>
  </div>
</template>

<script>
import singIn from '../components/singIn'
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'Login',
  components: {
    singIn
  },
  data(){
    return{
      text: 'Войдите в свой аккаунт'
    }
  },
  methods: {
    ...mapActions(["fetchUser"]),
    async logInUser(data) {
      for (let i in this.users){
        if (data.email == this.users[i].email && data.password == this.users[i].password){
          await this.fetchUser(this.users[i].id).then(this.$router.push("/"))
        }
      }
      if (this.$store.getters.user.length == 0){
        alert('Пользователь не найден!')
      }
      // this.fetchUser(data).then(
      //   path => {
      //     this.$router.push("quest/" + path);
      //   },
      //   err => {
      //     console.log("got no data", err);
      //   }
      // );
    }
  },
  created() {
    this.$store.dispatch("fetchUsers");
  },
  computed: mapGetters(["users"])
}
</script>
