<template>
  <div class="layout-wrap">
    <div class="container mx-auto">
      <h1 class="text-3xl text-center my-4">
        Event: {{ event.title }}
      </h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch("events/fetchEvent", params.id);
    } catch (err) {
      error({
        statusCode: 503,
        message: `Unable to fetch an event with ID: ${params.id}`
      });
    }
  },
  computed: {
    ...mapState({
      event: state => state.events.event
    }),
  },
  head() {
    return {
      title: this.event.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Details about the event ${this.event.title}`
        }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>

</style>
