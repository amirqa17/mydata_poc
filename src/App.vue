<template>
  <div class="min-h-screen bg-gray-50">
    <TheHeader ref="headerRef" />
    <TheSidebar 
      ref="sidebarRef" 
      @add-program="handleAddProgram"
    />
    <main class="md:pl-[15vw]"> <!-- Changed from 30vw to 15vw -->
      <RakutenLoader v-if="isLoading" />
      <router-view v-else></router-view>
    </main>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheSidebar from './components/TheSidebar.vue'
import RakutenLoader from './components/RakutenLoader.vue'
import { isRouteLoading } from './router'

const isLoading = computed(() => isRouteLoading.value)

const headerRef = ref(null)
const sidebarRef = ref(null)

// Pass the sidebar ref to header after mount
onMounted(() => {
  headerRef.value.sidebarRef = sidebarRef.value
})
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
