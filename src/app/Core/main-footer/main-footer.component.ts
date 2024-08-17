import { Component } from '@angular/core';
import { ContactUsComponent } from '../../Pages/contact-us/contact-us.component';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [ContactUsComponent],
  templateUrl: './main-footer.component.html',
  styleUrl: './main-footer.component.scss'
})
export class MainFooterComponent {

}
