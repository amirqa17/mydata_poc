<template>
  <div class="bg-gray-50 min-h-screen flex flex-col">
    <TheHeader />
    
    <!-- Enhanced Hero Section -->
    <header class="hero-gradient text-white pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')"></div>
      </div>

      <div class="container mx-auto px-4 relative">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 japanese-text leading-tight">
            楽天会員なら
            <span class="text-[#FFE600]">すぐに使える</span>
            特典プログラム
          </h1>
          <p class="text-base sm:text-lg md:text-xl japanese-text mb-6 text-white/90">
            会員情報を使って簡単登録。あなたの生活スタイルに合わせた割引特典をご利用いただけます。
          </p>

          <!-- Compact Quick Start Guide -->
          <div class="inline-flex items-center space-x-3 bg-white/10 rounded-full px-4 py-2 mb-8">
            <div class="flex items-center">
              <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[#FFE600] text-sm font-bold">1</div>
              <span class="ml-2 text-sm">ログイン</span>
            </div>
            <ArrowRightIcon class="w-4 h-4 text-white/50" />
            <div class="flex items-center">
              <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[#FFE600] text-sm font-bold">2</div>
              <span class="ml-2 text-sm">特典を選択</span>
            </div>
            <ArrowRightIcon class="w-4 h-4 text-white/50" />
            <div class="flex items-center">
              <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[#FFE600] text-sm font-bold">3</div>
              <span class="ml-2 text-sm">すぐに適用</span>
            </div>
          </div>

          <!-- More compact benefits grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div class="bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-all shadow-lg">
              <div class="flex items-center mb-2">
                <div class="p-1.5 bg-white/10 rounded-md">
                  <SparklesIcon class="h-5 w-5 text-[#FFE600]" />
                </div>
                <h3 class="ml-2 text-base font-bold text-white japanese-text">最大20%ポイント還元</h3>
              </div>
              <p class="text-xs text-white/90 japanese-text leading-relaxed">
                各カテゴリーで業界最高クラスのポイント還元率を実現。
              </p>
            </div>

            <div class="bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-all shadow-lg">
              <div class="flex items-center mb-2">
                <div class="p-1.5 bg-white/10 rounded-md">
                  <UserGroupIcon class="h-5 w-5 text-[#FFE600]" />
                </div>
                <h3 class="ml-2 text-base font-bold text-white japanese-text">複数プログラムの併用可能</h3>
              </div>
              <p class="text-xs text-white/90 japanese-text leading-relaxed">
                ライフスタイルに合わせて複数の割引プログラムを組み合わせて、さらにお得に。
              </p>
            </div>

            <div class="bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-all shadow-lg">
              <div class="flex items-center mb-2">
                <div class="p-1.5 bg-white/10 rounded-md">
                  <ShieldCheckIcon class="h-5 w-5 text-[#FFE600]" />
                </div>
                <h3 class="ml-2 text-base font-bold text-white japanese-text">簡単登録・安心管理</h3>
              </div>
              <p class="text-xs text-white/90 japanese-text leading-relaxed">
                必要な情報を入力するだけで即時利用可能。登録情報は安全に管理。
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Add this section after the hero section and before the Programs Section -->
    <section class="bg-white py-8 border-b border-gray-200">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- My Discounts Preview -->
          <div class="bg-gray-50 rounded-xl p-6 shadow-inner">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-bold text-gray-900 japanese-text">マイ割引管理</h2>
              <button class="text-sm text-[#BF0000] hover:text-red-700 flex items-center japanese-text">
                <CogIcon class="h-4 w-4 mr-1" />
                設定を管理
              </button>
            </div>

            <!-- Active Discounts -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <UsersIcon class="h-5 w-5 text-pink-600" />
                    </div>
                    <span class="font-medium text-gray-900 japanese-text">ママわり</span>
                  </div>
                  <span class="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full japanese-text">フル会員</span>
                </div>
                <div class="text-sm text-gray-600 mb-3 japanese-text">次回更新: 2024年4月1日</div>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium text-[#BF0000] japanese-text">20% ポイント還元中</span>
                  <button class="text-xs text-gray-600 hover:text-gray-900 japanese-text">
                    詳細 →
                  </button>
                </div>
              </div>

              <!-- Add more active discount cards -->
              <!-- Similar cards for other active discounts -->
            </div>

            <!-- Quick Actions -->
            <div class="mt-6 flex flex-wrap gap-4">
              <button class="inline-flex items-center text-sm text-gray-700 hover:text-[#BF0000] japanese-text">
                <ChartBarIcon class="h-4 w-4 mr-1" />
                利用状況を確認
              </button>
              <button class="inline-flex items-center text-sm text-gray-700 hover:text-[#BF0000] japanese-text">
                <DocumentTextIcon class="h-4 w-4 mr-1" />
                利用明細
              </button>
              <button class="inline-flex items-center text-sm text-gray-700 hover:text-[#BF0000] japanese-text">
                <BellIcon class="h-4 w-4 mr-1" />
                通知設定
              </button>
            </div>
          </div>

          <!-- Recommendation Banner -->
          <div class="mt-6 bg-gradient-to-r from-[#BF0000] to-red-800 rounded-xl p-6 text-white">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-bold mb-2 japanese-text">
                  新しい特典をおすすめ
                </h3>
                <p class="text-sm text-white/90 japanese-text">
                  あなたの利用パターンから、ペットわりがおすすめです。最大15%のポイント還元をご利用いただけます。
                </p>
              </div>
              <button class="bg-white text-[#BF0000] px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors japanese-text">
                詳細を見る
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <main class="container mx-auto px-4 py-12 md:py-16">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 japanese-text">
          利用可能な特典プログラム
        </h2>
        <p class="text-gray-600 japanese-text max-w-2xl mx-auto">
          楽天会員の方なら、どなたでもご利用いただけます。
          複数のプログラムを組み合わせることで、さらにお得に。
          <span class="text-[#BF0000] font-medium">今すぐ登録で特典が即時適用されます。</span>
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <DiscountCard
          v-for="program in discountPrograms"
          :key="program.id"
          v-bind="program"
          @register="handleRegister"
        />
      </div>

      <!-- Usage Stats -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white rounded-2xl shadow-lg p-8">
        <div class="text-center">
          <div class="text-4xl font-bold text-[#BF0000]">300万<span class="text-3xl">+</span></div>
          <div class="text-gray-600 mt-2 japanese-text">利用者数</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-[#BF0000]">¥50億<span class="text-3xl">+</span></div>
          <div class="text-gray-600 mt-2 japanese-text">年間還元額</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-[#BF0000]">98<span class="text-3xl">%</span></div>
          <div class="text-gray-600 mt-2 japanese-text">利用者満足度</div>
        </div>
      </div>

      <!-- Add a FAQ section -->
      <div class="mt-16 bg-white rounded-2xl shadow-lg p-8">
        <h3 class="text-xl font-bold text-gray-900 mb-6 japanese-text">よくある質問</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-gray-900 mb-2 japanese-text">特典はいつから使えますか？</h4>
            <p class="text-gray-600 japanese-text">登録完了後、即時にご利用いただけます。</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2 japanese-text">複数の特典を併用できますか？</h4>
            <p class="text-gray-600 japanese-text">はい、複数の特典を組み合わせてご利用いただけます。</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2 japanese-text">特典の期限はありますか？</h4>
            <p class="text-gray-600 japanese-text">特典は継続的にご利用いただけます。解約されるまで自動更新されます。</p>
          </div>
        </div>
      </div>
    </main>

    <TheFooter class="mt-auto" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheHeader from './TheHeader.vue'
import DiscountCard from './DiscountCard.vue'
import TheFooter from './TheFooter.vue'
import { 
  SparklesIcon, 
  UserGroupIcon, 
  ShieldCheckIcon,
  ArrowRightIcon,
  CogIcon,
  UsersIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BellIcon
} from '@heroicons/vue/24/outline'

const discountPrograms = ref([
  {
    id: 'mama',
    title: 'ママわり',
    description: '妊娠中・子育て中の方向けの特典',
    color: 'pink',
    icon: 'mother'
  },
  {
    id: 'car',
    title: 'カーわり',
    description: '車のメンテナンスやカー用品のお買い物でおトクに！タイヤ交換やオイル交換などのサービスが最大30%オフ。カーナビやドライブレコーダーもポイント還元率アップ！',
    color: 'blue',
    icon: 'car'
  },
  {
    id: 'pet',
    title: 'ペットわり',
    description: '大切なペットとの生活をもっと豊かに！ペットフードや用品のお買い物で最大15%ポイント還元。動物病院でも使える特別クーポンや、トリミングサービスの割引特典も！',
    color: 'purple',
    icon: 'pet'
  },
  {
    id: 'gaku',
    title: '学割',
    description: '学生生活をもっとおトクに！教科書・参考書が10%オフ、文具・PCは最大20%ポイント還元。さらに、カフェやレストランでの食事も学割価格でご利用いただけます！',
    color: 'green',
    icon: 'student'
  },
  {
    id: 'business',
    title: 'ビジネスわり',
    description: 'ビジネスパーソンの働き方をサポート！文具やオフィス用品が最大25%オフ。コワーキングスペースの利用料割引や、ビジネス書籍の特別ポイント還元でスキルアップを応援！',
    color: 'gray',
    icon: 'business'
  },
  {
    id: 'cosme',
    title: 'コスメわり',
    description: '美容好きな方必見！人気ブランドのコスメ・スキンケア商品が最大20%オフ。新商品の先行予約特典や、ビューティーサロンでも使える特別クーポンをご用意！',
    color: 'yellow',
    icon: 'cosmetics'
  }
])

const handleRegister = (id) => {
  console.log('Register clicked for:', id)
}
</script>

<style>
.hero-gradient {
  background: linear-gradient(135deg, #BF0000 0%, #8B0000 100%);
}

/* Add subtle animation to the background pattern */
@keyframes subtleFloat {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.hero-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 20% 150%, rgba(255, 230, 0, 0.15) 0%, transparent 50%);
  animation: subtleFloat 10s ease-in-out infinite;
}
</style> 