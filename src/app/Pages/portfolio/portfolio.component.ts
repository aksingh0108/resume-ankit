import { Component } from '@angular/core';
import { EducationalProjectComponent } from "../../shared/educational-project/educational-project.component";
import { MultilevelCommentProjectComponent } from '../../shared/multilevel-comment-project/multilevel-comment-project.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [EducationalProjectComponent,MultilevelCommentProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
