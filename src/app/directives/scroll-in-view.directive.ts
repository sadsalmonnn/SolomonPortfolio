// scroll-in-view.directive.ts
import { Directive, ElementRef, HostBinding, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollInView]'
})
export class ScrollInViewDirective implements AfterViewInit {
  @HostBinding('class.active') isVisible = false;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.isVisible = entry.isIntersecting;
      },
      { threshold: 0.4 }
    );

    observer.observe(this.el.nativeElement);
  }
}