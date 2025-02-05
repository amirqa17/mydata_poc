<template>
  <div class="relative">
    <button 
      @click="isOpen = !isOpen"
      class="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-[#BF0000] transition-colors"
    >
      <GlobeAltIcon class="h-5 w-5" />
      <span>{{ currentLanguage.label }}</span>
      <ChevronDownIcon class="h-4 w-4" :class="{ 'transform rotate-180': isOpen }" />
    </button>

    <!-- Dropdown -->
    <div 
      v-if="isOpen"
      class="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg py-1 z-50"
    >
      <button
        v-for="lang in languages"
        :key="lang.code"
        @click="selectLanguage(lang)"
        class="w-full px-4 py-2 text-sm text-left hover:bg-pink-50 flex items-center space-x-2"
        :class="{ 'text-[#BF0000]': lang.code === currentLanguage.code }"
      >
        <span>{{ lang.flag }}</span>
        <span>{{ lang.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { GlobeAltIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const isOpen = ref(false)
const selectedLang = ref('ja')

const languages = [
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' }
]

const currentLanguage = computed(() => 
  languages.find(lang => lang.code === selectedLang.value)
)

const selectLanguage = (lang) => {
  selectedLang.value = lang.code
  isOpen.value = false
  // You can emit an event or call a store action here to handle language change
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.language-switcher')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script> 