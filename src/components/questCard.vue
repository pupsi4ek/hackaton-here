<template>
  <div class="questCard text-gray-700 body-font">
    <div
      class="h-full bg-white border border-gray-300 rounded-md  overflow-hidden "
    >
      <img
        class="lg:h-48 md:h-36 w-full object-cover object-center"
        :src="require('../assets/images/' + quest.questImage)"
        alt="blog"
      />
      <div class="flex items-start py-5 px-5">
        <div>
          <p class="text-sm text-purple-500 mb-1">{{quest.map[0]}} </p>
          <h1 class="title-font text-xl h-16 font-bold text-gray-900 mb-3">
            {{ quest.title }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestCard",
  props: ["quest"]
}
</script>