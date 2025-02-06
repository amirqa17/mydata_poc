<template>
  <div class="bg-gray-50 min-h-screen flex flex-col">
    <!-- Enhanced Hero Section -->
    <header class="hero-gradient text-white pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')"></div>
      </div>

      <!-- Floating Decorative Elements -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full opacity-20 blur-3xl"></div>
      <div class="absolute -bottom-20 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>

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

          <!-- Quick Start Guide -->
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

          <!-- Benefits Grid -->
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

      <!-- Discount Cards -->
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <!-- Mamawari Card -->
        <div class="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-pink-100/50">
          <img 
            src="https://mydata.id.rakuten.co.jp/assets/mamawari_logo-rLpLtBDj.svg" 
            alt="ママわり" 
            class="h-10 w-auto mb-4"
          />
          <h3 class="text-lg font-bold mb-2 text-gray-900 japanese-text">ママわり</h3>
          <p class="text-sm text-gray-600 mb-4 japanese-text">
            妊娠中・子育て中の方向けの特典プログラム
          </p>
          <router-link 
            to="/mamawari/register" 
            class="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors"
          >
            詳しく見る
            <ChevronRightIcon class="w-4 h-4 ml-1" />
          </router-link>
        </div>

        <!-- Carwari Card -->
        <div class="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-blue-100/50">
          <img 
            src="data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27utf-8%27?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2023.0.3,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%20xmlns:xlink=%27http://www.w3.org/1999/xlink%27%20x=%270px%27%20y=%270px%27%20viewBox=%270%200%20313.3%2060.94%27%20style=%27enable-background:new%200%200%20313.3%2060.94;%27%20xml:space=%27preserve%27%3e%3cstyle%20type=%27text/css%27%3e%20.st0{display:none;}%20.st1{display:inline;}%20.st2{fill:%23FFFFFF;}%20.st3{display:inline;fill:%23002896;}%20.st4{display:inline;fill:none;stroke:%23000000;stroke-width:0.4;stroke-miterlimit:10;}%20.st5{fill:%23002896;}%20.st6{fill:none;}%20%3c/style%3e%3cg%20id=%27Guides%27%20class=%27st0%27%3e%3c/g%3e%3cg%20id=%27Logos%27%3e%3cg%3e%3cpath%20class=%27st6%27%20d=%27M2.83,60.94C1.28,60.94,0,59.67,0,58.11V2.83C0,1.28,1.28,0,2.83,0h307.63c1.56,0,2.83,1.28,2.83,2.83v55.28%20c0,1.56-1.28,2.83-2.83,2.83H2.83z%27/%3e%3cg%3e%3crect%20x=%2714.17%27%20y=%2714.17%27%20class=%27st6%27%20width=%27284.95%27%20height=%2732.6%27/%3e%3cg%3e%3cg%3e%3cpolygon%20class=%27st5%27%20points=%27125.44,46.77%2041.82,46.77%2048.48,53.43%20%27/%3e%3cpath%20class=%27st5%27%20d=%27M49.56,19.83v1.01c-1.55-0.99-2.95-1.56-4.85-1.56c-5.86,0-10.31,5.34-10.31,11.9%20c0,6.56,4.45,11.9,10.31,11.9c1.91,0,3.3-0.57,4.85-1.56v1.01h5.15V19.83H49.56z%20M44.71,37.61c-2.89,0-5-2.84-5-6.44%20c0-3.59,2.12-6.44,5-6.44c2.89,0,4.93,2.85,4.93,6.44C49.64,34.77,47.6,37.61,44.71,37.61z%27/%3e%3cpath%20class=%27st5%27%20d=%27M90.82,19.83v13.33c0,2.5-1.72,4.61-4.22,4.61c-2.5,0-4.22-2.11-4.22-4.61V19.83h-5.15v13.33%20c0,5.47,3.74,9.92,9.21,9.92c2.53,0,4.38-1.4,4.38-1.4v0.84h5.15V19.83H90.82z%27/%3e%3cpath%20class=%27st5%27%20d=%27M138.81,42.52V29.19c0-2.5,1.72-4.61,4.22-4.61c2.5,0,4.22,2.11,4.22,4.61v13.33h5.15V29.19%20c0-5.47-3.74-9.92-9.21-9.92c-2.53,0-4.38,1.4-4.38,1.4v-0.84h-5.15v22.69H138.81z%27/%3e%3cpath%20class=%27st5%27%20d=%27M19.56,42.52v-8.79h3.81l6.6,8.79h6.74l-7.97-10.61c2.48-1.78,4.11-4.68,4.11-7.97%20c0-5.39-4.39-9.77-9.78-9.77h-8.9v28.35H19.56z%20M19.56,19.56h3.51c2.42,0,4.4,1.97,4.4,4.39c0,2.43-1.98,4.4-4.4,4.4h-3.51%20V19.56z%27/%3e%3cpath%20class=%27st5%27%20d=%27M109.85,37.15c-0.46,0.31-1.05,0.56-1.72,0.56c-0.84,0-2.43-0.64-2.43-2.78v-9.71h4.4v-5.39h-4.4l0-5.65%20h-5.15l0,5.65h-2.72v5.39h2.72V35c0,5.07,3.82,8.09,7.66,8.09c1.43,0,3.42-0.47,5.04-1.43L109.85,37.15z%27/%3e%3cpolygon%20class=%27st5%27%20points=%2767.52,30.46%2076.35,19.83%2069.13,19.83%2062.95,27.73%2062.95,12.3%2057.65,12.3%2057.65,42.52%2062.95,42.52%2062.95,33.2%2070.55,42.52%2077.77,42.52%20%27/%3e%3cpath%20class=%27st5%27%20d=%27M121.75,19.25c-5.96,0-10.24,5.24-10.24,11.92c0,7.03,5.37,11.92,10.75,11.92c2.72,0,6.2-0.93,9.12-5.08%20l-4.55-2.63c-3.52,5.19-9.38,2.55-10.06-2.63l14.83,0C132.88,24.61,127.61,19.25,121.75,19.25z%20M126.24,28.24h-9.28%20C118.05,22.93,125.24,22.63,126.24,28.24z%27/%3e%3c/g%3e%3cg%3e%3cpath%20class=%27st5%27%20d=%27M176.3,35.5c1.79,2.47,3.45,4.94,4.67,6.96h-6.19c-2.95-5-7.35-10.89-11.01-15.26h6.13%20c1.1,1.28,2.32,2.83,3.6,4.49c4.28-1.87,7.11-5,8.21-9.52h-21.1v-4.64h27.05v0.39C187.19,27.47,182.64,32.86,176.3,35.5z%27/%3e%3cpath%20class=%27st5%27%20d=%27M205.89,26.79v16.42h-5.24V29.52c-4.08,1.67-8.51,2.65-12.38,3.21v-4.73c12.59-2.2,17.97-6.75,20.14-11.72%20h5.48C212.56,20.96,209.61,24.32,205.89,26.79z%27/%3e%3cpath%20class=%27st5%27%20d=%27M233.97,42.38h-5.59v-4.67h4.49c2.17,0,2.95-0.83,2.95-2.95v-9.55h-7.47c-0.65,9.7-6.16,15.38-12.5,17.44%20v-4.97c4.02-2.2,7.23-6.28,7.47-12.47h-7.47v-4.52h7.47v-4.61h5.09v4.61H241v14.43C241,40.15,238.85,42.38,233.97,42.38z%27/%3e%3cpath%20class=%27st5%27%20d=%27M244.29,30.48v-4.73h24.5v4.73H244.29z%27/%3e%3cg%3e%3cpath%20class=%27st5%27%20d=%27M286.63,24.38h-4.35v1.12h5.2v2.9h-5.2v1.15h6.38v3.3h-17.12v-3.3h6.74V28.4h-5.11v-2.9h5.11v-1.12h-4.32%20V23.2h-1.81v-6.53h5.87v-1.94h4.51v1.94h6.11v6.53h-2V24.38z%20M287.63,33.84v9.1h-14.55v-9.1H287.63z%20M284.82,21.63v-1.57h-8.8%20v1.57h2.27V20.6h3.99v1.03H284.82z%20M283.28,36.9h-5.84v2.87h5.84V36.9z%20M293.23,16.24v19.9h-3.69v-19.9H293.23z%20M299.12,39.44%20c0,2.75-0.76,3.93-3.54,3.93h-4.45l-0.94-4.75h3.78c0.7,0,0.88-0.15,0.88-0.94V14.73h4.26V39.44z%27/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e" 
            alt="カーわり" 
            class="h-10 w-auto mb-4"
          />
          <h3 class="text-lg font-bold mb-2 text-gray-900 japanese-text">カーわり</h3>
          <p class="text-sm text-gray-600 mb-4 japanese-text">
            車のメンテナンスやカー用品のお買い物でおトクに！
          </p>
          <router-link 
            to="/carwari/register" 
            class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            詳しく見る
            <ChevronRightIcon class="w-4 h-4 ml-1" />
          </router-link>
        </div>

        <!-- Petwari Card -->
        <div class="bg-gradient-to-br from-white to-yellow-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-yellow-100/50">
          <img 
            src="https://mydata.id.rakuten.co.jp/assets/petwari_logo--vxukZJ4.svg"
            alt="ペットわり" 
            class="h-10 w-auto mb-4"
          />
          <h3 class="text-lg font-bold mb-2 text-gray-900 japanese-text">ペットわり</h3>
          <p class="text-sm text-gray-600 mb-4 japanese-text">
            大切なペットとの生活をもっと豊かに！
          </p>
          <router-link 
            to="/petwari/register" 
            class="inline-flex items-center text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            詳しく見る
            <ChevronRightIcon class="w-4 h-4 ml-1" />
          </router-link>
        </div>

        <!-- Gakuwari Card -->
        <div class="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-green-100/50">
          <img 
            src="https://mydata.id.rakuten.co.jp/assets/gakuwari_logo-_s7Ebmrt.svg"
            alt="学割" 
            class="h-10 w-auto mb-4"
          />
          <h3 class="text-lg font-bold mb-2 text-gray-900 japanese-text">学割</h3>
          <p class="text-sm text-gray-600 mb-4 japanese-text">
            学生生活をもっとお得に！教科書や参考書もポイント還元
          </p>
          <router-link 
            to="/gakuwari/register" 
            class="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
          >
            詳しく見る
            <ChevronRightIcon class="w-4 h-4 ml-1" />
          </router-link>
        </div>
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

      <!-- FAQ Section -->
      <div class="mt-16 bg-white rounded-2xl shadow-lg p-8">
        <h3 class="text-xl font-bold text-gray-900 mb-6 japanese-text">よくある質問</h3>
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index">
            <h4 class="font-bold text-gray-900 mb-2 japanese-text">{{ faq.question }}</h4>
            <p class="text-gray-600 japanese-text">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { 
  SparklesIcon, 
  UserGroupIcon, 
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronRightIcon
} from '@heroicons/vue/24/outline'

