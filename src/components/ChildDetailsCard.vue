<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden">
    <!-- Card Header -->
    <div class="bg-gradient-to-r from-pink-400 to-pink-500 p-4">
      <div class="flex justify-between items-start">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <img 
              :src="child.gender === 'female' ? '/baby-girl.svg' : '/baby-boy.svg'"
              alt="Baby"
              class="w-8 h-8"
            />
          </div>
          <div>
            <h3 class="text-lg font-bold text-white japanese-text">{{ child.name || '赤ちゃん' }}</h3>
            <p class="text-pink-100 text-sm japanese-text">
              {{ isExpecting ? '出産予定日' : '誕生日' }}: {{ formatDate(child.date) }}
            </p>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <!-- Edit Button -->
          <button 
            @click="startEditing"
            class="p-2 text-white hover:bg-pink-600 rounded-lg transition-colors"
          >
            <PencilIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Card Content -->
    <div class="p-4">
      <!-- Child Details Grid -->
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-1">
          <label class="text-xs text-gray-500 japanese-text">ステータス</label>
          <div class="flex items-center space-x-2">
            <span 
              class="px-2 py-1 rounded-full text-xs font-medium"
              :class="isExpecting ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'"
            >
              {{ isExpecting ? '妊娠中' : '子育て中' }}
            </span>
          </div>
        </div>

        <div class="space-y-1">
          <label class="text-xs text-gray-500 japanese-text">性別</label>
          <p class="text-sm text-gray-900 japanese-text">
            {{ formatGender(child.gender) }}
          </p>
        </div>

        <!-- Additional Information -->
        <div class="col-span-2 mt-4">
          <div class="bg-pink-50 rounded-lg p-4">
            <h4 class="font-medium text-pink-900 mb-3 japanese-text">特典情報</h4>
            <ul class="space-y-2">
              <li class="flex items-center text-sm text-pink-900">
                <CheckCircleIcon class="w-5 h-5 text-pink-500 mr-2" />
                <span class="japanese-text">ベビー・マタニティ用品 20%ポイント還元</span>
              </li>
              <li class="flex items-center text-sm text-pink-900">
                <CheckCircleIcon class="w-5 h-5 text-pink-500 mr-2" />
                <span class="japanese-text">対象のベビーフード 毎月10%OFF</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-6 flex justify-between items-center">
        <button 
          @click="openBenefitsDetails"
          class="flex items-center space-x-2 text-sm text-pink-600 hover:text-pink-700"
        >
          <GiftIcon class="w-5 h-5" />
          <span class="japanese-text">特典詳細</span>
        </button>
        <button 
          @click="openMilestones"
          class="flex items-center space-x-2 text-sm text-pink-600 hover:text-pink-700"
        >
          <StarIcon class="w-5 h-5" />
          <span class="japanese-text">成長記録</span>
        </button>
      </div>
    </div>

    <!-- Edit Modal -->
    <EditChildModal 
      v-if="isEditing"
      :child="child"
      :is-expecting="isExpecting"
      @close="isEditing = false"
      @save="handleSave"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  PencilIcon, 
  CheckCircleIcon,
  GiftIcon,
  StarIcon
} from '@heroicons/vue/24/outline'
import EditChildModal from './EditChildModal.vue'

const props = defineProps({
  child: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update'])
const isEditing = ref(false)

const isExpecting = computed(() => {
  const expectedDate = new Date(props.child.date)
  return expectedDate > new Date()
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const formatGender = (gender) => {
  const genders = {
    male: '男の子',
    female: '女の子',
    other: 'その他'
  }
  return genders[gender] || '未設定'
}

const startEditing = () => {
  isEditing.value = true
}

const handleSave = (updatedChild) => {
  emit('update', updatedChild)
  isEditing.value = false
}

const openBenefitsDetails = () => {
  // Add your logic to show benefits details
}

const openMilestones = () => {
  // Add your logic to show milestones/growth tracking
}
</script> 