<template>
  <header class="header items-end px-3">
    <nuxt-link to="/" class="brand flex items-end py-1 text-2xl text-gray-300 hover:text-white">
      <img src="~/assets/img/events-icon.png" alt="Logo" class="inline-block h-full mr-2">
      Real World Events
    </nuxt-link>
    <nav class="nav-bar">
      <nuxt-link to="/list" class="nav-link">
        List
      </nuxt-link>
      <nuxt-link to="/event/create" class="nav-link">
        Create
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>
