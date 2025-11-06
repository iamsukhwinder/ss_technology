import { Component } from '@angular/core';
import { OurServiceComponent } from "../our-service/our-service.component";
import { FeedbackComponent } from '../feedback/feedback.component';
import { BlogComponent } from "../blog/blog.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';
import { APP_CONSTANTS } from '../../utility/app.constant';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OurServiceComponent, FeedbackComponent, BlogComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  companyName = APP_CONSTANTS.COMPANY_NAME;
  
  constructor(private router: Router) { }   

  onTryFree() {
    this.router.navigateByUrl('blog-section');
  }
}
