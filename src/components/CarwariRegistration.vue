<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
    <FloatingBackground />
    <TheHeader />
    
    <!-- Loading State -->
    <RakutenLoader v-if="isLoading" />

    <div v-else class="container mx-auto px-4 pt-24 pb-12">
      <div class="max-w-2xl mx-auto relative">
        <!-- Registration Form -->
        <div class="bg-white rounded-2xl shadow-lg p-8 relative">
          <!-- Header -->
          <div class="text-center mb-8">
            <img 
              src="https://mydata.id.rakuten.co.jp/assets/carwari_logo.svg"
              alt="カーわり"
              class="h-12 mx-auto mb-4"
            />
            <h1 class="text-2xl font-bold text-gray-900 mb-2 japanese-text">カーわりに登録</h1>
            <p class="text-gray-600 japanese-text">
              車に関する情報を登録して、お得な特典を受け取りましょう。
            </p>
          </div>

          <!-- Car Type Selection -->
          <div class="mb-8">
            <h2 class="text-lg font-medium text-gray-900 mb-4 japanese-text">登録する車を選択</h2>
            <div class="grid grid-cols-1 gap-4">
              <button
                v-for="type in carTypes"
                :key="type.id"
                @click="selectedCarType = type.id"
                class="p-4 border rounded-lg text-left hover:bg-gray-50 transition-colors"
                :class="selectedCarType === type.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'"
              >
                <div class="flex items-center">
                  <div class="w-6 h-6 border-2 rounded-full mr-3 flex items-center justify-center"
                    :class="selectedCarType === type.id ? 'border-blue-500' : 'border-gray-300'"
                  >
                    <div v-if="selectedCarType === type.id" 
                      class="w-3 h-3 bg-blue-500 rounded-full"
                    ></div>
                  </div>
                  <div>
                    <div class="font-medium text-gray-900 japanese-text">{{ type.name }}</div>
                    <div class="text-sm text-gray-500 japanese-text">{{ type.description }}</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <!-- Car Details Form -->
          <form v-if="selectedCarType" @submit.prevent="handleSubmit" class="space-y-8">
            <!-- Purchase Condition -->
            <div class="grid grid-cols-2 gap-4">
              <button
                type="button"
                @click="formData.purchaseCondition = 'new'"
                class="p-4 border-2 rounded-xl text-center transition-all duration-200"
                :class="formData.purchaseCondition === 'new' 
                  ? 'border-blue-500 bg-blue-50 text-blue-700' 
                  : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'"
              >
                <CarIcon class="w-8 h-8 mx-auto mb-2" 
                  :class="formData.purchaseCondition === 'new' ? 'text-blue-500' : 'text-gray-400'"
                />
                <div class="font-medium japanese-text">新車</div>
              </button>
              <button
                type="button"
                @click="formData.purchaseCondition = 'used'"
                class="p-4 border-2 rounded-xl text-center transition-all duration-200"
                :class="formData.purchaseCondition === 'used' 
                  ? 'border-blue-500 bg-blue-50 text-blue-700' 
                  : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'"
              >
                <TruckIcon class="w-8 h-8 mx-auto mb-2"
                  :class="formData.purchaseCondition === 'used' ? 'text-blue-500' : 'text-gray-400'"
                />
                <div class="font-medium japanese-text">中古車</div>
              </button>
            </div>

            <!-- Car Manufacturer Selection -->
            <div class="space-y-3">
              <label class="block text-sm font-medium text-gray-700 mb-1 japanese-text">
                メーカー(必須)
              </label>
              <div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
                <button
                  v-for="maker in carManufacturers"
                  :key="maker.id"
                  type="button"
                  @click="formData.manufacturer = maker.id"
                  class="aspect-square p-3 border-2 rounded-xl flex flex-col items-center justify-center transition-all duration-200"
                  :class="formData.manufacturer === maker.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'"
                >
                  <img :src="maker.logo" :alt="maker.name" class="w-10 h-10 object-contain mb-2" />
                  <span class="text-xs font-medium text-gray-900 japanese-text">{{ maker.name }}</span>
                </button>
              </div>
            </div>

            <!-- Car Model Input with Suggestions -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 japanese-text">
                車種(必須)
              </label>
              <div class="relative">
                <input
                  type="text"
                  v-model="formData.model"
                  class="block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-4 pr-10 py-3"
                  placeholder="例：カローラ"
                  required
                />
                <SearchIcon class="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <!-- Registration Date -->
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 japanese-text">
                  初度登録年(必須)
                </label>
                <select 
                  v-model="formData.registrationYear"
                  class="block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3"
                  required
                >
                  <option value="">年を選択</option>
                  <option v-for="year in years" :key="year" :value="year">
                    {{ year }}年
                  </option>
                </select>
              </div>
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 japanese-text">
                  初度登録月
                </label>
                <select 
                  v-model="formData.registrationMonth"
                  class="block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3"
                >
                  <option value="">月を選択</option>
                  <option v-for="month in 12" :key="month" :value="month">
                    {{ month }}月
                  </option>
                </select>
              </div>
            </div>

            <!-- License Color Selection -->
            <div class="space-y-3">
              <label class="block text-sm font-medium text-gray-700 japanese-text">
                運転免許証の色
              </label>
              <div class="flex space-x-4">
                <button
                  v-for="color in licenseColors"
                  :key="color.id"
                  type="button"
                  @click="formData.licenseColor = color.id"
                  class="flex-1 p-3 rounded-xl border-2 transition-all duration-200 relative overflow-hidden"
                  :class="formData.licenseColor === color.id 
                    ? 'border-blue-500' 
                    : 'border-gray-200 hover:border-blue-200'"
                >
                  <div class="absolute inset-0 opacity-10" :style="{ backgroundColor: color.hex }"></div>
                  <div class="relative text-center">
                    <div class="font-medium japanese-text">{{ color.name }}</div>
                  </div>
                </button>
              </div>
            </div>

            <!-- Insurance Info -->
            <div class="space-y-4 pt-6 border-t">
              <h3 class="text-lg font-medium text-gray-900 japanese-text">保険情報</h3>
              <!-- Insurance fields... -->
            </div>

            <!-- Newsletter and Insurance Offer -->
            <div class="space-y-4 pt-6 border-t">
              <label class="flex items-start">
                <input
                  type="checkbox"
                  v-model="formData.newsletter"
                  class="mt-1 text-blue-500 focus:ring-blue-500 rounded"
                />
                <span class="ml-2 text-sm text-gray-600 japanese-text">
                  マイカー割ニュースを購読する
                </span>
              </label>

              <label class="flex items-start">
                <input
                  type="checkbox"
                  v-model="formData.insuranceOffer"
                  class="mt-1 text-blue-500 focus:ring-blue-500 rounded"
                />
                <span class="ml-2 text-sm text-gray-600 japanese-text">
                  マイカー割保険のプレゼントを受け取る
                </span>
              </label>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
