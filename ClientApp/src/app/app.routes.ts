import { Routes } from '@angular/router';

export const routes: Routes = [{
    path:'',loadComponent:()=>import('src/app/_views/landing-page/landing-page.component').then(c => c.LandingPageComponent),
},
{    path:'home',loadComponent:()=>import('src/app/_views/landing-page/landing-page.component').then(c => c.LandingPageComponent)}];
