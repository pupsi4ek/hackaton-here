<template>
  <div class="EventPage bg-gray-200 container mx-auto my-20 flex flex-row">
      <div class=" w-2/3 bg-white mr-12">
          <img
          class="w-full mb-4 rounded-md"
          :src="require('../assets/images/' + quest.questImage)"
          alt="Обложка мероприятия"
          />
          <div class=" px-6">
            <h1 class="font-bold text-4xl mb-5">
              {{ quest.title }}
            </h1>
            <div class=" mb-10">
            <p class=" text-2xl font-medium leading-relaxed mb-3">1. Начало места</p>
            <p class=" text-base leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim temporibus earum vel officia dicta exercitationem alias labore facilis magni fugiat. Laborum, doloremque. Eum laborum facere voluptatum assumenda laudantium sunt aperiam?</p>
            </div>
            <div>
            <p class=" text-2xl font-medium leading-relaxed mb-3">2. Загадочная приколюха</p>
            <p class=" text-base leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim temporibus earum vel officia dicta exercitationem alias labore facilis magni fugiat. Laborum, doloremque. Eum laborum facere voluptatum assumenda laudantium sunt aperiam?</p>
            </div>
            <p class=" text-xl leading-relaxed">
              {{ quest.description }}
            </p>
            <router-link :to="{ name: 'EditQuest', params: { id: quest.id } }">
              <p class="border">Редактировать квест</p>
            </router-link>
          <div class="Location blue-text mb-4">
            <p class="">Место</p>
            <p class=" font-semibold text-lg">
              {{ quest.type }}
            </p>
          </div>
          </div>
      </div>
      <div class="RightBar w-1/3 bg-white h-full p-6 sticky top-2 rounded-md">
        <div>
          <img src="" alt="">
          <p>{{quest.author}}</p>
        </div>
        <span>
          <p class=" text-lg font-medium mb-4">1. Начало места</p>
        </span>
        <span>
          <p class=" text-lg font-medium">2. Загадочная приколюха</p>
        </span>
        <button type="submit" class=" mt-6 group relative w-full flex justify-center py-3 px-4 border border-transparent text-base leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
          Зарегистрироваться
        </button>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "QuestPage",
  methods: {
  },
  created() {
    this.$store.dispatch("fetchQuest", this.$route.params.id);
  },
  computed: mapGetters(["quest"])
};
</script>
