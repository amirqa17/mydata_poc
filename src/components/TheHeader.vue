<template>
  <nav class="bg-white shadow-md fixed w-full top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16 md:h-20">
        <div class="flex items-center justify-between w-full">
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button 
              @click="openMobileSidebar"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
            >
              <span class="sr-only">メニューを開く</span>
              <Bars3Icon class="h-6 w-6" />
            </button>
          </div>

          <!-- Logo -->
          <div class="flex-shrink-0 flex justify-center flex-1 md:flex-initial">
            <a href="/" class="flex items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/2018_Rakuten_logo.png" 
                alt="Rakuten" 
                class="h-8 md:h-10 lg:h-12 w-auto"
              />
            </a>
          </div>

          <!-- User Account Button (Mobile) -->
          <div class="md:hidden">
            <button 
              @click="toggleUserMenu"
              class="mobile-user-menu p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
            >
              <UserCircleIcon class="h-6 w-6" />
            </button>
          </div>

          <!-- Navigation and User Info (Desktop) -->
          <div class="hidden md:flex items-center space-x-8">
            <!-- My Discounts Button -->
            <div class="relative discount-menu">
              <button 
                @click="toggleDiscountMenu"
                class="flex items-center space-x-2 text-gray-700 hover:text-[#BF0000] transition-colors"
              >
                <TagIcon class="h-5 w-5" />
                <span class="text-sm font-medium japanese-text">マイ割引</span>
                <ChevronDownIcon class="h-4 w-4" :class="{ 'transform rotate-180': isDiscountMenuOpen }" />
                <!-- Active Discount Counter -->
                <span class="absolute -top-1 -right-1 bg-[#BF0000] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </button>

              <!-- Discount Management Dropdown -->
              <div 
                v-show="isDiscountMenuOpen"
                class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-4 z-50"
              >
                <div class="px-4 py-2 border-b">
                  <div class="flex justify-between items-center">
                    <h3 class="font-bold text-gray-900 japanese-text">有効な割引</h3>
                    <button class="text-sm text-[#BF0000] hover:text-red-700 japanese-text">
                      管理画面へ
                    </button>
                  </div>
                </div>

                <!-- Active Discounts List -->
                <div class="px-2 py-2">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                      <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                          <UsersIcon class="h-5 w-5 text-pink-600" />
                        </div>
                        <div>
                          <div class="text-sm font-medium text-gray-900 japanese-text">ママわり</div>
                          <div class="text-xs text-[#BF0000] japanese-text">20% ポイント還元中</div>
                        </div>
                      </div>
                      <span class="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full japanese-text">
                        フル会員
                      </span>
                    </div>

                    <div class="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                      <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <HeartIcon class="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <div class="text-sm font-medium text-gray-900 japanese-text">ペットわり</div>
                          <div class="text-xs text-[#BF0000] japanese-text">15% ポイント還元中</div>
                        </div>
                      </div>
                      <span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full japanese-text">
                        ベーシック
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Quick Actions -->
                <div class="border-t mt-2 pt-2 px-4">
                  <div class="grid grid-cols-2 gap-2">
                    <button class="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#BF0000] p-2 rounded-lg hover:bg-gray-50 japanese-text">
                      <ChartBarIcon class="h-4 w-4" />
                      <span>利用状況</span>
                    </button>
                    <button class="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#BF0000] p-2 rounded-lg hover:bg-gray-50 japanese-text">
                      <BellIcon class="h-4 w-4" />
                      <span>通知設定</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Rest of your header items -->
            <LanguageSwitcher />

            <!-- User Account Section -->
            <div class="relative">
              <button 
                @click="isUserMenuOpen = !isUserMenuOpen"
                class="flex items-center space-x-2 text-gray-700 hover:text-red-600 focus:outline-none user-menu"
              >
                <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <UserCircleIcon class="w-6 h-6" />
                </div>
                <span class="hidden lg:inline text-sm font-bold japanese-text">{{ userName }}</span>
                <ChevronDownIcon class="w-4 h-4" />
              </button>

              <!-- Dropdown Menu -->
              <div 
                v-show="isUserMenuOpen"
                class="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50"
              >
                <div class="px-4 py-2 text-sm text-gray-700 border-b japanese-text">
                  {{ userEmail }}
                </div>
                <!-- Add Active Subscriptions Section -->
                <div class="px-4 py-3 border-b">
                  <div class="text-sm font-medium text-gray-700 mb-3 japanese-text">登録中の割引サービス</div>
                  <div class="space-y-2">
                    <div 
                      v-for="discount in activeDiscountList" 
                      :key="discount.id"
                      class="flex items-center justify-between bg-gray-50 rounded-lg p-2"
                    >
                      <div class="flex items-center space-x-2">
                        <div 
                          :class="`w-6 h-6 rounded-full bg-${discount.color}-400 flex items-center justify-center`"
                        >
                          <component 
                            :is="discount.icon"
                            class="w-4 h-4 text-white"
                          />
                        </div>
                        <span class="font-medium">{{ discount.name }}</span>
                      </div>
                      <div class="flex items-center">
                        <span 
                          :class="`px-1.5 py-0.5 rounded-full text-[10px] font-medium ${getMembershipBadgeStyle(discount.level)}`"
                        >
                          {{ discount.level }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-2 text-right">
                    <a 
                      href="#" 
                      class="text-xs text-red-600 hover:text-red-800 japanese-text"
                    >
                      メンバーシップをアップグレード →
                    </a>
                  </div>
                </div>
                <a 
                  href="#" 
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 japanese-text"
                >
                  アカウント設定
                </a>
                <a 
                  href="#" 
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 japanese-text"
                >
                  ポイント残高: {{ userPoints }} pt
                </a>
                <button 
                  @click="handleLogout"
                  class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 japanese-text"
                >
                  ログアウト
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      v-show="isOpen"
      class="md:hidden bg-white border-t absolute top-full left-0 right-0 shadow-lg"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#" class="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-base font-bold japanese-text">
          ホーム
        </a>
        <a 
          href="#" 
          class="flex items-center space-x-1"
        >
          <div class="flex -space-x-1">
            <div 
              v-for="discount in activeDiscountList.slice(0, 3)" 
              :key="discount.id"
              :class="`w-6 h-6 rounded-full border border-white bg-${discount.color}-400 flex items-center justify-center shadow-sm`"
            >
              <component 
                :is="discount.icon"
                class="w-3.5 h-3.5 text-white"
              />
            </div>
          </div>
          <span 
            v-if="activeDiscountList.length > 3"
            class="ml-1 text-xs text-gray-600"
          >
            +{{ activeDiscountList.length - 3 }}
          </span>
        </a>
        <a href="#" class="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-base font-bold japanese-text">
          ヘルプ
        </a>

        <!-- New Membership Status Section -->
        <div class="border-t mt-2 pt-2">
          <div class="px-3 py-2">
            <div class="text-sm font-medium text-gray-600 mb-2 japanese-text">メンバーシップステータス</div>
            <div class="space-y-3">
              <div 
                v-for="discount in activeDiscountList" 
                :key="discount.id"
                class="bg-gray-50 rounded-lg p-3"
              >
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center space-x-2">
                    <div 
                      :class="`w-6 h-6 rounded-full bg-${discount.color}-400 flex items-center justify-center`"
                    >
                      <component 
                        :is="discount.icon"
                        class="w-4 h-4 text-white"
                      />
                    </div>
                    <span class="font-medium text-gray-900">{{ discount.name }}</span>
                  </div>
                  <span 
                    :class="`px-2 py-1 rounded-full text-xs font-medium ${getMembershipBadgeStyle(discount.level)}`"
                  >
                    {{ discount.level }}
                  </span>
                </div>
                <div class="flex justify-between items-center text-sm">
                  <div class="text-gray-600">
                    <div>{{ discount.benefits }}</div>
                    <div class="text-xs mt-1">
                      {{ discount.level === 'フルメンバー' ? '全ての特典が利用可能' : 'アップグレードで追加特典' }}
                    </div>
                  </div>
                  <button 
                    v-if="discount.level === 'ベーシックメンバー'"
                    class="text-xs text-red-600 hover:text-red-800 japanese-text px-2 py-1 hover:bg-red-50 rounded"
                  >
                    アップグレード →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile User Menu -->
    <div 
      v-show="isUserMenuOpen"
      class="md:hidden bg-white border-t absolute top-full left-0 right-0 shadow-lg"
    >
      <div class="px-4 py-3">
        <!-- User Info -->
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <UserCircleIcon class="w-6 h-6" />
            </div>
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800 japanese-text">{{ userName }}</div>
            <div class="text-sm font-medium text-gray-500">{{ userEmail }}</div>
          </div>
        </div>

        <!-- Subscriptions Section -->
        <div class="mt-4 border-t border-b py-4">
          <div class="text-sm font-medium text-gray-700 mb-3 japanese-text">登録中の割引サービス</div>
          <div class="space-y-3">
            <div 
              v-for="discount in activeDiscountList" 
              :key="discount.id"
              class="flex items-center justify-between bg-gray-50 rounded-lg p-2.5"
            >
              <div class="flex items-center space-x-3">
                <div 
                  :class="`w-8 h-8 rounded-full bg-${discount.color}-400 flex items-center justify-center`"
                >
                  <component 
                    :is="discount.icon"
                    class="w-5 h-5 text-white"
                  />
                </div>
                <div>
                  <div class="font-medium">{{ discount.name }}</div>
                  <div class="text-xs text-gray-500">{{ discount.benefits }}</div>
                </div>
              </div>
              <span 
                :class="`px-2 py-1 rounded-full text-xs font-medium ${getMembershipBadgeStyle(discount.level)}`"
              >
                {{ discount.level }}
              </span>
            </div>
          </div>
          <div class="mt-3">
            <a 
              href="#" 
              class="block text-center text-sm text-red-600 hover:text-red-800 japanese-text py-2 hover:bg-gray-50 rounded-md"
            >
              メンバーシップをアップグレード →
            </a>
          </div>
        </div>

        <!-- Menu Items -->
        <div class="mt-3 space-y-1">
          <a href="#" class="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 japanese-text">
            アカウント設定
          </a>
          <a href="#" class="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 japanese-text">
            ポイント残高: {{ userPoints }} pt
          </a>
          <button 
            @click="handleLogout"
            class="w-full text-left block px-4 py-2 text-base font-medium text-red-600 hover:bg-gray-100 japanese-text"
          >
            ログアウト
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  Bars3Icon, 
  XMarkIcon, 
  UserCircleIcon, 
  ChevronDownIcon,
  HeartIcon,
  TruckIcon,
  AcademicCapIcon,
  UsersIcon,
  BriefcaseIcon,
  SparklesIcon,
  TagIcon,
  ChartBarIcon,
  BellIcon
} from '@heroicons/vue/24/outline'
import LanguageSwitcher from './LanguageSwitcher.vue'

