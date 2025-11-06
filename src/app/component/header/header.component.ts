import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { APP_CONSTANTS } from '../../utility/app.constant';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  companyName = APP_CONSTANTS.COMPANY_NAME;

}
