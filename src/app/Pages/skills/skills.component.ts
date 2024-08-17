import { Component } from '@angular/core';
import { TooltipTemplateDirective } from '../../directive/tooltip-template.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TooltipTemplateDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
