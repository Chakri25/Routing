export class AuthService{
	loggedIn = false;

	//we have two methods logout and login to change the value of loggedIn
	login(){
		this.loggedIn = true;
	}
	logout(){
		this.loggedIn = false;
	}

	//we need to add authenticate method to return a promise to auth-gaurd
	isAuthenticated(){
		const promise = new Promise(
			(resolve, reject) => {
				setTimeout(
						() => { resolve(this.loggedIn) },
						800
					);
			}
			);
		return promise;
	}

}