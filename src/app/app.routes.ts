import { Routes } from '@angular/router';
import { BlogComponent } from './component/blog/blog.component';

export const routes: Routes = [
  { path: '', component: BlogComponent }, // 👈 default homepage route
  { path: '**', redirectTo: 'blog', pathMatch: 'full' } // fallback
];