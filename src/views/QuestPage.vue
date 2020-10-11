<template>
  <div class="EventPage bg-gray-200 container mx-auto my-20 flex flex-col lg:flex-row rounded-md">
    <div class="lg:w-2/3 bg-white lg:mr-12 pb-10">
      <Map class="w-full mb-4 rounded-md" :center='center' :pointList='coordList'/>
      <div class="px-8 lg:w-5/6">
        <h1 class="font-bold text-2xl md:text-3xl xl:text-4xl ">
          {{ quest.title }}
        </h1>
        <p class=" text-xl leading-relaxed mb-10">
          {{ quest.description }}
        </p>
        <div v-for="stage in quest.stages" :key="stage.title">
          <div class=" mb-6">
            <p class=" text-2xl font-medium leading-relaxed">{{stage.title}}</p>
            <p>{{stage.text}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="RightBar lg:w-1/3 bg-white h-full p-6 sticky top-2 rounded-md ">
      <div class="Autour desc flex items-center pb-4 border-b-2">
        <img 
        class=" h-10 w-10 rounded-sm object-cover mr-4"
        :src="require('../assets/images/' + quest.questImage)"
        alt="avatar">
        <p>{{quest.author}} </p>
      </div>
          <router-link v-if="user.username == quest.author" :to="{ name: 'EditQuest', params: { id: quest.id } }">
            <p class="border">Редактировать квест</p>
          </router-link>
        <div class="Location blue-text my-4">
          <p>Место</p>
          <p class=" font-medium text-purple-500">{{address}}</p>
        </div>
        <div class="Rating blue-text my-4">
          <p>Возрастное ограничение</p>
          <p class=" font-medium">{{quest.rating}}</p>
        </div>
        <div class="Likes blue-text my-4">
          <p>Оценки</p>
          <div class=" flex">
            <div class="flex mr-8">
              <p class="font-medium pr-2">{{quest.likes}}</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 10C23 9.46957 22.7893 8.96086 22.4142 8.58579C22.0391 8.21071 21.5304 8 21 8H14.68L15.64 3.43C15.66 3.33 15.67 3.22 15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9V19C7 19.5304 7.21071 20.0391 7.58579 20.4142C7.96086 20.7893 8.46957 21 9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10ZM1 21H5V9H1V21Z" fill="#7F9CF5"/>
              </svg>
            </div>
            <div class="flex">
              <p class="font-medium pr-2">{{quest.dislikes}}</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 15H23V3H19V15ZM15 3H6C5.17 3 4.46 3.5 4.16 4.22L1.14 11.27C1.05 11.5 1 11.74 1 12V14C1 14.5304 1.21071 15.0391 1.58579 15.4142C1.96086 15.7893 2.46957 16 3 16H9.31L8.36 20.57C8.34 20.67 8.33 20.77 8.33 20.88C8.33 21.3 8.5 21.67 8.77 21.94L9.83 23L16.41 16.41C16.78 16.05 17 15.55 17 15V5C17 4.46957 16.7893 3.96086 16.4142 3.58579C16.0391 3.21071 15.5304 3 15 3Z" fill="#7F9CF5"/>
              </svg>
            </div>
          </div>
        </div>
      <router-link v-if="user.length!=0" :to="{ name: 'PlayQuest', params: { id: quest.id } }">
        <button class="relative w-full mt-8 flex justify-center py-3 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
          Учавствовать
        </button>
      </router-link>
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
      },
      address: null
    }  
  },
  methods: {
    getAddress(coords){
      let platform = new H.service.Platform({
        'apikey': 'q7fkEh0tQvYbpV6iFqcjBcjwj--TI19lNuGxiWxLvcM'
      });

      var service = platform.getSearchService();
      
      service.reverseGeocode({
        at: coords.replace(/\s/g, '')
      }, (result) => {
        this.address = result.items[0].title
        return result.items[0].title
      }, alert);
    }    
  },
  created: function () {
    this.$store.dispatch("fetchQuest", this.$route.params.id);
    this.getAddress(this.quest.map[0])
  },
  computed: {
    ...mapGetters(["quest", "user"]),
    coordList(){
      let coords = []
      for (let i in this.quest.map){
        let arr = this.quest.map[i].split(',')
        let obj = {'lat': parseFloat(arr[0]), 'lng': parseFloat(arr[1])}
        coords.push(obj)
      }
      return coords
    }
  }
};
</script>