import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CrudComponent } from './crud/crud.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './authGuard/auth.guard';

export const routes: Routes = [
  { path: 'login', title: 'login', component: LoginComponent },
  { path: 'home', title: 'home', component: HomeComponent },
  { path: 'about', title: 'about', component: AboutComponent },
  {
    path: 'dashboard',
    title: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'gallery',
    title: 'gallery',
    component: GalleryComponent,
    canActivate: [authGuard],
  },
  {
    path: 'crud',
    title: 'crud',
    component: CrudComponent,
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    title: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard],
  },
  { path: '**', title: 'pageNotFound', component: RouteNotFoundComponent },
];
