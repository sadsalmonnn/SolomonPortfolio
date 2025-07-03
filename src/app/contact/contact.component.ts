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
    const serviceID = 'service_jepg0x8';            // Your actual EmailJS service ID
    const templateID = 'template_iz6ol6d';           // Replace with your actual template ID
    const publicKey = '29nzorA1gQmsNCvNb';          // Your public key

    const templateParams = {
      name: this.contactForm.name,
      email: this.contactForm.email,
      message: this.contactForm.message,
      time: new Date().toLocaleString()            // Optional: for {{time}} in your template
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
