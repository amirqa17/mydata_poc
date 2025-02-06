<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden">
    <!-- Card Header -->
    <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
      <div class="flex justify-between items-start">
        <div class="flex items-center space-x-3">
          <img 
            :src="getManufacturerLogo(car.manufacturer)" 
            :alt="car.manufacturer"
            class="w-12 h-12 object-contain bg-white rounded-lg p-1"
          />
          <div>
            <h3 class="text-lg font-bold text-white japanese-text">{{ car.model }}</h3>
            <p class="text-blue-100 text-sm japanese-text">
              {{ car.registrationYear }}年 {{ car.registrationMonth }}月
            </p>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <!-- Completion Badge -->
          <span 
            class="px-2 py-1 rounded-full text-xs font-medium"
            :class="getCompletionBadgeClass"
          >
            {{ getCompletionStatus }}
          </span>
          <!-- Edit Button -->
          <button 
            @click="startEditing"
            class="p-2 text-white hover:bg-blue-600 rounded-lg transition-colors"
          >
            <PencilIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Card Content -->
    <div class="p-4">
      <!-- Progress Bar -->
      <div class="mb-4">
        <div class="flex justify-between items-center mb-1">
          <span class="text-sm text-gray-600 japanese-text">登録情報の完成度</span>
          <span class="text-sm font-medium text-gray-900">{{ completionPercentage }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div 
            class="h-2 rounded-full transition-all duration-500"
            :class="getProgressBarClass"
            :style="{ width: `${completionPercentage}%` }"
          ></div>
        </div>
      </div>

      <!-- Car Details Grid -->
      <div class="grid grid-cols-2 gap-4">
        <template v-for="(field, key) in carFields" :key="key">
          <div class="space-y-1">
            <label class="text-xs text-gray-500 japanese-text">{{ field.label }}</label>
            <div class="flex items-center space-x-2">
              <p 
                class="text-sm text-gray-900 japanese-text"
                :class="{'text-gray-400': !car[key]}"
              >
                {{ car[key] || '未設定' }}
              </p>
              <span 
                v-if="field.required" 
                class="text-xs px-1.5 py-0.5 rounded japanese-text"
                :class="car[key] ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
              >
                必須
              </span>
            </div>
          </div>
        </template>
      </div>

      <!-- Action Buttons -->
      <div class="mt-6 flex justify-between items-center">
        <button 
          @click="openInsuranceDetails"
          class="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700"
        >
          <ShieldCheckIcon class="w-5 h-5" />
          <span class="japanese-text">保険詳細を確認</span>
        </button>
        <button 
          @click="openMaintenanceHistory"
          class="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700"
        >
          <WrenchIcon class="w-5 h-5" />
          <span class="japanese-text">メンテナンス履歴</span>
        </button>
      </div>
    </div>

    <!-- Edit Modal -->
    <EditCarModal 
      v-if="isEditing"
      :car="car"
      @close="isEditing = false"
      @save="handleSave"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  PencilIcon, 
  ShieldCheckIcon, 
  WrenchIcon 
} from '@heroicons/vue/24/outline'
import EditCarModal from './EditCarModal.vue'

const props = defineProps({
  car: {
    type: Object,
    required: true
  }
})

const isEditing = ref(false)

const carFields = {
  purchaseCondition: { label: '購入時の状態', required: true },
  manufacturer: { label: 'メーカー', required: true },
  model: { label: '車種', required: true },
  grade: { label: 'グレード', required: false },
  registrationYear: { label: '初度登録年', required: true },
  registrationMonth: { label: '初度登録月', required: false },
  inspectionDate: { label: '車検満了日', required: true },
  insuranceDate: { label: '自動車保険満了日', required: true },
  licenseColor: { label: '運転免許証の色', required: false },
  insuranceCompany: { label: '保険会社', required: false },
  insuranceGrade: { label: '保険等級', required: false },
  mileage: { label: '走行距離', required: false }
}

// Calculate completion percentage
const completionPercentage = computed(() => {
  const requiredFields = Object.entries(carFields).filter(([_, field]) => field.required)
  const completedRequired = requiredFields.filter(([key]) => props.car[key]).length
  const totalRequired = requiredFields.length
  return Math.round((completedRequired / totalRequired) * 100)
})

// Get appropriate classes for completion badge
const getCompletionBadgeClass = computed(() => {
  if (completionPercentage.value === 100) {
    return 'bg-green-100 text-green-700'
  } else if (completionPercentage.value >= 50) {
    return 'bg-yellow-100 text-yellow-700'
  }
  return 'bg-red-100 text-red-700'
})

// Get completion status text
const getCompletionStatus = computed(() => {
  if (completionPercentage.value === 100) return '登録完了'
  if (completionPercentage.value >= 50) return '登録中'
  return '未完了'
})

// Get progress bar color class
const getProgressBarClass = computed(() => {
  if (completionPercentage.value === 100) return 'bg-green-500'
  if (completionPercentage.value >= 50) return 'bg-yellow-500'
  return 'bg-red-500'
})

// Get manufacturer logo
const getManufacturerLogo = (manufacturer) => {
  // Add your logic to return the correct logo URL based on manufacturer
  return `https://mydata.id.rakuten.co.jp/assets/carwari_${manufacturer}_logo.svg`
}

const startEditing = () => {
  isEditing.value = true
}

const handleSave = (updatedCar) => {
  // Emit update event to parent
  emit('update', updatedCar)
  isEditing.value = false
}

const openInsuranceDetails = () => {
  // Add your logic to show insurance details
}

const openMaintenanceHistory = () => {
  // Add your logic to show maintenance history
}
</script> 