<template>
  <div class="EventPage bg-gray-200 container mx-auto my-20 flex flex-row rounded-md">
    <div class="w-2/3 bg-white mr-12">
      <!-- <img
      class="w-full mb-4 rounded-md"
      :src="require('../assets/images/' + quest.questImage)"
      alt="Обложка мероприятия"
      /> -->
      <Map class="w-full mb-4 rounded-md" :center='center' :pointList='coordList'/>
      <!-- <div v-for="mapPoint in quest.map" :key="mapPoint">
        <p>{{ mapPoint }}</p>
      </div> -->
      <div class="px-6">
        <h1 class="font-bold text-4xl mb-5">
          {{ quest.title }}
        </h1>
        <p class=" text-xl leading-relaxed">ID: {{ quest.id }}</p>
        <p class=" text-xl leading-relaxed">
          {{ quest.description }}
        </p>
      </div>
    </div>
    <div class="RightBar w-1/3 bg-white h-full p-6 sticky top-2 rounded-md">
      <div class="Autour desc">
        <p>{{quest.author}} </p>
      </div>
          <router-link v-if="user.username == quest.author" :to="{ name: 'EditQuest', params: { id: quest.id } }">
            <p class="border">Редактировать квест</p>
          </router-link>
        <div class="Location blue-text mb-4">
          <p class="">Место</p>
          <p class=" font-semibold text-lg">
            {{ quest.type }}
          </p>
        </div>
        <button class="w-full bg-green-500 h-16 font-semibold text-xl text-white mt-6">
        Регистрация
        </button>
    </div>
      </div>
</template>

<script>
import { mapGetters } from "vuex";
import Map from '@/components/Map'

export default {
  name: "QuestPage",
  components:{ Map },
  data() {
    return {
      center:{ 
        lat: 55.932791, 
        lng: 37.439879
      }
    }  
  },
  methods: {
  },
  created() {
    this.$store.dispatch("fetchQuest", this.$route.params.id);
  },
  computed: {
    ...mapGetters(["quest", "user"]),
    coordList(){
      let coords = []
      for (let i in this.quest.map){
        let arr = this.quest.map[i].split(',')
        let obj = {}
        obj['lat'] = parseFloat(arr[0])
        obj['lng'] = parseFloat(arr[1])
        coords.push(obj)
      }
      return coords
    }
  }
};
</script>