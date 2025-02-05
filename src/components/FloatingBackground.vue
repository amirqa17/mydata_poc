<template>
  <div class="absolute inset-0 pointer-events-none overflow-hidden" 
    style="height: 100%; max-width: 1200px; margin: 0 auto;">
    <div class="layer relative h-full" aria-hidden="true">
      <div v-for="(item, index) in FLOATING_ITEMS" :key="`layer1-${index}`"
        class="absolute floating-item"
        :style="{
          left: item.position.left,
          right: item.position.right,
          top: item.position.top,
          opacity: 0.12,
          color: '#FF82A3',
          filter: 'saturate(0.7)',
        }"
      >
        <span :class="[
          item.size,
          'transform transition-transform duration-1000 hover:scale-110'
        ]">
          {{ item.emoji }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FLOATING_ITEMS } from '../constants/decorations'
</script>

<style scoped>
.floating-item {
  transform: scale(0.9);
  transition: opacity 0.3s ease;
}

.floating-item:hover {
  opacity: 0.25 !important;
}
</style> 