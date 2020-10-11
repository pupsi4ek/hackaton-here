<template>
    <button class="relative w-full flex justify-center py-3 px-4 border border-transparent text-base leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
        {{buttonText}}
    </button>
</template>

<script>
export default {
    name: "BaseButton",
    props: ["buttonText"]

}
</script>
