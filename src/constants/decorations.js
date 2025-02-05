import { HeartIcon, StarIcon, SparklesIcon } from '@heroicons/vue/24/solid'

export const FLOATING_ITEMS = [
  // Left side emojis
  {
    type: 'emoji',
    emoji: '👶',
    position: { left: '5%', top: '5%' },
    size: 'text-3xl'
  },
  {
    type: 'emoji',
    emoji: '🧸',
    position: { left: '8%', top: '25%' },
    size: 'text-3xl'
  },
  {
    type: 'emoji',
    emoji: '🎀',
    position: { left: '3%', top: '45%' },
    size: 'text-3xl'
  },
  {
    type: 'emoji',
    emoji: '👩‍👦',
    position: { left: '7%', top: '65%' },
    size: 'text-3xl'
  },
  {
    type: 'emoji',
    emoji: '🍼',
    position: { left: '4%', top: '85%' },
    size: 'text-3xl'
  },

  // Right side emojis
  {
    type: 'emoji',
    emoji: '🌟',
    position: { right: '5%', top: '8%' },
    size: 'text-3xl'
  },
  {
    type: 'emoji',
    emoji: '🎈',
    position: { right: '8%', top: '28%' },
    size: 'text-3xl'
  },
  {
    type: 'emoji',
    emoji: '🪆',
    position: { right: '4%', top: '48%' },
    size: 'text-3xl'
  },
  {
    type: 'emoji',
    emoji: '🧩',
    position: { right: '7%', top: '68%' },
    size: 'text-3xl'
  },
  {
    type: 'emoji',
    emoji: '🎠',
    position: { right: '5%', top: '88%' },
    size: 'text-3xl'
  },

  // Additional scattered emojis
  {
    type: 'emoji',
    emoji: '👶🏻',
    position: { left: '15%', top: '15%' },
    size: 'text-2xl'
  },
  {
    type: 'emoji',
    emoji: '🍭',
    position: { right: '15%', top: '35%' },
    size: 'text-2xl'
  },
  {
    type: 'emoji',
    emoji: '🎪',
    position: { left: '12%', top: '55%' },
    size: 'text-2xl'
  },
  {
    type: 'emoji',
    emoji: '🦄',
    position: { right: '12%', top: '75%' },
    size: 'text-2xl'
  },
  {
    type: 'emoji',
    emoji: '🌈',
    position: { left: '15%', top: '95%' },
    size: 'text-2xl'
  },

  // Icons
  {
    type: 'icon',
    component: HeartIcon,
    position: { top: '20%', right: '20%' },
    animation: 'float',
    opacity: 10,
    size: 'w-16 h-16'
  },
  {
    type: 'icon',
    component: StarIcon,
    position: { bottom: '30%', left: '30%' },
    animation: 'float-slow',
    opacity: 10,
    size: 'w-12 h-12'
  },
  {
    type: 'icon',
    component: SparklesIcon,
    position: { top: '50%', right: '40%' },
    animation: 'float',
    opacity: 10,
    size: 'w-10 h-10'
  }
]

// Additional emojis that could be used:
// 👩‍👦 - Family (mother and child)
// 🎀 - Ribbon
// 🧸 - Teddy Bear
// 🍼 - Baby Bottle
// 👶 - Baby
// 🎈 - Balloon
// 🌟 - Glowing Star
// 🍭 - Lollipop
// 🎠 - Carousel Horse
// 🎪 - Circus Tent
// 🦄 - Unicorn
// 🎁 - Gift
// 🌈 - Rainbow
// 🪆 - Nesting Dolls
// 🧩 - Puzzle Piece 