<template>
  <div class="home">
    <QuestsList />
  </div>
</template>

<script>
import QuestsList from "@/components/QuestsList";

export default {
  name: "Home",
  components: {
    QuestsList
  }
};
</script>