import RakutenLoader from './RakutenLoader.vue'
import FloatingBackground from './FloatingBackground.vue'

const router = useRouter()
const isLoading = ref(false)
const selectedCarType = ref(null)

const carTypes = [
  {
    id: 'current',
    name: '現在所有しているクルマ',
    description: '現在お持ちの車を登録します'
  },
  {
    id: 'next',
    name: '次にほしいクルマ',
    description: '購入予定の車を登録します'
  },
  {
    id: 'past',
    name: '過去所有していたクルマ',
    description: '以前お持ちだった車を登録します'
  }
]

const formData = ref({
  purchaseCondition: '',
  manufacturer: '',
  model: '',
  grade: '',
  registrationDate: '',
  inspectionDate: '',
  insuranceDate: '',
  licenseColor: '',
  insuranceCompany: '',
  insuranceGrade: '',
  vehicleInsurance: false,
  mileage: '',
  newsletter: false,
  insuranceOffer: false
})

const carManufacturers = [
  {
    id: 'toyota',
    name: 'トヨタ',
    logo: 'https://mydata.id.rakuten.co.jp/assets/carwari_toyota_logo.svg'
  },
  {
    id: 'honda',
    name: 'ホンダ',
    logo: 'https://mydata.id.rakuten.co.jp/assets/carwari_honda_logo.svg'
  },
  {
    id: 'nissan',
    name: '日産',
    logo: 'https://mydata.id.rakuten.co.jp/assets/carwari_nissan_logo.svg'
  },
  {
    id: 'mazda',
    name: 'マツダ',
    logo: 'https://mydata.id.rakuten.co.jp/assets/carwari_mazda_logo.svg'
  },
  {
    id: 'subaru',
    name: 'スバル',
    logo: 'https://mydata.id.rakuten.co.jp/assets/carwari_subaru_logo.svg'
  },
  {
    id: 'suzuki',
    name: 'スズキ',
    logo: 'https://mydata.id.rakuten.co.jp/assets/carwari_suzuki_logo.svg'
  },
  {
    id: 'daihatsu',
    name: 'ダイハツ',
    logo: 'https://mydata.id.rakuten.co.jp/assets/carwari_daihatsu_logo.svg'
  },
  {
    id: 'mitsubishi',
    name: '三菱',
    logo: 'https://mydata.id.rakuten.co.jp/assets/carwari_mitsubishi_logo.svg'
  },
  {
    id: 'lexus',
    name: 'レクサス',
    logo: 'https://mydata.id.rakuten.co.jp/assets/carwari_lexus_logo.svg'
  }
]

const handleSubmit = async () => {
  try {
    isLoading.value = true
    // Add your registration logic here
    await new Promise(resolve => setTimeout(resolve, 1500))
    router.push('/')
  } catch (error) {
    console.error('Registration failed:', error)
  } finally {
    isLoading.value = false
  }
}
</script> 