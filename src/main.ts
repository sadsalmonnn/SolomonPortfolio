import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    setTimeout(() => {
      document.body.classList.remove('loading');

      const appRoot = document.querySelector('app-root') as HTMLElement;
      const loader = document.getElementById('loading-wrapper');

      if (appRoot) {
        appRoot.style.display = 'block';
      }

      if (loader) {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        setTimeout(() => loader.remove(), 500);
      }
    }, 1000); // delay to smooth transition
  })
  .catch(err => console.error(err));