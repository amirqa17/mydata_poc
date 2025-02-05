<template>
  <footer class="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo and Language -->
        <div class="col-span-1">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Rakuten_R_logo.svg"
            alt="Rakuten"
            class="h-8 mb-4"
          />
          <LanguageSwitcher class="mt-4" />
        </div>

        <!-- Links -->
        <div class="col-span-2 grid grid-cols-2 gap-8">
          <div>
            <h3 class="text-sm font-semibold text-gray-900 japanese-text">サービス</h3>
            <ul class="mt-4 space-y-2">
              <li>
                <a href="#" class="text-sm text-gray-600 hover:text-[#BF0000] japanese-text">ママわり</a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-600 hover:text-[#BF0000] japanese-text">学割</a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-600 hover:text-[#BF0000] japanese-text">ペットわり</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-900 japanese-text">サポート</h3>
            <ul class="mt-4 space-y-2">
              <li>
                <a href="#" class="text-sm text-gray-600 hover:text-[#BF0000] japanese-text">ヘルプ</a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-600 hover:text-[#BF0000] japanese-text">お問い合わせ</a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-600 hover:text-[#BF0000] japanese-text">よくある質問</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Social Links -->
        <div class="col-span-1">
          <h3 class="text-sm font-semibold text-gray-900 japanese-text">フォローする</h3>
          <div class="mt-4 flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-[#BF0000]">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-[#BF0000]">
              <span class="sr-only">LINE</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.193 0-.378-.094-.492-.264L12.573 9.91h-.699v3.343c0 .346-.283.629-.631.629-.345 0-.628-.283-.628-.629V8.108c0-.345.283-.63.63-.63h1.579c.217 0 .412.134.492.336l1.738 3.244h.674V8.108c0-.345.282-.63.631-.63.346 0 .63.285.63.63l-.001 4.771h.002zm-6.116.862c-.345 0-.628-.282-.628-.629V8.108c0-.345.283-.63.63-.63.345 0 .627.285.627.63v4.771c0 .346-.282.629-.629.629zm-2.296.002c-.346 0-.629-.282-.629-.63V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v2.705l2.405-2.987c.115-.175.3-.272.495-.272.313 0 .627.26.627.59 0 .122-.037.237-.105.334l-1.983 2.491 2.158 2.769c.069.089.105.201.105.32 0 .345-.282.63-.63.63-.214 0-.396-.094-.51-.264l-2.089-2.769-.471.595v1.807c0 .346-.282.63-.628.63zM24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-8 pt-8 border-t border-gray-200">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="flex space-x-6">
            <a href="#" class="text-xs text-gray-600 hover:text-[#BF0000] japanese-text">プライバシーポリシー</a>
            <a href="#" class="text-xs text-gray-600 hover:text-[#BF0000] japanese-text">利用規約</a>
            <a href="#" class="text-xs text-gray-600 hover:text-[#BF0000] japanese-text">特定商取引法に基づく表示</a>
          </div>
          <p class="text-xs text-gray-600">© {{ new Date().getFullYear() }} Rakuten Group, Inc.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue'
</script> 