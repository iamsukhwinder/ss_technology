import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { ContactUsModel } from '../../models/contact-us.model';
import { ContactUsService } from '../../services/contact-us.service';


interface Faq {
  q: string;
  a: string;
  open?: boolean;
}

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  model = { name: '', email: '', phone: '', message: '' };
  contactUsModedel: ContactUsModel = new ContactUsModel;
  status = '';
  mapSrc: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer,
    private contactUsService: ContactUsService
  ) {}

  onSubmit(f: NgForm) {
    if (f.valid) {
      console.log('Submit:', this.model);
      this.contactUsModedel = f.value;
      console.log('ContactUsModel:', this.contactUsModedel);
      this.contactUsService.sendMessage(this.contactUsModedel).subscribe({
      next: response => {
        f.resetForm();
        // this.successMsg = 'Message sent successfully.';
        // this.model = new ContactUsModel(); // reset form model
      },
      error: err => {
        // this.errorMsg = err?.error?.message || err?.message || 'Failed to send message';
      },
      complete: () => {
        f.resetForm();
      }
    });      
    }
  }

  locate() {
    if (!('geolocation' in navigator)) {
      this.status = 'Geolocation is not supported by this browser.';
      return;
    }
    this.status = 'Locating…';
    navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = +pos.coords.latitude.toFixed(6);
        const lon = +pos.coords.longitude.toFixed(6);

        // Build a small bounding box around the point to control zoom
        const delta = 0.01; // ≈1 km; decrease for closer zoom
        const bbox = `${lon - delta},${lat - delta},${lon + delta},${lat + delta}`;

        const url =
          `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}` +
          `&layer=mapnik&marker=${encodeURIComponent(lat + ',' + lon)}`;

        this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.status = `Location: ${lat}, ${lon}`;
      },
      _err => {
        this.status = 'Unable to get location (permission denied or unavailable).';
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }



  multiOpen = false;

  faqs: Faq[] = [
    {
      q: 'What is the difference between a website and a web application?',
      a: 'A website primarily presents information, while a web application lets users perform tasks (e.g., dashboards, forms, CRUD).'
    },
    {
      q: 'Which technologies do you use for web development?',
      a: 'Modern stacks such as Angular/React for the front end and Node.js/.NET/Java back ends with REST/GraphQL APIs.'
    },
    {
      q: 'Will my website be mobile‑friendly and responsive?',
      a: 'Yes, layouts are responsive with fluid grids, modern CSS, and device testing to ensure usability across breakpoints.'
    },
    {
      q: 'Can you redesign or update my existing website?',
      a: 'Absolutely—audits, UX refresh, performance optimization, and migration plans are available.'
    },
    {
      q: 'Do you provide UI/UX design services along with development?',
      a: 'Yes, including user flows, wireframes, visual systems, and design handoff.'
    }
  ];

  toggle(i: number) {
    if (this.multiOpen) {
      this.faqs[i].open = !this.faqs[i].open;
      return;
    }
    // Single-open behavior
    this.faqs = this.faqs.map((f, idx) => ({ ...f, open: idx === i ? !f.open : false }));
  }
}
