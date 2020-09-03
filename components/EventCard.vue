<template>
  <div class="event-card w-full sm:w-4/5 md:w-3/5 lg:w-1/2 cursor-pointer border border-gray-400 rounded-md p-4 mb-4  transition-shadow duration-300 hover:shadow-lg">
    <nuxt-link :to="`/event/${event.id}`">
      <h4 class="text-xl text-center font-bold">
        {{ event.title }}
      </h4>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
