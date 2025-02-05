// Move animations to a shared utility file
export const floatingAnimations = {
  float: {
    keyframes: {
      '0%, 100%': { transform: 'translateY(0) rotate(0)' },
      '50%': { transform: 'translateY(-10px) rotate(5deg)' }
    },
    duration: '3s',
    easing: 'ease-in-out',
    iteration: 'infinite'
  },
  // ... other animations
} 