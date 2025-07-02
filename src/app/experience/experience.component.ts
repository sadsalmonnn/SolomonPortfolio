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
        'Assisted students with practical engineering tasks, bridging theoretical concepts and real-world application. Delivered foundational lectures in network engineering and digital logic, supported by engaging assessments and detailed feedback to foster student academic development.',
      location: 'Oakville, ON'
    },
    {
      id: 2,
      job_title: 'Bank Operations Officer, Intern',
      company: 'Royal Bank of Canada',
      start_date: 'May 2025',
      end_date: 'Aug 2025',
      description:
        'Managing the discharge of high-security financial instruments, verifying legal, financial, and property documents, while escalating issues through internal RBC systems and communication channels. Proficiently operating enterprise-level portals and secure banking systems, including Sales Platform, Linx Portal and OLMS, demonstrating adaptability to internal tools and cross-platform workflows. Consistently meeting weekly processing quotas, handling sensitive client data with privacy and precision.',
      location: 'Toronto, ON'
    }
  ];

}
