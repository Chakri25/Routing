import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CsvComponent } from './csv/csv.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGaurd } from './auth-gaurd.module';



const appRoutes: Routes = [
  { path: 'csv', canActivate: [AuthGaurd], component: CsvComponent},
  { path: '', component: HomeComponent},
 /* { path: 'users', component: UsersComponent},
  { path: 'users/:id/:name', component: UserComponent},
  { path: 'users/:id/:name/edit', component: UserComponent},*/
  { path: 'users', component: UsersComponent, children: [
    {path: ':id/:name/edit', component: UserComponent}
  ]},
  { path: 'not-found', component: PageNotFoundComponent},
  //if we want to use same component for other url, we can also use redirectTo
  { path: 'nothing', redirectTo: '/not-found'},
  //to get rid of all the paths which user eneters the url which is not in our website, use wildcard route
  // we can not redirect to another path which is redirect to another path.
  { path: '**', redirectTo: '/not-found'},

];

@NgModule({
	imports: [
       RouterModule.forRoot(appRoutes)
	],

	exports: [
		RouterModule
	]
	
})
export class AppRoutingModule {

}