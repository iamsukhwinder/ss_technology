import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

interface Blog {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-blog-all',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './blog-all.component.html',
  styleUrls: ['./blog-all.component.css']
})
export class BlogAllComponent {
  heading = 'Find our all blogs from here';

  blogs: Blog[] = [
    {
      id: 1,
      category: 'Travel',
      date: '13 March 2023',
      title: 'Train Or Bus Journey? Which one suits?',
      excerpt:
        'The choice between a train or bus journey depends on various factors such as the distance, time and cost.',
      image: 'Assets/Container.jpg',
      link: 'blog/:id/1'
    },
    {
      id: 2,
      category: 'Development',
      date: '11 March 2023',
      title: 'Best Website to research for your next project',
      excerpt:
        'Capitalize on low hanging fruit to identify beta test value add activity to beta test.',
      image: 'Assets/laptop.jpg',
      link: '/blog/2'
    },
    {
      id: 3,
      category: 'Sports',
      date: '10 March 2023',
      title: 'How to Be a Dancer in 2023 with proper skills?',
      excerpt:
        'Organically grow the holistic world view of disruptive innovation via workplace diversity.',
      image: 'Assets/dance.jpg',
      link: '/blog/3'
    },
    {
      id: 4,
      category: 'Travel',
      date: '13 March 2023',
      title: 'Who is the best singer on chart? Know him?',
      excerpt:
        'Chart by Billboard which ranks the all-time greatest artists based on performance.',
      image: 'Assets/men.jpg',
      link: '/blog/4'
    },
    {
      id: 5,
      category: 'Development',
      date: '11 March 2023',
      title: 'How to start export import business from home?',
      excerpt:
        'Override the digital divide with additional clickthroughs.',
      image: 'Assets/job.jpg',
      link: '/blog/5'
    },
    {
      id: 6,
      category: 'Sports',
      date: '10 March 2023',
      title: 'Make some drinks with chocolates, chocolates and milk',
      excerpt:
        'Holistic world view of disruptive innovation via workplace diversity.',
      image: 'Assets/choco.jpg',
      link: '/blog/6'
    }
  ];
}
