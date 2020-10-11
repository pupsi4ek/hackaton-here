<template>
  <div class="PlayQuest bg-gray-200 container mx-auto my-20 flex flex-col lg:flex-row rounded-md">
    <div class="lg:w-2/3 bg-white lg:mr-12 pb-10">
      <Map class="w-full mb-4 rounded-md" :center='center' :pointList='coordList'/>
      <div class="px-8 lg:w-5/6">
        <h1 class="font-bold text-2xl md:text-3xl xl:text-4xl ">
          {{ quest.title }}
        </h1>
        <p class=" text-xl leading-relaxed mb-10">
          {{ quest.description }}
        </p>
        <div >
          <div class="mb-6">
            <p class=" text-2xl font-medium leading-relaxed">{{quest.stages[0].title}}</p>
            <p>{{quest.stages[0].text}}</p>
            <p>{{quest.stages[0].checkType}}</p>
            <!-- <BaseInput @input="updateAns" placeholder="Введите ответ"/> -->
            <input class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-base sm:leading-5" placeholder="Введите ответ" type="text" v-model="firstAns">
          </div>
        </div>
        <div v-if="firstAns == quest.stages[0].answer">
          <div v-for="(stage, index) in quest.stages.slice(1)" :key="index">
            <div v-if='index = index' class="mb-6">
              <p class=" text-2xl font-medium leading-relaxed">{{stage.title}}</p>
              <p>{{stage.text}}</p>
              <p>{{stage.checkType}}</p>
              <input class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-base sm:leading-5" placeholder="Введите ответ" v-model="temp"/>
            </div>
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
        <div class="Location blue-text my-4">
          <p>Место</p>
          <p class=" font-medium text-purple-500">{{quest.map[0]}}</p>
        </div>
        <div v-for="stage in quest.stages" :key="stage.title">
          <div class=" mb-6">
            <p class=" text-2xl font-medium leading-relaxed">{{stage.title}}</p>
          </div>
        </div>
      <button class="relative w-full mt-8 flex justify-center py-3 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
        Далее
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Map from '@/components/Map'
// import BaseInput from '../components/reusable/BaseInput'

export default {
  name: "QuestPage",
  components:{ 
    Map,
    // BaseInput
   },
  data() {
    return {
      center:{ 
        lat: 55.932791, 
        lng: 37.439879
      },
      firstAns: '',
      temp: '',
      ansId: ''
    }  
  },
  methods: {
    updateAns(){
      this.temp = this.firstAns
    }
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