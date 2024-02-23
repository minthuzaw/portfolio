import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Laravel',
      description: {
        en: 'I build modern and advanced websites and applications with Laravel, the PHP framework.',
      },
      icon: 'logo-laravel',
      image: null,
    },
    {
      id: 2,
      title: 'Vue JS',
      description: {
        en: 'I use VueJS, a modern JavaScript framework, while making dynamic and static websites and applications.',
      },
      icon: 'logo-vue',
      image: null,
    },
    {
      id: 3,
      title: 'NuxtJS',
      description: {
        en: 'Nuxt is an open source framework that makes web development intuitive and powerful.',
      },
      icon: 'logo-nuxt',
      image: '/images/nuxt.png',
    },
    {
      id: 4,
      title: 'PrimeVue',
      description: {
        en: 'Elevate web applications with PrimeVue\'s comprehensive suite of customizable, feature-rich UI components.',
      },
      icon: 'logo-nuxt',
      image: '/images/primevue.png',
    },
  ]
})
