<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50/50 via-white to-white relative overflow-hidden">
    <FloatingBackground />
    <!-- Breadcrumbs -->
    <nav class="bg-white border-b mt-16 md:mt-20">
      <div class="container mx-auto px-4">
        <div class="flex items-center space-x-2 py-4 text-sm">
          <router-link to="/" class="text-gray-500 hover:text-gray-700 japanese-text">ホーム</router-link>
          <ChevronRightIcon class="w-4 h-4 text-gray-400" />
          <router-link to="/my-discounts" class="text-gray-500 hover:text-gray-700 japanese-text">マイ割引</router-link>
          <ChevronRightIcon class="w-4 h-4 text-gray-400" />
          <span class="text-gray-900 font-medium japanese-text">お子様情報の管理</span>
        </div>
      </div>
    </nav>

    <DiscountStatusBar
      discountType="mamawari"
      :membershipStatus="membershipStatus"
      :registrationStatus="registrationStatus"
    />
    
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Gradient Blobs -->
      <div class="absolute -top-20 -right-20 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-32 -left-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
      
      <!-- Left Side Decorations -->
      <div class="fixed left-8 top-1/4 hidden xl:block space-y-12">
        <div class="relative">
          <img src="/baby-mobile.svg" alt="" class="w-20 h-20 opacity-70 animate-float" />
          <div class="absolute -bottom-4 right-0 bg-pink-100 rounded-full p-2">
            <HeartIcon class="w-6 h-6 text-pink-400" />
          </div>
        </div>
        <div class="relative ml-12">
          <img src="/baby-clothes.svg" alt="" class="w-20 h-20 opacity-70 animate-float-delayed" />
          <div class="absolute -top-4 -right-4 bg-pink-100 rounded-full p-2">
            <StarIcon class="w-6 h-6 text-pink-400" />
          </div>
        </div>
        <div class="relative">
          <img src="/diaper.svg" alt="" class="w-20 h-20 opacity-70 animate-float-slow" />
          <div class="absolute -bottom-4 right-0 bg-pink-100 rounded-full p-2">
            <SparklesIcon class="w-6 h-6 text-pink-400" />
          </div>
        </div>
      </div>

      <!-- Right Side Decorations -->
      <div class="fixed right-8 top-1/3 hidden xl:block space-y-12">
        <div class="relative">
          <img src="/baby-toy.svg" alt="" class="w-20 h-20 opacity-70 animate-float-slow" />
          <div class="absolute -top-4 -left-4 bg-pink-100 rounded-full p-2">
            <GiftIcon class="w-6 h-6 text-pink-400" />
          </div>
        </div>
        <div class="relative ml-12">
          <img src="/rubber-duck.svg" alt="" class="w-20 h-20 opacity-70 animate-float" />
          <div class="absolute -bottom-4 left-0 bg-pink-100 rounded-full p-2">
            <FaceSmileIcon class="w-6 h-6 text-pink-400" />
          </div>
        </div>
        <div class="relative">
          <img src="/baby-socks.svg" alt="" class="w-20 h-20 opacity-70 animate-float-delayed" />
          <div class="absolute -top-4 -left-4 bg-pink-100 rounded-full p-2">
            <HeartIcon class="w-6 h-6 text-pink-400" />
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <RakutenLoader v-if="isLoading" />

    <div v-else class="container mx-auto px-4 pt-24 pb-12">
      <div class="max-w-2xl mx-auto relative">
        <!-- Update floating icons size and animation -->
        <div class="absolute -left-32 -top-16 animate-float-slow opacity-70">
          <img src="/baby-rattle.svg" alt="" class="w-24 h-24" />
        </div>
        <div class="absolute -right-24 top-12 animate-float-delayed opacity-70">
          <img src="/baby-bottle.svg" alt="" class="w-20 h-20" />
        </div>
        <div class="absolute -left-24 bottom-16 animate-float opacity-70">
          <img src="/teddy-bear.svg" alt="" class="w-24 h-24" />
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
          <form @submit.prevent="handleSubmit" class="space-y-8">
            <!-- Child's Name Input -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 japanese-text">
                お子様のお名前
                <span class="text-gray-500 text-xs ml-1">（任意）</span>
              </label>
              <input
                v-model="formData.name"
                type="text"
                maxlength="20"
                class="w-full px-4 py-3 rounded-xl border-gray-200 bg-white shadow-sm focus:border-pink-500 focus:ring-pink-500 transition-colors japanese-text"
                placeholder="お名前もしくはニックネームを入力"
              />
              <p class="text-xs text-gray-500 japanese-text">※20文字まで入力できます</p>
            </div>

            <!-- Gender Selection -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 japanese-text">
                お子様の性別
                <span class="text-red-500">*</span>
              </label>
              <div class="flex flex-wrap gap-4">
                <label class="relative flex items-center">
                  <input
                    type="radio"
                    v-model="formData.gender"
                    value="female"
                    class="peer sr-only"
                    required
                  />
                  <div class="p-3 border rounded-xl cursor-pointer bg-white peer-checked:border-pink-500 peer-checked:bg-pink-50 hover:bg-gray-50 transition-colors">
                    <span class="text-sm text-gray-900 japanese-text">女の子</span>
                  </div>
                  <div class="absolute hidden peer-checked:block top-0 right-0 translate-x-1/3 -translate-y-1/3">
                    <div class="bg-pink-500 rounded-full p-1">
                      <CheckIcon class="w-3 h-3 text-white" />
                    </div>
                  </div>
                </label>
                <label class="relative flex items-center">
                  <input
                    type="radio"
                    v-model="formData.gender"
                    value="male"
                    class="peer sr-only"
                    required
                  />
                  <div class="p-3 border rounded-xl cursor-pointer bg-white peer-checked:border-pink-500 peer-checked:bg-pink-50 hover:bg-gray-50 transition-colors">
                    <span class="text-sm text-gray-900 japanese-text">男の子</span>
                  </div>
                  <div class="absolute hidden peer-checked:block top-0 right-0 translate-x-1/3 -translate-y-1/3">
                    <div class="bg-pink-500 rounded-full p-1">
                      <CheckIcon class="w-3 h-3 text-white" />
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <!-- Date Input -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 japanese-text">
                {{ isExpectingBaby ? '出産予定日' : '生年月日' }}
                <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.date"
                type="date"
                required
                :min="minDate"
                :max="maxDate"
                class="w-full px-4 py-3 rounded-xl border-gray-200 bg-white shadow-sm focus:border-pink-500 focus:ring-pink-500 transition-colors japanese-text"
              />
            </div>

            <!-- Insurance Notice -->
            <div class="space-y-4">
              <div class="bg-blue-50 rounded-xl">
                <button 
                  @click="toggleInsurance"
                  class="w-full p-4 flex justify-between items-center text-left"
                >
                  <div>
                    <h3 class="font-medium text-blue-900 japanese-text">
                      【6か月保険料0円で賠償責任最大補償額100万円】
                    </h3>
                    <p class="text-sm text-blue-800 japanese-text mt-1">
                      もしもに備える、ご家族全員補償のミニ保険をプレゼント
                    </p>
                  </div>
                  <ChevronDownIcon 
                    class="w-5 h-5 text-blue-500 transition-transform"
                    :class="{ 'rotate-180': isInsuranceOpen }"
                  />
                </button>
                
                <div 
                  v-show="isInsuranceOpen"
                  class="px-4 pb-4 space-y-3"
                >
                  <p class="text-xs text-blue-700 japanese-text">
                    ※保険料は保険契約者である楽天グループ(株)が負担します。
                  </p>
                  <div class="space-y-2">
                    <p class="text-sm font-medium text-blue-900 japanese-text">
                      以下の注意事項に同意しお受け取りください
                    </p>
                    <ul class="text-sm text-blue-800 space-y-1 list-disc pl-4">
                      <li>お客様の個人情報は、引受保険会社・楽天損害保険株式会社に連携します。</li>
                      <li>この補償には更新の取扱がありません。補償期間の満了日をもって補償が終了となります。
                        （有料プランに自動的に移行されることはございません。）</li>
                    </ul>
                    <p class="text-xs text-blue-700">C24-02-019</p>
                  </div>
                </div>
              </div>

              <!-- Newsletter Section -->
              <div class="bg-gray-50 rounded-xl">
                <button 
                  @click="toggleNewsletter"
                  class="w-full p-4 flex justify-between items-center text-left"
                >
                  <h3 class="font-medium text-gray-900 japanese-text">
                    ママ割からのお知らせ（週2回～3回配信）
                  </h3>
                  <ChevronDownIcon 
                    class="w-5 h-5 text-gray-500 transition-transform"
                    :class="{ 'rotate-180': isNewsletterOpen }"
                  />
                </button>
                
                <div 
                  v-show="isNewsletterOpen"
                  class="px-4 pb-4 space-y-3"
                >
                  <p class="text-sm text-gray-600 japanese-text">
                    楽天会員情報にご登録されているメールアドレス宛に、楽天ママ割より、メンバー限定のキャンペーン情報や楽天グループまたはその他の企業のお得な情報などが満載のママ割ニュースをお送りいたします。
                  </p>
                  <div class="text-xs text-gray-500 space-y-1">
                    <p class="japanese-text">※ 一部の特典（バースデークーポン、サンプルボックス等）のご利用は、メルマガの購読が必須条件となります。</p>
                    <p class="japanese-text">※ <a href="#" class="text-pink-600 hover:text-pink-700">こちら</a>からこのニュースの購読停止が可能です</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Terms and Privacy -->
            <div class="space-y-4">
              <!-- Insurance Agreement Checkbox -->
              <label class="flex items-start">
                <input
                  type="checkbox"
                  v-model="formData.insuranceAccepted"
                  required
                  class="mt-1 text-pink-500 focus:ring-pink-500 rounded"
                />
                <span class="ml-2 text-sm text-gray-600 japanese-text">
                  保険に関する注意事項に同意します
                </span>
              </label>

              <!-- Newsletter Checkbox -->
              <label class="flex items-start">
                <input
                  type="checkbox"
                  v-model="formData.newsletterAccepted"
                  required
                  class="mt-1 text-pink-500 focus:ring-pink-500 rounded"
                />
                <span class="ml-2 text-sm text-gray-600 japanese-text">
                  ママ割からのお知らせを受け取ることに同意します
                </span>
              </label>

              <!-- Terms and Privacy Checkboxes -->
              <div class="pt-4 border-t border-gray-200">
                <p class="text-sm text-gray-600 japanese-text mb-4">
                  楽天ママ割は、お子さまを持つ楽天会員様限定の無料プログラムです。
                </p>
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
              </div>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-end">
              <button
                type="submit"
                class="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-medium hover:from-pink-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all shadow-sm japanese-text"
              >
                登録する
              </button>
            </div>
          </form>

          <!-- Add this after the form -->
          <div v-if="registrationComplete" class="mt-8">
            <ChildDetailsCard 
              :child="registeredChild"
              @update="handleChildUpdate"
            />
          </div>
        </div>
      </div>
    </div>

    <TheFooter class="mt-auto" />

    <!-- Hero Section -->
    <div class="relative z-0 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-gradient-to-br from-pink-50/40 via-white to-white"></div>
      <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-pink-100/30 to-transparent"></div>
      <div class="absolute -left-48 -top-48 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute -right-48 -bottom-48 w-96 h-96 bg-gradient-to-tl from-pink-200/20 to-transparent rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 py-12">
        <div class="max-w-5xl mx-auto">
          <!-- Banner Content -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl relative overflow-hidden border border-pink-100">
            <div class="relative flex items-start justify-between">
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <img 
                    src="https://mydata.id.rakuten.co.jp/assets/mamawari_logo-rLpLtBDj.svg" 
                    alt="ママわり" 
                    class="h-14 w-auto"
                  />
                  <div>
                    <h1 class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent japanese-text">
                      お子様情報の管理
                    </h1>
                    <p class="text-gray-600 japanese-text mt-2">登録済みのお子様の情報を確認・更新できます</p>
                  </div>
                </div>
                
                <div class="grid grid-cols-3 gap-8">
                  <div class="bg-gradient-to-br from-white to-pink-50 rounded-xl p-6 text-center shadow-sm border border-pink-100/50">
                    <div class="mb-2">
                      <UserGroupIcon class="w-6 h-6 text-pink-400 mx-auto" />
                    </div>
                    <p class="text-sm font-medium text-gray-600 japanese-text">登録済みのお子様</p>
                    <p class="text-3xl font-bold text-gray-900 mt-2">{{ registeredChildren }}人</p>
                  </div>
                  <div class="bg-gradient-to-br from-white to-pink-50 rounded-xl p-6 text-center shadow-sm border border-pink-100/50">
                    <div class="mb-2">
                      <SparklesIcon class="w-6 h-6 text-pink-400 mx-auto" />
                    </div>
                    <p class="text-sm font-medium text-gray-600 japanese-text">メンバーシップ</p>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-500 text-white mt-2">
                      フルメンバー
                    </span>
                  </div>
                  <div class="bg-gradient-to-br from-white to-pink-50 rounded-xl p-6 text-center shadow-sm border border-pink-100/50">
                    <div class="mb-2">
                      <CalendarIcon class="w-6 h-6 text-pink-400 mx-auto" />
                    </div>
                    <p class="text-sm font-medium text-gray-600 japanese-text">有効期限</p>
                    <p class="text-lg font-bold text-gray-900 mt-2">2025年12月31日</p>
                  </div>
                </div>
              </div>
              
              <!-- Decorative Elements -->
              <div class="hidden lg:block relative">
                <div class="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-pink-200/20 to-transparent rounded-full blur-2xl"></div>
                <div class="relative">
                  <img src="/baby-rattle.svg" alt="" class="w-24 h-24 opacity-70 animate-float" />
                  <img src="/teddy-bear.svg" alt="" class="w-20 h-20 opacity-70 animate-float-delayed ml-8 mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { 
  CheckCircleIcon, 
  FaceSmileIcon, 
  HeartIcon, 
  GiftIcon, 
  StarIcon, 
  SparklesIcon, 
  CheckIcon, 
  ChevronDownIcon, 
  ChevronRightIcon,
  UserGroupIcon,
  CalendarIcon
} from '@heroicons/vue/24/solid'
import TheFooter from './TheFooter.vue'
import RakutenLoader from './RakutenLoader.vue'
import FloatingBackground from './FloatingBackground.vue'
import ChildDetailsCard from './ChildDetailsCard.vue'
import DiscountStatusBar from './DiscountStatusBar.vue'

const router = useRouter()
const isLoading = ref(false)
const isExpectingBaby = ref(true)

const formData = ref({
  date: '',
  name: '',
  gender: 'female',
  insuranceAccepted: false,
  newsletterAccepted: false,
  termsAccepted: false,
  privacyAccepted: false,
  notes: ''
})

const membershipStatus = ref('basic') // 'basic', 'semi', 'full'
const registrationStatus = ref('incomplete') // 'complete', 'incomplete', 'pending'

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
  0%, 100% { 
    transform: translateY(0) rotate(0) scale(1); 
  }
  50% { 
    transform: translateY(-20px) rotate(8deg) scale(1.05); 
  }
}

@keyframes float-reverse {
  0%, 100% { 
    transform: translateY(0) rotate(0) scale(1); 
  }
  50% { 
    transform: translateY(-20px) rotate(-8deg) scale(1.05); 
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-reverse 7s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 6.5s ease-in-out infinite;
  animation-delay: 0.75s;
}

/* Custom styles for date input */
input[type="date"]::-webkit-calendar-picker-indicator {
  background-color: transparent;
  padding: 8px;
  cursor: pointer;
  margin-right: -8px;
}

/* Remove autofill background */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style> 