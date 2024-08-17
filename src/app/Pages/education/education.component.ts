import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  selectedEvent: any = null;

  // Add  events
  events = [
    {
      date: '2023-05-30', title: 'UNDERGRADUATE',
      collageName: 'Chandigarh University | Mohali, Punjab, India | 2019-2023',
      description: 'B.E. in Computer Science & Engineering.'
    },
    {
      date: '2019-03-30', title: 'INTERMEDIATE',
      collageName: 'D.A.V Public School | Bokaro Steel City, Sector-04, JHARKHAND, 827004. | 2017-2019',
      description: ''
    },
    {
      date: '2017-03-30', title: 'MATRICULATION',
      collageName: 'D.A.V Public School | Nabinagar, Aurangabad, BIHAR, 824301. | 2016-2017',
      description: ''
    },
  ];

  selectEvent(event: any) {
    this.selectedEvent = event;
  }

}
