<template>
  <div class="ml-5">
    <div v-if="user.length!=0">
      <p>Создание квеста:</p>
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
