import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MainSessionComponent } from './Components/UserSession/main-session/main-session.component';
import { RegisterTabComponent } from './Components/UserSession/SubSession/register-tab/register-tab.component';
import { LoginTabComponent } from './Components/UserSession/SubSession/login-tab/login-tab.component';
import { CreateLocalComponent } from './Components/Locales/create-local/create-local.component';
import { CreateProductComponent } from './Components/Products/create-product/create-product.component';
import { ProductsGridComponent } from './Components/Home/products-grid/products-grid.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { MapsComponent } from './Components/Maps/maps/maps.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSessionComponent,
    RegisterTabComponent,
    LoginTabComponent,
    CreateLocalComponent,
    CreateProductComponent,
    ProductsGridComponent,
    HomeComponent,
    MapsComponent,
    NavBarComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
