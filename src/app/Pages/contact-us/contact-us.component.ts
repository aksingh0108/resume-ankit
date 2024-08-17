import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  // initialize data of a form 
  submitted = false;
  dataObj = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(form: any) {
    this.submitted = true;
    console.log('Form Submitted!', this.dataObj);
    form.resetForm();
    // Hide the success message after 5 seconds
    setTimeout(() => {
      this.submitted = false;
    }, 5000);

  }

  //for google map set value.
  center: google.maps.LatLngLiteral = { lat: 28.4485476, lng: 77.0707226 }; // Gurugram
  zoom = 12;




}
