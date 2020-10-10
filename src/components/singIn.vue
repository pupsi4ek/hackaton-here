<template>
    <div class=" mt-1 bg-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full -mt-12">
    <div>
      <img class="mx-auto h-16w-auto" src="../assets/images/logoNoText.png" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        {{ text }}
      </h2>
      <div class="mt-2 text-center text-sm leading-5 text-gray-600">
        <router-link  v-if="signPage" to='/login'>
          <div class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
            Есть аккаунт? Войдите
          </div>
        </router-link>
        <router-link v-else to='/signup'>
          <div class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
            Нет аккаунта? Зарегистрируйтесь
          </div>
        </router-link>
      </div>
    </div>
    <form class="mt-8" @submit.prevent="submit">
      <input type="hidden" value="true">
      <div class="rounded-md shadow-sm">
        <div v-if="signPage">
          <input v-model="username" type="username" required class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Имя пользователя">
        </div>
        <div class="mt-4">
          <input v-model="email" type="email" required class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email">
        </div>
        <div class="mt-4">
          <input v-model="password" type="password" required class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Пароль">
        </div>
      </div>

      <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
          <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">
            Запомнить меня
          </label>
        </div>

        <div class="text-sm leading-5">
          <div class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
            Забыли пароль?
          </div>
        </div>
      </div>

      <div class="mt-6">
        <button type="submit" class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Войти
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: "singIn",
  props: ['text', 'signPage', 'data'],
  data() {
    return {
      username: this.data.username,      
      password: this.data.password,
      email: this.data.email,
      quests: ['0']
    };
  },
  methods: {
    submit() {
      console.log(this.quests);
      this.$emit("saveForm", {        
        username: this.username,
        password: this.password,
        email: this.email,
        quests: this.quests
      });
    }
  }
}
</script>
