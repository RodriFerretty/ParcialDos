import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Home/home/home.component';
import { ProductsGridComponent } from './Components/Home/products-grid/products-grid.component';
import { LoginTabComponent } from './Components/UserSession/SubSession/login-tab/login-tab.component';
import { RegisterTabComponent } from './Components/UserSession/SubSession/register-tab/register-tab.component';
import { CreateLocalComponent } from './Components/Locales/create-local/create-local.component';
import { MapsComponent } from './Components/Maps/maps/maps.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  },
  {
    path: 'addLocal',
    component: CreateLocalComponent
  },
  {
    path: 'login',
    component: LoginTabComponent
  },
  {
    path: 'register',
    component: RegisterTabComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
