<template>
  <div class="app-wrap">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  head() {
    return {
      titleTemplate: "%s - Real World Events",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Simple app for listing a series of events."
        }
      ],
    };
  },
};
</script>

<style lang="postcss">
html,
body {
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-wrap {
  @apply w-full h-screen flex flex-col bg-yellow-500;
}
</style>
