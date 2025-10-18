import './bootstrap';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import '../css/app.css'
import Layout from './Layouts/Layout';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    const pageModule = pages[`./Pages/${name}.jsx`]
    
    // Əmin ol ki, default export mövcuddur
    if (!pageModule || !pageModule.default) {
      throw new Error(`Page ./Pages/${name}.jsx not found or has no default export.`)
    }

    // Əgər layout təyin olunmayıbsa, default Layout istifadə et
    pageModule.default.layout = pageModule.default.layout || (p => <Layout>{p}</Layout>);

    return pageModule;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
