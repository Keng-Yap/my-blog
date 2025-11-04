import { Routes } from '@angular/router';
import { BlogComponent } from './component/blog/blog.component';
import { AboutComponent } from './component/about/about.component';

export const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'blog', pathMatch: 'full' }
];