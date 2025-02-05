<template>
  <div class="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 relative overflow-hidden">
    <FloatingBackground />
    <TheHeader />
    
    <!-- Loading State -->
    <RakutenLoader v-if="isLoading" />

    <div v-else class="container mx-auto px-4 pt-24 pb-12">
      <div class="max-w-2xl mx-auto relative">
        <!-- Floating Decorative Elements -->
        <div class="absolute -left-24 -top-12 animate-float-slow opacity-50">
          <img src="/baby-rattle.svg" alt="" class="w-16 h-16" />
        </div>
        <div class="absolute -right-16 top-8 animate-float-delayed opacity-50">
          <img src="/baby-bottle.svg" alt="" class="w-12 h-12" />
        </div>
        <div class="absolute -left-16 bottom-12 animate-float opacity-50">
          <img src="/teddy-bear.svg" alt="" class="w-14 h-14" />
        </div>

        <!-- Registration Form -->
        <div class="bg-white rounded-2xl shadow-lg p-8 relative">
          <!-- Header -->
          <div class="text-center mb-8">
            <img 
              src="https://mydata.id.rakuten.co.jp/assets/mamawari_logo-rLpLtBDj.svg"
              alt="ママわり"
              class="h-12 mx-auto mb-4"
            />
            <h1 class="text-2xl font-bold text-gray-900 mb-2 japanese-text">ママわりに登録</h1>
            <p class="text-gray-600 japanese-text">
              妊娠中・子育て中の方向けの特別プログラム。
              <br>最大20%のポイント還元でお得にお買い物。
            </p>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1 japanese-text">
                お名前
              </label>
              <input 
                type="text" 
                v-model="formData.name"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                required
                placeholder="例：楽天 花子"
              />
            </div>

            <!-- Gender -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1 japanese-text">
                性別
              </label>
              <div class="flex space-x-4">
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="formData.gender"
                    value="female"
                    class="text-pink-500 focus:ring-pink-500 h-4 w-4"
                  />
                  <span class="ml-2 text-sm text-gray-700 japanese-text">女性</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="formData.gender"
                    value="male"
                    class="text-pink-500 focus:ring-pink-500 h-4 w-4"
                  />
                  <span class="ml-2 text-sm text-gray-700 japanese-text">男性</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    v-model="formData.gender"
                    value="other"
                    class="text-pink-500 focus:ring-pink-500 h-4 w-4"
                  />
                  <span class="ml-2 text-sm text-gray-700 japanese-text">その他</span>
                </label>
              </div>
            </div>

            <!-- Expecting or Has Child Toggle -->
            <div class="flex items-center justify-center space-x-4">
              <button 
                type="button"
                @click="isExpectingBaby = true"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors japanese-text',
                  isExpectingBaby 
                    ? 'bg-pink-100 text-pink-700 ring-2 ring-pink-500 ring-offset-2'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                妊娠中
              </button>
              <button 
                type="button"
                @click="isExpectingBaby = false"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors japanese-text',
                  !isExpectingBaby 
                    ? 'bg-pink-100 text-pink-700 ring-2 ring-pink-500 ring-offset-2'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                子育て中
              </button>
            </div>

            <!-- Expected Date / Child's Birthday -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1 japanese-text">
                {{ isExpectingBaby ? '出産予定日' : 'お子様の生年月日' }}
              </label>
              <div class="mt-1">
                <input 
                  type="date" 
                  v-model="formData.date"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  :max="maxDate"
                  :min="minDate"
                  required
                />
              </div>
            </div>

            <!-- Terms Checkboxes -->
            <div class="space-y-3">
              <label class="flex items-start">
                <input
                  type="checkbox"
                  v-model="formData.termsAccepted"
                  required
                  class="mt-1 text-pink-500 focus:ring-pink-500 rounded"
                />
                <span class="ml-2 text-sm text-gray-600 japanese-text">
                  <a href="#" class="text-[#BF0000] hover:text-red-700">利用規約</a>に同意します
                </span>
              </label>
              <label class="flex items-start">
                <input
                  type="checkbox"
                  v-model="formData.privacyAccepted"
                  required
                  class="mt-1 text-pink-500 focus:ring-pink-500 rounded"
                />
                <span class="ml-2 text-sm text-gray-600 japanese-text">
                  <a href="#" class="text-[#BF0000] hover:text-red-700">プライバシーポリシー</a>に同意します
                </span>
              </label>
            </div>

            <!-- Benefits Preview -->
            <div class="bg-pink-50 rounded-lg p-4 space-y-3">
              <h3 class="font-medium text-pink-900 japanese-text">登録後の特典</h3>
              <ul class="space-y-2">
                <li v-for="(benefit, index) in benefits" :key="index" class="flex items-start">
                  <CheckCircleIcon class="h-5 w-5 text-pink-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span class="text-sm text-pink-900 japanese-text">{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full bg-[#BF0000] text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors japanese-text font-medium"
            >
              登録して特典を受け取る
            </button>
          </form>
        </div>
      </div>
    </div>

    <TheFooter class="mt-auto" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { CheckCircleIcon, FaceSmileIcon, HeartIcon, GiftIcon, StarIcon, SparklesIcon } from '@heroicons/vue/24/solid'
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
import RakutenLoader from './RakutenLoader.vue'
import FloatingBackground from './FloatingBackground.vue'

const router = useRouter()
const isLoading = ref(false)
const isExpectingBaby = ref(true)

const formData = ref({
  date: '',
  name: '',
  gender: 'female',
  termsAccepted: false,
  privacyAccepted: false
})

// Date constraints
const maxDate = computed(() => {
  const date = new Date()
  return isExpectingBaby.value 
    ? new Date(date.setMonth(date.getMonth() + 9)).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0]
})

const minDate = computed(() => {
  const date = new Date()
  return isExpectingBaby.value
    ? new Date().toISOString().split('T')[0]
    : new Date(date.setFullYear(date.getFullYear() - 6)).toISOString().split('T')[0]
})

const benefits = [
  'ベビー・マタニティ用品が最大20%ポイント還元',
  '対象のベビーフードが毎月10%OFF',
  '全国の提携病院で使える割引クーポン',
  '専門家による育児相談サービス無料',
  'ママ向けの特別セール情報をいち早くお届け'
]

const handleSubmit = async () => {
  try {
    isLoading.value = true
    // Add your registration logic here
    await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate API call
    router.push('/')
  } catch (error) {
    console.error('Registration failed:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

@keyframes float-reverse {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-10px) rotate(-5deg); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-reverse 4s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 3.5s ease-in-out infinite;
  animation-delay: 0.5s;
}
</style> 