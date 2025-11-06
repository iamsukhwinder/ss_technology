import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BlogSectionComponent } from './component/blog-section/blog-section.component';
import { ProjectComponent } from './component/project/project.component';
import { OurServiceComponent } from './component/our-service/our-service.component';
import { OurTechnologiesComponent } from './component/our-technologies/our-technologies.component';
import { BlogAllComponent } from './component/blog-all/blog-all.component';
import { BlogViewComponent } from './component/blog-view/blog-view.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';

export const routes: Routes = [
    
        { path: '', redirectTo: 'home', pathMatch: 'full' }, 
        { path: 'home', component: HomeComponent },
        { path: 'blog-section', component: BlogSectionComponent },
        { path: 'project', component: ProjectComponent },
        { path: 'our-Technologies', component: OurTechnologiesComponent },
        { path: 'blog-all', component: BlogAllComponent },
        { path: 'blog/:id', component: BlogViewComponent },
        {path: 'contact-us', component:ContactUsComponent},
]