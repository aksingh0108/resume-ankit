import { ElementRef } from '@angular/core';
import { TooltipTemplateDirective } from './tooltip-template.directive';

describe('TooltipTemplateDirective', () => {
  it('should create an instance', () => {
    // const directive = new TooltipTemplateDirective();
   // Mocking the dependencies
   const elementRefStub = new ElementRef(null);
   const renderer2Stub = jasmine.createSpyObj('Renderer2', ['createElement', 'appendChild', 'addClass', 'setStyle']);
   const viewContainerRefStub = jasmine.createSpyObj('ViewContainerRef', ['createEmbeddedView']);

   // Creating an instance of the directive with the mocks
   const directive = new TooltipTemplateDirective(elementRefStub, renderer2Stub, viewContainerRefStub);


    expect(directive).toBeTruthy();
  });
});
