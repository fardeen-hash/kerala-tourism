import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DistrictComponent } from './pages/district/district.component';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'district/:Name', component: DistrictComponent },
    { path: 'auth', component: AuthComponent },
    

];
