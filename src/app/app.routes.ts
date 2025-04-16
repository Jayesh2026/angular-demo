import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component' 

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent }
];
