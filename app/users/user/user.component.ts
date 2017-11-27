import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  constructor(private route: ActivatedRoute, private router: Router) { }


  // the ActiveRoute parameter in the constructor and below two methods like snapshot and subsctibe are used to retrieve data from the url (path)
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // the above functions when we changes url
    // the subscribe method is used when we change the url by clicking link also
    this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );

    //retrieving queryparams and fragment from the url using snapshot
    console.log("==through snapshot==");
    console.log(this.route.snapshot.queryParams);
    console.log(this .route.snapshot.fragment);

    //retrieveing queryparams and fragment from the url using subscribe
    console.log("==through subscribe");
    console.log(this.route.queryParams.subscribe());
    console.log(this.route.fragment.subscribe());
  }



}
