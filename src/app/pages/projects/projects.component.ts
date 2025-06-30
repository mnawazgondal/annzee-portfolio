import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  // projects = [
  //   {
  //     title: 'Logistics Portal',
  //     techStack: 'Angular, .NET Core, MySQL',
  //     description: 'End-to-end merchant and finance tracking portal with real-time rider tracking, reports, and admin tools.',
  //     link: ''
  //   },
  //   {
  //     title: 'Hardware Integration Apps',
  //     techStack: 'WPF, Windows Services, CNIC/RFID/Barcode Reader',
  //     description: 'Developed attendance, visitor, and vehicle tracking systems using biometric and RFID hardware.',
  //     link: ''
  //   },
  //   {
  //     title: 'Process Automation Portal',
  //     techStack: 'Angular, .NET, SQL Server',
  //     description: 'Created reporting dashboards and automation workflows for enterprise business processes.',
  //     link: ''
  //   },
  //   {
  //     title: 'Security Systems',
  //     techStack: 'C#, Oracle, WCF, Socket Programming',
  //     description: 'Designed biometric and vehicle identification systems deployed in secure military environments.',
  //     link: ''
  //   },
  //   {
  //     title: 'Project Management Tool',
  //     techStack: 'Angular, Java Spring Boot, Teradata',
  //     description: 'Collaborative platform to manage task automation, document sharing, and team updates (renamed for public).',
  //     link: ''
  //   }
  // ];
  projects = [
    {
      organization: 'Teradata',
      title: 'Senior Software Engineer',
      duration: 'Jul 2021 – Present',
      projects: [
        {
          name: 'PDCR Installer Tool',
          description: 'The Teradata PDCR (Performance Data Collection and Reporting) Installer Tool is used to set up the PDCR database, which collects and reports on performance data for Teradata systems. For Teradata versions 15.0 and higher, PDCR functionality is integrated into the core database and Viewpoint, while older versions (14.10 and lower) may require a separate installation.',
          techStack: ['Java17', 'Spring Boot', 'Angular18', 'C#', 'Teradata Database', 'H2 Database', 'CI/CD pipeline', 'GitHub', 'Jira', 'ServiceNow']
        },
        {
          name: 'DMO Operational Framework',
          description: `Performed assessment and configuration on different cloud platforms including Azure, AWS, and Google Cloud for various customers. The framework auto-generates reports based on script execution and shares them to the customer's desired directory. This solution supports Enterprise and Enterprise+ environments of Teradata.`,
          techStack: ['Java17', 'Spring Boot', 'Angular18', 'C#', 'Azure', 'AWS', 'Google Cloud', 'Shell Scripts', 'CI/CD', 'Jira', 'GitHub', 'Teradata Utilities', 'ServiceNow']
        },
        {
          name: 'Project Hub Application',
          description: 'Project Hub is both a central project repository and a customer status report publishing platform for Consulting and Managed Services projects.Project Hub creates a SharePoint site to store all your project documents for the Global Services Project Delivery Methodology.Project Hub creates weekly customer-facing status reports for Consulting Fixed Price and T&M projects. The published status report combines project data from Certinia with updates from the Project Manager for status, items needing leadership attention, planned activities, and schedule.',
          techStack: ['Angular', 'Azure Functions', 'SharePoint', 'Java','Spring Boot', 'ServiceNow']
        },
        {
          name: 'Nexus Discovery',
          description: 'Nexus Discovery is a modern replacement of the CMDB system used within Teradata. It facilitates the discovery of databases and system assets for different customers. The tool integrates with Qualys APIs and uses a staging database to organize and analyze the data for insights and compliance tracking.',
          techStack: ['Java', 'Angular', 'Staging DB', 'Qualys APIs', 'ServiceNow']
        }
      ]
    },
    {
      organization: 'TPL Logistics',
      title: 'Senior Software Engineer',
      duration: 'Dec 2019 – Mar 2021',
      projects: [
        {
          name: 'Rider Management Portal',
          description: `Centralized system for registering, managing, and monitoring delivery riders across multiple cities. Includes rider profiles, assignment logic, attendance, bonuses, and real-time performance metrics. Riders are linked to orders and warehouse dispatching processes.`,
          techStack: ['.NET Core APIs', 'Microservices', 'Angular', 'MySQL', 'Azure', 'Git']
        },
        {
          name: 'Customers Portal',
          description: `Customer-facing web portal for booking deliveries, tracking shipment status, and managing orders. Integrated with rider logistics and warehouse management to ensure transparency and live updates.`,
          techStack: ['.NET Core APIs', 'Angular', 'Azure', 'MySQL']
        },
        {
          name: 'Admin Portal',
          description: `Internal dashboard for operations and logistics teams to manage merchants, warehouses, delivery assignments, and service areas. Allowed configuration of pricing, routing, and service-level customizations per merchant.`,
          techStack: ['.NET Core', 'Angular', 'MySQL', 'Azure']
        },
        {
          name: 'Reporting Portal',
          description: `Advanced analytics and reporting module for operational metrics, rider performance, delivery KPIs, and finance dashboards. Provided downloadable reports for management decisions.`,
          techStack: ['Angular', 'SSRS', 'MySQL', 'Azure']
        }
      ]
    },
    {
      organization: 'Interactive Group of Companies',
      title: 'Senior Software Engineer',
      duration: 'Jan 2015 – Dec 2019',
      projects: [
        {
          name: 'FORESIGHTLAB & Global Think Tank Network (GTTN)',
          description: `An AI-powered research and survey analytics platform used for global foresight studies. It allowed researchers to create dynamic, free-form questionnaires with complex logic. Experts responded to custom-designed forms, and the system generated predictions and trends using advanced analytics to forecast socio-economic or geopolitical scenarios for the next 10 years.`,
          techStack: ['AngularJS', 'ReactJS', '.NET MVC', 'MS SQL Server']
        },
        {
          name: 'Queue Management System (QMS)',
          description: `A clinical queue management solution designed for hospitals and clinics. It automated the queuing process for patients, providing seamless ticket issuance and real-time tracking. The system allowed clinic administrators to manage doctors, departments, and service counters through a dedicated admin panel. It integrated with display panels, token printers, and provided real-time updates using Windows Services and MSMQ.`,
          techStack: [
            'Windows Forms', '.NET MVC', 'C#', 'WCF', 'MS SQL Server', 'Windows Services', 'MSMQ'
          ]
        },
        {
          name: 'Time Attendance System (TAS) and Visitor Management System (VMS)',
          description: `Biometric-based employee attendance and visitor access control system. Used facial recognition and fingerprint verification for accurate tracking. Integrated with web portal for state-wide data visualization and reporting. VMS was deployed at secure facilities for visitor validation.`,
          techStack: ['WPF', '.NET', 'WebAPI', 'SQL Server']
        },
        {
          name: 'Automated Vehicle Identification System (AVIS)',
          description: `RFID-based vehicle tracking and identification system deployed in military and corporate environments. Enabled automatic gate access using RFID tags and readers. Used Windows Forms for administrative interface and Crystal Reports for auditing. Supported real-time synchronization with central database.`,
          techStack: ['.NET', 'RFID', 'SQL Server', 'Socket Programming', 'Crystal Reports']
        },
        {
          name: 'Automated Fingerprint Identification System (AFIS)',
          description: `Biometric criminal identification system deployed across multiple police stations. Allowed officers to scan and match fingerprints against a central criminal database. Included latent fingerprint enhancement, identity verification, and advanced matching algorithms. Integrated with Oracle-based national data center.`,
          techStack: ['WPF', 'Oracle', 'Biometrics', 'WCF Services']
        },
        {
          name: 'Hospital Management System',
          description: `A comprehensive healthcare solution for managing patient records, appointments, billing, and staff operations. The system featured biometric registration through WCF APIs and C#-based Windows Services, ensuring secure identification of patients and doctors. It also provided a responsive web portal for hospital staff, developed using Java Spring Boot and MySQL, enabling centralized access and administrative control.`,
          techStack: ['Java Spring Boot', 'MySQL', 'Windows Services (C#)', 'WCF', 'Biometrics']
        }
      ]
    }
  ];
  
  
  
}
