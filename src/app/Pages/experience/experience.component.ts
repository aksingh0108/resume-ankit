import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  selectedEvent: any = null;

  events = [
    {
      date: 'Present', title: 'Freelance Web Development.',
      description: 'Develop a web application taken from small business. Develop api to communicate to database.',
      work: 'work as freelancer at position full stack Developer .'
    },
    {
      date: 'June 2023', title: 'Training | DXC Technology foundation training',
      description: 'Java, SQL, OS, DBMS, HTML, CSS, JavaScript,Cloud',
      work: 'Learn all about Basic Foundation.'
    },
    {
      date: 'Nov 2021', title: 'Training | Full Stack Development|Kodnest',
      description: 'Core + Adv Java, SQL, Hibernate, Bootstrap, HTML, CSS,JavaScript, Manual Testing.',
      work: 'Learn all about a full stack Developer.'
    },
  ];

  selectEvent(event: any) {
    this.selectedEvent = event;
  }

}
