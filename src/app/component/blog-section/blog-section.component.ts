import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';   

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [CommonModule, FooterComponent],   
  templateUrl:'./blog-section.component.html',
  styleUrls: ['./blog-section.component.css'] 
})
export class BlogSectionComponent {
  steps = [
    {
      id: '01',
      title: 'User Research',
      description: 'User research helps us find out exactly how our target customers feel when interacting with a product'
    },
    {
      id: '02',
      title: 'Design',
      description: 'We craft designs that connect with users and provide an intuitive experience.'
    },
    {
      id: '03',
      title: 'Test',
      description: 'Testing ensures our designs and development work seamlessly and meet user expectations.'
    },
    {
      id: '04',
      title: 'Implementation',
      description: 'We implement final solutions ensuring quality, usability, and scalability.'
    }
  ];
}
