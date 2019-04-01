import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MainComponent} from './base-layout/main/main.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: '/offerings',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'offerings',
        loadChildren: './modules/offerings/offerings.module#OfferingsModule',
      },
      {
        path: '**',
        redirectTo: '/dashboard', // redierct to page 404
      }
    ]
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
