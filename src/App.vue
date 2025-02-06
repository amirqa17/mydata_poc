<template>
  <div class="min-h-screen bg-gray-50">
    <TheHeader ref="headerRef" />
    <main>
      <RakutenLoader v-if="isLoading" />
      <router-view v-else></router-view>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import RakutenLoader from './components/RakutenLoader.vue'
import { isRouteLoading } from './router'

const isLoading = computed(() => isRouteLoading.value)

const headerRef = ref(null)

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
