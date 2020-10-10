<template>
  <div class="signup">
    <singIn :text="text" :signPage="true" @saveForm='createUser'/>
  </div>
</template>

<script>
import singIn from '../components/singIn'
import { mapActions } from "vuex";

export default {  
  name: 'SignUp',
  components: {
    singIn
  },
  data(){
    return{
      text: 'Зарегистрируйтесь'
    }
  },
  methods: {
    ...mapActions(["postUser"]),
    createUser(data) {
      this.postUser(data).then(
        path => {
          this.$router.push("/");
        },
        err => {
          console.log("got no data", err);
        }
      );
    }
  }
}
</script>
