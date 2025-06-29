import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      title: 'Software Application Development',
      description: 'Custom web and desktop solutions using modern tech stacks like .NET, Angular, and Java.'
    },
    {
      title: 'Solution Architecture & Design',
      description: 'Scalable and maintainable system designs tailored to business requirements.'
    },
    {
      title: 'Cloud Integration (Azure/AWS)',
      description: 'Deployment and scaling using cloud-native services including Functions, Storage, and DevOps.'
    },
    {
      title: 'API Development & Integration',
      description: 'RESTful and secure API design for seamless data flow across systems.'
    },
    {
      title: 'Maintenance & Support',
      description: 'Post-deployment support, performance tuning, and continuous improvement.'
    },
    {
      title: 'Consultancy & Technical Leadership',
      description: 'Guiding teams through best practices, strategic decisions, and mentoring.'
    }
  ];
}
