import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CsvComponent } from './csv/csv.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

//importing serivces
import { AuthService } from './auth.service';
import { AuthGaurd } from './auth-gaurd.module';


@NgModule({
  declarations: [
    AppComponent,
    CsvComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