const isOpen = ref(false)
const isUserMenuOpen = ref(false)
const isDiscountMenuOpen = ref(false)

// Mock user data - replace with actual user data from your auth system
const userName = ref('田中 太郎')
const userEmail = ref('tanaka.taro@rakuten.co.jp')
const userPoints = ref('3,500')

// Updated mock data with icons
const activeDiscountList = ref([
  { 
    id: 'mama', 
    name: 'ママわり', 
    color: 'pink',
    level: 'フルメンバー',
    benefits: '最大20%還元',
    status: 'active',
    icon: UsersIcon
  },
  { 
    id: 'pet', 
    name: 'ペットわり', 
    color: 'purple',
    level: 'ベーシックメンバー',
    benefits: '最大10%還元',
    status: 'active',
    icon: HeartIcon
  },
  { 
    id: 'gaku', 
    name: '学割', 
    color: 'green',
    level: 'フルメンバー',
    benefits: '最大15%還元',
    status: 'active',
    icon: AcademicCapIcon
  },
  { 
    id: 'car', 
    name: 'カーわり', 
    color: 'blue',
    level: 'ベーシックメンバー',
    benefits: '最大8%還元',
    status: 'active',
    icon: TruckIcon
  }
])

// Helper function to get badge style based on membership level
const getMembershipBadgeStyle = (level) => {
  return level === 'フルメンバー'
    ? 'bg-blue-100 text-blue-800 border border-blue-200 font-bold'
    : 'bg-gray-100 text-gray-800 border border-gray-200 font-bold'
}

