<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="Заголовок" v-model="title" /><br />
    <input type="text" placeholder="Обложка квеста" v-model="questImage" />
    <p>MSK.gif</p>
    <br />
    <input
      type="text"
      placeholder="Описание квеста"
      v-model="description"
    /><br />
    <input type="text" placeholder="Автор" v-model="author" /><br />
    <br />
    <input type="text" placeholder="Тип меропритяия" v-model="type" />
    <br />
    <button type="submit">{{ buttonText }}</button>
    <!-- <button @click="uploadFile">UPLOAD IMG</button> -->
  </form>
</template>

<script>
export default {
  name: "QuestForm",
  props: ["buttonText", "data"],
  data() {
    return {
      title: this.data.title,
      questImage: this.data.questImage,
      description: this.data.description,
      author: this.data.author,
      type: this.data.type
    };
  },
  methods: {
    submit() {
      this.$emit("saveForm", {
        title: this.title,
        questImage: this.questImage,
        description: this.description,
        author: this.author,
        type: this.type
      });
    }
  }
};
</script>
