import { Component } from '@angular/core';
import { PdfGeneratorService } from '../../services/pdf-generator.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private pdfService: PdfGeneratorService) { }

  downloadPdf() {
    this.pdfService.generatePdf('resumeContent', 'resume.pdf');
  }

}
