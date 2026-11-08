import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/wiki/',
  title: "CosmoLand Wiki", // Название вкладки в браузере
  description: "Официальная вики сервера CosmoLand",
  lang: 'ru-RU', // Указывает браузеру, что сайт на русском
  appearance: 'dark',
  locales: {
    root: { label: 'Русский', lang: 'ru-RU' },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guides', link: '/en/start' },
          { text: 'Rockets', link: '/en/rockets' },
          { text: 'Rules', link: '/en/rules' }
        ],
        sidebar: [
          { text: '🚀 Getting started', items: [{ text: 'How to start', link: '/en/start' }] },
          { text: '🏗️ Mechanics', items: [
            { text: 'Server mechanics', link: '/en/buildings' },
            { text: 'Service system', link: '/en/uslugi' }
          ] },
          { text: '🛰️ Space', items: [{ text: 'Rockets and flights', link: '/en/rockets' }] }
        ],
        outline: { label: 'On this page', level: [2, 3] },
        docFooter: { prev: 'Previous', next: 'Next' }
      }
    }
  },
  head: [
  ['link', { rel: 'icon', href: '/wiki/logo1.png' }] // Добавь /wiki/ в начало пути
],
  themeConfig: {
    localeLinks: {
      text: 'Язык'
    },
    notFound: {
    title: 'СТРАНИЦА НЕ НАЙДЕНА',
    quote: 'Наши ученые еще не изучили данный раздел...',
    linkText: 'Вернуться на главную базу',
  },
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',
    // Перевод кнопки поиска
    search: {
      
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск' },
              modal: { noResultsText: 'Ничего не найдено', resetButtonTitle: 'Сбросить поиск', footer: { selectText: 'выбрать', navigateText: 'навигация', escapeText: 'закрыть' } }
            }
          }
        }
      }
    },

    // Текст кнопки "На этой странице" (справа)
    outline: { label: 'На этой странице', level: [2, 3] },

    // Верхнее меню
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Гайды', link: '/start' },
      { text: 'Ракеты', link: '/rockets' },
      { text: 'Правила', link: '/rules' }
    ],

    // Боковое меню
    sidebar: [
      {
        text: '🚀 Начни играть',
        items: [
          { text: 'Как зайти?', link: '/start' },
        ]
      },
      {
        text: '🏗️ Механики',
        items: [
          { text: 'Общие игровые механики', link: '/buildings' },
          { text: 'Механика продажи услуг', link: '/uslugi' }
        ]
      },
      {
        text: '🛰️ Космос',
        items: [
          { text: 'Ракеты и полёты', link: '/rockets' }
        ]
      }
    ],

    // Перевод кнопок "Предыдущая" и "Следующая" страница внизу
    docFooter: {
      prev: 'Назад',
      next: 'Вперед'
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/yjHPGus5qt' }
    ],

    footer: {
      message: 'CosmoLand — Космическое выживание',
      copyright: '© 2025–2026 CosmoLand · Не связано с Mojang AB'
    }
  }
})
