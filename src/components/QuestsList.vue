<template>
  <div class="QuestList container mx-auto flex flex-wrap">
    <div
      class="p-4 md:w-1/2 xl:w-1/3 xxl:w-1/3 "
      v-for="quest in questsView"
      :key="quest.id"
    >
        <questCard :quest="quest" />
    </div>
    <!-- <p>{{questsCount}}</p> -->
  </div>
</template>

<script>
import questCard from '@/components/QuestCard'
import { mapGetters } from 'vuex'

export default {
  name: 'QuestsList',
  components: { questCard },
  created () {
    this.$store.dispatch('fetchQuests')
  },
  computed: mapGetters(['questsView'])
}
</script>
