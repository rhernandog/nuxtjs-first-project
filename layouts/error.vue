<template>
  <div class="layout-wrap">
    <div class="container h-full mx-auto flex justify-center items-center">
      <h1 class="text-4xl">
        {{ statusCode }} | {{ message }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    message() {
      return this.error.message;
    },
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    }
  },
  head() {
    return {
      title: this.message
    };
  },
};
</script>
