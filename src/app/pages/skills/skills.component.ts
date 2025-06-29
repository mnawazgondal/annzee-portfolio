import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    {
      title: 'Programming Languages',
      items: ['C#', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL','Python','Shell Scripting','Bash Scripting']
    },
    {
      title: 'Frameworks & Libraries',
      items: ['.NET Core', 'ASP.NET MVC', 'Rest APIs','Angular', 'ReactJS', 'Spring Boot','MSMQ (Microsoft Message Queuing)','Entity Framework (EF)']
    },
    {
      title: 'Cloud & DevOps',
      items: ['Azure', 'AWS', 'Azure Functions','Vantage Cloud Lake', 'CI/CD Pipeline', 'Docker', 'GitHub Actions', 'IIS Server Management', 'Nginx for web deployment']
    },
    {
      title: 'Databases',
      items: ['SQL Server', 'MySQL', 'PostgreSQL', 'Teradata DB', 'H2 Database','Transcend Database']
    },
    {
      title: 'Tools & Platforms',
      items: ['Git','TFS','Jira', 'Postman', 'Visual Studio', 'VS Code','Eclipse', 'Azure DevOps', 'SharePoint', 'Certinia','ServiceNow','DBeaver','SQL Developer','SQL Server Management Studio', 'Teradata Database Studio','VMware (Teradata E+,E)']
    },
    {
      title: 'Professional & Leadership Skills',
      items: [
        'English Proficiency',
        'Team Management',
        'Cross-functional Coordination',
        'Documentation & Reporting',
        'Process Design & Flow Modeling',
        'Agile & Scrum Collaboration',
        'Stakeholder Communication',
        'Conflict Resolution',
        'Strategic Thinking',
        'Decision Making',
        'Mentorship & Coaching',
        'Time Management',
        'Adaptability'
      ]
    }
  ];
}
