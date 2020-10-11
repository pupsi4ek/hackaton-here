<template>
<nav class="bg-white shadow w-full">
  <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
    <div class="flex justify-between items-center">
      <div>
        <router-link to="/">
        <div class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">
          <img class=" h-12" src="../assets/images/logo.png" alt="logo">
        </div>
        </router-link>
      </div>

      <div class="flex md:hidden" @click="opened=!opened">
        <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="md:flex items-center " :class="{'block':opened, 'hidden':!opened}">
      <div class="flex flex-col md:flex-row md:mx-6">
        <router-link to="/create">
          <div class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
            +
          </div>
        </router-link>
        <router-link v-if="user.length!=0" to="/cabinet">
          <div class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
            {{ user.username }}
          </div>
        </router-link>
        <router-link v-else to="/login">
          <div class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
            Login
          </div>
        </router-link>
        <router-link v-if="user.length==0" to="/signup">
          <div class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
            Sign Up
          </div>
        </router-link>
        <div v-if="user.length!=0" @click="showDialog = true" class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
          Logout
        </div>
        <p v-if="showDialog">Уверен?</p>
        <button v-if="showDialog" @click="logOut">ДА</button>
         <Dialog
            v-if="showDialog"
            @close="showDialog = false"
            @submit="logOut"
            :params="{
              header: 'Вы уверены, что хотите выйти?',
            }" />
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Dialog from "@/components/Dialog";

export default {
  data (){
    return {
      opened : false,
      showDialog: false
    }
  },
  methods: {
    ...mapActions(["resetUser"]),
    logOut() {
      this.resetUser()
      this.showDialog = false
    }
  },
  computed: mapGetters(["user"])
}
</script>
