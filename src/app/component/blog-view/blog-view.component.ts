import { Component } from '@angular/core';
import {  NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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
  selector: 'app-blog-view',
  imports: [CommonModule, NgFor, FormsModule, RouterModule, FooterComponent],
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.css'
})
export class BlogViewComponent {
// Hero/meta
  category = 'Development';
  date = '12 March 2023';
  title = 'How to make a Game look more attractive with New VR & AI Technology';
  hero = 'Assets/vr1.jpg';

  // Article body content (sample)
  paragraphs: string[] = [
    'Google has been investing a lot in new ways to add intelligence to devices such as headsets, controllers and sensors. Whether it’s publishing open research, building helpful products, or developing tools and resources that anyone can use, we’re committed to making AI helpful for everyone.',
    'VR and AI are a great pairing. Headset experiences can be fundamentally improved using predictive models that personalize render pipelines for each user. On-device inference keeps latency low and the experience immersive.',
  ];

  quote = `People worry that computers will get too smart and take over the world, but the real problem is that they’re too stupid and they’ve already taken over the world.`;

  // Inline figure
  figure = {
    src: 'Assets/vr.jpg',
    alt: 'Driving with VR HUD',
    caption: 'Interfaces powered by generative AI will change how we create and collaborate.',
  };

  // Comments

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
    },]
  
}
