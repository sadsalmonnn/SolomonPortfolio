import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(): void {
    const serviceID = 'service_jepg0x8';
    const templateID = 'template_iz6ol6d';
    const publicKey = '29nzorA1gQmsNCvNb';

    const templateParams = {
      name: this.contactForm.name,
      email: this.contactForm.email,
      message: this.contactForm.message,
      time: new Date().toLocaleString()
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('✅ Message sent successfully! I’ll get back to you shortly.');
        this.contactForm = { name: '', email: '', message: '' };
      })
      .catch((error) => {
        console.error('❌ Email sending failed:', error);
        alert('Something went wrong. Please try again later.');
      });
  }
}
