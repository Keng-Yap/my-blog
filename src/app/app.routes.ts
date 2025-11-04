import { Routes } from '@angular/router';

// Components
import { BlogComponent } from './component/blog/blog.component';

export const routes: Routes = [
  { path: '', component: BlogComponent }, // 👈 default route
  { path: '**', redirectTo: '', pathMatch: 'full' } // fallback route
];
