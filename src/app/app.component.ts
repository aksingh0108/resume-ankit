import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from "./Core/main-header/main-header.component";
import { HomeComponent } from "./Pages/home/home.component";
import { ExperienceComponent } from "./Pages/experience/experience.component";
import { EducationComponent } from "./Pages/education/education.component";
import { SkillsComponent } from "./Pages/skills/skills.component";
import { ProjectComponent } from "./Pages/project/project.component";
import { CertificateComponent } from "./Pages/certificate/certificate.component";
import { PortfolioComponent } from "./Pages/portfolio/portfolio.component";
import { HobbiesComponent } from "./Pages/hobbies/hobbies.component";
import { MainFooterComponent } from "./Core/main-footer/main-footer.component"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainHeaderComponent, HomeComponent, ExperienceComponent, 
    EducationComponent, SkillsComponent, ProjectComponent, 
    CertificateComponent, PortfolioComponent, HobbiesComponent, 
    MainFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'resume-ankit';


  showHobbies=true;
  showCertificate=true;
  showProject=true;
  toggleSection(){
    this.showHobbies=!this.showHobbies;
  }
  toggleSectionCertificate(){
    this.showCertificate=!this.showCertificate;
  }
 
   toggleProject(){
    this.showProject=!this.showProject;
    ;
  }

}
