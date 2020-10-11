<template>
  <div class="">
    <form class="flex flex-col w-3/5" @submit.prevent="submit">
      <div class="main-inf mt-8">
        <h2 class=" font-medium text-xl">Основная информация</h2>
        <p class="mb-6">Заполните информацию, чтобы игроки сразу поняли о чем ваш квест. Заитересуйте их необычным названием и описанием</p>
        <BaseInput type="text" placeholder="Заголовок" v-model="title"/>
        <BaseArea class=" mt-5" placeholder="Описание" v-model="description"/>
        <p class="">Загрузите обложку</p>
        <BaseInput class="" type="file" placeholder="Обложка квеста" v-model="questImage" />
        <BaseInput class="mt-5" type="text" placeholder="Тип квеста" v-model="type" />
      </div>
      <BaseButton class=" mt-16" :buttonText="buttonText" type="submit"/>
    </form>
  </div>
</template>

<script>
import BaseInput from '../components/reusable/BaseInput'
import BaseArea from '../components/reusable/BaseArea'
import BaseButton from '../components/reusable/BaseButton'
import {mapGetters} from 'vuex'

export default {
  name: "QuestForm",
  components: {
    BaseInput,
    BaseArea,
    BaseButton
  },
  props: ["buttonText", "data"],
  data() {
    return {
      title: this.data.title,
      questImage: this.data.questImage,
      description: this.data.description,
      type: this.data.type
    };
  },
  methods: {
    submit() {
      this.$emit("saveForm", {
        title: this.title,
        questImage: this.questImage,
        description: this.description,
        author: this.user.username,
        type: this.type
      });
    }
  },
  computed: mapGetters(["user"])
};
</script>
