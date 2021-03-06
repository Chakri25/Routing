import { CanActivate,
		 ActivatedRouteSnapshot,
		 RouterStateSnapshot,
		 Router,
 } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core'; 

import { AuthService } from './auth.service';

@Injectable()
export class AuthGaurd implements CanActivate {

	constructor(private router: Router, private authservice: AuthService){}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
	 Observable<boolean> | Promise<boolean> | boolean{
	 	return this.authservice.isAuthenticated().then(
	 		(authenticated: boolean) => {
	 			if(authenticated){
	 				return true;
	 			}
	 			else {
	 				this.router.navigate(['/']);
	 			}
	 		}
	 		);
	}

}