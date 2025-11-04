import { Routes } from '@angular/router';

// Components
import { BlogComponent } from './component/blog/blog.component';

export const routes: Routes = [
    { path: 'blog', component: BlogComponent },
    { path: '', redirectTo: 'blog', pathMatch: 'full' }
];
