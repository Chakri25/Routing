import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    {id: '1', name: 'userName1'},
    {id: '2', name: 'userName2'}
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
 //when u click the button, it routes to the specified path and executes corresponding component.
 /* goToUser1(){
    this.router.navigate(['/users', 1, 'chakri']);//this is not working, its working when i pass array for the url

  }

  //this does samething as above, but also with queryParams.
  goToUser1(){
    this.router.navigate(['/users', 1, 'chakri'], {queryParams: {allowEdit: 1}});
  }*/

  //this does samething as above, but also with frament.
  goToUser1(){
    this.router.navigate(['/users', 1, 'chakri', 'edit'], {queryParams: {allowEdit: 1}, fragment: 'loading'});
  }
}
