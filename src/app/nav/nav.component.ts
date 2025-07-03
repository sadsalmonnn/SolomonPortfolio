import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  scrollWidth = 0;
  borderColor = 'rgb(255,255,255)';

  constructor(private viewportScroller: ViewportScroller) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min(scrollY / docHeight, 1);

    this.scrollWidth = scrollPercent * 100;

    const start = [255, 255, 255];
    const end = [155, 93, 229];
    const interpolated = start.map((s, i) =>
      Math.round(s + (end[i] - s) * scrollPercent)
    );

    this.borderColor = `rgb(${interpolated.join(',')})`;
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  scrollToSection(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
