import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-service',
  imports: [CommonModule],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.css'
})
export class OurServiceComponent {
  mainServices = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Web Development',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'App Development',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
    },
    {
      icon: 'fas fa-vr-cardboard',
      title: 'AR/VR Development',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
    },
    {
      icon: 'fas fa-link',
      title: 'Blockchain Development',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
    },
    
  ];

  websiteTypes = [
    { icon: 'fas fa-briefcase', title: 'Business Website',
      description : 'We create professional and scalable business websites that help you grow your brand and reach more clients online.' },
    { icon: 'fas fa-graduation-cap', title: 'Educational Website',description : 'We develop interactive and user-friendly educational platforms for schools, colleges, and online learning.' },
    { icon: 'fas fa-palette', title: 'Event Website',description : 'We design dynamic event websites with seamless registration, schedules, and real-time updates for smooth event management.'},
    { icon: 'fas fa-chart-line', title: 'E-commerce Website',description : 'We build secure, responsive e-commerce websites that enhance your customers’ shopping experience and boost sales.'},
    { icon: 'fas fa-user-circle', title: 'Portfolio Website',description : 'We craft stunning portfolio websites that showcase your skills, creativity, and achievements in a professional way.'},
    { icon: 'fas fa-blog', title: 'Blog Website',description : 'We design engaging and easy-to-manage blog websites to help you share your thoughts, ideas, and stories effectively.'},
    { icon: 'fas fa-newspaper', title: 'News Website',description : 'We develop fast, reliable news websites with real-time updates and a clean layout for better reader engagement.'},
    { icon: 'fas fa-plane-departure', title: 'Travel Website',description : 'We build feature-rich travel websites that make trip planning, booking, and exploration easier for users.'}
  ];
  
  
  get websiteTypesGrouped() {
    const chunkSize = 4;
    const groups = [];
    for (let i = 0; i < this.websiteTypes.length; i += chunkSize) {
      groups.push(this.websiteTypes.slice(i, i + chunkSize));
    }
    return groups;
  }
  


  growBusinessCards = [
    {
      image: 'Assets/bGAttribute.jpg',
      title: 'Creative Agency',
      icon: 'fas fa-lightbulb',
      description:'dfghj'
    },
    {
      image: 'Assets/bGAttribute2.jpg',
      title: 'Quality Work',
      description: 'Connect better with your audience through insights.',
      icon: 'fas fa-award',
    
    },
    {
      image: 'Assets/bGAttribute3.jpg',
      title: 'Professional Team',
      description: 'Expand your business to new markets with our tools.',
      icon: 'fas fa-users',
     
    }
  ];
  
  topCards = [
    { image: 'assets/img1.png', title: 'Web Design Development', description: 'Lorem ipsum is dummy text.' },
    { image: 'assets/img2.png', title: 'Presentation Design' },
    { image: 'assets/img3.png', title: 'Business Analyst' }
  ];
  
  centerCard = {
    image: 'assets/center.png',
    title: 'Now code, testing, and debug directly on the platform',
    description: ''
  };
  
  bottomCards = [
    { image: 'assets/img4.png', title: 'Mobile Design' },
    { image: 'assets/img5.png', title: 'Testing' },
    { image: 'assets/img6.png', title: 'UI Debugging' }
  ];
  
}
