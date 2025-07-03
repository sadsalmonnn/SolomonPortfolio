import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SolomonPortfolio';

  bubbles = Array.from({ length: Math.floor(Math.random() * 5) + 12 }).map(() => {
    const x = Math.random();
    const y = Math.random();
    const size = Math.random() * 90 + 10; // 10px to 100px for more size variety
    const hue = 220 + Math.random() * 100;
    const duration = 10 + Math.random() * 10;

    const blurStart = Math.random() * 2 + 1;
    const blurEnd = blurStart + Math.random() * 5 + 1;

    const dx = (Math.random() - 0.5) * 400;
    const dy = (Math.random() - 0.5) * 400;

    const opacity = Math.random() * 0.4 + 0.6;

    return {
      x,
      y,
      size,
      hue,
      duration,
      blurStart,
      blurEnd,
      dx,
      dy,
      opacity,
    };
  });
}
