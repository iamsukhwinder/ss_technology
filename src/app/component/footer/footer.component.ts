import { Component } from '@angular/core';
import { APP_CONSTANTS } from '../../utility/app.constant';


@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  companyName = APP_CONSTANTS.COMPANY_NAME;

}
