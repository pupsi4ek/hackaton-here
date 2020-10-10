<template>
  <div class="QuestList container mx-auto flex flex-wrap my-20">
    <div
      class="p-4 md:w-1/2 xl:w-1/3"
      v-for="quest in questsView"
      :key="quest.id"
    >
      <router-link :to="{ name: 'Quest', params: { id: quest.id } }">
        <QuestCard :quest="quest" />
      </router-link>
    </div>
    <!-- <p>{{questsCount}}</p> -->
  </div>
</template>

<script>
import QuestCard from '@/components/QuestCard'
import { mapGetters } from 'vuex'

export default {
  name: 'QuestsList',
  components: { QuestCard },
  created () {
    this.$store.dispatch('fetchQuests')
  },
  computed: mapGetters(['questsView'])
}
</script>
