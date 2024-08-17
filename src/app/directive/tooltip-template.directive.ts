import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
// create directive to hover skills readableStreamLikeToAsyncGenerator.
@Directive({
  selector: '[appTooltipTemplate]',
  standalone: true
})
export class TooltipTemplateDirective {

  @Input('myTemplate')
  myTemplate!: TemplateRef<any>;

  private tooltipElement: HTMLElement | null = null;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef
  ) { }

  createTooltip() {
    // Create a div element for the tooltip
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'tooltipMy');
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');

    // Create an embedded view from the template
    const viewRef = this.viewContainerRef.createEmbeddedView(this.myTemplate);
    viewRef.detectChanges();

    // Append the template content to the tooltip
    viewRef.rootNodes.forEach(node => this.renderer.appendChild(this.tooltipElement, node));

    // Append the tooltip to the document body
    this.renderer.appendChild(document.body, this.tooltipElement);

    // Set the position of the tooltip
    this.setPosition();
  }

  setPosition() {
    if (this.tooltipElement) {
      const hostPos = this.elRef.nativeElement.getBoundingClientRect();
      const tooltipPos = this.tooltipElement.getBoundingClientRect();

      const top = hostPos.top - tooltipPos.height - 5 + window.scrollY;
      const left = hostPos.left + (hostPos.width - tooltipPos.width) / 2 + window.scrollX;

      this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
      this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
    }
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.createTooltip();
  }

  @HostListener('mouseout')
  onMouseOut() {
    setTimeout(() => {
      if (this.tooltipElement) {
        this.renderer.removeChild(document.body, this.tooltipElement);
        this.tooltipElement = null;
      }
    }, 100);
  }
}