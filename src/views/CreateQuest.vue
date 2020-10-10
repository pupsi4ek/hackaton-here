<template>
  <div class="ml-5">
    <p>Создание квеста:</p>
    <QuestForm :buttonText="buttonText" @saveForm="createQuest" />
  </div>
</template>

<script>
import QuestForm from "@/components/QuestForm";
import { mapActions } from "vuex";

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
  }
};
</script>
