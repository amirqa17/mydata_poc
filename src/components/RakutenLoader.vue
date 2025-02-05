<template>
  <div class="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="relative">
      <!-- Rakuten R Logo -->
      <svg 
        class="w-16 h-16"
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm35.9 143.4c-1.4 2.8-4.2 4.2-7 4.2H71.7c-2.8 0-5.6-1.4-7-4.2-1.4-2.8-1.4-5.6 0-8.4l35.9-64.8c1.4-2.8 4.2-4.2 7-4.2s5.6 1.4 7 4.2l35.9 64.8c1.4 2.8 1.4 5.6 0 8.4z"
          class="text-[#BF0000] fill-current"
        />
      </svg>

      <!-- Spinning Circles -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 animate-spin-slow">
          <svg 
            class="w-16 h-16" 
            viewBox="0 0 200 200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle 
              cx="100" 
              cy="100" 
              r="88" 
              stroke="#FF82A3"
              stroke-width="4"
              stroke-linecap="round"
              stroke-dasharray="30 30"
              class="opacity-20"
            />
          </svg>
        </div>
        <div class="absolute inset-0 animate-spin-reverse">
          <svg 
            class="w-16 h-16" 
            viewBox="0 0 200 200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle 
              cx="100" 
              cy="100" 
              r="82" 
              stroke="#BF0000"
              stroke-width="4"
              stroke-linecap="round"
              stroke-dasharray="20 20"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="mt-4 text-gray-600 japanese-text text-sm">
      読み込み中...
    </div>
  </div>
</template>

<style scoped>
.animate-spin-slow {
  animation: spin 3s linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse 2s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style> 