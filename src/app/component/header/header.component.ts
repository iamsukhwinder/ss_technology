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
  companyName = APP_CONSTANTS;

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  ngOnInit(): void {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header') as HTMLElement;
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

}
