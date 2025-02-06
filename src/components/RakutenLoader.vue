<template>
  <div class="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="relative">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/Rakuten_R_logo.svg"
        alt="Loading..." 
        class="w-16 h-16 animate-pulse"
      />
      <div class="absolute inset-0 animate-spin">
        <div class="absolute top-0 left-1/2 w-1 h-1 bg-[#BF0000] rounded-full transform -translate-x-1/2"></div>
      </div>
    </div>
    <div class="absolute mt-24 text-sm text-gray-600 japanese-text">
      読み込み中...
    </div>
  </div>
</template>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1.5s linear infinite;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}
</style> 