<template>
  <div class="ml-5">
    <p>Редактирование квеста:</p>
    <QuestForm :buttonText="buttonText" :data="quest" @saveForm="editQuest" />
    <button id="show-modal" @click="showDialog = true">Удалить квест</button>
    <Dialog
      v-if="showDialog"
      @close="showDialog = false"
      @submit="removeQuest"
      :params="{
        header: 'Вы уверены, что хотите удалить квест?',
        body: 'Его нельзя будет восстановить!'
      }"
    ></Dialog>
  </div>
</template>

<script>
import QuestForm from "@/components/QuestForm";
import Dialog from "@/components/Dialog";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EditQuest",
  components: { QuestForm, Dialog },
  data() {
    return {
      showDialog: false,
      buttonText: "Сохранить изменения"
    };
  },
  methods: {
    ...mapActions(["putQuest", "deleteQuest"]),
    editQuest(data) {
      this.putQuest({ id: this.$route.params.id, quest: data }).then(
        path => {
          this.$router.push({ path: `/quests/${path}` });
        },
        err => {
          console.log("got no data", err);
        }
      );
    },
    removeQuest() {
      this.deleteQuest(this.$route.params.id).then(
        path => {
          this.$router.push({ path: "/" });
          console.log(path + " deleted");
        },
        err => {
          console.log("got no data", err);
        }
      );
    }
  },
  created() {
    this.$store.dispatch("fetchQuest", this.$route.params.id);
  },
  computed: mapGetters(["quest"])
};
</script>