const router = useRouter()

const discountPrograms = ref([
  {
    id: 'mama',
    title: 'ママわり',
    description: '妊娠中・子育て中の方向けの特典プログラム',
    logo: 'https://mydata.id.rakuten.co.jp/assets/mamawari_logo-rLpLtBDj.svg',
    isPopular: true,
    benefits: [
      'ベビー・マタニティ用品が最大20%ポイント還元',
      '対象のベビーフードが毎月10%OFF',
      '全国の提携病院で使える割引クーポン'
    ]
  },
  {
    id: 'car',
    title: 'カーわり',
    description: '車のメンテナンスやカー用品のお買い物でおトクに！',
    logo: 'data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27utf-8%27?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2023.0.3,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%20xmlns:xlink=%27http://www.w3.org/1999/xlink%27%20x=%270px%27%20y=%270px%27%20viewBox=%270%200%20313.3%2060.94%27%20style=%27enable-background:new%200%200%20313.3%2060.94;%27%20xml:space=%27preserve%27%3e%3cstyle%20type=%27text/css%27%3e%20.st0{display:none;}%20.st1{display:inline;}%20.st2{fill:%23FFFFFF;}%20.st3{display:inline;fill:%23002896;}%20.st4{display:inline;fill:none;stroke:%23000000;stroke-width:0.4;stroke-miterlimit:10;}%20.st5{fill:%23002896;}%20.st6{fill:none;}%20%3c/style%3e%3cg%20id=%27Guides%27%20class=%27st0%27%3e%3c/g%3e%3cg%20id=%27Logos%27%3e%3cg%3e%3cpath%20class=%27st6%27%20d=%27M2.83,60.94C1.28,60.94,0,59.67,0,58.11V2.83C0,1.28,1.28,0,2.83,0h307.63c1.56,0,2.83,1.28,2.83,2.83v55.28%20c0,1.56-1.28,2.83-2.83,2.83H2.83z%27/%3e%3cg%3e%3crect%20x=%2714.17%27%20y=%2714.17%27%20class=%27st6%27%20width=%27284.95%27%20height=%2732.6%27/%3e%3cg%3e%3cg%3e%3cpolygon%20class=%27st5%27%20points=%27125.44,46.77%2041.82,46.77%2048.48,53.43%20%27/%3e%3cpath%20class=%27st5%27%20d=%27M49.56,19.83v1.01c-1.55-0.99-2.95-1.56-4.85-1.56c-5.86,0-10.31,5.34-10.31,11.9%20c0,6.56,4.45,11.9,10.31,11.9c1.91,0,3.3-0.57,4.85-1.56v1.01h5.15V19.83H49.56z%20M44.71,37.61c-2.89,0-5-2.84-5-6.44%20c0-3.59,2.12-6.44,5-6.44c2.89,0,4.93,2.85,4.93,6.44C49.64,34.77,47.6,37.61,44.71,37.61z%27/%3e%3cpath%20class=%27st5%27%20d=%27M90.82,19.83v13.33c0,2.5-1.72,4.61-4.22,4.61c-2.5,0-4.22-2.11-4.22-4.61V19.83h-5.15v13.33%20c0,5.47,3.74,9.92,9.21,9.92c2.53,0,4.38-1.4,4.38-1.4v0.84h5.15V19.83H90.82z%27/%3e%3cpath%20class=%27st5%27%20d=%27M138.81,42.52V29.19c0-2.5,1.72-4.61,4.22-4.61c2.5,0,4.22,2.11,4.22,4.61v13.33h5.15V29.19%20c0-5.47-3.74-9.92-9.21-9.92c-2.53,0-4.38,1.4-4.38,1.4v-0.84h-5.15v22.69H138.81z%27/%3e%3cpath%20class=%27st5%27%20d=%27M19.56,42.52v-8.79h3.81l6.6,8.79h6.74l-7.97-10.61c2.48-1.78,4.11-4.68,4.11-7.97%20c0-5.39-4.39-9.77-9.78-9.77h-8.9v28.35H19.56z%20M19.56,19.56h3.51c2.42,0,4.4,1.97,4.4,4.39c0,2.43-1.98,4.4-4.4,4.4h-3.51%20V19.56z%27/%3e%3cpath%20class=%27st5%27%20d=%27M109.85,37.15c-0.46,0.31-1.05,0.56-1.72,0.56c-0.84,0-2.43-0.64-2.43-2.78v-9.71h4.4v-5.39h-4.4l0-5.65%20h-5.15l0,5.65h-2.72v5.39h2.72V35c0,5.07,3.82,8.09,7.66,8.09c1.43,0,3.42-0.47,5.04-1.43L109.85,37.15z%27/%3e%3cpolygon%20class=%27st5%27%20points=%2767.52,30.46%2076.35,19.83%2069.13,19.83%2062.95,27.73%2062.95,12.3%2057.65,12.3%2057.65,42.52%2062.95,42.52%2062.95,33.2%2070.55,42.52%2077.77,42.52%20%27/%3e%3cpath%20class=%27st5%27%20d=%27M121.75,19.25c-5.96,0-10.24,5.24-10.24,11.92c0,7.03,5.37,11.92,10.75,11.92c2.72,0,6.2-0.93,9.12-5.08%20l-4.55-2.63c-3.52,5.19-9.38,2.55-10.06-2.63l14.83,0C132.88,24.61,127.61,19.25,121.75,19.25z%20M126.24,28.24h-9.28%20C118.05,22.93,125.24,22.63,126.24,28.24z%27/%3e%3c/g%3e%3cg%3e%3cpath%20class=%27st5%27%20d=%27M176.3,35.5c1.79,2.47,3.45,4.94,4.67,6.96h-6.19c-2.95-5-7.35-10.89-11.01-15.26h6.13%20c1.1,1.28,2.32,2.83,3.6,4.49c4.28-1.87,7.11-5,8.21-9.52h-21.1v-4.64h27.05v0.39C187.19,27.47,182.64,32.86,176.3,35.5z%27/%3e%3cpath%20class=%27st5%27%20d=%27M205.89,26.79v16.42h-5.24V29.52c-4.08,1.67-8.51,2.65-12.38,3.21v-4.73c12.59-2.2,17.97-6.75,20.14-11.72%20h5.48C212.56,20.96,209.61,24.32,205.89,26.79z%27/%3e%3cpath%20class=%27st5%27%20d=%27M233.97,42.38h-5.59v-4.67h4.49c2.17,0,2.95-0.83,2.95-2.95v-9.55h-7.47c-0.65,9.7-6.16,15.38-12.5,17.44%20v-4.97c4.02-2.2,7.23-6.28,7.47-12.47h-7.47v-4.52h7.47v-4.61h5.09v4.61H241v14.43C241,40.15,238.85,42.38,233.97,42.38z%27/%3e%3cpath%20class=%27st5%27%20d=%27M244.29,30.48v-4.73h24.5v4.73H244.29z%27/%3e%3cg%3e%3cpath%20class=%27st5%27%20d=%27M286.63,24.38h-4.35v1.12h5.2v2.9h-5.2v1.15h6.38v3.3h-17.12v-3.3h6.74V28.4h-5.11v-2.9h5.11v-1.12h-4.32%20V23.2h-1.81v-6.53h5.87v-1.94h4.51v1.94h6.11v6.53h-2V24.38z%20M287.63,33.84v9.1h-14.55v-9.1H287.63z%20M284.82,21.63v-1.57h-8.8%20v1.57h2.27V20.6h3.99v1.03H284.82z%20M283.28,36.9h-5.84v2.87h5.84V36.9z%20M293.23,16.24v19.9h-3.69v-19.9H293.23z%20M299.12,39.44%20c0,2.75-0.76,3.93-3.54,3.93h-4.45l-0.94-4.75h3.78c0.7,0,0.88-0.15,0.88-0.94V14.73h4.26V39.44z%27/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e',
    benefits: [
      'タイヤ交換やオイル交換が最大30%OFF',
      'カーナビ・ドライブレコーダーがポイント2倍',
      '提携ガソリンスタンドで使える割引券'
    ]
  },
  {
    id: 'pet',
    title: 'ペットわり',
    description: '大切なペットとの生活をもっと豊かに！',
    logo: 'https://mydata.id.rakuten.co.jp/assets/petwari_logo--vxukZJ4.svg',
    isPopular: true,
    benefits: [
      'ペットフード・用品が最大15%ポイント還元',
      '動物病院で使える特別クーポン',
      'トリミングサービスの割引特典'
    ]
  },
  {
    id: 'gaku',
    title: '学割',
    description: '学生生活をもっとお得に！教科書や参考書もポイント還元',
    logo: 'https://mydata.id.rakuten.co.jp/assets/gakuwari_logo-_s7Ebmrt.svg',
    isPopular: true,
    benefits: [
      '教科書・参考書が最大15%ポイント還元',
      '学生向け限定クーポン配布',
      'デジタル機器がお得に購入可能'
    ]
  }
])

const faqs = ref([
  {
    question: '特典はいつから使えますか？',
    answer: '登録完了後、即時にご利用いただけます。'
  },
  {
    question: '複数の特典を併用できますか？',
    answer: 'はい、複数の特典を組み合わせてご利用いただけます。'
  },
  {
    question: '特典の期限はありますか？',
    answer: '特典は継続的にご利用いただけます。解約されるまで自動更新されます。'
  }
])

const getProgramGradient = (id) => {
  const gradients = {
    mama: 'from-pink-400 to-pink-600',
    car: 'from-blue-400 to-blue-600',
    pet: 'from-purple-400 to-purple-600',
    gaku: 'from-green-400 to-green-600'
  }
  return gradients[id]
}

const handleRegister = (id) => {
  router.push(`/register/${id}`)
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