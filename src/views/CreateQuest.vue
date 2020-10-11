<template>
  <div class="container mx-auto ">
    <div class="w-3/4 bg-white px-10 pt-12 pb-24 my-12 rounded-md" v-if="user.length!=0">
      <h1 class=" font-bold text-3xl">Создание квеста</h1>
      <QuestForm :buttonText="buttonText" @saveForm="createQuest" />
    </div>
    <div v-else>
      Залогиньтесь
    </div>
  </div>
</template>

<script>
import QuestForm from "@/components/QuestForm";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CreateQuest",
  components: { QuestForm },
  data() {
    return {
      buttonText: "Создать квест"
    };
  },
  methods: {
    ...mapActions(["postQuest"]),
    createQuest(data) {
      this.postQuest(data).then(
        path => {
          this.$router.push("quest/" + path);
        },
        err => {
          console.log("got no data", err);
        }
      );
    }
  },
  computed: mapGetters(["user"])
};
</script>
