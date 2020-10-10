<template>
  <div class="EventPage bg-gray-200 pt-32">
          <h1 class="font-bold text-4xl mb-5">
            {{ quest.title }}
          </h1>
          <br>
          <img
          class="w-full mb-10"
          :src="require('../assets/images/' + quest.questImage)"
          alt="Обложка мероприятия"
        />
        <br>
          <p class=" text-xl leading-relaxed">ID: {{ quest.id }}</p>
          <p class=" text-xl leading-relaxed">
            {{ quest.description }}
          </p>
          <br>
          <router-link :to="{ name: 'EditQuest', params: { id: quest.id } }">
            <p class="border">Редактировать квест</p>
          </router-link>
        <div class="Location blue-text mb-4">
          <p class="">Место</p>
          <p class=" font-semibold text-lg">
            {{ quest.type }}
          </p>
        </div>
        <br>
        <button
          class="w-full bg-green-500 h-16 font-semibold text-xl text-white mt-6"
        >
          Регистрация
        </button>
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