const handleLogout = () => {
  // Add your logout logic here
  console.log('Logging out...')
}

// Add function to handle mobile menu toggles
const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    isUserMenuOpen.value = false // Close user menu when opening nav menu
  }
}

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
  if (isUserMenuOpen.value) {
    isOpen.value = false // Close nav menu when opening user menu
  }
}

// Separate toggle functions for each menu
const toggleDiscountMenu = (event) => {
  event.stopPropagation() // Prevent event from bubbling
  isDiscountMenuOpen.value = !isDiscountMenuOpen.value
  if (isDiscountMenuOpen.value) {
    isUserMenuOpen.value = false // Close user menu when opening discount menu
    isOpen.value = false // Close mobile menu when opening discount menu
  }
}

// Update click outside handlers
const handleGlobalClick = (event) => {
  // Close discount menu if clicking outside
  if (!event.target.closest('.discount-menu')) {
    isDiscountMenuOpen.value = false
  }
  
  // Close user menu if clicking outside
  if (!event.target.closest('.user-menu') && !event.target.closest('.mobile-user-menu')) {
    isUserMenuOpen.value = false
  }
}

// Single event listener for all click-outside handling
onMounted(() => {
  document.addEventListener('click', handleGlobalClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleGlobalClick)
})

const sidebarRef = ref(null)

const openMobileSidebar = () => {
  sidebarRef.value?.openMobileSidebar()
}
</script>

<style scoped>
/* Add styles to handle mobile menu positioning */
.mobile-menu-open {
  overflow: hidden;
}
</style> 