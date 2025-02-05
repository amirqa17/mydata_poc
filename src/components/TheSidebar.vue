<template>
  <!-- Desktop Sidebar -->
  <aside class="hidden md:flex flex-col fixed left-0 top-20 h-screen w-[15vw] bg-white border-r border-gray-200 z-40">
    <div class="flex-1 py-6">
      <nav class="space-y-6">
        <!-- Discount Programs -->
        <template v-for="program in discountPrograms" :key="program.id">
          <a 
            :href="`/programs/${program.id}`"
            class="flex justify-center p-4 hover:bg-gray-50 group relative"
            :class="{ 'bg-gray-50': isCurrentPath(`/programs/${program.id}`) }"
          >
            <img 
              :src="program.logo" 
              :alt="program.name"
              class="h-12 w-auto filter group-hover:brightness-90 transition-all"
            />
            <!-- Active Indicator -->
            <div 
              v-if="program.isActive"
              class="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-14 bg-[#BF0000] rounded-l"
            ></div>
            <!-- Tooltip -->
            <span class="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap japanese-text">
              {{ program.name }}
            </span>
          </a>
        </template>
        <a 
          href="/carwari/register"
          class="flex justify-center p-4 hover:bg-gray-50 group relative"
          :class="{ 'bg-gray-50': isCurrentPath('/carwari/register') }"
        >
          <img 
            src="https://mydata.id.rakuten.co.jp/assets/carwari_logo.svg" 
            alt="カーわり"
            class="h-12 w-auto filter group-hover:brightness-90 transition-all"
          />
          <!-- Active Indicator -->
          <div 
            v-if="program.isActive"
            class="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-14 bg-[#BF0000] rounded-l"
          ></div>
          <!-- Tooltip -->
          <span class="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap japanese-text">
            カーわりに登録
          </span>
        </a>
      </nav>
    </div>

    <!-- Bottom Actions -->
    <div class="p-6 border-t border-gray-200">
      <button 
        class="w-full flex justify-center p-4 hover:bg-gray-50 group relative"
        @click="$emit('add-program')"
      >
        <PlusCircleIcon class="w-8 h-8 text-gray-600 group-hover:text-[#BF0000]" />
        <!-- Tooltip -->
        <span class="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap japanese-text">
          新しい特典を追加
        </span>
      </button>
    </div>
  </aside>

  <!-- Mobile Sidebar -->
  <div 
    v-show="isMobileOpen"
    class="md:hidden fixed inset-0 bg-gray-600 bg-opacity-75 z-50 transition-opacity"
    @click="closeMobileSidebar"
  >
    <aside 
      class="fixed inset-y-0 left-0 w-64 bg-white transform transition-transform duration-300 ease-in-out"
      :class="isMobileOpen ? 'translate-x-0' : '-translate-x-full'"
      @click.stop
    >
      <!-- Mobile Header -->
      <div class="h-20 flex items-center justify-between px-4 border-b border-gray-200">
        <h2 class="text-lg font-bold text-gray-900 japanese-text">割引プログラム</h2>
        <button 
          @click="closeMobileSidebar"
          class="p-2 rounded-md text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Content -->
      <div class="flex-1 py-6 overflow-y-auto">
        <nav class="space-y-6">
          <template v-for="program in discountPrograms" :key="program.id">
            <a 
              :href="`/programs/${program.id}`"
              class="flex items-center px-4 py-3 hover:bg-gray-50 group relative"
              :class="{ 'bg-gray-50': isCurrentPath(`/programs/${program.id}`) }"
            >
              <img 
                :src="program.logo" 
                :alt="program.name"
                class="h-10 w-auto"
              />
              <span class="ml-3 text-sm font-medium text-gray-900 japanese-text">
                {{ program.name }}
              </span>
              <div 
                v-if="program.isActive"
                class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#BF0000] rounded-r"
              ></div>
            </a>
          </template>
        </nav>
      </div>

      <!-- Mobile Bottom Actions -->
      <div class="p-4 border-t border-gray-200">
        <button 
          class="w-full flex items-center justify-center space-x-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg"
          @click="$emit('add-program')"
        >
          <PlusCircleIcon class="w-6 h-6 text-gray-600" />
          <span class="text-sm font-medium text-gray-900 japanese-text">新しい特典を追加</span>
        </button>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { PlusCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const isMobileOpen = ref(false)

const closeMobileSidebar = () => {
  isMobileOpen.value = false
}

// Expose method to open sidebar
defineExpose({ 
  openMobileSidebar: () => { isMobileOpen.value = true }
})

const discountPrograms = [
  {
    id: 'mama',
    name: 'ママわり',
    logo: 'https://mydata.id.rakuten.co.jp/assets/mamawari_logo-rLpLtBDj.svg',
    isActive: true
  },
  {
    id: 'gaku',
    name: '学割',
    logo: 'https://mydata.id.rakuten.co.jp/assets/gakuwari_logo-_s7Ebmrt.svg',
    isActive: true
  },
  {
    id: 'pet',
    name: 'ペットわり',
    logo: 'https://mydata.id.rakuten.co.jp/assets/petwari_logo--vxukZJ4.svg',
    isActive: false
  }
]

const isCurrentPath = (path) => route.path === path
</script>

<style scoped>
/* Smooth tooltip transition */
.group:hover span {
  transition-delay: 150ms;
}
</style> 