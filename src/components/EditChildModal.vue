<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
    <div class="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-xl bg-white">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-bold text-gray-900 japanese-text">
          {{ isExpecting ? '妊娠情報を編集' : 'お子様の情報を編集' }}
        </h3>
        <button 
          @click="$emit('close')"
          class="text-gray-400 hover:text-gray-500"
        >
          <XMarkIcon class="w-6 h-6" />
        </button>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Name -->
        <div class="space-y-1">
          <label class="block text-sm font-medium text-gray-700 japanese-text">
            お名前
            <span v-if="!isExpecting" class="text-red-500">*</span>
          </label>
          <input
            v-model="formData.name"
            type="text"
            :required="!isExpecting"
            class="block w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            :placeholder="isExpecting ? '(出産後に登録)' : '例：楽天 花子'"
          />
        </div>

        <!-- Gender -->
        <div class="space-y-1">
          <label class="block text-sm font-medium text-gray-700 japanese-text">
            性別
            <span class="text-red-500">*</span>
          </label>
          <div class="flex space-x-4">
            <label class="flex items-center">
              <input
                type="radio"
                v-model="formData.gender"
                value="female"
                class="text-pink-500 focus:ring-pink-500 h-4 w-4"
                required
              />
              <span class="ml-2 text-sm text-gray-700 japanese-text">女の子</span>
            </label>
            <label class="flex items-center">
              <input
                type="radio"
                v-model="formData.gender"
                value="male"
                class="text-pink-500 focus:ring-pink-500 h-4 w-4"
                required
              />
              <span class="ml-2 text-sm text-gray-700 japanese-text">男の子</span>
            </label>
            <label class="flex items-center">
              <input
                type="radio"
                v-model="formData.gender"
                value="other"
                class="text-pink-500 focus:ring-pink-500 h-4 w-4"
                required
              />
              <span class="ml-2 text-sm text-gray-700 japanese-text">その他</span>
            </label>
          </div>
        </div>

        <!-- Date -->
        <div class="space-y-1">
          <label class="block text-sm font-medium text-gray-700 japanese-text">
            {{ isExpecting ? '出産予定日' : '生年月日' }}
            <span class="text-red-500">*</span>
          </label>
          <input
            v-model="formData.date"
            type="date"
            required
            class="block w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            :max="maxDate"
            :min="minDate"
          />
        </div>

        <!-- Additional Information -->
        <div class="space-y-1">
          <label class="block text-sm font-medium text-gray-700 japanese-text">
            メモ
          </label>
          <textarea
            v-model="formData.notes"
            rows="3"
            class="block w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            placeholder="特記事項があればご記入ください"
          ></textarea>
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
            class="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-pink-700 japanese-text"
          >
            保存
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  child: {
    type: Object,
    required: true
  },
  isExpecting: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close', 'save'])

// Initialize form data with current values
const formData = ref({
  name: props.child.name || '',
  gender: props.child.gender || '',
  date: props.child.date || '',
  notes: props.child.notes || ''
})

// Date constraints
const maxDate = computed(() => {
  const date = new Date()
  return props.isExpecting 
    ? new Date(date.setMonth(date.getMonth() + 9)).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0]
})

const minDate = computed(() => {
  const date = new Date()
  return props.isExpecting
    ? new Date().toISOString().split('T')[0]
    : new Date(date.setFullYear(date.getFullYear() - 6)).toISOString().split('T')[0]
})

const handleSubmit = () => {
  emit('save', formData.value)
}
</script> 