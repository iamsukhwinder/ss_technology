import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTechnologiesComponent } from './our-technologies.component';

describe('OurTechnologiesComponent', () => {
  let component: OurTechnologiesComponent;
  let fixture: ComponentFixture<OurTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurTechnologiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
