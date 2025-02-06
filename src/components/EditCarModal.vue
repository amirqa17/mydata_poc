<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
    <div class="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-xl bg-white">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-bold text-gray-900 japanese-text">車両情報を編集</h3>
        <button 
          @click="$emit('close')"
          class="text-gray-400 hover:text-gray-500"
        >
          <XMarkIcon class="w-6 h-6" />
        </button>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Form fields -->
        <div class="grid grid-cols-2 gap-4">
          <template v-for="(field, key) in carFields" :key="key">
            <div class="space-y-1">
              <label :for="key" class="block text-sm font-medium text-gray-700 japanese-text">
                {{ field.label }}
                <span v-if="field.required" class="text-red-500">*</span>
              </label>
              <input
                :id="key"
                v-model="formData[key]"
                :required="field.required"
                type="text"
                class="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </template>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-end space-x-3 pt-4 border-t">
          <button
            type="button"
            @click="$emit('close')"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 japanese-text"
          >
            キャンセル
          </button>
          <button
            type="submit"
            class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 japanese-text"
          >
            保存
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  car: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close', 'save'])

// Initialize form data with current car values
const formData = ref({ ...props.car })

const handleSubmit = () => {
  emit('save', formData.value)
}

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
</script> 