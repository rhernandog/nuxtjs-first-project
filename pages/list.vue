<template>
  <div class="layout-wrap">
    <div class="container mx-auto flex flex-col items-center px-4">
      <h1 class="title mb-5">
        All Events
      </h1>
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import EventCard from '@/components/EventCard.vue';

export default {
  components: {
    EventCard,
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("events/fetchEvents");
    } catch (err) {
      error({
        statusCode: 503,
        message: "Unable to fetch server data. Please try again."
      });
    }
  },
  computed: {
    ...mapState({
      events: state => state.events.events
    })
  },
  head() {
    return {
      title: "All Events",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "All the events gathered in our app.",
        },
      ],
    };
  },
};
</script>
