<script>
import AppNavbar from "@/components/AppNavbar.vue"

export default {
  components: { AppNavbar }
}

</script>

<template>
  <header>
    <AppNavbar />
  </header>

  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped></style>
