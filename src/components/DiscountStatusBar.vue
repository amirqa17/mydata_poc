<template>
  <div class="bg-white border-b">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-3">
        <!-- Left: Discount Name & Status -->
        <div class="flex items-center gap-4">
          <h2 class="font-bold text-lg text-gray-900 japanese-text">
            {{ getDiscountName(discountType) }}
          </h2>
          <div class="flex items-center gap-3">
            <span 
              :class="[
                'px-2 py-1 text-xs font-medium rounded-full japanese-text',
                getMembershipStatusClass(membershipStatus)
              ]"
            >
              {{ getMembershipStatusText(membershipStatus) }}
            </span>
            <span 
              :class="[
                'px-2 py-1 text-xs font-medium rounded-full japanese-text',
                getRegistrationStatusClass(registrationStatus)
              ]"
            >
              {{ getRegistrationStatusText(registrationStatus) }}
            </span>
          </div>
        </div>

        <!-- Right: Navigation -->
        <button 
          @click="router.push('/my-discounts')"
          class="flex items-center gap-2 text-sm text-[#BF0000] hover:text-red-700 japanese-text"
        >
          <ArrowLeftIcon class="w-4 h-4" />
          マイ割引
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'

const router = useRouter()

const props = defineProps({
  discountType: {
    type: String,
    required: true
  },
  membershipStatus: {
    type: String,
    default: 'basic'
  },
  registrationStatus: {
    type: String,
    default: 'incomplete'
  }
})

const getDiscountName = (type) => {
  switch (type) {
    case 'mamawari':
      return 'ママわり'
    case 'carwari':
      return 'カーわり'
    case 'petwari':
      return 'ペットわり'
    default:
      return ''
  }
}

const getMembershipStatusClass = (status) => {
  switch (status) {
    case 'full':
      return 'bg-[#BF0000]/10 text-[#BF0000]'
    case 'semi':
      return 'bg-yellow-100 text-yellow-700'
    case 'basic':
      return 'bg-gray-100 text-gray-700'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

const getMembershipStatusText = (status) => {
  switch (status) {
    case 'full':
      return 'フルメンバー'
    case 'semi':
      return 'セミメンバー'
    case 'basic':
      return 'ベーシックメンバー'
    default:
      return '未登録'
  }
}

const getRegistrationStatusClass = (status) => {
  switch (status) {
    case 'complete':
      return 'bg-green-100 text-green-700'
    case 'incomplete':
      return 'bg-yellow-100 text-yellow-700'
    case 'pending':
      return 'bg-blue-100 text-blue-700'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

const getRegistrationStatusText = (status) => {
  switch (status) {
    case 'complete':
      return '登録完了'
    case 'incomplete':
      return '登録未完了'
    case 'pending':
      return '確認待ち'
    default:
      return '未登録'
  }
}
</script> 