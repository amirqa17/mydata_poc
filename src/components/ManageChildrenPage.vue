<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50/50 via-white to-white">
    <!-- Decorative elements (same as other pages) -->

    <div class="container mx-auto px-4 pt-24 pb-12 relative">
      <div class="max-w-5xl mx-auto">
        <!-- Header -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <button 
              @click="router.back()" 
              class="mr-4 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeftIcon class="w-6 h-6" />
            </button>
            <div>
              <h1 class="text-2xl font-bold text-gray-900 mb-1 japanese-text">お子様情報の管理</h1>
              <p class="text-gray-600 japanese-text">登録済みのお子様の情報を管理できます</p>
            </div>
          </div>
        </div>

        <!-- Children Cards Grid -->
        <div class="grid sm:grid-cols-2 gap-8">
          <!-- Existing Children -->
          <div v-for="child in children" :key="child.id"
            class="group bg-white rounded-2xl shadow-lg overflow-hidden relative cursor-pointer transform transition-all duration-500"
            @click="editChild(child)"
          >
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/0 via-pink-100/0 to-blue-100/0 group-hover:from-white/10 group-hover:via-pink-100/10 group-hover:to-blue-100/10 transition-all duration-500 ease-out pointer-events-none"></div>
            
            <!-- Edit Indicator -->
            <div class="absolute top-4 right-4 flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-lg shadow-sm z-10">
              <PencilIcon class="w-4 h-4 text-gray-600" />
              <span class="text-sm text-gray-600 japanese-text">編集</span>
            </div>
            
            <!-- Card Header -->
            <div 
              :class="[
                'p-8 transition-all duration-500',
                child.gender === 'boy' 
                  ? 'bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]' 
                  : 'bg-gradient-to-br from-[#FFE5EC] to-[#FFD1DC]'
              ]"
            >
              <div class="flex items-start">
                <div class="flex items-center gap-4">
                  <div class="bg-white rounded-xl p-3 shadow-sm transition-transform duration-500 group-hover:scale-105">
                    <img 
                      :src="`https://mydata.id.rakuten.co.jp/child-${child.gender}.png`"
                      :alt="child.gender === 'female' ? '女の子' : '男の子'"
                      class="w-24 h-24 object-contain"
                    />
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-800 japanese-text text-xl mb-1">{{ child.name || '名前未設定' }}</h3>
                    <p class="text-sm text-gray-600 japanese-text">
                      {{ child.gender === 'female' ? '女の子' : '男の子' }}
                    </p>
                    <p class="text-base text-gray-600 japanese-text mt-2">
                      {{ calculateAge(child.birthDate) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6 border-t border-gray-100">
              <p class="text-sm text-gray-500 japanese-text">
                {{ formatDate(child.birthDate) }}生まれ
              </p>
            </div>
          </div>

          <!-- Add New Child Card -->
          <button 
            @click="addNewChild"
            class="group bg-white rounded-2xl border-2 border-dashed border-gray-200 transition-all duration-500 p-8 flex flex-col items-center justify-center text-center h-[232px] relative overflow-hidden"
          >
            <!-- Hover Gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-pink-50/0 via-blue-50/0 to-purple-50/0 group-hover:from-pink-50/50 group-hover:via-blue-50/30 group-hover:to-purple-50/20 transition-all duration-500 ease-out"></div>
            
            <div 
              class="relative w-24 h-24 rounded-xl bg-pink-50 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center mb-4"
            >
              <PlusIcon class="w-12 h-12 text-pink-400" />
            </div>
            <h3 class="font-medium text-gray-900 japanese-text text-lg mb-2">お子様を追加</h3>
            <p class="text-sm text-gray-500 japanese-text">
              新しいお子様の情報を登録する
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { 
  ArrowLeftIcon,
  PencilIcon,
  PlusIcon
} from '@heroicons/vue/24/outline'

const router = useRouter()

const children = ref([
  {
    id: 1,
    name: '花子',
    gender: 'girl',
    birthDate: '2022-05-15'
  },
  {
    id: 2,
    name: '太郎',
    gender: 'boy',
    birthDate: '2020-08-22'
  }
])

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const calculateAge = (birthDate) => {
  const today = new Date()
  const birth = new Date(birthDate)
  const monthDiff = today.getMonth() - birth.getMonth()
  let age = today.getFullYear() - birth.getFullYear()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  
  if (age === 0) {
    const months = monthDiff < 0 ? monthDiff + 12 : monthDiff
    return `${months}ヶ月`
  }
  
  return `${age}歳`
}

const editChild = (child) => {
  router.push({
    name: 'MamawariRegistration',
    query: { editChild: child.id }
  })
}

const addNewChild = () => {
  router.push({
    name: 'MamawariRegistration',
    query: { addNew: true }
  })
}
</script> 