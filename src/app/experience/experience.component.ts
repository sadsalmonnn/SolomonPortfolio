import { Component } from '@angular/core';
import { Experience } from '../_models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      id: 1,
      job_title: 'Computer Engineering Technology Teacher’s Assistant',
      company: 'Oakville Trafalgar High School',
      start_date: 'Sep 2021',
      end_date: 'Jan 2022',
      description:
        'Supported students with hands-on engineering tasks and taught foundational networking and digital logic concepts. Delivered lectures, created assessments, and provided feedback to enhance learning outcomes.',
      location: 'Oakville, ON'
    },
    {
      id: 2,
      job_title: 'Bank Operations Officer, Intern',
      company: 'Royal Bank of Canada',
      start_date: 'May 2025',
      end_date: 'Aug 2025',
      description:
        'Managed high-security financial instrument processing and document verification, ensuring compliance and escalating issues through internal systems. Skilled in operating enterprise banking platforms while maintaining accuracy and data confidentiality under strict deadlines.',
      location: 'Toronto, ON'
    }
  ];

}
