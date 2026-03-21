export default defineNuxtConfig({
  compatibilityDate: '2026-03-21',
  devServer: {
    port: 3002,
    host: 'localhost'
  },
  app: {
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: process.env.npm_package_description || ''
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Cookie'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lobster&display=swap'
        },
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
        }
      ]
    }
  },
  css: ['bootstrap/dist/css/bootstrap.min.css', '@/assets/css/app.css'],
  plugins: [],
  modules: ['@bootstrap-vue-next/nuxt', '@nuxt/eslint'],
  vite: {
    optimizeDeps: {
      include: ['bootstrap-vue-next', 'bootstrap-vue-next/components/BModal']
    }
  }
})
